import { useEffect, useRef, useState, useCallback } from 'react'
import { SITE, PETROL, EV, PETROL_CATS, EV_CATS, SLIDES, RIDE, PAGE, VX2_INFO, waLink } from './data.js'

const KEY = 'wcm-intro-seen'
const P = {
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
  tool: <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="M9 12l2 2 4-4"/></>,
  award: <><circle cx="12" cy="8" r="7"/><path d="M8.21 13.89L7 23l5-3 5 3-1.21-9.12"/></>,
  zap: <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>,
  phones: <><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></>,
  card: <><rect x="1" y="4" width="22" height="16" rx="2"/><path d="M1 10h22"/></>,
  box: <><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12"/></>,
  clock: <><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></>,
  bike: <><circle cx="5.5" cy="17.5" r="3.5"/><circle cx="18.5" cy="17.5" r="3.5"/><path d="M15 6h-3l-3 6h4l3 5.5M9 12l-3.5 5.5"/></>,
  pin: <><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></>,
  menu: <path d="M3 6h18M3 12h18M3 18h18"/>,
  close: <path d="M18 6L6 18M6 6l12 12"/>,
  left: <path d="M15 18l-6-6 6-6"/>, right: <path d="M9 18l6-6-6-6"/>,
  volume: <><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></>,
  fuel: <><path d="M3 22h12"/><path d="M4 9h10"/><path d="M14 22V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v18"/><path d="M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 2 2 2 2 0 0 0 2-2V9.83a2 2 0 0 0-.59-1.42L18 5"/></>,
  mute: <><path d="M11 5L6 9H2v6h4l5 4V5z"/><path d="M23 9l-6 6M17 9l6 6"/></>,
}
const Icon = ({ n, size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{P[n]}</svg>
)

/* ---------- Hero logo (official SVG; black parts follow text colour) ---------- */
const HeroLogo = ({ className = '', height = 32, title = 'Hero' }) => (
  <svg className={'hero-mark ' + className} viewBox="0 0 122 41" height={height} width={height * 122 / 41} role="img" aria-label={title} xmlns="http://www.w3.org/2000/svg">
    <path d="M54.977 17.5344H45.9541V9.6875H40.2344V30.9895H45.9541V22.4558H54.977V30.9895H60.6852V9.6875H54.977V17.5344Z" fill="#EE2326" />
    <path d="M68.9198 17.8398C69.3991 14.9641 70.9603 13.462 73.4915 13.462C76.0515 13.462 77.7906 15.233 77.8739 17.8398H68.9198ZM73.5231 9.125C67.2294 9.125 63.0078 13.5496 63.0078 20.1866C63.0078 27.0895 67.1806 31.4761 73.7039 31.4761C78.9156 31.4761 82.4887 29.0417 83.8289 24.4329H77.6558C77.0961 26.1163 75.7903 26.9609 73.8273 26.9609C70.8771 26.9609 69.1035 25.1811 68.9542 22.0862H83.8289C83.8289 21.338 83.8719 21.075 83.8719 20.7185C83.8719 13.5496 79.877 9.125 73.5231 9.125" fill="#EE2326" />
    <path d="M93.5938 9.49961C91.5705 9.90876 86.3789 11.4986 86.3789 19.5646V30.9828H92.1646V21.5519C92.1646 18.0596 92.641 16.42 94.0702 15.3621C94.9455 14.649 96.2112 14.2545 97.6805 14.2545C98.289 14.2545 98.5501 14.3013 99.2475 14.4298V9.59606C99.2475 9.59606 96.9401 8.83329 93.5938 9.49961Z" fill="#EE2326" />
    <path d="M110.69 27.0378C107.642 27.0378 105.863 24.5187 105.863 20.3132C105.863 16.0639 107.605 13.5857 110.69 13.5857C113.729 13.5857 115.471 16.0201 115.471 20.2694C115.471 24.5654 113.729 27.0378 110.69 27.0378ZM110.69 9.11719C104.204 9.11999 100.031 13.498 100.031 20.3132C100.031 27.0817 104.204 31.4683 110.69 31.4683C117.116 31.4683 121.294 27.0817 121.294 20.3132C121.294 13.498 117.116 9.11719 110.69 9.11719Z" fill="#EE2326" />
    <path d="M24.5705 7.06641L15.625 0.335938V19.5074L24.5705 13.1919V7.06641Z" fill="currentColor" />
    <path d="M24.5705 34.4812V21.3125L15.625 27.8618L24.5705 34.4812Z" fill="currentColor" />
    <path d="M0.00390625 33.7114L8.95224 40.3338V12.918L0.00390625 6.1875V33.7114Z" fill="#EE2326" />
  </svg>
)

/* ---------- Intro: splash -> site ---------- */
function Intro({ stage, setStage }) {
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (stage !== 'splash') return
    const t1 = setTimeout(() => setLeaving(true), 1600)
    const t2 = setTimeout(() => setStage('done'), 2300)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [stage, setStage])

  if (stage === 'splash') return (
    <div className={'splash' + (leaving ? ' out' : '')} role="status" aria-label="Loading West Coast Motors">
      <div className="splash-in">
        <div className="splash-hero"><HeroLogo height={72} /></div>
        <div className="splash-name display">{SITE.name}</div>
        <div className="splash-tag">{SITE.tagline}</div>
        <div className="splash-bar"><i /></div>
      </div>
    </div>
  )
  return null
}

