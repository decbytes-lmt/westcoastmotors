import { useEffect, useRef, useState, useCallback } from 'react'
import { getReply } from './provider.js'
import { logEvent } from './learn.js'
import { TILES, STORE } from './knowledge.js'
import { BIKE_LIST } from './brain.js'
import { waLink } from '../data.js'
import './chat.css'

const I = {
  bike: <path d="M5 17a3 3 0 100-6 3 3 0 000 6zm14 0a3 3 0 100-6 3 3 0 000 6zM12 17l-2-6h5l2 6M9 7h3" />,
  scale: <path d="M12 4v16M6 20h12M4 8h16M7 8l-3 7a3 3 0 006 0L7 8zm10 0l-3 7a3 3 0 006 0l-3-7z" />,
  rupee: <path d="M7 5h10M7 9h10M10 5c4 0 6 2 6 4s-2 4-6 4H7l7 7" />,
  cal: <path d="M5 6h14v14H5zM5 10h14M9 4v4M15 4v4" />,
  send: <path d="M4 12l16-8-6 16-3-6-7-2z" />,
  chat: <path d="M4 5h16v11H9l-5 4V5z" />,
  x: <path d="M6 6l12 12M18 6L6 18" />,
  min: <path d="M6 12h12" />,
  spark: <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2z" />,
  arrow: <path d="M9 6l6 6-6 6" />,
}
const Ic = ({ n, s = 22 }) => <svg width={s} height={s} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{I[n]}</svg>

// **bold** and line breaks, built as React elements (safe: no HTML injection)
const Rich = ({ text }) => text.split('\n').map((line, i) => (
  <span key={i} className="wc-line">{line.split(/\*\*(.+?)\*\*/g).map((p, j) => j % 2 ? <b key={j}>{p}</b> : p)}</span>
))

