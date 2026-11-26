// Local brain: finds the right bike(s) and the right facts from the bike pages. No AI service needed.
import { BIKES } from '../bike/data/index.js'
import { CARD } from '../bike/cardImages.js'
import { waLink } from '../data.js'
import { STORE, FAQ, RECS, PRICE_NOTE, HOURS } from './knowledge.js'
import { clock, clockFacts, statusLine, hoursText } from './time.js'

const norm = s => (s || '').toLowerCase().replace(/[’'`]/g, '').replace(/[^a-z0-9+.]+/g, ' ').replace(/\s+/g, ' ').trim()
const has = (q, re) => re.test(q)
const HOURS_HINT = () => HOURS.open && HOURS.close
const CLOSED_DAYS = () => HOURS.closedWeekdays || []
const money = v => (typeof v === 'string' && /\d/.test(v)) ? v : null

// ---------- bike index (built once from the bike data) ----------
const flatSpecs = d => { const out = []; const sp = d.specs || {}; for (const g of Object.values(sp)) if (g && typeof g === 'object' && !Array.isArray(g)) for (const [k, v] of Object.entries(g)) out.push([k, String(v)]); return out }
const featureList = d => { const f = d.features; if (!f) return []; const arr = Array.isArray(f) ? f : Object.values(f).flat(); return arr.filter(x => x && x.title).map(x => ({ title: x.title, text: x.text || '' })) }
const colourNames = d => { const s = new Set(); (d.colours || []).forEach(c => c.name && s.add(c.name)); (d.variants || []).forEach(v => (v.colours || []).forEach(c => c.name && s.add(c.name))); return [...s] }

export const BIKE_LIST = Object.entries(BIKES).map(([slug, { d, start }]) => {
  const m = d.models ? { ...d, ...(d.models.find(x => x.id === start) || d.models[0]) } : d
  return { slug, name: m.name, cat: m.category || d.category || '', d: m, img: CARD[slug], specs: flatSpecs(m), feats: featureList(m), cols: colourNames(m) }
})
const bySlug = Object.fromEntries(BIKE_LIST.map(b => [b.slug, b]))

// aliases: "xtreme 250r", "250r", "x440", ... ; an alias shared by several bikes means "ambiguous, ask which"
const aliasMap = new Map()
const addAlias = (a, slug) => { a = norm(a); if (a.length < 3) return; if (!aliasMap.has(a)) aliasMap.set(a, new Set()); aliasMap.get(a).add(slug) }
for (const b of BIKE_LIST) {
  const n = norm(b.name); addAlias(n, b.slug)
  const short = n.replace(/\b(hero|harley davidson|new)\b/g, '').replace(/\s+/g, ' ').trim(); addAlias(short, b.slug)
  n.split(' ').filter(w => /\d/.test(w) && /[a-z]/.test(w) && w.length >= 3).forEach(w => addAlias(w, b.slug))   // 250r, x440, 4v
  addAlias(n.replace(/\+/g, ' plus'), b.slug); addAlias(n.replace(/\+/g, ''), b.slug)
}
;[['x 440', 'harley-davidson-x440'], ['harley', 'harley-davidson-x440'], ['harley', 'harley-davidson-x440-t'], ['karizma', 'karizma-xmr'], ['xmr', 'karizma-xmr'], ['pleasure', 'pleasure-xtec'], ['destini', 'destini-110'], ['destini', 'new-destini-125'], ['destini', 'destini-prime'], ['xoom', 'xoom-110'], ['xoom', 'xoom-125'], ['xoom', 'xoom-160'],
  ['xpulse', 'xpulse-200-4v'], ['xpulse', 'xpulse-210'], ['xtreme', 'xtreme-125r'], ['xtreme', 'xtreme-160r'], ['xtreme', 'xtreme-160r-4v'], ['xtreme', 'xtreme-250r'], ['glamour', 'glamour'], ['glamour', 'glamour-x'], ['glamour', 'glamour-x-abs'],
  ['splendor', 'splendor'], ['splendor', 'splendor-xtec'], ['splendor', 'splendor-xtec-2-0'], ['splendor', 'super-splendor-xtec'], ['splendor', 'super-splendor-xtec-2-0'], ['splendor', 'splendor-flex'], ['hf', 'hf-100'], ['hf', 'hf-deluxe'], ['hf', 'hf-deluxe-flex'], ['flex', 'splendor-flex'], ['flex', 'hf-deluxe-flex'], ['super splendor', 'super-splendor-xtec'], ['super splendor', 'super-splendor-xtec-2-0'],
  ['xtec', 'splendor-xtec'], ['xtec', 'super-splendor-xtec'], ['xtec', 'pleasure-xtec'], ['xtec 2.0', 'splendor-xtec-2-0'], ['xtec 2.0', 'super-splendor-xtec-2-0'], ['glamour xtec', 'glamour-x'], ['passion', 'passion']].forEach(([a, s]) => bySlug[s] && addAlias(a, s))
const ALIASES = [...aliasMap.entries()].sort((a, b) => b[0].length - a[0].length)

// find bikes named in the text. Returns { exact: [bike], group: [bike] }
export function findBikes(q) {
  q = ' ' + norm(q) + ' '
  const exact = [], group = []; let rest = q
  for (const [alias, slugs] of ALIASES) {
    const at = ' ' + alias + ' '
    if (!rest.includes(at)) continue
    rest = rest.split(at).join('  ')    // consume so shorter aliases inside do not re-match
    if (slugs.size === 1) { const b = bySlug[[...slugs][0]]; if (!exact.includes(b)) exact.push(b) }
    else slugs.forEach(s => { const b = bySlug[s]; if (!group.includes(b)) group.push(b) })
  }
  // a precise bike mentioned together with its family word wins over the family list
  return { exact, group: group.filter(g => !exact.includes(g)) }
}

// ---------- fact helpers ----------
const spec = (b, ...res) => { for (const re of res) { const hit = b.specs.find(([k]) => re.test(k)); if (hit && hit[1]) return hit[1] } return null }
const TOPICS = [
  ['mileage', /mileage|kmpl|km l|fuel (efficiency|economy|consumption)|average|efficien/, 'Mileage', b => b.d.fuelClaim || spec(b, /fuel consumption|mileage|fuel economy/i)],
  ['power', /\b(power|bhp|hp|ps)\b/, 'Max power', b => spec(b, /max\.? power/i)],
  ['torque', /torque|nm\b/, 'Max torque', b => spec(b, /max\.? torque/i)],
  ['engine', /\b(engine|cc|displacement|cylinder|cooling|cooled)\b/, 'Engine', b => { const e = spec(b, /^displacement/i), t = spec(b, /^(engine )?type$/i); return e && t ? `${e}, ${t}` : (e || t) }],
  ['speed', /top speed|max speed|speed limit|acceleration|0 60|pickup/, 'Performance', b => spec(b, /top speed|max speed/i) || (spec(b, /acceleration/i) && 'Acceleration 0-60 km/h: ' + spec(b, /acceleration/i))],
  ['weight', /weight|kerb|heavy|light/, 'Kerb weight', b => spec(b, /kerb weight|weight/i)],
  ['tank', /tank|fuel capacity|litre|liter/, 'Fuel tank', b => spec(b, /fuel tank|tank capacity/i)],
  ['seat', /seat height|seat|tall|height/, 'Seat height', b => spec(b, /(seat|saddle) height/i)],
  ['clearance', /ground clearance|clearance/, 'Ground clearance', b => spec(b, /ground clearance/i)],
  ['wheelbase', /wheelbase|length|width|dimension|size/, 'Dimensions', b => { const L = spec(b, /^(overall )?length/i), W = spec(b, /^(overall )?width/i), H = spec(b, /^(overall )?height/i), WB = spec(b, /wheelbase/i); return [L && 'Length ' + L, W && 'Width ' + W, H && 'Height ' + H, WB && 'Wheelbase ' + WB].filter(Boolean).join(', ') || null }],
  ['tyre', /tyre|tire|wheel|alloy/, 'Tyres and wheels', b => { const f = spec(b, /front tyre/i), r = spec(b, /rear tyre/i), w = spec(b, /wheel type/i); return [w && w + ' wheels', f && 'Front ' + f, r && 'Rear ' + r].filter(Boolean).join(', ') || null }],
  ['brake', /brake|disc|drum|cbs|ibs/, 'Brakes', b => { const f = spec(b, /front brake/i), r = spec(b, /rear brake/i); return [f && 'Front: ' + f, r && 'Rear: ' + r].filter(Boolean).join('. ') || null }],
  ['suspension', /suspension|shock|fork/, 'Suspension', b => { const f = spec(b, /^(front suspension|front)$/i), r = spec(b, /^(rear suspension|rear)$/i); return [f && 'Front: ' + f, r && 'Rear: ' + r].filter(Boolean).join('. ') || null }],
  ['gearbox', /gear|transmission|clutch/, 'Transmission', b => { const t = spec(b, /^transmission( type)?$/i), c = spec(b, /clutch/i); return [t, c && 'Clutch: ' + c].filter(Boolean).join('. ') || null }],
  ['battery', /battery|starter|self start|kick/, 'Starting', b => spec(b, /^starting( system| method)?$/i)],
]

const FEATURE_WORDS = /abs|bluetooth|usb|led|cruise|display|tft|lcd|cluster|connect|navigation|ride mode|traction|quickshifter|slipper|monoshock|tubeless|i3s|auto start stop|headlamp|tail lamp|winker|panic|storage|boot|mobile charging|charging|e20|fi technology|xsens/

function bikeCard(b) { return { slug: b.slug, name: b.name, sub: b.cat, image: b.img ? './images/' + b.img : null, price: money(b.d.price) || (b.d.variants || []).map(v => money(v.price)).find(Boolean) || null } }
const cards = list => list.map(bikeCard)
const CHIPS_BIKE = b => [`Mileage of ${b.name}`, `Features of ${b.name}`, `Colours of ${b.name}`, `Book test ride for ${b.name}`]
const reply = (text, extra = {}) => ({ text, ...extra })
const callActions = [{ label: 'Call sales', href: 'tel:' + STORE.salesTel }, { label: 'WhatsApp', href: waLink('Hi West Coast Motors, I need some help.') }]

function priceAnswer(b) {
  const prices = b && [...(b.d.variants || []).map(v => ({ n: v.name, p: money(v.price) })), { n: b.name, p: money(b.d.price) }].filter(x => x.p)
  if (b && prices.length) return reply(`**${b.name}** prices (ex-showroom, as listed on our site):\n` + prices.map(x => `• ${x.n}: ${x.p}`).join('\n') + '\nOn-road price depends on insurance and registration. Ask us for the exact figure.', { actions: callActions })
  return reply((b ? `**${b.name}**: ` : '') + PRICE_NOTE + '\nShall I connect you with our sales team?', { actions: [{ label: 'WhatsApp for price', href: waLink(b ? `Hi West Coast Motors, please share the price of the ${b.name}.` : 'Hi West Coast Motors, please share the price list.') }, callActions[0]], chips: b ? ['Book a test ride', 'Show other bikes'] : ['Show me your bikes', 'Book a test ride'] })
}

function compareAnswer(a, b) {
  const rows = [['Engine', x => spec(x, /^displacement/i)], ['Max power', x => spec(x, /max\.? power/i)], ['Max torque', x => spec(x, /max\.? torque/i)], ['Mileage', x => x.d.fuelClaim || spec(x, /fuel consumption|mileage/i)], ['Kerb weight', x => spec(x, /kerb weight/i)], ['Fuel tank', x => spec(x, /fuel tank/i)], ['Front brake', x => spec(x, /front brake/i)]]
  const out = rows.map(([l, f]) => { const x = f(a), y = f(b); return (x || y) ? [l, x || '-', y || '-'] : null }).filter(Boolean)
  return reply(`**${a.name}** vs **${b.name}**. Specs as published by Hero:`, { table: { head: ['', a.name, b.name], rows: out }, cards: cards([a, b]), chips: [`Book test ride for ${a.name}`, `Book test ride for ${b.name}`, 'Ask for prices'] })
}

function recommend(q) {
  const hits = RECS.map(r => ({ r, n: r.tags.filter(t => q.includes(t)).length })).filter(x => x.n).sort((x, y) => y.n - x.n)
  if (!hits.length) return null
  const r = hits[0].r, list = r.slugs.map(s => bySlug[s]).filter(Boolean).slice(0, 4)
  const budget = /lakh|budget|under|below|cheap|price|rs\b|₹/.test(q)
  return reply(`${r.why} Here are my picks:` + (budget ? '\nI cannot quote prices here yet, so please ask our sales team for the exact price of each.' : ''), { cards: cards(list), chips: ['Compare two models', 'Ask for prices', 'Book a test ride'] })
}


// ---------- hard boundaries (code, not AI: cannot be talked around) ----------
const OTHER_BRANDS = /\b(honda|bajaj|tvs|royal enfield|enfield|yamaha|suzuki|ktm|ather|ola|jawa|revolt|vespa|triumph|kawasaki|ducati|bmw|hyundai|maruti|tata|mahindra)\b/
const INJECTION = /ignore (all |the |your |previous )*(instructions|rules)|system prompt|your (instructions|rules|prompt)|act as|pretend (to be|you)|jailbreak|developer mode|reveal .*(prompt|key|password)|api ?key/
const ABUSE = /\b(fuck|shit|bastard|bitch|asshole|idiot|stupid|madarchod|bhenchod|chutiya|saala)\b/
const OFFTOPIC = /\b(politic|election|modi|cricket score|ipl|movie|weather|stock market|bitcoin|crypto|loan app|recipe|homework|poem|joke|write (me )?(a|an) (essay|code|program))\b/
export function guard(text) {
  const q = norm(text)
  if (INJECTION.test(q)) return reply('I can only help with West Coast Motors and Hero bikes: models, features, colours, comparisons, test rides and showroom details.', { chips: ['Show me your bikes', 'Book a test ride'], blocked: true })
  if (ABUSE.test(q)) return reply('Let us keep it friendly. I am happy to help with Hero bikes, scooters and test rides.', { blocked: true })
  if (OTHER_BRANDS.test(q) && !/hero|splendor|xtreme|glamour|passion|destini|xoom|pleasure|karizma|xpulse|hf /.test(q)) return reply('I only help with Hero MotoCorp bikes and scooters at West Coast Motors. Tell me what you need in a Hero and I will suggest one.', { chips: ['Best bike for daily use', 'Sporty and powerful'], blocked: true })
  if (OFFTOPIC.test(q)) return reply('That is outside what I can help with. I can answer questions about Hero bikes, scooters, test rides and our showroom.', { chips: ['Show me your bikes', 'Contact the showroom'], blocked: true })
  return null
}

// ---------- the main entry ----------
// ctx = { bike: slug the customer is looking at (page or last chat) }
export function ask(text, ctx = {}) {
  const q = norm(text)
  const { exact, group } = findBikes(text)
  const focus = exact[0] || (ctx.bike && bySlug[ctx.bike]) || null
  const remember = b => ({ bike: b ? b.slug : ctx.bike })
  const done = (r, b) => ({ ...r, ctx: remember(b || exact[0] || null) })

  if (!q) return done(reply('Type your question and I will help.'))
  const blocked = guard(text); if (blocked) return done(blocked)
  if (has(q, /^(hi|hii+|hello|hey|namaste|namaskara|good (morning|afternoon|evening)|yo)\b/) && q.split(' ').length <= 4) return done(reply(`${(() => { const h = clock().n.h; return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening' })()}! Welcome to West Coast Motors. Ask me about any Hero bike or scooter, compare models, or book a test ride.`, { chips: ['Show me your bikes', 'Best bike for daily use', 'Book a test ride'] }))
  if (has(q, /^(thanks|thank you|thx|ok thanks|great|nice|cool|ok|okay)\b/) && q.split(' ').length <= 4) return done(reply('You are welcome! Anything else I can help with?', { chips: ['Book a test ride', 'Contact the showroom'] }))
  if (has(q, /\b(bye|goodbye)\b/)) return done(reply('Thank you for visiting West Coast Motors. Ride safe!'))
  if (has(q, /human|agent|person|executive|talk to (someone|sales)|call me|callback/)) return done(reply('Sure, our team will be happy to talk to you.', { actions: callActions }))


  // ---- date / day / time / open-closed / calls not answered (works offline, from the clock + HOURS in knowledge.js) ----
  const c = clock()
  const dayWord = (q.match(/\b(sunday|monday|tuesday|wednesday|thursday|friday|saturday)\b/) || [])[1]
  const noAnswer = has(q, /(not|no|never|nobody|didnt|dont|cant|cannot|unable|why).*(pick|answer|receiv|respond|reply|attend|reach|connect|available)|(call|phone|number).*(busy|switch|unreachable|no response|not working|not reachable|not picking)|no one (is )?(answering|picking)|not responding|no response/)
  if (!exact.length && noAnswer) return done(reply(statusLine(c) + (c.state === 'weekly' || c.state === 'holiday' || c.state === 'after-hours' || c.state === 'before-hours' ? '\nThat is why calls are not being answered right now. Please call again' + (c.next ? ' ' + (c.next.word === 'tomorrow' ? 'tomorrow' : 'on ' + c.next.name) : ' on the next working day') + ', or send a WhatsApp message so your request is waiting for the team.' : '\nThe team may be busy with customers or on another call. Please try again in a few minutes, or send a WhatsApp message.') + `\nSales: ${STORE.salesPhone} | Service: ${STORE.servicePhone}`, { actions: callActions, chips: ['Showroom address', 'Book a test ride'] }))
  if (!exact.length && has(q, /(what|which|todays|today s|current|tell).*(day|date)|\b(day|date) (is it|today)|what time|time now|current time|\bwhat is today\b|\btoday date\b/)) {
    const asksTime = /time/.test(q) && !/day|date/.test(q)
    return done(reply(asksTime ? `It is **${c.time}** (Indian time) on ${c.today.label}.` : `Today is **${c.today.label}**.` + (/tomorrow/.test(q) ? `\nTomorrow is ${c.tomorrow.label}.` : ''), { chips: ['Are you open today?', 'Showroom address'] }))
  }
  if (!exact.length && has(q, /tomorrow/) && has(q, /day|date|open|close|working|holiday|available|visit|come/)) return done(reply(`Tomorrow is **${c.tomorrow.label}**. ` + (c.tomorrowStatus.open ? 'It is a working day.' + (HOURS_HINT() ? '' : ' Please call to confirm timings.') : (c.tomorrowStatus.why === 'holiday' ? `We are closed (${c.tomorrowStatus.holiday.name}).` : 'We are closed (weekly holiday).')), { actions: callActions }))
  if (!exact.length && (has(q, /\b(open|close|closed|opening|closing|working|holiday|timing|timings|hours|schedule)\b/) || dayWord)) {
    if (dayWord) { const di = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'].indexOf(dayWord); const isHol = (CLOSED_DAYS().includes(di)); return done(reply(isHol ? `Yes, **${dayWord[0].toUpperCase() + dayWord.slice(1)}** is our weekly holiday. The showroom and service centre are closed.` : `**${dayWord[0].toUpperCase() + dayWord.slice(1)}** is a working day. ${hoursText()}`, { actions: callActions })) }
    return done(reply(statusLine(c) + '\n' + hoursText(), { actions: [{ label: 'Open map', href: STORE.mapsUrl }, callActions[0]], chips: ['Showroom address', 'Book a test ride'] }))
  }

  // test ride
  if (has(q, /test ?ride|test drive|try the|ride it/)) return done(reply(focus ? `Great choice! Fill in the details and we will arrange a test ride of the **${focus.name}**.` : 'Happy to arrange a test ride. Pick the bike and share your details.', { form: { bike: focus ? focus.name : '' } }), focus)

  // contact / location / hours / service
  if (has(q, /service|servicing|repair|spare|puncture|breakdown/) && !focus) return done(reply(FAQ.find(f => f.k.includes('service')).a + `\nService: **${STORE.servicePhone}**`, { actions: [{ label: 'Call service', href: 'tel:' + STORE.serviceTel }, { label: 'Open map', href: STORE.mapsUrl }] }))
  if (has(q, /address|location|where|directions|map|reach|visit|showroom|near/) ) return done(reply(`**${STORE.name}**\n${STORE.address}\nSales: ${STORE.salesPhone}\nService: ${STORE.servicePhone}\nEmail: ${STORE.email}\n` + hoursText(), { actions: [{ label: 'Open map', href: STORE.mapsUrl }, callActions[0]] }))
  if (has(q, /phone|number|contact|call|whatsapp|email|mail|timing|open|close|hours|time/) && !focus) return done(reply(`Sales: **${STORE.salesPhone}**\nService: **${STORE.servicePhone}**\nEmail: ${STORE.email}\n` + hoursText(), { actions: callActions }))

  // EV
  if (has(q, /\bev\b|electric|vida/)) return done(reply('Our electric range (VIDA) is on the EV page. Ask the sales team about availability and test rides.', { actions: [{ label: 'Open EV page', href: '#/ev' }, callActions[0]] }))

  // compare
  if (has(q, /compare|vs|versus|difference|better than|or\b/) && exact.length >= 2) return done(compareAnswer(exact[0], exact[1]), exact[0])
  if (has(q, /compare|vs|versus|difference/) && exact.length < 2) return done(reply(exact.length ? `Which bike should I compare the **${exact[0].name}** with? Type two names, for example "Xtreme 125R vs Glamour X".` : 'Tell me two bikes to compare, for example "Xtreme 125R vs Glamour X".', { chips: ['Xtreme 125R vs Glamour X', 'Splendor+ vs HF Deluxe', 'Destini 110 vs Xoom 110'] }))

  // price
  if (has(q, /price|cost|rate|on road|ex showroom|how much|lakh|rupee|rs\b|₹|budget/) && !recommend(q + ' zzz')?.cards?.length === false) { /* fallthrough guard */ }
  if (has(q, /price|cost|rate|on road|ex showroom|how much|pricing/)) return done(priceAnswer(focus), focus)

  // a bike was named
  if (exact.length || group.length || (ctx.bike && has(q, /\b(it|this|that|its|this bike|this model|the bike)\b/))) {
    if (!exact.length && group.length) return done(reply(`I found ${group.length} models. Which one would you like to know about?`, { cards: cards(group.slice(0, 8)) }))
    const b = focus
    // specific topic
    for (const [, re, label, get] of TOPICS) if (has(q, re)) {
      const v = get(b)
      if (v) return done(reply(`**${b.name}**, ${label.toLowerCase()}: ${v}` + (label === 'Mileage' ? '\nReal-world mileage varies with riding style and road conditions.' : ''), { chips: CHIPS_BIKE(b).filter(c => !c.toLowerCase().startsWith(label.toLowerCase())).slice(0, 4) }), b)
      if (!has(q, FEATURE_WORDS)) return done(reply(`I do not have the ${label.toLowerCase()} of the **${b.name}** listed. Please check its page or ask our team.`, { unknown: true, actions: [{ label: 'Open page', href: '#/petrol/' + b.slug }, callActions[0]] }), b)
    }
    if (has(q, /colou?r|shade|paint/)) return done(b.cols.length ? reply(`**${b.name}** colours: ${b.cols.join(', ')}.\nAsk us which are in stock right now.`, { actions: [{ label: 'See colours', href: '#/petrol/' + b.slug }], chips: CHIPS_BIKE(b).slice(0, 3) }) : reply(`Colour details for the **${b.name}** are on its page. Ask us which colours are in stock.`, { actions: [{ label: 'Open page', href: '#/petrol/' + b.slug }] }), b)
    if (has(q, /variant|version|model|type/)) { const v = (b.d.variants || []).map(x => x.name).filter(Boolean); if (v.length) return done(reply(`**${b.name}** variants: ${v.join(', ')}.`, { chips: ['Ask for prices', `Book test ride for ${b.name}`] }), b) }
    if (has(q, /warranty|guarantee/)) return done(reply(`**${b.name}** warranty: ${b.d.warranty || '5 years or 70,000 km (whichever comes first), as stated by Hero MotoCorp'}.`, { chips: CHIPS_BIKE(b).slice(0, 3) }), b)
    if (has(q, FEATURE_WORDS) || has(q, /feature|tech|special|highlight|good|about|tell me|details|info/)) {
      const kw = (q.match(FEATURE_WORDS) || [])[0]
      if (kw && !/feature|tech|special|highlight/.test(q)) {
        const hl = (b.d.highlights || []).filter(h => Array.isArray(h)).map(h => ({ title: h[0], text: h[1] || '' })), ov = b.d.overview ? [{ title: b.d.overview.title || '', text: b.d.overview.intro || '' }] : []
        const hit = [...b.feats, ...hl, ...ov].filter(f => (f.title + ' ' + f.text).toLowerCase().includes(kw))
        if (hit.length) return done(reply(`${/\b(does|do|has|have|is there|with|got)\b/.test(q) ? 'Yes. ' : ''}**${b.name}**: ` + hit.slice(0, 3).map(f => f.title + (f.text ? ' (' + f.text.replace(/\.$/, '') + ')' : '')).join('; ') + '.', { chips: ['Show all features', ...CHIPS_BIKE(b).slice(0, 2)] }), b)
        return done(reply(`I do not see that listed for the **${b.name}**. Please check the specifications on its page or ask our team.`, { unknown: true, actions: [{ label: 'Open page', href: '#/petrol/' + b.slug }, callActions[0]] }), b)
      }
      const f = b.feats.slice(0, 7).map(x => '• ' + x.title).join('\n')
      return done(reply(`**${b.name}** highlights:\n${f}`, { actions: [{ label: 'All features', href: '#/petrol/' + b.slug }], chips: CHIPS_BIKE(b).filter(c => !c.startsWith('Features')) }), b)
    }
    // just the name: show the bike
    const eng = spec(b, /^displacement/i), pw = spec(b, /max\.? power/i), ml = b.d.fuelClaim || spec(b, /fuel consumption|mileage/i)
    return done(reply(`**${b.name}** ${b.cat ? '(' + b.cat + ')' : ''}\n` + [eng && 'Engine: ' + eng, pw && 'Power: ' + pw, ml && 'Mileage: ' + ml].filter(Boolean).join('\n') + '\nWhat would you like to know?', { cards: cards([b]), chips: CHIPS_BIKE(b) }), b)
  }

  // categories
  if (has(q, /scooter|scooty/) && !has(q, /best|suggest|recommend|girls|ladies|women/)) return done(reply('Our scooters:', { cards: cards(BIKE_LIST.filter(b => /scooter/i.test(b.cat))), chips: ['Compare two models', 'Book a test ride'] }))
  if (has(q, /100 ?cc|110 ?cc/)) return done(reply('Our 100 cc and 110 cc bikes:', { cards: cards(BIKE_LIST.filter(b => /100|110/.test(b.cat) && !/scooter/i.test(b.cat)).slice(0, 8)), chips: ['Compare two models', 'Best bike for mileage'] }))
  if (has(q, /125 ?cc/)) return done(reply('Our 125 cc bikes:', { cards: cards(BIKE_LIST.filter(b => /125/.test(b.cat)).slice(0, 8)), chips: ['Compare two models', 'Ask for prices'] }))
  if (has(q, /premium|160|200|210|250|440/) && !has(q, /best|suggest/)) return done(reply('Our premium range:', { cards: cards(BIKE_LIST.filter(b => /premium/i.test(b.cat)).slice(0, 8)), chips: ['Compare two models', 'Book a test ride'] }))
  if (has(q, /show|list|all|which bikes|what bikes|models|range|explore|catalog|collection|available|lineup/)) { const pick = ['splendor', 'hf-deluxe', 'glamour-x', 'xtreme-125r', 'xtreme-250r', 'karizma-xmr', 'xoom-110', 'destini-110'].map(s => bySlug[s]).filter(Boolean); return done(reply('Here are some of our popular models. See the full range on the Petrol page.', { cards: cards(pick), actions: [{ label: 'All bikes', href: '#/petrol' }], chips: ['Show scooters', 'Show premium bikes', 'Best bike for daily use'] })) }

  // recommendation
  const rec = recommend(q); if (rec) return done(rec)
  if (has(q, /best|suggest|recommend|which|help me choose|confused|should i/)) return done(reply('Happy to help you choose. What matters most to you?', { chips: ['Best mileage', 'Sporty and powerful', 'Easy scooter', 'Premium bikes'] }))

  // generic topic with no bike named
  for (const [, re, label] of TOPICS) if (has(q, re)) return done(reply(`Which bike do you mean? Type its name and I will share the ${label.toLowerCase()}.`, { chips: ['Xtreme 125R', 'Splendor+', 'Glamour X', 'Xoom 110'] }))

  // hand-fed FAQ
  const toks = q
  const scored = FAQ.map(f => ({ f, n: f.k.filter(k => (' ' + toks + ' ').includes(' ' + norm(k) + ' ')).length })).filter(x => x.n).sort((a, b) => b.n - a.n)
  if (scored.length) return done(reply(scored[0].f.a, { actions: callActions }))
  if (has(q, /warranty|guarantee/)) return done(reply('Hero bikes come with a 5-year warranty (5 years or 70,000 km, whichever comes first, as stated by Hero MotoCorp). Scooters carry 5 years or 50,000 km. Ask us about the model you like.', { chips: ['Show me your bikes'] }))
  if (has(q, /feature|spec|tell me/)) return done(reply('Tell me the bike name and I will share its features and specifications.', { chips: ['Xtreme 125R', 'Splendor+', 'Glamour X', 'Xoom 110'] }))

  return done(reply('I am not sure about that one. I would not like to guess, so please ask our team directly. You can also ask me about bikes, features, colours, comparisons or a test ride.', { unknown: true, actions: callActions, chips: ['Show me your bikes', 'Book a test ride', 'Contact the showroom'] }))
}

// ---------- fact sheet for a real AI model (used by provider.js when an API is connected) ----------
export function factsFor(text, ctx = {}) {
  const { exact, group } = findBikes(text)
  let list = exact.length ? exact : group.slice(0, 4)
  if (!list.length && ctx.bike && bySlug[ctx.bike]) list = [bySlug[ctx.bike]]
  const bikes = list.slice(0, 3).map(b => ({ name: b.name, category: b.cat, warranty: b.d.warranty, mileage: b.d.fuelClaim || null, variants: (b.d.variants || []).map(v => v.name), colours: b.cols, features: b.feats.slice(0, 14).map(f => f.title + (f.text ? ': ' + f.text : '')), specs: Object.fromEntries(b.specs.slice(0, 40)), pagePath: '#/petrol/' + b.slug }))
  const q = norm(text), faq = FAQ.filter(f => f.k.some(k => q.includes(norm(k)))).map(f => f.a)
  return { now: clockFacts(), store: { ...STORE }, priceNote: PRICE_NOTE, bikes, faq, allModels: BIKE_LIST.map(b => b.name) }
}