/* ---------- Site ---------- */
const NAV = [['Home', '#/', 'home'], ['Petrol', '#/petrol', 'petrol'], ['EV', '#/ev', 'ev'], ['Services', '#services'], ['About Us', '#about'], ['Contact', '#contact']]
const testRide = (m) => waLink(m ? `Hi West Coast Motors, I want to book a test ride for ${m}.` : 'Hi West Coast Motors, I want to book a test ride.')

function Header({ route }) {
  const [open, setOpen] = useState(false)
  useEffect(() => { const k = e => e.key === 'Escape' && setOpen(false); addEventListener('keydown', k); return () => removeEventListener('keydown', k) }, [])
  return (<>
    <div className="topbar"><div className="wrap">
      <span><Icon n="pin" size={14} /> {SITE.address}</span>
      <a href={`tel:${SITE.salesTel}`}>Sales: {SITE.salesPhone}</a>
      <a href={`tel:${SITE.serviceTel}`}>Service: {SITE.servicePhone}</a>
      <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
      <span className="social"><a href={SITE.facebook}>Facebook</a><a href={SITE.instagram}>Instagram</a><a href={SITE.youtube}>YouTube</a></span>
    </div></div>
    <header className="nav"><div className="wrap">
      <a className="brand" href="#/"><span className="hero-logo"><HeroLogo height={34} /></span><span className="dealer"><b>{SITE.name}</b><i>{SITE.tagline}</i></span></a>
      <nav aria-label="Main"><ul className={'menu' + (open ? ' open' : '')}>
        {NAV.map(([l, h, k]) => <li key={l} className={k === route ? 'on' : ''}><a href={h} onClick={() => setOpen(false)} {...(k === route ? { 'aria-current': 'page' } : {})}>{l}</a></li>)}
      </ul></nav>
      <a className="btn nav-cta" href={testRide()} target="_blank" rel="noreferrer">Book a Test Ride</a>
      <button className="burger" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}><Icon n={open ? 'close' : 'menu'} /></button>
    </div></header>
  </>)
}

function Hero() {
  const [i, setI] = useState(0)
  const [paused, setPaused] = useState(false)
  const reduce = typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches
  const go = useCallback(d => setI(v => (v + d + SLIDES.length) % SLIDES.length), [])
  useEffect(() => { if (paused || reduce) return; const t = setInterval(() => go(1), 6500); return () => clearInterval(t) }, [paused, reduce, go])
  const s = SLIDES[i]
  return (
    <section className="hero" aria-roledescription="carousel" aria-label="Featured" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <button className="arrow l" aria-label="Previous slide" onClick={() => go(-1)}><Icon n="left" size={18} /></button>
      <div className="wrap" key={i}>
        <div className="hero-copy">
          <div className="eyebrow">{s.eyebrow}</div>
          <h1 className="display">{s.title} <span>{s.sub}</span></h1>
          <div className="tag display">{s.tag[0]}<em>{s.tag[1]}</em></div>
          <a className="btn" href={s.href}>{s.cta}</a>
        </div>
        <div className="bike-slot">{s.image ? <img src={`./images/${s.image}`} alt="" /> : s.note}</div>
      </div>
      <aside className="trust"><span><Icon n="award" size={18} /> Trusted by Thousands</span><span><Icon n="shield" size={18} /> Authorised Hero Dealer</span><span><Icon n="tool" size={18} /> Expert Service &amp; Support</span></aside>
      <div className="dots">{SLIDES.map((_, k) => <button key={k} className={k === i ? 'on' : ''} aria-label={`Slide ${k + 1}`} aria-current={k === i} onClick={() => setI(k)} />)}</div>
      <button className="arrow r" aria-label="Next slide" onClick={() => go(1)}><Icon n="right" size={18} /></button>
    </section>
  )
}