const bikeFromHash = () => { const m = (location.hash || '').match(/^#\/petrol\/([a-z0-9-]+)/); return m ? m[1] : null }
const KEY = 'wcm-chat-v1'
const GREETING = { role: 'bot', text: 'Hey there, Rider! 👋\nWelcome to **West Coast Motors**.\nI am your WCM assistant. I can help you explore Hero motorcycles, compare models, and book a test ride.\nWhat would you like to do today?', tiles: true, id: 'g' }

function TestRideForm({ bike, onDone }) {
  const [name, setName] = useState(''), [phone, setPhone] = useState(''), [b, setB] = useState(bike || ''), [err, setErr] = useState('')
  const submit = e => {
    e.preventDefault()
    const ph = phone.replace(/\D/g, '').slice(-10)
    if (name.trim().length < 2) return setErr('Please enter your name.')
    if (ph.length !== 10) return setErr('Please enter a valid 10-digit mobile number.')
    if (!b) return setErr('Please choose a bike.')
    setErr(''); onDone({ name: name.trim(), phone: ph, bike: b })
  }
  return (
    <form className="wc-form" onSubmit={submit} noValidate>
      <label>Your name<input value={name} onChange={e => setName(e.target.value)} autoComplete="name" placeholder="Name" /></label>
      <label>Mobile number<input value={phone} onChange={e => setPhone(e.target.value)} inputMode="tel" autoComplete="tel" placeholder="10-digit number" /></label>
      <label>Bike<select value={b} onChange={e => setB(e.target.value)}><option value="">Choose a bike</option>{BIKE_LIST.map(x => <option key={x.slug} value={x.name}>{x.name}</option>)}</select></label>
      {err && <p className="wc-err" role="alert">{err}</p>}
      <button className="wc-go" type="submit">Request test ride on WhatsApp</button>
      <small>This opens WhatsApp with your details ready to send to our team.</small>
    </form>
  )
}

function Msg({ m, onChip, onTile, onForm, onNav, onVote, last }) {
  const mine = m.role === 'user'
  return (
    <div className={'wc-msg ' + (mine ? 'me' : 'bot')}>
      {!mine && <span className="wc-av" aria-hidden="true"><Ic n="spark" s={16} /></span>}
      <div className="wc-col">
        <div className="wc-bub"><Rich text={m.text} /></div>
        {m.table && (
          <div className="wc-tbl-wrap"><table className="wc-tbl"><thead><tr>{m.table.head.map((h, i) => <th key={i}>{h}</th>)}</tr></thead><tbody>{m.table.rows.map((r, i) => <tr key={i}>{r.map((c, j) => j ? <td key={j}>{c}</td> : <th key={j} scope="row">{c}</th>)}</tr>)}</tbody></table></div>
        )}
        {m.cards && m.cards.length > 0 && (
          <div className="wc-cards" role="list">
            {m.cards.map((c, i) => (
              <a key={c.slug} role="listitem" className="wc-card" style={{ '--i': i }} href={'#/petrol/' + c.slug} onClick={onNav}>
                <span className="wc-ph">{c.image ? <img src={c.image} alt="" loading="lazy" /> : null}</span>
                <b>{c.name}</b><small>{c.sub}</small>
                <em>{c.price || 'Price on request'}</em><span className="wc-view">View details <Ic n="arrow" s={13} /></span>
              </a>
            ))}
          </div>
        )}
        {m.actions && <div className="wc-acts">{m.actions.map((a, i) => <a key={i} className="wc-act" href={a.href} target={/^https?:/.test(a.href) ? '_blank' : undefined} rel="noreferrer" onClick={a.href.startsWith('#') ? onNav : undefined}>{a.label}</a>)}</div>}
        {m.tiles && <div className="wc-tiles">{TILES.map((t, i) => <button key={t.id} style={{ '--i': i }} onClick={() => onTile(t)}><span className="wc-ti"><Ic n={t.icon} /></span><span><b>{t.t}</b><small>{t.s}</small></span><Ic n="arrow" s={15} /></button>)}</div>}
        {m.form && !m.sent && <TestRideForm bike={m.form.bike} onDone={d => onForm(m, d)} />}
        {m.sent && <p className="wc-ok">Request ready. Send the WhatsApp message to confirm your test ride.</p>}
        {!mine && m.q && !m.blocked && !m.form && (m.voted ? <small className="wc-vt">Thanks for the feedback</small> : <div className="wc-vote"><button onClick={() => onVote(m, 1)} aria-label="Good answer">👍</button><button onClick={() => onVote(m, -1)} aria-label="Bad answer">👎</button></div>)}
        {last && m.chips && <div className="wc-chips">{m.chips.map(c => <button key={c} onClick={() => onChip(c)}>{c}</button>)}</div>}
      </div>
    </div>
  )
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false), [msgs, setMsgs] = useState(() => { try { const s = JSON.parse(sessionStorage.getItem(KEY) || 'null'); if (Array.isArray(s) && s.length) return s } catch (e) {} return [GREETING] })
  const [typing, setTyping] = useState(false), [val, setVal] = useState(''), [nudge, setNudge] = useState(false), [ctx, setCtx] = useState({ bike: bikeFromHash() })
  const box = useRef(null), inp = useRef(null), seq = useRef(0)

  useEffect(() => { try { sessionStorage.setItem(KEY, JSON.stringify(msgs.slice(-40))) } catch (e) {} }, [msgs])
  useEffect(() => { const h = () => setCtx(c => ({ ...c, bike: bikeFromHash() || c.bike })); addEventListener('hashchange', h); return () => removeEventListener('hashchange', h) }, [])
  useEffect(() => { const t = setTimeout(() => { try { if (!sessionStorage.getItem('wcm-nudge')) setNudge(true) } catch (e) { setNudge(true) } }, 4000); return () => clearTimeout(t) }, [])
  useEffect(() => { if (box.current) box.current.scrollTo({ top: box.current.scrollHeight, behavior: 'smooth' }) }, [msgs, typing, open])
  useEffect(() => { if (open) { setNudge(false); try { sessionStorage.setItem('wcm-nudge', '1') } catch (e) {} setTimeout(() => inp.current && inp.current.focus({ preventScroll: true }), 250) } }, [open])
  useEffect(() => { const k = e => e.key === 'Escape' && setOpen(false); addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [])
  useEffect(() => { document.documentElement.classList.toggle('wc-lock', open && matchMedia('(max-width:640px)').matches); return () => document.documentElement.classList.remove('wc-lock') }, [open])

  const send = useCallback(async text => {
    text = (text || '').trim(); if (!text || typing) return
    const id = ++seq.current
    setVal(''); setMsgs(m => [...m.map(x => x.chips ? { ...x, chips: null } : x), { role: 'user', text, id: 'u' + Date.now() }]); setTyping(true)
    const hist = msgs.filter(m => m.text).slice(-8)
    const [r] = await Promise.all([getReply(text, hist, ctx), new Promise(res => setTimeout(res, 550 + Math.min(text.length * 12, 500)))])
    if (id !== seq.current) return
    if (r.ctx) setCtx(r.ctx)
    if (r.unknown) logEvent('unanswered', text)
    setTyping(false); setMsgs(m => [...m, { role: 'bot', ...r, q: text, id: 'b' + Date.now() }])
  }, [msgs, typing, ctx])

  const reset = () => { seq.current++; setTyping(false); setMsgs([GREETING]); setCtx({ bike: bikeFromHash() }) }
  const onForm = (m, d) => {
    const text = `Hi West Coast Motors, I want to book a test ride.\nBike: ${d.bike}\nName: ${d.name}\nMobile: ${d.phone}\n(from website chat)`
    setMsgs(x => x.map(y => y.id === m.id ? { ...y, sent: true } : y)); window.open(waLink(text), '_blank', 'noopener')
  }
  const onVote = (m, v) => { setMsgs(x => x.map(y => y.id === m.id ? { ...y, voted: v } : y)); logEvent(v > 0 ? 'good' : 'bad', m.q, m.text) }
  const onNav = () => { if (matchMedia('(max-width:640px)').matches) setOpen(false) }
  const here = ctx.bike && BIKE_LIST.find(b => b.slug === ctx.bike)

  return (<>
    <div className={'wc-launch' + (open ? ' hide' : '')}>
      {nudge && !open && <button className="wc-nudge" onClick={() => setOpen(true)}><b>Chat with WCM AI</b><small>Get instant help!</small><span className="wc-x" role="button" aria-label="Dismiss" onClick={e => { e.stopPropagation(); setNudge(false); try { sessionStorage.setItem('wcm-nudge', '1') } catch (er) {} }}>×</span></button>}
      <button className="wc-fab" onClick={() => setOpen(true)} aria-label="Chat with WCM AI" aria-expanded={open}><Ic n="chat" s={28} /><i className="wc-ring" /></button>
    </div>
    <section className={'wc-panel' + (open ? ' open' : '')} role="dialog" aria-label="WCM AI assistant" aria-hidden={!open} inert={!open ? '' : undefined}>
      <header className="wc-head">
        <span className="wc-logo" aria-hidden="true"><Ic n="spark" s={22} /></span>
        <div><h2>WCM <em>AI</em></h2><p>Your Motorcycle Expert</p></div>
        <span className="wc-on"><i />Online</span>
        <button onClick={reset} aria-label="Start a new chat" title="New chat" className="wc-hb">↺</button>
        <button onClick={() => setOpen(false)} aria-label="Minimise chat" className="wc-hb"><Ic n="min" s={18} /></button>
        <button onClick={() => setOpen(false)} aria-label="Close chat" className="wc-hb"><Ic n="x" s={18} /></button>
      </header>
      <div className="wc-body" ref={box} aria-live="polite">
        {msgs.map((m, i) => <Msg key={m.id || i} m={m} last={i === msgs.length - 1 && !typing} onChip={send} onTile={t => send(t.q)} onForm={onForm} onNav={onNav} onVote={onVote} />)}
        {typing && <div className="wc-msg bot"><span className="wc-av" aria-hidden="true"><Ic n="spark" s={16} /></span><div className="wc-bub wc-typing" aria-label="WCM AI is typing"><i /><i /><i /></div></div>}
      </div>
      {here && <div className="wc-here">Asking about <b>{here.name}</b> <button onClick={() => send(`Tell me about ${here.name}`)}>Tell me more</button></div>}
      <form className="wc-in" onSubmit={e => { e.preventDefault(); send(val) }}>
        <Ic n="spark" s={18} />
        <input ref={inp} value={val} onChange={e => setVal(e.target.value)} placeholder="Ask me anything about Hero…" aria-label="Type your question" maxLength={300} enterKeyHint="send" />
        <button type="submit" aria-label="Send" disabled={!val.trim() || typing}><Ic n="send" s={20} /></button>
      </form>
      <p className="wc-foot">Powered by WCM AI · {STORE.name}. Answers come from our bike pages; please confirm price and stock with the showroom.</p>
    </section>
  </>)
}
