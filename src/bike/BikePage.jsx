import { useEffect, useMemo, useRef, useState } from 'react'
import { PETROL, SITE, waLink } from '../data.js'
import './bike.css'
import './bike-dark.css'

/* Reusable motorcycle detail page. Feed it one object from ./data/. Nothing model-specific lives in here. */
const IMG = slug => f => `./images/${slug}/${f}`

function Photo({ d, file, label, className = '' }) {
  return file
    ? <img className={'bp-photo ' + className} src={IMG(d.folder || d.slug)(file)} alt={label} loading="lazy" />
    : <div className={'bp-ph ' + className} role="img" aria-label={label + ' (photo to be added)'}><span>{label}</span><small>Photo coming soon</small></div>
}

// The site uses HashRouter, so a plain href="#section" would change the route and send the visitor home. Scroll instead.
function onAnchor(e) {
  const a = e.target.closest && e.target.closest('a[href^="#"]')
  if (!a) return
  const h = a.getAttribute('href')
  if (h.startsWith('#/') || h === '#') return
  const el = document.getElementById(h.slice(1))
  if (!el) return
  e.preventDefault()
  el.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' })
}

function railGo(e, dir) {
  const r = e.currentTarget.closest('.wrap').querySelector('.bp-feats')
  if (r) r.scrollBy({ left: dir * Math.min(r.clientWidth * 0.9, 760), behavior: 'smooth' })
}

function useProgress() {
  useEffect(() => {
    const bar = document.querySelector('.bp-progress')
    const on = () => { const h = document.documentElement.scrollHeight - innerHeight; if (bar) bar.style.setProperty('--p', h > 0 ? Math.min(1, scrollY / h) : 0) }
    on(); addEventListener('scroll', on, { passive: true }); return () => removeEventListener('scroll', on)
  }, [])
}

function useReveal(dep) {
  useEffect(() => {
    document.querySelectorAll('.bp-sec .bp-h2,.bp-sec .bp-eyebrow,.bp-sec .bp-lead').forEach(e => e.setAttribute('data-rv', ''))
    const els = [...document.querySelectorAll('.bp [data-rv]')]
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) { els.forEach(e => e.classList.add('in')); return }
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }), { rootMargin: '0px 0px -8% 0px' })
    els.forEach(e => io.observe(e)); return () => io.disconnect()
  })
}