function Quick() {
  const items = [['bike', 'Explore Petrol', '#/petrol'], ['zap', 'Explore EV', '#/ev'], ['calendar', 'Book a Test Ride', testRide()], ['tool', 'Service Booking', '#services'], ['shield', 'Finance & Insurance', '#services'], ['pin', 'Visit Showroom', '#contact']]
  return <nav className="quick" aria-label="Quick links"><div className="wrap">{items.map(([ic, l, h]) => <a key={l} href={h} {...(h.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}><span className="ico"><Icon n={ic} size={18} /></span>{l}</a>)}</div></nav>
}

/* ---------- Find Your Ride: split panels + swipe switch ---------- */
const clamp = (v, lo = 0, hi = 1) => Math.min(hi, Math.max(lo, v))
const reduced = () => typeof matchMedia !== 'undefined' && matchMedia('(prefers-reduced-motion: reduce)').matches

// iPhone-style switch. `mode` = null (middle) | 'petrol' | 'ev'. Drag, tap an icon, or use arrow keys.
function RideSwitch({ mode, onChoose, className = '' }) {
  const [drag, setDrag] = useState(null)
  const trackRef = useRef(null), st = useRef(null)
  const base = mode === 'petrol' ? 0 : mode === 'ev' ? 1 : 0.5
  const travel = () => (trackRef.current ? trackRef.current.clientWidth : 212) - 64
  const down = e => { if (e.button) return; st.current = { x: e.clientX, p0: base, id: e.pointerId, moved: false } }
  const move = e => {
    const s = st.current; if (!s || e.pointerId !== s.id) return
    const dx = e.clientX - s.x
    if (!s.moved) { if (Math.abs(dx) < 5) return; s.moved = true; try { trackRef.current.setPointerCapture(e.pointerId) } catch {} }
    setDrag(clamp(s.p0 + dx / travel()))
  }
  const up = e => {
    const s = st.current; if (!s || e.pointerId !== s.id) return
    st.current = null; if (!s.moved) return
    const dx = e.clientX - s.x, p = clamp(s.p0 + dx / travel())
    const m = (s.p0 === 0.5 && Math.abs(p - 0.5) < 0.08) ? (dx > 0 ? 'ev' : 'petrol') : (p >= 0.5 ? 'ev' : 'petrol')
    setDrag(null); onChoose(m)
  }
  const cancel = () => { st.current = null; setDrag(null) }
  const key = e => { if (e.key === 'ArrowLeft') { e.preventDefault(); onChoose('petrol') } else if (e.key === 'ArrowRight') { e.preventDefault(); onChoose('ev') } }
  const p = drag != null ? drag : base
  const r = Math.max(0, (0.5 - p) * 2), g = Math.max(0, (p - 0.5) * 2)
  return (
    <div className={'sw ' + className + (drag != null ? ' drag' : '') + (mode ? '' : ' idle')} style={{ '--p': p, '--r': r, '--g': g }} role="group" aria-label="Switch between petrol and electric" onKeyDown={key}>
      <div className="sw-track" ref={trackRef} onPointerDown={down} onPointerMove={move} onPointerUp={up} onPointerCancel={cancel}>
        <i className="sw-fill r" /><i className="sw-fill g" />
        <button type="button" className="sw-ico l" aria-label="Petrol" aria-pressed={mode === 'petrol'} onClick={() => onChoose('petrol')}><Icon n="fuel" size={24} /></button>
        <button type="button" className="sw-ico rt" aria-label="Electric" aria-pressed={mode === 'ev'} onClick={() => onChoose('ev')}><Icon n="zap" size={24} /></button>
        <span className="sw-knob"><span className="k f" style={{ opacity: r }}><Icon n="fuel" size={22} /></span><span className="k e" style={{ opacity: g }}><Icon n="zap" size={22} /></span></span>
      </div>
    </div>
  )
}

// Home: choose a side. Panels animate, ripple plays, then the dedicated page opens.
function RideSelector({ go }) {
  const [mode, setMode] = useState(null)
  const [burst, setBurst] = useState(0)
  const lock = useRef(false)
  const choose = useCallback(m => {
    if (lock.current) return
    lock.current = true; setMode(m); setBurst(n => n + 1)
    setTimeout(() => go(m), reduced() ? 0 : 850)
    setTimeout(() => { lock.current = false }, 2500)
  }, [go])
  return (
    <section className="ride-sec" id="rides" aria-labelledby="rides-t">
      <div className="wrap">
        <div className="rides-head">
          <span className="chip pill"><Icon n="bike" size={16} /> Choose your ride</span>
          <h2 id="rides-t" className="display">Find Your Ride</h2>
          <p>Explore our range of petrol and electric two-wheelers.</p>
        </div>
        <div className={'split' + (mode ? ' m-' + mode : '')}>
          {['petrol', 'ev'].map(k => {
            const d = RIDE[k]
            return (
              <div key={k} className={'pane ' + k + (mode && mode !== k ? ' dim' : '')}>
                <div className="pane-copy">
                  <div className="lab">{d.label}</div>
                  <h3 className="display">{d.head[0]} <span>{d.head[1]}</span></h3>
                  <button type="button" className="pane-btn" onClick={() => choose(k)}>{d.cta} <Icon n="right" size={18} /></button>
                </div>
                <div className="art">{d.image ? <img src={`./images/${d.image}`} alt="" /> : d.note}</div>
              </div>
            )
          })}
          {burst > 0 && mode && <span key={burst} className={'sweep ' + mode} aria-hidden="true" />}
          <RideSwitch mode={mode} onChoose={choose} />
        </div>
        {!mode && <p className="hint">Slide the switch left for Petrol or right for EV</p>}
        <p className="sr" aria-live="polite">{mode === 'ev' ? 'Opening EV two-wheelers' : mode === 'petrol' ? 'Opening petrol two-wheelers' : ''}</p>
      </div>
    </section>
  )
}

/* ---------- Dedicated pages: /petrol and /ev ---------- */
function ModelCard({ m, i }) {
  const rows = m.specs.slice(0, m.kind === 'Electric scooter' ? 4 : 3)
  const href = `#/${m.page}/${m.slug}`
  return (
    <article className="card pcard" style={{ '--i': i % 12 }}>
      {m.tag && <span className="tagnew">{m.tag}</span>}
      <a className="img" href={href} aria-label={'View ' + m.name}>{m.image ? <img src={`./images/${m.image}`} alt={m.name} loading="lazy" /> : <span>Image</span>}</a>
      <small>{m.kind} · {m.cat}</small><b><a href={href}>{m.name}</a></b>
      <dl className="specs">{rows.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
      <div className="price-row"><span>Ex-showroom price</span><b className={'price' + (m.price ? '' : ' empty')}>{m.price || '₹ —'}</b></div>
      <div className="card-act">
        <a className="btn sm" href={href}>View details</a>
        <a className="more-link" href={testRide(m.name)} target="_blank" rel="noreferrer">Test ride <Icon n="right" size={14} /></a>
      </div>
    </article>
  )
}

/* ---------- One page per vehicle (like Hero's own model pages) ---------- */
const DOTS = [['lime', '#b6e03a'], ['teal', '#0f9d9a'], ['cyan', '#22d3ee'], ['nexus', '#1d4ed8'], ['blue', '#2563eb'], ['red', '#dc2626'], ['orange', '#f97316'], ['yellow', '#facc15'], ['green', '#16a34a'], ['maroon', '#7f1d1d'], ['silver', '#c0c4cc'], ['gun metal', '#4b5563'], ['grey', '#6b7280'], ['gray', '#6b7280'], ['white', '#f3f4f6'], ['black', '#111827']]
const dot = n => { const l = n.toLowerCase(); const hit = [...new Set(DOTS.filter(([k]) => l.includes(k)).map(([, c]) => c))].slice(0, 2); return hit.length === 2 ? `linear-gradient(135deg,${hit[0]} 50%,${hit[1]} 50%)` : (hit[0] || '#9ca3af') }

function ModelPage({ m }) {
  const ev = m.page === 'ev'
  const [tab, setTab] = useState('')
  const tiles = useRef(null)
  const hasF = m.features.length > 0, hasC = m.colours.length > 0
  const tabs = [hasF && ['features', 'Features'], hasC && ['colours', 'Colours'], ['specs', 'Specifications'], ['enquire', 'Enquire']].filter(Boolean)
  const pool = (ev ? EV : PETROL).filter(x => x.name !== m.name)
  const related = [...pool.filter(x => x.cat === m.cat), ...pool.filter(x => x.cat !== m.cat)].slice(0, 4)
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setTab(e.target.id) }), { rootMargin: '-35% 0px -60% 0px' })
    tabs.forEach(([id]) => { const el = document.getElementById(id); if (el) io.observe(el) })
    return () => io.disconnect()
  }, [m])
  const slide = dir => { const el = tiles.current; if (el) el.scrollBy({ left: dir * Math.max(280, el.clientWidth * 0.8), behavior: reduced() ? 'auto' : 'smooth' }) }
  const R = n => ({ '--d': n })
  const steps = [['calendar', 'Book a test ride', 'Pick a slot online or call us.'], ['pin', 'Visit the showroom', 'See ' + m.name + ' in person and talk to our team.'], ['card', 'Finance & documents', 'We help with easy financing and paperwork.'], ['bike', 'Ride home', 'Collect your new ride from West Coast Motors.']]
  return (
    <div className={'page model ' + m.page}>
      <section className="pg-hero mp-hero" aria-labelledby="mp-t">
        <div className="wrap">
          <div className="pg-copy">
            <div className="crumb rise" style={R(0)}><a href="#/">Home</a> / <a href={'#/' + m.page}>{ev ? 'EV' : 'Petrol'}</a> / {m.name}</div>
            <div className="rise" style={R(1)}><span className="chip">{m.kind} · {m.cat}</span> {m.tag && <span className="chip hot">{m.tag}</span>}</div>
            <h1 id="mp-t" className="display rise" style={R(2)}>{m.name}</h1>
            {m.highlights.length > 0 && <ul className="hl rise" style={R(3)}>{m.highlights.map(h => <li key={h}>{h}</li>)}</ul>}
            <div className="price-row big rise" style={R(4)}><span>Ex-showroom price</span><b className={'price' + (m.price ? '' : ' empty')}>{m.price || '₹ —'}</b></div>
            <div className="pg-cta rise" style={R(5)}>
              <a className="btn" href={testRide(m.name)} target="_blank" rel="noreferrer">Book a Test Ride</a>
              <a className="btn ghost" href={waLink(`Hi West Coast Motors, please share the latest price for ${m.name}.`)} target="_blank" rel="noreferrer">Ask price on WhatsApp</a>
              {m.brochure && <a className="btn ghost" href={m.brochure} target="_blank" rel="noreferrer">Download brochure</a>}
            </div>
          </div>
          <div className="art pg-art rise" style={R(3)}>{m.image ? <img src={`./images/${m.image}`} alt={m.name} /> : 'Image: ' + m.name + ' (transparent PNG)'}</div>
        </div>
        <div className="wrap stats-wrap">
          <div className="stats rise" style={R(6)}>{m.stats.map(([v, u, l]) => <div className="stat" key={l}><b>{v}<small>{u}</small></b><span>{l}</span></div>)}</div>
        </div>
      </section>

      <nav className="subnav" aria-label="On this page"><div className="wrap">
        <a className="back" href={'#/' + m.page}>← All {ev ? 'EV' : 'petrol'}</a>
        {tabs.map(([id, l]) => <a key={id} href={'#' + id} className={tab === id ? 'on' : ''}>{l}</a>)}
      </div></nav>

      {hasF && (
        <section className="mp-sec dark" id="features" aria-labelledby="f-t"><div className="wrap">
          <div className="sec-head"><div><p className="eyebrow">Features</p><h2 id="f-t" className="display">Discover what makes <span>{m.name}</span> special</h2></div>
            <div className="arrows"><button type="button" aria-label="Previous" onClick={() => slide(-1)}>‹</button><button type="button" aria-label="Next" onClick={() => slide(1)}>›</button></div></div>
        </div>
        <div className="tiles" ref={tiles} tabIndex={0} aria-label={m.name + ' features'}>
          {m.features.map(([t, dsc], i) => (
            <article className="tile" key={t} style={{ '--i': i }}>
              <span className="tile-n">{String(i + 1).padStart(2, '0')}</span>
              <div className="tile-txt"><h3>{t}</h3><p>{dsc}</p></div>
            </article>
          ))}
        </div>
        {m.page === 'petrol' && m.name === 'Glamour X ABS' && <div className="wrap"><p className="fine light">*Mileage based on third-party testing reports with E20 fuel, as published by Hero MotoCorp. Actual figures vary with riding conditions.</p></div>}
        </section>
      )}

      {hasC && (
        <section className="mp-sec" id="colours" aria-labelledby="c-t"><div className="wrap">
          <div className="sec-head"><div><p className="eyebrow">Colours</p><h2 id="c-t" className="display">Pick your colour</h2></div></div>
          <ul className="swatches">{m.colours.map(c => <li key={c}><i style={{ background: dot(c) }} /><span>{c}</span></li>)}</ul>
        </div></section>
      )}

      <section className="mp-sec" id="specs" aria-labelledby="s-t"><div className="wrap">
        <div className="sec-head"><div><p className="eyebrow">Specifications</p><h2 id="s-t" className="display">Full specs</h2></div>
          <div className="head-act">{m.brochure && <a className="btn ghost" href={m.brochure} target="_blank" rel="noreferrer">Download brochure</a>}{m.url && <a className="btn ghost" href={m.url} target="_blank" rel="noreferrer">Official page ↗</a>}</div></div>
        <div className="accs">
          {Object.entries(m.full).map(([g, rows], i) => (
            <details key={g} open={i < 2}><summary>{g}</summary>
              <dl className="specs full">{Object.entries(rows).map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
            </details>
          ))}
        </div>
        {m.warranty && <p className="warranty"><Icon n="shield" size={18} /> Warranty: {m.warranty}.</p>}
        <p className="fine">{ev ? '*Range and speed as published by VIDA. Real-world range varies with riding mode and conditions.' : 'Specifications as published by Hero MotoCorp. Confirm details and availability at the showroom.'}</p>
      </div></section>

      {m.name.includes('VX2') && <section className="mp-sec" aria-labelledby="g-t"><div className="wrap"><div className="sec-head"><div><p className="eyebrow">Gallery</p><h2 id="g-t" className="display">VX2 on the <span>road</span></h2></div></div><VxGallery /></div></section>}

      <section className="mp-sec alt" aria-labelledby="b-t"><div className="wrap">
        <div className="sec-head"><div><p className="eyebrow">How to buy</p><h2 id="b-t" className="display">In just a few steps</h2></div></div>
        <ol className="steps">{steps.map(([ic, t, s], i) => <li key={t} style={{ '--i': i }}><span className="ico"><Icon n={ic} size={20} /></span><b>{t}</b><small>{s}</small></li>)}</ol>
      </div></section>

      <section className="pg-band" id="enquire"><div className="wrap">
        <div><h3 className="display">Interested in {m.name}?</h3><p>Talk to our team at {SITE.name}.</p></div>
        <div className="pg-cta">
          <a className="btn" href={testRide(m.name)} target="_blank" rel="noreferrer">Book a Test Ride</a>
          <a className="btn ghost" href={'tel:' + SITE.salesTel}>Call {SITE.salesPhone}</a>
          <a className="btn ghost" href={waLink(`Hi West Coast Motors, I am interested in ${m.name}.`)} target="_blank" rel="noreferrer">WhatsApp</a>
        </div>
      </div></section>

      <section className="mp-sec" aria-labelledby="r-t"><div className="wrap">
        <div className="sec-head"><div><p className="eyebrow">Explore more</p><h2 id="r-t" className="display">You may also like</h2></div></div>
        <div className="grid">{related.map((x, i) => <ModelCard key={x.name} m={x} i={i} />)}</div>
      </div></section>
    </div>
  )
}


