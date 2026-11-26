// Clock + opening-hours logic. Uses the visitor's device clock, shown in Indian time (IST). No internet needed.
import { HOURS, HOLIDAYS } from './knowledge.js'

const DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
const pad = n => String(n).padStart(2, '0')

export function nowIST(d = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', { timeZone: HOURS.tz, year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric', hour12: false }).formatToParts(d).filter(x => x.type !== 'literal').map(x => [x.type, +x.value]))
  const h = p.hour % 24, utc = Date.UTC(p.year, p.month - 1, p.day)
  return { y: p.year, m: p.month, d: p.day, h, min: p.minute, dow: new Date(utc).getUTCDay(), iso: `${p.year}-${pad(p.month)}-${pad(p.day)}`, utc }
}
const dayInfo = (utc, extra = 0) => { const t = new Date(utc + extra * 864e5); const y = t.getUTCFullYear(), m = t.getUTCMonth() + 1, d = t.getUTCDate(); return { iso: `${y}-${pad(m)}-${pad(d)}`, dow: t.getUTCDay(), name: DAYS[t.getUTCDay()], label: `${DAYS[t.getUTCDay()]}, ${d} ${MONTHS[m - 1]} ${y}` } }
const hm = s => { const [h, m] = s.split(':').map(Number); return h * 60 + m }
const t12 = s => { const [h, m] = s.split(':').map(Number); return `${h % 12 || 12}${m ? ':' + pad(m) : ''} ${h < 12 ? 'am' : 'pm'}` }

// is this calendar day a working day? { open: bool, why: 'weekly' | 'holiday' | null, holiday }
export function dayStatus(info) {
  const hol = (HOLIDAYS || []).find(h => h.date === info.iso)
  if (hol) return { open: false, why: 'holiday', holiday: hol }
  if ((HOURS.closedWeekdays || []).includes(info.dow)) return { open: false, why: 'weekly' }
  return { open: true, why: null }
}

export function hoursText() {
  const closed = (HOURS.closedWeekdays || []).map(d => DAYS[d] + 's')
  const t = HOURS.open && HOURS.close ? `Open ${t12(HOURS.open)} to ${t12(HOURS.close)}` : 'Please call to confirm working hours'
  return closed.length ? `${t}. Closed on ${closed.join(' and ')}.` : t + '.'
}

// everything the bot needs to talk about "today", "tomorrow", "open", "closed"
export function clock(date = new Date()) {
  const n = nowIST(date), today = dayInfo(n.utc), tomorrow = dayInfo(n.utc, 1)
  const st = dayStatus(today); let state = 'open-day', openNow = null
  if (!st.open) state = st.why
  else if (HOURS.open && HOURS.close) { const mins = n.h * 60 + n.min; openNow = mins >= hm(HOURS.open) && mins < hm(HOURS.close); state = openNow ? 'open-now' : (mins < hm(HOURS.open) ? 'before-hours' : 'after-hours') }
  let next = null
  for (let i = 1; i <= 14; i++) { const x = dayInfo(n.utc, i); if (dayStatus(x).open) { next = { ...x, offset: i, word: i === 1 ? 'tomorrow' : x.name }; break } }
  return { n, today, tomorrow, tomorrowStatus: dayStatus(tomorrow), st, state, openNow, next, time: `${n.h % 12 || 12}:${pad(n.min)} ${n.h < 12 ? 'am' : 'pm'}`, timeText: `${pad(n.h)}:${pad(n.min)}` }
}

// plain facts for the AI model
export function clockFacts(date) {
  const c = clock(date)
  return { today: c.today.label, time_ist: c.timeText, status_today: c.state, holiday_name: c.st.holiday ? c.st.holiday.name : null, opens_next: c.next ? `${c.next.word} (${c.next.label})` : null, working_hours: hoursText() }
}

export function statusLine(c = clock()) {
  if (c.state === 'weekly') return `Today is **${c.today.name}**, a weekly holiday. We are closed${c.next ? ` and open again ${c.next.word === 'tomorrow' ? 'tomorrow, **' + c.next.name + '**' : 'on **' + c.next.name + '**'}` : ''}.`
  if (c.state === 'holiday') return `Today (**${c.today.name}**) is a holiday: ${c.st.holiday.name}. We are closed${c.next ? ` and open again ${c.next.word === 'tomorrow' ? 'tomorrow, **' + c.next.name + '**' : 'on **' + c.next.name + '**'}` : ''}.`
  if (c.state === 'before-hours') return `It is ${c.time} on **${c.today.name}**. We open today at ${t12(HOURS.open)}.`
  if (c.state === 'after-hours') return `It is ${c.time} on **${c.today.name}**. We have closed for today (${t12(HOURS.close)})${c.next ? ` and open again ${c.next.word === 'tomorrow' ? 'tomorrow' : 'on ' + c.next.name}${HOURS.open ? ' at ' + t12(HOURS.open) : ''}` : ''}.`
  if (c.state === 'open-now') return `It is ${c.time} on **${c.today.name}** and we are open until ${t12(HOURS.close)}.`
  return `Today is **${c.today.name}**, a working day.${HOURS.open ? '' : ' Please call to confirm timings.'}`
}