export default function BikePage({ d: base, start }) {
  const models = base.models || null
  const [mid, setMid] = useState(start || (models ? models[0].id : null))
  const m = models ? models.find(x => x.id === mid) || models[0] : null
  const d = useMemo(() => (m ? { ...base, ...m, slug: base.slug, models } : base), [base, m])
  const [vid, setVid] = useState(d.variants[0].id)
  const variant = d.variants.find(v => v.id === vid) || d.variants[0]
  const coloursOf = v => v.colours || d.colours || []
  const cols = coloursOf(variant)
  const [colName, setColName] = useState(cols[0] ? cols[0].name : '')
  const colour = cols.find(c => c.name === colName) || cols[0] || null
  const pic = (colour && colour.image) || variant.image || null
  const featCats = Array.isArray(d.features) ? [] : Object.keys(d.features || {})
  const [cat, setCat] = useState(featCats[0])
  const [spec, setSpec] = useState(Object.keys(d.specs)[0])
  const [active, setActive] = useState('')
  const [enqSent, setEnqSent] = useState(null)

  // switching model tab (Splendor+ / Xtec / Xtec 2.0): reset everything model-specific
  useEffect(() => {
    const v = d.variants[0]; setVid(v.id); const c = coloursOf(v); setColName(c[0] ? c[0].name : '')
    setCat(Array.isArray(d.features) ? undefined : Object.keys(d.features || {})[0]); setSpec(Object.keys(d.specs)[0])
  }, [mid])
  const pickVariant = id => { setVid(id); const c = coloursOf(d.variants.find(v => v.id === id)); setColName(c[0] ? c[0].name : '') }
  useReveal()
  useProgress()

  useEffect(() => {
    let mt = document.querySelector('meta[name="description"]'); if (!mt) { mt = document.createElement('meta'); mt.name = 'description'; document.head.appendChild(mt) }
    const prev = mt.content; mt.content = d.seoDescription
    return () => { mt.content = prev }
  }, [d])


  const price = variant.price
  const related = useMemo(() => (d.related || []).map(n => PETROL.find(x => x.name === n)).filter(Boolean), [d])
  const testRide = waLink(`Hi West Coast Motors, I want to book a test ride for ${d.name} (${variant.name}).`)
  const enquire = waLink(`Hi West Coast Motors, please share the Mangalore ex-showroom price for ${d.name} (${variant.name}).`)
  const flatFeatures = Array.isArray(d.features)

  // ---- each block renders itself only if the model has the data. Order comes from d.layout. ----
  const B = {
    hero: () => (
      <section key="hero" className="bp-hero" aria-labelledby="bp-h1">
        <Photo d={d} file={d.hero && d.hero.image} label={d.name + ' hero image'} className="bp-hero-bg" />
        {!(d.hero && d.hero.image) && (d.hero && d.hero.bike || pic) && <img className="bp-hero-bike" key={(d.hero && d.hero.bike) || pic} src={IMG(d.folder || d.slug)((d.hero && d.hero.bike) || pic)} alt={`${d.name}${colour ? ' in ' + colour.name : ''}`} />}
        <div className="bp-hero-shade" />
        <div className="wrap bp-hero-in">
          <nav className="bp-crumb" aria-label="Breadcrumb"><a href="#/">Home</a><i>/</i><a href="#/petrol">Motorcycles</a><i>/</i><span>{d.name}</span></nav>
          {models && <div className="bp-models" role="tablist" aria-label="Choose model">{models.map(x => <button key={x.id} role="tab" aria-selected={x.id === mid} className={x.id === mid ? 'on' : ''} onClick={() => setMid(x.id)}>{x.name}</button>)}</div>}
          <p className="bp-eyebrow">Hero · {d.category}</p>
          <h1 id="bp-h1" className="bp-h1" key={mid}>{d.name}</h1>
          <p className="bp-tag">{d.tagline}</p>
          <div className="bp-hero-grid">
            <div>
              {d.variants.length > 1 && <><div className="bp-lbl">Variant</div>
                <div className="bp-chips" role="radiogroup" aria-label="Variant">{d.variants.map(v => <button key={v.id} type="button" role="radio" aria-checked={v.id === vid} className={v.id === vid ? 'on' : ''} onClick={() => pickVariant(v.id)}>{v.name}</button>)}</div></>}
              {cols.length > 0 && <><div className="bp-lbl">Colour · <b>{colour && colour.name}</b></div>
                <div className="bp-dots" role="radiogroup" aria-label="Colour">{cols.map(c => <button key={c.name} type="button" role="radio" aria-checked={colour && c.name === colour.name} aria-label={c.name} title={c.name} className={colour && c.name === colour.name ? 'on' : ''} style={{ '--c': c.hex }} onClick={() => setColName(c.name)} />)}</div></>}
            </div>
            <div className="bp-price"><span>Ex-showroom price, Mangalore</span><b className={price ? '' : 'na'}>{price || 'Price on request'}</b><small>{price ? 'Subject to change. Confirm at the showroom.' : 'Ask us for today’s price and offers.'}</small></div>
          </div>
          <div className="bp-cta"><a className="bp-btn" href="#test-ride">Book a Test Ride</a><a className="bp-btn ghost" href={enquire} target="_blank" rel="noreferrer">Enquire Now</a></div>
        </div>
      </section>
    ),
    offers: () => d.offers && (
      <section key="offers" className="bp-offers" aria-label="Offers and warranty"><div className="wrap">{d.offers.map(([t, s]) => <div key={t}><b>{t}</b><span>{s}</span></div>)}</div></section>
    ),
    quick: () => d.quick && (
      <section key="quick" className="bp-quick" aria-label="Quick specifications"><div className="wrap" style={{ '--n': d.quick.length }}>
        {d.quick.map(([v, u, l], i) => <div key={l} data-rv style={{ '--i': i }}><b>{v}<small>{u}</small></b><span>{l}</span></div>)}
      </div></section>
    ),
    highlights: () => d.highlights && (
      <section key="highlights" className="bp-sec" id="highlights"><div className="wrap">
        <p className="bp-eyebrow">Highlights</p><h2 className="bp-h2">Why you will <em>love it</em></h2>
        <ul className="bp-hl">{d.highlights.map(([t, s], i) => <li key={t} data-rv style={{ '--i': i }}><span>{String(i + 1).padStart(2, '0')}</span><b>{t}</b>{s && <p>{s}</p>}</li>)}</ul>
      </div></section>
    ),
    overview: () => d.overview && (
      <section key="overview" className="bp-sec" id="overview"><div className="wrap bp-ov">
        <div data-rv>
          <p className="bp-eyebrow">Overview</p><h2 className="bp-h2">{d.overview.title || 'Built for the thrill'}</h2>
          <p className="bp-lead">{d.overview.intro}</p>
          {d.overview.points && <ul className="bp-points">{d.overview.points.map(([t, k]) => <li key={k}><small>{k}</small><b>{t}</b></li>)}</ul>}
          {d.overview.note && <p className="bp-fine">{d.overview.note}</p>}
        </div>
        <div className="bp-ov-img" data-rv><Photo d={d} file={d.overview.images && d.overview.images[0]} label={d.name + ' side view'} className="big" /><Photo d={d} file={d.overview.images && d.overview.images[1]} label={d.name + ' detail'} className="small" /></div>
      </div></section>
    ),
    features: () => d.features && (flatFeatures ? d.features.length : featCats.length) > 0 && (
      <section key="features" className="bp-sec dark" id="features"><div className="wrap">
        <p className="bp-eyebrow">Key features</p>
        <h2 className="bp-h2">{d.featuresTitle || 'Discover what makes it special'}</h2>
        {!flatFeatures && <div className="bp-tabs" role="tablist" aria-label="Feature categories">{featCats.map(c => <button key={c} role="tab" aria-selected={c === cat} className={c === cat ? 'on' : ''} onClick={() => setCat(c)}>{c}</button>)}</div>}
        <div className="bp-rail-nav" aria-hidden="true"><button type="button" tabIndex={-1} onClick={e => railGo(e, -1)}>‹</button><button type="button" tabIndex={-1} onClick={e => railGo(e, 1)}>›</button></div>
        <div className="bp-feats" role="tabpanel" key={cat + mid}>
          {(flatFeatures ? d.features : d.features[cat] || []).map((f, i) => (
            <article key={f.title} className="bp-feat" style={{ '--i': i }}>
              {f.image && <Photo d={d} file={f.image} label={f.title} className="feat" />}
              <div><span className="n">{String(i + 1).padStart(2, '0')}</span><h3>{f.title}</h3>{f.text && <p>{f.text}</p>}</div>
            </article>
          ))}
        </div>
      </div></section>
    ),
    colours: () => (
      <section key="colours" className="bp-sec" id="colours"><div className="wrap bp-col">
        <div className="bp-col-stage" data-rv><div className="stage" style={{ '--c': colour ? colour.hex : '#334155' }}><Photo d={d} file={pic} label={colour ? `${d.name} in ${colour.name}` : d.name} /></div></div>
        <div data-rv>
          <p className="bp-eyebrow">Design and colour</p><h2 className="bp-h2">Pick your <em>colour</em></h2>
          {cols.length ? d.variants.map(v => coloursOf(v).length > 0 && (
            <div key={v.id} className="bp-colgrp">
              {d.variants.length > 1 && <div className="bp-lbl">{v.name}</div>}
              <ul>{coloursOf(v).map(c => (
                <li key={v.id + c.name}><button type="button" className={v.id === vid && colour && c.name === colour.name ? 'on' : ''} aria-pressed={v.id === vid && colour && c.name === colour.name} onClick={() => { setVid(v.id); setColName(c.name) }}><i style={{ '--c': c.hex }} />{c.name}</button></li>
              ))}</ul>
            </div>
          )) : <p className="bp-lead">Colour names for this model will be added soon. Ask our team what is in stock.</p>}
          {d.colourNote && <p className="bp-fine">{d.colourNote}</p>}
          <p className="bp-fine">Swatch shades are approximate. Availability of colours at the showroom may vary.</p>
        </div>
      </div></section>
    ),
    variants: () => d.variants.length > 1 && (
      <section key="variants" className="bp-sec alt" id="variants"><div className="wrap">
        <p className="bp-eyebrow">Variants</p><h2 className="bp-h2">Choose your <em>variant</em></h2>
        <div className="bp-vars">{d.variants.map(v => (
          <button key={v.id} type="button" className={'bp-var' + (v.id === vid ? ' on' : '')} aria-pressed={v.id === vid} onClick={() => pickVariant(v.id)} data-rv>
            <b>{v.name}</b><span className="p">{v.price || 'Price on request'}</span>{v.blurb && <span>{v.blurb}</span>}{v.id === vid && <em>Selected</em>}
          </button>))}</div>
        {d.variantNote && <p className="bp-fine">{d.variantNote}</p>}
      </div></section>
    ),
    compare: () => {
      if (d.compare) return (
        <section key="compare" className="bp-sec alt" id="compare"><div className="wrap">
          <h3 className="bp-h3" style={{ marginTop: 0 }}>{d.compare.title || 'How it improves'}</h3>
          <div className="bp-tbl-wrap"><table className="bp-tbl"><thead><tr>{d.compare.heads.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr></thead>
            <tbody>{d.compare.rows.map(r => <tr key={r[0]}><th scope="row">{r[0]}</th>{r.slice(1).map((c, i, a) => <td key={i} className={i === a.length - 1 ? 'hi' : ''}>{c}</td>)}</tr>)}</tbody></table></div>
        </div></section>)
      if (!models) return null
      const names = [...new Set(models.flatMap(x => (Array.isArray(x.features) ? x.features : []).map(f => f.title)))].filter(n => !(models.some(x => x.fuelClaim) && n === 'Superior Mileage'))
      return (
        <section key="compare" className="bp-sec alt" id="compare"><div className="wrap">
          <p className="bp-eyebrow">Compare</p><h2 className="bp-h2">Which one is <em>for you</em></h2>
          <div className="bp-tbl-wrap"><table className="bp-tbl bp-cmp"><thead><tr><th scope="col">Feature</th>{models.map(x => <th key={x.id} scope="col" className={x.id === mid ? 'cur' : ''}>{x.name}</th>)}</tr></thead>
            <tbody>{models.some(x => x.fuelClaim) && <tr><th scope="row">Fuel economy</th>{models.map(x => <td key={x.id} className={x.id === mid ? 'cur' : ''}>{x.fuelClaim}</td>)}</tr>}{names.map(n => <tr key={n}><th scope="row">{n}</th>{models.map(x => { const has = x.features.some(f => f.title === n); return <td key={x.id} className={x.id === mid ? 'cur' : ''}><span className={has ? 'y' : 'n'} aria-label={has ? 'Yes' : 'No'}>{has ? '✓' : '–'}</span></td> })}</tr>)}</tbody></table></div>
          <p className="bp-fine">Based on the feature lists Hero MotoCorp publishes for each model.</p>
        </div></section>)
    },
    specs: () => (
      <section key="specs" className="bp-sec" id="specs"><div className="wrap">
        <div className="bp-head"><div><p className="bp-eyebrow">Technical specifications</p><h2 className="bp-h2">The <em>numbers</em></h2></div>
          <div>{d.brochure && <a className="bp-btn ghost sm" href={d.brochure} target="_blank" rel="noreferrer">Download brochure</a>}</div></div>
        <div className="bp-spec">
          <div className="bp-spec-tabs" role="tablist" aria-label="Specification categories">{Object.keys(d.specs).map(k => <button key={k} role="tab" aria-selected={k === spec} className={k === spec ? 'on' : ''} onClick={() => setSpec(k)}>{k}</button>)}</div>
          <dl className="bp-spec-list" role="tabpanel" key={spec + mid}>{Object.entries(d.specs[spec] || {}).map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>
          <div className="bp-acc-m">{Object.entries(d.specs).map(([g, rows]) => (<details key={g}><summary>{g}</summary><dl className="bp-spec-list">{Object.entries(rows).map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl></details>))}</div>
        </div>
        {d.specNote && <p className="bp-fine">{d.specNote}</p>}
        <p className="bp-fine">Specifications as published by Hero MotoCorp. {d.warranty && <>Warranty: {d.warranty}. </>}Confirm details at the showroom.</p>
      </div></section>
    ),
    finance: () => (
      <section key="finance" className="bp-sec dark" id="finance"><div className="wrap bp-fin">
        <div data-rv>
          <p className="bp-eyebrow">Price and finance</p><h2 className="bp-h2">Ride home <em>easier</em></h2>
          <table className="bp-tbl dk"><thead><tr><th scope="col">Variant</th><th scope="col">Ex-showroom, Mangalore</th></tr></thead>
            <tbody>{d.variants.map(v => <tr key={v.id}><th scope="row">{d.name}{d.variants.length > 1 || v.name !== 'Standard' ? ' ' + v.name : ''}</th><td className={v.price ? '' : 'na'}>{v.price || 'Price on request'}</td></tr>)}</tbody></table>
          <p className="bp-fine light">Prices are subject to change. The final on-road price (RTO, insurance and other charges) must be confirmed with West Coast Motors.</p>
        </div>
        <div className="bp-emi" data-rv>
          <h3>EMI enquiry</h3>
          {d.finance && d.finance.promo && d.finance.promo.length > 0 && <><ul>{d.finance.promo.map(p => <li key={p}>{p}</li>)}</ul>{d.finance.promoNote && <p className="bp-fine light">{d.finance.promoNote}</p>}</>}
          <Emi />
          <a className="bp-btn" href={waLink(`Hi West Coast Motors, I need EMI / finance details for ${d.name} (${variant.name}).`)} target="_blank" rel="noreferrer">Get finance assistance</a>
        </div>
      </div></section>
    ),
    steps: () => (
      <section key="steps" className="bp-sec alt" aria-labelledby="stp"><div className="wrap">
        <p className="bp-eyebrow">How to buy</p><h2 id="stp" className="bp-h2">In just a few <em>steps</em></h2>
        <ol className="bp-steps">{[['Day 1', 'Book your two-wheeler', 'Book online or call us. Quick and convenient.'], ['Day 2–7', 'Visit the showroom', 'See it first-hand and get expert guidance.'], ['Day 8–12', 'Submit documents', 'Paperwork is simple. Submit documents at the showroom.'], ['Day 13–15', 'Pick up your bike', 'Time to ride. Collect it from West Coast Motors.']].map(([day, t, s], i) => <li key={t} data-rv style={{ '--i': i }}><span>{i + 1}</span><em>{day}</em><b>{t}</b><small>{s}</small></li>)}</ol>
        <p className="bp-fine">Timeline as indicated by Hero MotoCorp. Actual timing depends on stock and documents.</p>
      </div></section>
    ),
    accessories: () => (
      <section key="accessories" className="bp-sec" id="accessories"><div className="wrap">
        <p className="bp-eyebrow">Accessories</p><h2 className="bp-h2">Make it <em>yours</em></h2>
        {d.accessories && d.accessories.length ? <ul className="bp-acc">{d.accessories.map(a => <li key={a.name}><Photo d={d} file={a.image} label={a.name} /><b>{a.name}</b>{a.description && <p>{a.description}</p>}{a.part && <small className="part">Part no. {a.part}</small>}</li>)}</ul>
          : <div className="bp-empty"><b>Accessory list coming soon</b><p>Ask our showroom team which genuine accessories are available for this model.</p>
            <a className="bp-btn ghost sm" href={waLink(`Hi West Coast Motors, which genuine accessories are available for ${d.name}?`)} target="_blank" rel="noreferrer">Ask about accessories</a></div>}
      </div></section>
    ),
    testride: () => (
      <section key="test-ride" className="bp-sec alt" id="test-ride"><div className="wrap bp-form-wrap">
        <div data-rv><p className="bp-eyebrow">Book a test ride</p><h2 className="bp-h2">Feel it for <em>yourself</em></h2>
          <p className="bp-lead">Tell us when you want to ride. Our team at {SITE.name}, {SITE.address.split(',')[0]}, will confirm your slot.</p>
          <ul className="bp-contact"><li>Sales <a href={`tel:${SITE.salesTel}`}>{SITE.salesPhone}</a></li><li>{SITE.address}</li></ul></div>
        <TestRideForm d={d} variant={variant} sent={enqSent} setSent={setEnqSent} />
      </div></section>
    ),
    faq: () => d.faq && (
      <section key="faq" className="bp-sec" id="faq"><div className="wrap bp-faq">
        <div><p className="bp-eyebrow">FAQ</p><h2 className="bp-h2">Good <em>questions</em></h2></div>
        <div>{d.faq.map(([q, a], i) => <details key={q} open={i === 0}><summary>{q}</summary><p>{a}</p></details>)}</div>
      </div></section>
    ),
    banner: () => d.banner && (
      <section key="banner" className="bp-sec bp-banner" aria-label={d.name + ' banner'}><div className="wrap"><figure data-rv><img src={IMG(d.folder || d.slug)(d.banner)} alt={d.name + ' banner'} loading="lazy" /></figure></div></section>
    ),
    gallery: () => d.gallery && d.gallery.length > 0 && (
      <section key="gallery" className="bp-sec" id="gallery"><div className="wrap">
        <p className="bp-eyebrow">Gallery</p><h2 className="bp-h2">See it from <em>every angle</em></h2>
        <ul className="bp-gal">{d.gallery.map((g, i) => { const f = typeof g === 'string' ? g : g.file, l = typeof g === 'string' ? d.name : (g.label || d.name); return (
          <li key={f} data-rv style={{ '--i': i % 4 }}><a href={IMG(d.folder || d.slug)(f)} target="_blank" rel="noreferrer" aria-label={'Open photo: ' + l}><img className="bp-photo" src={IMG(d.folder || d.slug)(f)} alt={l} loading="lazy" /></a></li>) })}</ul>
      </div></section>
    ),
    videos: () => d.videos && d.videos.length > 0 && (
      <section key="videos" className="bp-sec dark" id="videos"><div className="wrap">
        <p className="bp-eyebrow">In action</p><h2 className="bp-h2">Watch it <em>work</em></h2>
        <ul className="bp-vid">{d.videos.map((v, i) => (
          <li key={v.file} data-rv style={{ '--i': i % 3 }}>
            <video controls muted playsInline loop preload="none" poster={v.poster ? IMG(d.folder || d.slug)(v.poster) : undefined} aria-label={v.title}><source src={IMG(d.folder || d.slug)(v.file)} type="video/mp4" /></video>
            <b>{v.title}</b>{v.text && <p>{v.text}</p>}
          </li>))}</ul>
        <p className="bp-fine light">Videos load only when you press play.</p>
      </div></section>
    ),
    related: () => related.length > 0 && (
      <section key="related" className="bp-sec alt" aria-labelledby="rel"><div className="wrap">
        <p className="bp-eyebrow">Explore more</p><h2 id="rel" className="bp-h2">Similar <em>motorcycles</em></h2>
        <ul className="bp-rel">{related.map(x => (
          <li key={x.slug} data-rv><a className="img" href={`#/petrol/${x.slug}`} aria-label={'View ' + x.name}>{x.image ? <img src={`./images/${x.image}`} alt={x.name} loading="lazy" /> : <span>{x.name}</span>}</a>
            <b>{x.name}</b><small>{x.price ? 'From ' + x.price : 'Price on request'}</small><a className="bp-btn ghost sm" href={`#/petrol/${x.slug}`}>View details</a></li>))}</ul>
      </div></section>
    ),
  }
  /* Free-form sections: d.sections = [{ id, nav, eyebrow, title, intro, dark, items: [{title,text,image}], table: {heads, rows}, note }].
     Put 'sec:<id>' in d.layout where the section should appear. Used for flex-fuel explainer, DNA chapters, ownership-cost tables etc. */
  const secBlock = s => (
    <section key={'sec-' + s.id} className={'bp-sec' + (s.dark ? ' dark' : s.alt ? ' alt' : '')} id={s.id}><div className="wrap">
      {s.eyebrow && <p className="bp-eyebrow">{s.eyebrow}</p>}<h2 className="bp-h2">{s.title}</h2>
      {s.intro && <p className="bp-lead">{s.intro}</p>}
      {s.items && s.items.length > 0 && <ul className="bp-items">{s.items.map((it, i) => (
        <li key={it.title} data-rv style={{ '--i': i % 4 }}>{it.image && <Photo d={d} file={it.image} label={it.title} className="feat" />}<div><b>{it.title}</b>{it.text && <p>{it.text}</p>}</div></li>))}</ul>}
      {s.table && <div className="bp-tbl-wrap"><table className={'bp-tbl' + (s.dark ? ' dk' : '')}><thead><tr>{s.table.heads.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr></thead>
        <tbody>{s.table.rows.map(r => <tr key={r[0]}><th scope="row">{r[0]}</th>{r.slice(1).map((c, i) => <td key={i}>{c}</td>)}</tr>)}</tbody></table></div>}
      {s.note && <p className={'bp-fine' + (s.dark ? ' light' : '')}>{s.note}</p>}
    </div></section>
  )
  const NAVLBL = { highlights: 'Highlights', overview: 'Overview', features: 'Features', colours: 'Colours', variants: 'Variants', compare: 'Compare', specs: 'Specifications', finance: 'Price & Finance', gallery: 'Gallery', videos: 'Videos', accessories: 'Accessories', testride: 'Test Ride', faq: 'FAQ' }
  const NAVID = { testride: 'test-ride' }
  const layout0 = d.layout || DEFAULT_LAYOUT
  const layout = d.banner && !layout0.includes('banner') ? layout0.flatMap(k => k === 'testride' ? ['banner', k] : [k]) : layout0
  const secOf = k => k.startsWith('sec:') ? (d.sections || []).find(s => s.id === k.slice(4)) : null
  const rendered = layout.map(k => [k, secOf(k) ? secBlock(secOf(k)) : B[k] && B[k]()]).filter(([, el]) => el)
  const navItems = rendered.filter(([k]) => NAVLBL[k] || (secOf(k) && secOf(k).nav)).map(([k]) => secOf(k) ? [secOf(k).id, secOf(k).nav] : [NAVID[k] || k, NAVLBL[k]])
  useEffect(() => {
    if (!('IntersectionObserver' in window)) return
    const io = new IntersectionObserver(es => es.forEach(e => e.isIntersecting && setActive(e.target.id)), { rootMargin: '-30% 0px -65% 0px' })
    navItems.forEach(([id]) => { const el = document.getElementById(id); el && io.observe(el) }); return () => io.disconnect()
  }, [d])

  return (
    <div className="bp" onClick={onAnchor}><div className="bp-progress" aria-hidden="true" />
      {rendered.map(([k, el]) => k === 'quick' ? [el, <nav key="nav" className="bp-nav" aria-label="On this page"><div className="wrap">{navItems.map(([id, l]) => <a key={id} href={'#' + id} className={active === id ? 'on' : ''}>{l}</a>)}</div></nav>] : el)}
    </div>
  )
}

const DEFAULT_LAYOUT = ['hero', 'quick', 'overview', 'highlights', 'features', 'colours', 'variants', 'compare', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related']

/* Simple EMI estimator: standard reducing-balance formula. Illustrative only. */
function Emi() {
  const [p, setP] = useState(60000), [r, setR] = useState(12), [n, setN] = useState(24)
  const i = r / 1200, emi = i ? p * i * Math.pow(1 + i, n) / (Math.pow(1 + i, n) - 1) : p / n
  const f = x => Math.round(x).toLocaleString('en-IN')
  return (
    <div className="bp-calc" aria-label="EMI estimator">
      <label>Loan amount <b>₹ {f(p)}</b><input type="range" min="10000" max="150000" step="5000" value={p} onChange={e => setP(+e.target.value)} /></label>
      <label>Interest rate <b>{r}% p.a.</b><input type="range" min="8" max="15" step="0.5" value={r} onChange={e => setR(+e.target.value)} /></label>
      <label>Tenure <b>{n} months</b><input type="range" min="6" max="60" step="6" value={n} onChange={e => setN(+e.target.value)} /></label>
      <div className="out"><span>Estimated EMI</span><b>₹ {f(emi)}<small>/month</small></b></div>
      <small>Estimate only. Actual EMI depends on the financier and your profile.</small>
    </div>
  )
}

/* No backend exists, so the form never says "submitted". On a valid entry it prepares the enquiry and hands it to WhatsApp. */
function TestRideForm({ d, variant, sent, setSent }) {
  const bikes = PETROL.filter(m => m.kind === 'Motorcycle')
  const [f, setF] = useState({ name: '', mobile: '', email: '', bike: d.name, dealer: SITE.name + ', Kankanady' })
  const [err, setErr] = useState({})
  const set = k => e => setF({ ...f, [k]: e.target.value })
  const first = useRef(null)
  const check = () => {
    const e = {}
    if (f.name.trim().length < 2) e.name = 'Enter your full name.'
    if (!/^[6-9]\d{9}$/.test(f.mobile.replace(/[\s-]/g, '').replace(/^(\+?91)/, ''))) e.mobile = 'Enter a valid 10-digit mobile number.'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(f.email.trim())) e.email = 'Enter a valid email address.'
    if (!f.bike) e.bike = 'Choose a motorcycle.'
    return e
  }
  const submit = ev => {
    ev.preventDefault(); const e = check(); setErr(e)
    if (Object.keys(e).length) { setSent(null); const k = Object.keys(e)[0]; document.getElementById('tr-' + k)?.focus(); return }
    setSent(waLink(`Hi West Coast Motors, please book a test ride.\nName: ${f.name.trim()}\nMobile: ${f.mobile.trim()}\nEmail: ${f.email.trim()}\nMotorcycle: ${f.bike}${f.bike === d.name ? ' (' + variant.name + ')' : ''}\nDealership: ${f.dealer}`))
  }
  const F = ({ k, label, type = 'text', auto, children }) => (
    <div className={'fld' + (err[k] ? ' bad' : '')}><label htmlFor={'tr-' + k}>{label}</label>
      {children || <input id={'tr-' + k} type={type} value={f[k]} onChange={set(k)} autoComplete={auto} aria-invalid={!!err[k]} aria-describedby={err[k] ? 'tre-' + k : undefined} />}
      {err[k] && <small id={'tre-' + k} role="alert">{err[k]}</small>}</div>
  )
  return (
    <form className="bp-form" onSubmit={submit} noValidate data-rv>
      <F k="name" label="Full name" auto="name" />
      <F k="mobile" label="Mobile number" type="tel" auto="tel" />
      <F k="email" label="Email address" type="email" auto="email" />
      <F k="bike" label="Preferred motorcycle"><select id="tr-bike" value={f.bike} onChange={set('bike')}>{bikes.map(m => <option key={m.slug}>{m.name}</option>)}</select></F>
      <F k="dealer" label="Preferred dealership"><select id="tr-dealer" value={f.dealer} onChange={set('dealer')}><option>{SITE.name + ', Kankanady'}</option></select></F>
      <button className="bp-btn" type="submit">Request test ride</button>
      {sent && (
        <div className="bp-ok" role="status"><b>Almost done!</b> Your details are ready. Tap below to send them to our team on WhatsApp and we will confirm your slot.
          <a className="bp-btn sm" href={sent} target="_blank" rel="noreferrer">Send on WhatsApp</a>
          <small>This website does not store enquiries. Your request is only sent when you send the WhatsApp message.</small></div>
      )}
    </form>
  )
}