/* ---------- VIDA VX2 extras: proof stats, awards, gallery, BaaS offer ---------- */
function VxGallery() {
  return (
    <ul className="vx-gal">{VX2_INFO.gallery.map(([img, t, s]) => (
      <li key={img}><img src={`./images/${img}`} alt={'VIDA VX2 ' + t + ' – ' + s} loading="lazy" /><span><b>{t}</b>{s}</span></li>
    ))}</ul>
  )
}
function VxExtras() {
  const I = VX2_INFO, B = I.baas
  return (
    <>
      <section className="mp-sec alt" aria-labelledby="vx-a"><div className="wrap">
        <div className="sec-head"><div><p className="eyebrow">VIDA VX2</p><h2 id="vx-a" className="display">Electric 2 Wheeler <span>of the Year</span></h2></div></div>
        <div className="vx-proof">{I.proof.map(([v, l]) => <div key={l}><b>{v}</b><span>{l}</span></div>)}</div>
        <ul className="vx-awards">{I.awards.map(([t, w]) => <li key={t}><Icon n="award" size={18} /><div><b>{t}</b><small>{w}</small></div></li>)}</ul>
      </div></section>
      <section className="mp-sec" aria-labelledby="vx-g"><div className="wrap">
        <div className="sec-head"><div><p className="eyebrow">Ghar Ghar Evooter</p><h2 id="vx-g" className="display">Made for <span>every road</span></h2></div></div>
        <VxGallery />
      </div></section>
      <section className="vx-baas" aria-labelledby="vx-b" style={{ backgroundImage: `linear-gradient(90deg,rgba(6,25,46,.92),rgba(6,25,46,.35)),url(./images/vx2-duo.jpg)` }}><div className="wrap">
        <p className="eyebrow">VIDA BaaS · Battery as a Service</p>
        <h2 id="vx-b" className="display">Starting @ just <span>{B.from}</span></h2>
        <p className="vx-big">With BaaS @ just <b>{B.with}</b> &amp; per km cost <b>{B.perKm}</b></p>
        <p className="fine light">{B.note}</p>
        <div className="pg-cta"><a className="btn" href={waLink('Hi West Coast Motors, tell me about VIDA BaaS offer.')} target="_blank" rel="noreferrer">Ask about BaaS</a></div>
      </div></section>
    </>
  )
}

