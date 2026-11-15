import { waLink } from '../data.js'
import { SALES, INSURANCE, SERVICES, ABOUT, STAFF } from './content.js'
import './sections.css'

const Head = ({ eyebrow, title, intro, light }) => (
  <div className={'hs-head' + (light ? ' light' : '')}>
    <p className="hs-eyebrow">{eyebrow}</p>
    <h2 className="display">{Array.isArray(title) ? <>{title[0]} <span>{title[1]}</span></> : title}</h2>
    {intro && <p className="hs-intro">{intro}</p>}
  </div>
)
const initials = n => (n || '').split(/\s+/).filter(Boolean).slice(0, 2).map(w => w[0].toUpperCase()).join('')

/* Sales: contains Insurance only */
export function Sales({ Icon }) {
  return (
    <section className="hs hs-sales" id="sales" aria-labelledby="sales-t"><div className="wrap">
      <Head {...SALES} />
      <span id="sales-t" className="sr">Sales</span>
      <div className="hs-ins" id="insurance">
        <div className="hs-ins-l">
          <span className="hs-ico big"><Icon n="shield" size={30} /></span>
          <p className="hs-eyebrow">{INSURANCE.eyebrow}</p>
          <h3 className="display">{INSURANCE.title}</h3>
          {INSURANCE.intro && <p>{INSURANCE.intro}</p>}
          {INSURANCE.partners.length > 0 && <p className="hs-partners">Insurance partners: {INSURANCE.partners.join(', ')}</p>}
          {INSURANCE.cta && <a className="btn" href={waLink(INSURANCE.wa)} target="_blank" rel="noreferrer">{INSURANCE.cta}</a>}
        </div>
        {INSURANCE.points.length > 0 && <ul className="hs-ins-r">{INSURANCE.points.map(p => <li key={p.title}><b>{p.title}</b><span>{p.text}</span></li>)}</ul>}
      </div>
    </div></section>
  )
}

/* Services: explanation only */
export function Services() {
  return (
    <section className="hs hs-services" id="services" aria-labelledby="svc-t"><div className="wrap">
      <Head {...SERVICES} light />
      <span id="svc-t" className="sr">Our services</span>
      <div className="hs-svc-text">{SERVICES.text.filter(Boolean).map((t, i) => <p key={i}>{t}</p>)}</div>
    </div></section>
  )
}

/* About Us, with Staff inside it */
export function About() {
  return (
    <section className="hs hs-about" id="about" aria-labelledby="about-t"><div className="wrap">
      <div className="hs-about-grid">
        <div>
          <Head {...ABOUT} />
          <span id="about-t" className="sr">About West Coast Motors</span>
          {ABOUT.text.filter(Boolean).map((t, i) => <p key={i} className="hs-body">{t}</p>)}
          {ABOUT.facts.length > 0 && <dl className="hs-facts">{ABOUT.facts.map(([v, l]) => <div key={l}><dt>{v}</dt><dd>{l}</dd></div>)}</dl>}
        </div>
        <div className="hs-photo">{ABOUT.photo ? <img src={`./images/${ABOUT.photo}`} alt="West Coast Motors showroom" loading="lazy" /> : <div role="img" aria-label="Showroom photo to be added"><span>Showroom photo</span><small>Add a file to public/images/ and set it in sections/content.js</small></div>}</div>
      </div>

      <div className="hs-staff" id="staff">
        <h3 className="display">{STAFF.title}</h3><p className="hs-intro">{STAFF.intro}</p>
        <ul>{STAFF.people.map((p, i) => (
          <li key={i}>
            <div className="av">{p.photo ? <img src={`./images/staff/${p.photo}`} alt={p.name} loading="lazy" /> : <span aria-hidden="true">{initials(p.name) || '+'}</span>}</div>
            <b>{p.name || 'Name to be added'}</b><span>{p.role}</span>
            {p.phone && <a href={`tel:${p.phone.replace(/\s/g, '')}`}>{p.phone}</a>}
          </li>))}
        </ul>
      </div>
    </div></section>
  )
}