function RidePage({ kind, go }) {
  const ev = kind === 'ev', d = PAGE[kind], other = ev ? 'petrol' : 'ev'
  const list = ev ? EV : PETROL
  const kinds = ['All', ...(ev ? EV_CATS : PETROL_CATS)]
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? list : list.filter(m => m.cat === filter)
  const [sw, setSw] = useState(kind)
  const swChoose = m => { setSw(m); if (m !== kind) setTimeout(() => go(m), reduced() ? 0 : 500) }
  const R = n => ({ '--d': n })
  return (
    <div className={'page ' + kind}>
      <section className="pg-hero" aria-labelledby="pg-t">
        <div className="wrap">
          <div className="pg-copy">
            <div className="crumb rise" style={R(0)}><a href="#/">Home</a> / {d.chip}</div>
            <span className="chip rise" style={R(1)}><Icon n={ev ? 'zap' : 'bike'} size={16} /> {d.chip}</span>
            <h1 id="pg-t" className="display rise" style={R(2)}>{d.lines[0]} <span>{d.lines[1]}</span></h1>
            <p className="pg-sub rise" style={R(3)}>{d.sub}</p>
            <div className="pg-cta rise" style={R(4)}>
              <a className="btn" href={testRide()} target="_blank" rel="noreferrer">Book a Test Ride</a>
              <a className="btn ghost" href="#models">See models</a>
            </div>
            <div className="switch-row rise" style={R(5)}><span>{ev ? 'Looking for petrol?' : 'Looking for electric?'}</span><RideSwitch mode={sw} onChoose={swChoose} className="inline" /></div>
          </div>
          <div className="art pg-art rise" style={R(3)}>{d.image ? <img src={`./images/${d.image}`} alt="" /> : d.note}</div>
        </div>
      </section>

      <section className="pg-body" id="models" aria-labelledby="models-t">
        <div className="wrap">
          <div className="perks">
            {d.perks.map(([ic, t, s], i) => <div className="perk" key={t} style={{ '--i': i }}><span className="ico"><Icon n={ic} size={18} /></span><div><b>{t}</b><small>{s}</small></div></div>)}
          </div>
          <div className="sec-head">
            <div><h2 id="models-t" className="display">{ev ? 'Our EV Range' : 'Our Petrol Range'}</h2><p className="count">{shown.length} {shown.length === 1 ? 'model' : 'models'}</p></div>
            {kinds.length > 0 && <div className="filters" role="group" aria-label="Filter models">{kinds.map(k => <button type="button" key={k} className={k === filter ? 'on' : ''} aria-pressed={k === filter} onClick={() => setFilter(k)}>{k}</button>)}</div>}
          </div>
          <div className="grid" key={filter}>{shown.map((m, i) => <ModelCard key={m.name} m={m} i={i} />)}</div>
          {!ev && <p className="fine">Specifications as published by Hero MotoCorp. Prices will be updated soon. Contact the showroom for the latest price and availability.</p>}
          {ev && <p className="fine">*Range and speed as published by VIDA (certified / IDC). Ask our team about charging, battery and EV service support.</p>}
          {ev && <p className="fine">{VX2_INFO.priceNote}</p>}
        </div>
      </section>

      {ev && <VxExtras />}

      <section className="pg-band"><div className="wrap">
        <div><h3 className="display">{ev ? 'Prefer a petrol ride?' : 'Prefer going electric?'}</h3><p>{ev ? 'Browse our petrol bikes and scooters.' : 'Meet the Hero VIDA electric scooters.'}</p></div>
        <div className="pg-cta"><a className="btn ghost" href={'#/' + other}><Icon n={ev ? 'fuel' : 'zap'} size={16} /> {ev ? 'See petrol bikes' : 'See EV range'}</a><a className="btn" href={testRide()} target="_blank" rel="noreferrer">Book a Test Ride</a></div>
      </div></section>
    </div>
  )
}

// Full-screen colour wipe between pages
function Curtain({ t }) {
  const label = t.to === 'ev' ? 'EV Two-Wheelers' : t.to === 'petrol' ? 'Petrol Two-Wheelers' : SITE.name
  const ic = t.to === 'ev' ? 'zap' : t.to === 'petrol' ? 'fuel' : 'bike'
  return (
    <div className={'curtain ' + t.to + ' ' + t.phase} aria-hidden="true">
      <div className="curtain-in">
        <span className="curtain-ic"><Icon n={ic} size={34} /></span>
        <div className="curtain-hero"><HeroLogo height={30} /></div>
        <div className="curtain-t display">{label}</div>
        <div className="curtain-bar"><i /></div>
      </div>
    </div>
  )
}

function More() {
  const items = [['box', 'Genuine Spare Parts'], ['shield', 'Insurance Assistance'], ['card', 'Easy Financing'], ['clock', 'Express Service'], ['phones', 'Dedicated Support']]
  return (
    <section className="more" id="services"><div className="wrap">
      <div className="lead"><span className="display">More Than Just<br />A Dealership</span><small>Your complete two-wheeler destination</small></div>
      {items.map(([ic, l]) => <div className="item" key={l}><span className="ico"><Icon n={ic} size={18} /></span>{l}</div>)}
    </div></section>
  )
}

function Ride() {
  return (
    <section className="ride" id="about"><div className="wrap">
      <div><h3 className="display">Ride the <em>Hero</em> Way</h3><p>Performance. Trust. Togetherness.</p></div>
      <a className="btn" href="#contact">Visit Our Showroom</a>
    </div></section>
  )
}

function Footer() {
  return (
    <footer id="contact">
      <div className="wrap">
        <div><h4>{SITE.name}</h4><p>Authorised Hero MotoCorp dealer.<br />{SITE.address}</p></div>
        <div><h4>Explore</h4><ul><li><a href="#/petrol">Petrol</a></li><li><a href="#/ev">EV</a></li><li><a href="#about">About Us</a></li></ul></div>
        <div><h4>Services</h4><ul><li><a href={testRide()} target="_blank" rel="noreferrer">Test Ride</a></li><li><a href="#services">Service Booking</a></li><li><a href="#services">Finance &amp; Insurance</a></li></ul></div>
        <div><h4>Contact</h4><ul><li><a href={`tel:${SITE.salesTel}`}>Sales: {SITE.salesPhone}</a></li><li><a href={`tel:${SITE.serviceTel}`}>Service: {SITE.servicePhone}</a></li><li><a href={`mailto:${SITE.email}`}>{SITE.email}</a></li></ul></div>
      </div>
      <div className="copy">&copy; {new Date().getFullYear()} {SITE.name}. Hero and VIDA are trademarks of Hero MotoCorp Ltd.</div>
    </footer>
  )
}

const ROUTE_RE = /^(petrol|ev)(\/[a-z0-9-]+)?$/
const parseRoute = () => { const r = (location.hash || '').replace(/^#\/?/, ''); return ROUTE_RE.test(r) ? r : 'home' }
const TITLES = { home: 'West Coast Motors | Authorised Hero Dealer, Mangalore', petrol: 'Petrol Two-Wheelers | West Coast Motors', ev: 'EV Two-Wheelers (Hero VIDA) | West Coast Motors' }

export default function App() {
  const force = typeof location !== 'undefined' && new URLSearchParams(location.search).has('intro')
  const [stage, setStageRaw] = useState(() => {
    let seen = false; try { seen = sessionStorage.getItem(KEY) === '1' } catch {}
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches
    return force ? 'splash' : (seen || reduce) ? 'done' : 'splash'
  })
  const setStage = useCallback(s => { setStageRaw(s); if (s === 'done') { try { sessionStorage.setItem(KEY, '1') } catch {} } }, [])
  const mainRef = useRef(null)
  useEffect(() => {
    document.body.style.overflow = stage === 'done' ? '' : 'hidden'
    const el = mainRef.current; if (el) { stage === 'done' ? el.removeAttribute('inert') : el.setAttribute('inert', '') }
  }, [stage])

  // tiny hash router + page transition
  const [route, setRoute] = useState(parseRoute)
  const [curtain, setCurtain] = useState(null)
  const routeRef = useRef(route); routeRef.current = route
  const busy = useRef(false)
  const kind = route.split('/')[0], slug = route.split('/')[1]
  const model = slug ? (kind === 'ev' ? EV : PETROL).find(x => x.slug === slug) : null
  useEffect(() => { document.title = model ? `${model.name} | ${model.kind} | West Coast Motors` : TITLES[kind] }, [route])
  useEffect(() => {
    const pop = () => { setRoute(parseRoute()); window.scrollTo({ top: 0, behavior: 'instant' }) }
    addEventListener('popstate', pop); return () => removeEventListener('popstate', pop)
  }, [])
  const navigate = useCallback((to, after) => {
    if (busy.current) return
    if (to === routeRef.current && !after) { window.scrollTo({ top: 0, behavior: reduced() ? 'auto' : 'smooth' }); return }
    busy.current = true
    const commit = () => {
      setRoute(to)
      const h = to === 'home' ? '#/' : '#/' + to
      if (location.hash !== h) history.pushState(null, '', h)
      window.scrollTo({ top: 0, behavior: 'instant' })
      if (after) setTimeout(() => { const el = document.getElementById(after); if (el) el.scrollIntoView({ behavior: 'instant', block: 'start' }) }, 60)
    }
    if (reduced()) { commit(); busy.current = false; return }
    const cto = to.split('/')[0]
    setCurtain({ to: cto, phase: 'in' })
    setTimeout(() => { commit(); setCurtain({ to: cto, phase: 'out' }) }, 800)
    setTimeout(() => { setCurtain(null); busy.current = false }, 1650)
  }, [])
  // every in-page link: pages go through the curtain, home sections work from any page
  useEffect(() => {
    const h = e => {
      if (e.defaultPrevented || e.metaKey || e.ctrlKey || e.shiftKey || e.button) return
      const a = e.target.closest && e.target.closest('a[href^="#"]'); if (!a) return
      const href = a.getAttribute('href'); if (href.length < 2) return
      const r = href.replace(/^#\/?/, '')
      if (href.startsWith('#/') || ROUTE_RE.test(r)) { e.preventDefault(); navigate(ROUTE_RE.test(r) ? r : 'home'); return }
      const id = href.slice(1)
      if (id === 'top') { e.preventDefault(); navigate('home'); return }
      if (!document.getElementById(id)) { e.preventDefault(); navigate('home', id) }
    }
    document.addEventListener('click', h); return () => document.removeEventListener('click', h)
  }, [navigate])

  return (<>
    <Intro stage={stage} setStage={setStage} />
    {(
      <div id="top" ref={mainRef}>
        <Header route={route.split('/')[0]} /><main>
          {kind === 'home' && <><Hero /><Quick /><RideSelector go={navigate} /><More /><Ride /></>}
          {kind !== 'home' && (model ? <ModelPage key={route} m={model} /> : <RidePage key={kind} kind={kind} go={navigate} />)}
        </main><Footer />
      </div>
    )}
    {curtain && <Curtain t={curtain} />}
  </>)
}
