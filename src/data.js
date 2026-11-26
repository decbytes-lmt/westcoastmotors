import { CARD } from './bike/cardImages.js'
// EDIT THIS FILE to change contact info, models and prices. Put photos in public/images/ and set `image: 'file.png'`.
export const SITE = {
  name: 'West Coast Motors', tagline: 'Ride Ahead Together',
  address: 'Kankanady, Mangalore – 575002',
  salesPhone: '+91 73555 85111', salesTel: '+917355585111', salesWa: '917355585111',   // VERIFY: design 2 showed 73535 85111
  servicePhone: '+91 91646 88188', serviceTel: '+919164688188',
  email: 'sales@westcoastmotors.in',
  facebook: '#', instagram: '#', youtube: '#',
}
export const waLink = msg => `https://wa.me/${SITE.salesWa}?text=${encodeURIComponent(msg)}`

// ---------------------------------------------------------------------------------------------
// VEHICLES. Specs copied from the official Hero MotoCorp (heromotocorp.com/en-in) and VIDA
// (vidaworld.com) websites. PRICES ARE LEFT EMPTY ON PURPOSE: fill `price: '₹ 1,00,000'` later.
// Put photos in public/images/ and set `image: 'file.png'` (get official images from Hero's dealer portal).
// ---------------------------------------------------------------------------------------------
const H = 'https://www.heromotocorp.com/en-in/'
const cool = t => /liquid/i.test(t) ? 'Liquid cooled' : /air oil/i.test(t) ? 'Air-oil cooled' : /^oil/i.test(t) ? 'Oil cooled' : 'Air cooled'
// motorcycle / scooter: name, category, engine cc, engine type, max torque (or power), rpm, options
const numUnit = s => { const p = s.split(' '); return [p[0], p.slice(1).join(' ')] }
const bike = (kind, name, cat, cc, type, tq, rpm, o = {}) => {
  const specs = [['Engine', cc + ' cc'], [o.power ? 'Max power' : 'Max torque', tq + ' @ ' + rpm + ' rpm'], ['Cooling', cool(type)], ['Engine type', type], ...(o.more || [])]
  const [tn, tu] = numUnit(tq)
  return {
    name, kind, cat, tag: o.tag || '', price: '', image: null, url: o.url || '',
    specs,
    stats: o.stats || [[cc, 'cc', 'Displacement'], [tn, tu.split(' ')[0], (o.power ? 'Max power' : 'Max torque') + ' @ ' + rpm + ' rpm']],
    highlights: o.highlights || [], features: o.features || [], colours: o.colours || [],
    full: o.full || { Engine: Object.fromEntries(specs.filter(s => s[0] !== 'Cooling')) },
    brochure: o.brochure || '', warranty: kind === 'Motorcycle' ? '5 years or 70,000 km (whichever comes first), as stated by Hero MotoCorp for its motorcycles' : '',
  }
}
const mc = (...a) => bike('Motorcycle', ...a)
const sc = (...a) => bike('Scooter', ...a)

export const PETROL_CATS = ['100 cc', '125 cc', 'Premium', 'Scooters']
export const PETROL = [
  // ---- 100 cc ----
  mc('Splendor+ Xtec 2.0', '100 cc', '97.2', 'Air cooled, 4-stroke, Single cylinder, OHC', '8.05 Nm', '6000', { url: H + 'motorcycles/splendor-plus-xtec-2-0.html' }),
  mc('Splendor+', '100 cc', '97.2', 'Air cooled, 4-stroke, Single cylinder, OHC', '8.05 Nm', '6000', { url: H + 'motorcycles/practical/splendor-plus.html' }),
  mc('Splendor+ Xtec', '100 cc', '97.2', 'Air cooled, 4-stroke, Single cylinder, OHC', '8.05 Nm', '6000', { url: H + 'motorcycles/splendor-plus-xtec.html' }),
  mc('Splendor+ Flex', '100 cc', '97.2', 'Air cooled, 4-stroke, Single cylinder, OHC', '8.3 Nm (with E85)', '6000', { tag: 'New', url: H + 'motorcycles/flexible-fuel-e85.html?tab=splendor-plus' }),
  mc('HF Deluxe', '100 cc', '97.2', 'Air cooled, 4-stroke, Single cylinder, OHC', '8.05 Nm', '6000', { url: H + 'motorcycles/practical/hf-deluxe.html' }),
  mc('HF Deluxe Flex', '100 cc', '97.2', 'Air cooled, 4-stroke, Single cylinder, OHC', '8.3 Nm (with E85)', '6000', { tag: 'New', url: H + 'motorcycles/flexible-fuel-e85.html?tab=hf-deluxe' }),
  mc('HF 100', '100 cc', '97.2', 'Air cooled, 4-stroke, Single cylinder, OHC', '8.05 Nm', '6000', { url: H + 'motorcycles/hf-100.html' }),
  mc('Passion+', '100 cc', '97.2', 'Air cooled, 4 stroke', '8.05 Nm', '6000', { tag: 'New variant', url: H + 'motorcycles/passion-plus.html' }),
  // ---- 125 cc ----
  mc('Glamour X ABS', '125 cc', '124.7', 'Air cooled, 4S', '8.5 kW', '8250', {
    tag: 'New', power: true, url: H + 'motorcycles/glamour-x-abs.html',
    brochure: 'https://www.heromotocorp.com/content/dam/hero-commerce/in/en/products/executive/content-fragments/glamour-x/assets/product-overview/Glamour-X-ABS-Brochure-Updated.pdf',
    more: [['Max torque', '10.5 Nm @ 6500 rpm'], ['Mileage', '65 km/l* (with E20 fuel)']],
    stats: [['65', 'km/l*', 'Mileage (E20 fuel)'], ['124.7', 'cc', 'Displacement'], ['8.5', 'kW', 'Max power @ 8250 rpm'], ['10.5', 'Nm', 'Max torque @ 6500 rpm']],
    highlights: ['ABS', '3 ride modes', 'Cruise control', 'Adaptive display, 60+ features', 'Panic brake alert', 'Long & wide seat'],
    features: [
      ['Superior mileage', 'Up to 65 km/l* with E20 fuel, with distance-to-empty and average fuel efficiency on the display.'],
      ['SPRINT-EBT engine', 'Engine balancer technology for a smooth, refined feel at every speed.'],
      ['ABS braking', 'Front disc brake with anti-lock braking helps keep the bike stable when you brake hard.'],
      ['Panic brake alert', 'The winkers flash rapidly in an emergency stop to warn the traffic behind you.'],
      ['3 ride modes', 'Choose Eco, Road or Power to match your mood and the road.'],
      ['Cruise control', 'Holds your chosen speed for relaxed, steady rides.'],
      ['Adaptive display', '10.7 cm multicolour console with Bluetooth connectivity and 60+ features.'],
      ['Kickstart in low battery', 'A smart solenoid valve lets you kick-start even when the battery is low.'],
      ['Smart storage space', 'Compartment that holds two phones and an earbud case.'],
      ['Riding comfort', 'Relaxed riding posture and a long, wide seat for rider and pillion.'],
      ['Aerodynamic visor', 'Shaped to cut wind resistance and add stability.'],
      ['Head-turning style', 'Muscular build with sporty graphics.'],
    ],
    colours: ['Gun Metal Grey', 'Black Pearl Red', 'Black Teal Blue', 'Matt Axis Grey'],
    full: {
      'Engine': { 'Engine type': 'Air cooled, 4S', 'Displacement': '124.7 cc', 'Max power': '8.5 kW @ 8250 rpm', 'Max torque': '10.5 Nm @ 6500 rpm', 'Bore x stroke': '52.4 x 57.8 mm', 'Fuel system': 'FI', 'Starting': 'Kick / Self' },
      'Brakes': { 'Front brake': 'Disc + ABS', 'Rear brake': 'Drum' },
      'Wheels & tyres': { 'Wheel type': 'Alloy', 'Front tyre': "80/100-18'' TL", 'Rear tyre': "100/80-18'' TL" },
      'Suspension': { 'Front': 'Telescopic (dia. 30)', 'Rear': '5-step adjustable hydraulic shock absorbers, 73.5 mm' },
      'Chassis': { 'Clutch': 'Wet type, multi plate', 'Transmission': 'Manual', 'Frame': 'Diamond', 'Swing arm': 'Tubular' },
      'Dimensions': { 'Overall length': '2045 mm', 'Overall width': '796 mm', 'Overall height': '1126 mm', 'Seat height': '790 mm', 'Wheelbase': '1267 mm', 'Ground clearance': '170 mm', 'Trail': '88 mm', 'Fuel tank': '10 L', 'Kerb weight': '128.5 kg' },
      'Electricals': { 'Battery': '4 Ah / 12 V', 'Headlamp': 'LED, 12 V', 'Tail lamp': 'LED, 12 V', 'Position lamp': '21/5 W, 12 V', 'Turn signal': 'LED winkers, 12 V' },
    },
  }),
  mc('Glamour X', '125 cc', '125', 'Air cooled, 4-Stroke', '10.5 Nm', '6500', { url: H + 'motorcycles/glamour-x.html' }),
  mc('Xtreme 125R', '125 cc', '125', 'Air cooled, 4-Stroke', '10.5 Nm', '6500', { more: [['Acceleration 0–60 km/h', '5.7 sec']], url: H + 'motorcycles/xtreme-125r.html' }),
  mc('Glamour', '125 cc', '125', 'Air cooled, 4-stroke, Single cylinder, OHC', '10.6 Nm', '6000', { url: H + 'motorcycles/glamour.html' }),
  mc('Super Splendor Xtec', '125 cc', '124.7', 'Air Cooled, 4-Stroke, OHC, Single Cylinder', '10.6 Nm', '6000', { url: H + 'motorcycles/super-splendor-xtec.html' }),
  mc('Super Splendor Xtec 2.0', '125 cc', '124.7', '2V, Air cooled, 4 stroke single cylinder', '10.6 Nm', '6000', { tag: 'New', url: H + 'motorcycles/super-splendor-xtec-2-0.html' }),
  // ---- Premium ----
  mc('Xtreme 160R 4V', 'Premium', '163.2', 'Air oil cooled, 4-stroke, Single cylinder, OHC', '14.6 Nm', '6500', { tag: 'New', url: H + 'motorcycles/xtreme-160r-4v.html' }),
  mc('Xtreme 160R', 'Premium', '163.2', 'Air Cooled 4 stroke', '14 Nm', '6500', { url: H + 'motorcycles/xtreme-160r.html' }),
  mc('Xtreme 250R', 'Premium', '250', '4 Stroke, 4 Valve, Single Cylinder Liquid Cooled, DOHC', '25 Nm', '7250', { tag: 'New', url: H + 'motorcycles/Xtreme-250r.html' }),
  mc('Xpulse 200 4V', 'Premium', '199.6', 'Oil Cooled, 4 stroke 4 Valve single cylinder OHC', '17.35 Nm', '6500', { url: H + 'motorcycles/xpulse-200-4v.html' }),
  mc('Xpulse 210', 'Premium', '210', '4 Stroke 4 Valve Single Cylinder Liquid Cooled DOHC', '20.7 Nm', '7250', { url: H + 'motorcycles/xpulse-210.html' }),
  mc('Karizma XMR', 'Premium', '210', 'Liquid cooled, 4-stroke, Single cylinder, OHC', '20.4 Nm', '4000', { url: H + 'motorcycles/karizma-xmr.html' }),
  mc('Harley-Davidson X440', 'Premium', '440', 'Air cooled, 4-stroke, Single cylinder, OHC', '38 Nm', '4000', { url: 'https://www.harley-davidsonx440.com/' }),
  mc('Harley-Davidson X440 T', 'Premium', '440', 'Air cooled, 4-stroke, Single cylinder, OHC', '38 Nm', '4000', { tag: 'New', url: 'https://www.harley-davidsonx440.com/' }),
  // ---- Scooters ----
  sc('Destini 110', 'Scooters', '110', 'Air Cooled, 4 stroke engine', '8.7 Nm', '5750', { tag: 'New', url: H + 'scooters/destini-110.html' }),
  sc('New Destini 125', 'Scooters', '125', 'Air cooled, 4 stroke, SI engine', '10.4 Nm', '5500', { url: H + 'scooters/new-destini-125.html' }),
  sc('Destini Prime', 'Scooters', '124.6', 'Air Cooled, 4-Stroke, SI Engine', '10.36 Nm', '5500', { url: H + 'scooters/destini-prime.html' }),
  sc('Xoom 125', 'Scooters', '124.6', 'Air Cooled, 4 stroke, SI', '10.4 Nm', '6000', { tag: 'New', url: H + 'scooters/xoom-125.html' }),
  sc('Xoom 160', 'Scooters', '156', 'Liquid cooled, 4 Valve single cylinder SOHC', '14 Nm', '6250', { tag: 'New', url: H + 'scooters/xoom-160.html' }),
  sc('Xoom 110', 'Scooters', '110.9', 'Air cooled, 4-stroke, SI engine', '8.70 Nm', '5750', { url: H + 'scooters/xoom.html' }),
  sc('Pleasure+ Xtec', 'Scooters', '110.9', 'Air cooled, 4-stroke Single Cylinder OHC', '8.70 Nm', '5500', { url: H + 'scooters/pleasure-plus-xtec.html' }),
]

// ---- VIDA electric scooters (vidaworld.com). VX2 figures: "certified range". ----
const VX2_MORE = [['Battery type', 'Removable batteries'], ['Reverse', 'Park mode (reverse up to 3 km/h)'], ['Braking', 'Regenerative braking'], ['Riding cost', '₹0.17/km (claimed by VIDA)']]
const ev = (name, cat, o) => {
  const specs = [[o.rangeLabel || 'Certified range', o.range + ' km*'], ['Top speed', o.top + ' km/h'], ['Battery', o.batt], ['0–40 km/h', o.acc + ' sec'], ...(o.motor ? [['Motor', o.motor]] : []), ...(o.incline ? [['Incline capacity', o.incline + ' degree']] : []), ['Ride modes', o.modes], ...(o.more || [])]
  const [bn, bu] = numUnit(o.batt)
  const grp = (labels) => Object.fromEntries(specs.filter(s => labels.includes(s[0])))
  const perf = [o.rangeLabel || 'Certified range', 'Top speed', '0–40 km/h', 'Motor', 'Incline capacity', 'Ride modes']
  const batt = ['Battery', 'Battery type', 'Riding cost']
  const full = { 'Performance': grp(perf), 'Battery & charging': grp(batt), ...(o.extra || {}) }
  const rest = specs.filter(s => ![...perf, ...batt].includes(s[0]))
  if (rest.length) full['Safety & convenience'] = Object.fromEntries(rest)
  return {
    name, kind: 'Electric scooter', cat, tag: o.tag || '', price: o.price || '', image: o.image || null, url: o.url || 'https://www.vidaworld.com/',
    specs, colours: o.colours || [], cmp: o.cmp || null,
    stats: [[o.range, 'km*', o.rangeLabel || 'Certified range'], [o.top, 'km/h', 'Top speed'], [o.acc, 'sec', '0–40 km/h'], [bn, bu.split(' ')[0], 'Battery']],
    highlights: o.highlights || [], features: o.features || [], full, brochure: o.brochure || '', warranty: o.warranty || '',
    intro: o.intro || '', gallery: o.gallery || null, details: o.details || null, colourImg: o.colourImg || '', colourPics: o.colourPics || null,
  }
}
const VX2_FEAT = [
  ['Removable batteries', 'Take the batteries out and charge them anywhere, anytime.'],
  ['Low running cost', 'VIDA claims a riding cost of just ₹0.17 per km.'],
  ['Fast-charging network', 'Public fast chargers across India (5,900+ stations, as published by VIDA).'],
  ['Park mode (reverse)', 'Reverse with ease. Reverse speed is limited to 3 km/h for control.'],
  ['Regenerative braking', 'Turns braking energy back into battery power; you can also trigger it with the two-way throttle.'],
  ['Switch modes on the move', 'Press the Mode button on the handlebar to change ride mode while riding.'],
]
const VX2_HL = ['Removable batteries', 'Park mode reverse', 'Regenerative braking', '₹0.17/km riding cost']
const VX2 = 'https://www.vidaworld.com/vx2-electric-scooter.html'
const VX2_BROCHURE = './brochures/vida-vx2-brochure.pdf'
const GO = ['Matte Giallo Lime', 'Nexus Blue', 'Matt Inspired White', 'Pearl Red', 'Pearl Black', 'Metallic Matt Gun Metal Grey']
const PLUS = [...GO.slice(0, 5), 'Autumn Orange', 'Metallic Matt Gun Metal Grey']
const M_GO = 'Eco (0–45 km/h), Ride (0–70 km/h)'

// ---- Data from VIDA key-specification sheet + West Coast Motors price list (effective 01.10.2026) ----
const vx = (real, wt, us, brk, disp, chg) => ({
  'Real-world & dimensions': { 'Real-world range (Eco)**': real + ' km', 'Weight': wt + ' kg', 'Seat height / length': '777 / 851 mm', 'Under-seat storage': us + ' L', 'Front storage': '4.8 L' },
  'Brakes, wheels & tech': { 'Brakes': brk + ' (CBS)', 'Wheels / tyres': 'Alloy, 12/12', 'Display': disp, 'Connectivity': 'Yes, VIDA Edge', 'Navigation': 'Turn-by-turn (TBT)', 'Lighting': 'All LED', 'Phone charging': 'Yes', 'OTA updates': 'All control units excluding HMI', 'Battery IP rating': 'IP67' },
  'Motor': { 'Type': 'PMSM', 'Peak power': '6 kW' },
  'Charging**': chg,
})
const CHG_P44 = { 'AC 0–100%': '5 h 8 min (1 kW Zap charger)', 'AC 0–80%': '3 h 17 min (1 kW Zap charger)', 'AC 20–80%': '2 h 28 min (1 kW Zap charger)', 'Charger rating': '1000 W (Zap charger)', 'Fast charger 0–80%': '65 min', 'Fast charger 0–100%': '150 min' }
const CHG_P34 = { 'AC 0–100%': '6 h 36 min', 'AC 0–80%': '4 h 44 min', 'AC 20–80%': '3 h 33 min', 'Charger rating': '580 W', 'Fast charger 0–80%': '62 min', 'Fast charger 0–100%': '140 min' }
const VX2_FIX = [['Battery type', 'Fixed battery'], ['Reverse', 'Park mode (reverse up to 3 km/h)'], ['Braking', 'Regenerative braking'], ['Riding cost', '₹0.17/km (claimed by VIDA)']]
const inDir = (dir, o) => Object.fromEntries(Object.entries(o).map(([k, v]) => [k, dir + '/' + v]))
const GO_WARR = 'Battery up to 5 years* (T&C apply, as published by VIDA)'
export const EV_CATS = ['VX2 Go', 'VX2 Plus']
export const EV = [
  ev('VIDA VX2 Go 3.1 kWh', 'VX2 Go', { price: '₹ 1,15,990', image: 'ev-common/vx2-go-black.jpg', range: '127', top: '70', batt: '3.1 kWh (fixed)', acc: '4.5', modes: M_GO, more: VX2_FIX, colours: GO, url: VX2, features: VX2_FEAT, highlights: VX2_HL, incline: 15, warranty: GO_WARR, cmp: { title: 'VX2 GO 3.1 kWh', delhi: '₹83,000', incline: '15 degree', idc: '127 km*', top: '70 km/h', batt: '3.1 kWh', acc: '4.5 secs' }, extra: { 'Brakes, wheels & tech': { 'Brakes': 'Disc/Drum', 'Display': '4.3" LCD' }, 'Charging**': { 'Charger rating': '580 W', 'AC 20–80%': '3 h 16 min', 'Fast charger 0–80%': '65 min' } } }),
  ev('VIDA VX2 Go 3.4 kWh', 'VX2 Go', { price: '₹ 1,25,990', image: 'ev-common/vx2-blue.jpg', extra: vx(110, 115, '27.2', 'Drum/Drum', '4.3" LCD', CHG_P34), incline: 15, range: '146', top: '70', batt: '3.4 kWh', acc: '4.2', modes: M_GO, more: VX2_MORE, colours: ['Metallic Matt Gun Metal Grey', ...GO.slice(1, 5)], url: VX2, brochure: VX2_BROCHURE, features: VX2_FEAT, highlights: VX2_HL, warranty: GO_WARR, cmp: { title: 'VX2 GO 3.4 kWh', delhi: '₹95,000', incline: '15 degree', idc: '146 km*', top: '70 km/h', batt: '3.4 kWh', acc: '4.2 secs' } }),
  ev('VIDA VX2 Plus 3.4 kWh', 'VX2 Plus', { price: '₹ 1,35,990', image: 'ev-common/vx2-grey.jpg', extra: vx(110, 115, '27.2', 'Disc/Drum', '4.3" TFT', CHG_P34), range: '146', top: '80', batt: '3.4 kWh', acc: '3.1', modes: 'Eco (0–45), Ride (0–70), Sports (0–80 km/h)', more: VX2_MORE, colours: PLUS, url: VX2, brochure: VX2_BROCHURE, features: [...VX2_FEAT, ['Colour TFT display', 'The TFT screen changes colour with each ride mode (Plus variants).'], ['Sports mode', 'Extra ride mode for high-speed fun on longer routes (Plus variants only).']], highlights: ['Sports mode', ...VX2_HL], incline: 18, cmp: { title: 'VX2 PLUS', delhi: '₹1,03,500', incline: '18 degree', idc: '146 km*', top: '80 km/h', batt: '3.4 kWh', acc: '3.1 secs' } }),
  ev('VIDA VX2 Plus 4.4 kWh', 'VX2 Plus', { price: '₹ 1,55,990', image: 'ev-common/vx2-red.jpg', tag: 'Top pick', extra: vx(140, 120, '27.2', 'Disc/Drum', '4.3" TFT', CHG_P44), incline: 18, range: '187', top: '90', batt: '4.4 kWh', acc: '3.1', modes: 'Eco (0–45), Ride (0–70), Sports (0–90 km/h)', more: VX2_MORE, colours: PLUS, url: VX2, brochure: VX2_BROCHURE, features: [...VX2_FEAT, ['Colour TFT display', 'The TFT screen changes colour with each ride mode (Plus variants).'], ['Sports mode', 'Extra ride mode for high-speed fun on longer routes (Plus variants only).']], highlights: ['Sports mode', ...VX2_HL] }),
]

// From vidaworld.com/compare.html (seen 09-11-2026). Delhi effective prices are VIDA's, NOT West Coast Motors prices.
export const VIDA_COMPARE = {
  title: 'Find The Right VIDA For You',
  priceLabel: 'Effective price – Delhi',
  rows: [['delhi', 'Effective price – Delhi'], ['incline', 'Incline capacity'], ['idc', 'IDC range'], ['top', 'Top speed'], ['batt', 'Battery capacity'], ['acc', 'Acceleration']],
  picks: ['VIDA VX2 Plus 3.4 kWh', 'VIDA VX2 Go 3.4 kWh', 'VIDA VX2 Go 3.1 kWh'],
  note: '*IDC range as published by VIDA. Effective prices are Delhi prices shown on vidaworld.com and differ from our showroom price. Ask us for the latest on-road price in Mangalore.',
}
export const VIDA_BUY = {
  eyebrow: 'Choose how you want to own your VIDA', title: ['Many Ways To Buy –', 'Find Yours.'],
  dealer: { t: 'Find Your Nearest Dealer', s: '700+ dealerships across India are ready to help you experience what a VIDA Electric Scooter can do.', cta: 'Locate Now' },
  zero: { t: 'Zero Down Payment', s: 'Finance partner: L&T Finance, Two-Wheeler Finance.', cta: 'Know More' },
  online: { t: 'Grab these offers now! Exclusive on Flipkart & Amazon', s: "You won't get this chance again – avail zero* processing fee on your loan.", fine: '* on select banks only', cta: 'Know More' },
  save: { t: 'Switch to Electric & Save on Fuel Costs. Calculate Savings.', emoji: '💰😎' },
  url: 'https://www.vidaworld.com/',
}

// From vidaworld.com/vx2-plus-electric-scooter.html (seen 09-11-2026). Marketing copy reworded; numbers as published.
// Delhi prices are VIDA's, NOT West Coast Motors prices.
export const VX2_PLUS = {
  id: 'vx2-plus', model: 'VX2 Plus', lifeTitle: 'Life with the VX2 Plus', colourTitle: ['Choose Your', 'VX2 Plus'],
  specsUrl: 'https://www.vidaworld.com/vx2-plus-electric-scooter.html',
  compareHead: ['4.4 kWh vs', '3.4 kWh'], compareCols: ['VX2 Plus 4.4', 'VX2 Plus 3.4'],
  colourRows: [['Matte Giallo Lime', 'Nexus Blue', 'Matt Inspired White', 'Pearl Red', 'Pearl Black', 'Autumn Orange', 'Metallic Matt Gun Metal Grey'], ['Matte Giallo Lime', 'Nexus Blue', 'Matt Inspired White', 'Pearl Red', 'Pearl Black', 'Autumn Orange', 'Metallic Matt Gun Metal Grey']],
  eyebrow: 'VIDA VX2 Plus', head: ['Ride more.', 'Choose more.'], sub: 'Available in 2 variants to match your everyday journey.',
  variants: [
    { name: 'Plus 4.4 kWh', tag: 'New', delhi: '₹1,25,990', stats: [['IDC range', '187 km'], ['Top speed', '90 kmph'], ['Battery capacity', '4.4 kWh'], ['Charger rating', '1000 W'], ['Fast charging time', '65 min'], ['AC charging (20–80%)', '2 hrs 28 min'], ['Acceleration 0–40', '3.1 s'], ['Battery type', 'Removable']] },
    { name: 'Plus 3.4 kWh', tag: '', delhi: '₹1,03,500', stats: [['IDC range', '146 km'], ['Top speed', '80 kmph'], ['Battery capacity', '3.4 kWh'], ['Charger rating', '580 W'], ['Fast charging time', '62 min'], ['AC charging (20–80%)', '3 hrs 33 min'], ['Acceleration 0–40', '3.1 s'], ['Battery type', 'Removable']] },
  ],
  priceNote: 'Price shown is the effective price in Delhi from vidaworld.com. Ask us for the Mangalore price.',
  tags: ['XXXLong seat', 'Frunk', 'Light up', 'Load up', 'Ride comfy', 'Removable batteries'],
  life: [
    ['Storage', 'Room for work, errands and weekend plans, with thoughtful space for everything you carry.'],
    ['Under-seat storage', 'Roomy under-seat space for everyday essentials.'],
    ['Frunk', 'Front cubby for keys, cables, charger or a quick snack, easy to reach.'],
    ['Space to stretch', 'Riding solo or with company, the long and wide 851 mm seat gives you the comfort to keep going.'],
    ['Moves like a breeze', '0 to 40 km/h in 3.1 seconds.'],
    ['No turbulence. Just balance.', 'Steady, stable ride in city traffic.'],
    ['Brakes', 'Smooth, steady stops. Tuned for city rides and confident turns.'],
    ['Reverse parking', 'Gentle reverse assist that takes stress out of tight parking.'],
    ['Signature lights. Solid design.', 'VX2 Plus light signature and solid build.'],
  ],
  charging: [
    { big: '5900+', t: 'Fast Charging Points', s: 'Quick top-ups on the go. Plug your VX2 into the fast-charging network and charge in minutes.', cta: 'Explore Fast Charging' },
    { big: '700+', t: 'Service Stations', s: 'Backed by Hero and a growing network of trained VIDA service teams. Quick service check or roadside emergency, help is nearby.', cta: 'Explore Service Stations' },
  ],
  homeCharge: [['Home charging', 'Plug into a standard socket at home and wake up to a full battery.'], ['Community charging', 'Shared chargers in society basements and common zones. Park, plug, power up.']],
  powered: 'Powered by Hero, supported across India',
  app: { t: 'Always in sync', s: 'My VIDA app: track rides, view detailed stats, locate your scooter or lock it remotely from your phone.', cta: 'Explore Connectivity', cards: ['Vehicle stats', 'Ping my scooter', 'Remote immobilisation', 'Live tracking', 'Geo-fencing', 'Trip analytics', 'CO₂ score'],
    stats: [['Vehicle stats', 'See distance ridden, odometer and total trips at a glance. Sample app screen: 125 km in 31 days, 52,000 km odometer, 72 trips.'], ['Ping my scooter', 'Tap to ping your scooter and find it in a crowded parking lot.'], ['Remote immobilisation', 'Lock your scooter remotely from your phone.'], ['Live tracking', 'Follow your scooter on the map in real time.'], ['Geo-fencing', 'Set a virtual boundary and get alerted if the scooter leaves it.'], ['Trip analytics', 'Review each ride with detailed trip stats.'], ['CO₂ score', 'See your CO₂ saving and money saved (sample app screen shows ₹1,200).']] },
  compare: [
    ['IDC range', '187 km', '146 km'], ['Top speed', '90 kmph', '80 kmph'], ['Charger rating', '1000 W', '580 W'], ['Battery type', 'Removable', 'Removable'],
    ['Fast charger time (0–80%)', '65 min', '62 min'], ['AC charging time (20–80%)', '2 hrs 28 min', '3 hrs 33 min'], ['Acceleration 0–40 km/h', '3.1 seconds', '3.1 seconds'],
    ['Display', '4.3\" TFT', '4.3\" TFT'], ['Incline capacity', '18.0', '18.0'], ['Battery capacity', '4.4 kWh', '3.4 kWh'],
    ['Ride modes', 'Eco / Ride / Sport', 'Eco / Ride / Sport'], ['Brakes', 'Disc + Drum', 'Disc + Drum'], ['Battery warranty', 'Up to 5 years*', 'Up to 5 years*'],
    ['Price – Delhi', '₹1,25,990', '₹1,03,500'],
  ],
  compareNote: '*Battery warranty terms as published by VIDA. Confirm at the showroom. T&C applied.',
  accessories: [['Backrest', 'Upgrade your VIDA VX2 with the premium backrest. Maximum comfort and support, so every ride is enjoyable.'], ['Frunk', 'New front storage solution. Extra space for snacks, tools or personal belongings.'], ['Helmet', 'Smart helmet with essential protection and an integrated VOX Wireless Helmet Headset System, so you can talk hands-free on the go.']],
  // Colour picker ("Choose Your VX2 Plus"). Order as on vidaworld.com swatches. VERIFY names except Nexus Blue. Add photos to public/images/ and set image.
  colourPick: [
    { name: 'Nexus Blue', image: 'vx2-plus/vx2-plus-blue.svg' },
    { name: 'Metallic Matt Gun Metal Grey', image: 'vx2-plus/vx2-plus-gray.svg' },
    { name: 'Matt Inspired White', image: 'vx2-plus/vx2-plus-white.svg' },
    { name: 'Autumn Orange', image: 'vx2-plus/vx2-plus-orange.svg' },
    { name: 'Matte Giallo Lime', image: 'vx2-plus/vx2-plus-yellow.svg' },
    { name: 'Pearl Black', image: 'vx2-plus/vx2-plus-black.svg' },
    { name: 'Pearl Red', image: 'vx2-plus/vx2-plus-red.svg' },
  ],
  specsNote: 'Full specifications are available to download on vidaworld.com.',
  savings: { t: 'Turn your daily rides into real savings', s: 'The more you ride, the more you save on your VIDA VX2. What is your daily usage?', petrolPerL: 100, petrolKmpl: 40, unitCost: 10, evKmPerUnit: 35, def: 15, max: 100 },
}

// From vidaworld.com/vx2-go-electric-scooter.html (seen 09-11-2026). Delhi prices are VIDA's, NOT West Coast Motors prices.
// Go tabs kept: 3.4 and 3.1 (2.2 and 2.2 RQ removed: not in showroom). Hero heading/sub below are our own wording. VERIFY.
const GCOL = ['Matt Inspired White', 'Pearl Black', 'Pearl Red', 'Nexus Blue', 'Metallic Matt Gun Metal Grey']
const GCOL2 = ['Matt Inspired White', 'Matte Giallo Lime', 'Pearl Red', 'Nexus Blue', 'Pearl Black', 'Metallic Matt Gun Metal Grey']
const goStats = (idc, top, batt, chg, fast, ac, acc, type) => [['IDC range', idc], ['Top speed', top], ['Battery capacity', batt], ['Charger rating', chg], ['Fast charging time', fast], ['AC charging (20–80%)', ac], ['Acceleration 0–40', acc], ['Battery type', type]]
export const VX2_GO = {
  ...VX2_PLUS,
  id: 'vx2-go', model: 'VX2 Go', lifeTitle: 'Life with the VX2 Go', colourTitle: ['Choose Your', 'VX2 Go 3.4'], colourByVariant: true,
  specsUrl: 'https://www.vidaworld.com/vx2-go-electric-scooter.html',
  eyebrow: 'VIDA VX2 Go', head: ['Meet the', 'VX2 Go.'], sub: 'Pick the Go variant that suits your everyday journey.',
  variants: [
    { name: 'Go 3.4', tag: '', delhi: '₹95,000', stats: goStats('146 km', '70 kmph', '3.4 kWh', '580 W', '62 min', '3 hrs 33 min', '4.2 s', 'Removable') },
    { name: 'Go 3.1', tag: 'New', delhi: '₹83,000', stats: goStats('127 km', '70 kmph', '3.1 kWh', '580 W', '65 min', '3 hrs 16 min', '4.5 s', 'Fixed') },
  ],
  life: [
    ['Storage', 'Whether it is work, errands or a weekend plan, VX2 makes space for it all. Thoughtful storage for everything you carry, and then some.'],
    ['Under-seat storage', 'Spacious under-seat storage gives you room for your everyday essentials, so you are ready for whatever the day brings.'],
    ['Frunk', 'Keys, cables, charger or a quick snack. The front cubby keeps them close and easy to find.'],
    ['Space to stretch', 'Riding solo or with company, the long and wide 851 mm seat gives you the comfort to keep going.'],
    ['Moves like a breeze', '0 to 40 km/h in 4.2 seconds (0 to 40 km/h, as shown on the VIDA page for Go 3.4).'],
    ['Brakes', 'Brakes that stop smooth and stay steady. Tuned for city rides and confident turns.'],
    ['Reverse parking', 'A gentle assist when you need it most. Reverse parking takes the stress out of city riding.'],
    ['Signature lights. Solid design.', 'Signature light look on a solid, sturdy build.'],
  ],
  colourPick: [
    { name: 'Nexus Blue', image: 'vx2-go-3-4/blue-go-desktop.svg' },
    { name: 'Metallic Matt Gun Metal Grey', image: 'vx2-go-3-4/grey-go-desktop.svg' },
    { name: 'Matt Inspired White', image: 'vx2-go-3-4/white-go-desktop.svg' },
    { name: 'Pearl Black', image: 'vx2-go-3-4/black-go-desktop.svg' },
    { name: 'Pearl Red', image: 'vx2-go-3-4/red-go-desktop.svg' },
  ],
  compareHead: ['Go 3.4', 'vs 3.1'], compareCols: ['Go 3.4 kWh', 'Go 3.1 kWh'],
  colourRows: [GCOL, GCOL2],
  compare: [
    ['IDC range', '146 km', '127 km'], ['Top speed', '70 kmph', '70 kmph'], ['Charger rating', '580 W', '580 W'], ['Battery type', 'Removable', 'Fixed'],
    ['Fast charger time (0–80%)', '62 min', '65 min'], ['AC charging time (20–80%)', '3 hrs 33 min', '3 hrs 16 min'], ['Acceleration 0–40 km/h', '4.2 seconds', '4.5 seconds'],
    ['Display', '4.3\\" LCD', '4.3\\" LCD'], ['Incline capacity', '15.0', '15.0'], ['Battery capacity', '3.4 kWh', '3.1 kWh'],
    ['Ride modes', 'Eco / Ride', 'Eco / Ride'], ['Brakes', 'Drum + Drum', 'Disc + Drum'], ['Battery warranty', 'Up to 5 years*', 'Up to 5 years*'],
    ['Price – Delhi', '₹95,000', '₹83,000'],
  ],
}

export const VX2_INFO = {
  priceNote: 'Effective ex-showroom prices from the West Coast Motors price list, effective 01.10.2026 (ex-showroom less ₹5,000 FAME II subsidy). Go 3.1 kWh is the fixed-battery variant. Prices may change; confirm at the showroom.',
  awards: [['Record for the longest EV ride (12,000 km+)', 'Asia Book of Records'], ['Ranks highest in scooter EV segment', 'J.D. Power Initial Quality Study 2026'], ['Electric Two Wheeler of the Year', 'Jagran HiTech Awards'], ['EV Scooter of the Year', 'Acko Drive Awards 2026'], ['Two Wheeler EV Brand of the Year', 'CarBike360 Auto Excellence Award 2026'], ['Star EV Scooter of the Year', 'EV India Awards'], ['Global Most Trusted Brand 2026', 'Consumer & industry research by The Brand Story']],
  baas: { copy: 'Say goodbye to high upfront costs. With VIDA BaaS you get your scooter at the lowest price and pay only for the battery as you ride. Flexible, affordable and designed around your lifestyle.', from: '₹ 84,990*', with: '₹ 44,990*', perKm: '₹ 1.24', note: '*Limited-period offer. T&C apply. BaaS offer is subject to the terms & conditions of respective financiers. Image shown may differ from the variant mentioned.' },
  proof: [['5,900+', 'Fast charging stations'], ['770+', 'Outlets for sales & service'], ['187 km', 'IDC range (Plus 4.4)'], ['6 kW', 'Swing-arm motor']],
  gallery: [['ev-common/vx2b-mountain.jpg', 'Plus 4.4', 'Max range. Max speed.'], ['ev-common/vx2b-commute.jpg', 'Plus 3.4', 'More speed. More thrill.'], ['ev-common/vx2b-go-black.jpg', 'Go 3.4', 'Extra range. Extra saving.'], ['ev-common/vx2b-red-battery.jpg', 'Removable battery', 'Charging simple hai.'], ['ev-common/vx2b-duo-full.jpg', 'Colours', 'Pick the VX2 that suits you.']],
}

export const SLIDES = [
  { eyebrow: 'Hero', title: 'Xtreme', sub: '250R', tag: ['Built to ', 'Thrill'], cta: 'Explore Petrol', href: '#/petrol', note: 'Hero banner image: Xtreme 250R on mountain road', image: null,
    // Local video: file in public/videos/, poster in public/images/. (A YouTube link in `video` also works and wins if set.)
    video: '', videoFile: 'xtreme-250r-carbon.mp4', poster: 'xtreme-250r-carbon-poster.jpg', videoTitle: 'The New Xtreme 250R Carbon' },
  { eyebrow: 'Hero', title: 'Xoom', sub: '160', tag: ['Ride Beyond ', 'Limits'], cta: 'Explore Petrol', href: '#/petrol', note: 'Hero banner image: Xoom 160', image: null,
    // Wording above is a placeholder: edit title/tag to taste.
    video: '', videoFile: 'xoom-160-ladakh.mp4', poster: 'xoom-160-ladakh-poster.jpg', videoTitle: 'From Ladakh’s Toughest Trails to India Book of Records | Hero Xoom 160' },
  { eyebrow: 'Hero', title: 'Xtreme', sub: '160R 4V', tag: ['Ride By ', 'Wire'], cta: 'Explore Petrol', href: '#/petrol', note: 'Hero banner image: Xtreme 160R 4V', image: null,
    video: '', videoFile: 'xtreme-160r-4v.mp4', poster: 'xtreme-160r-4v-poster.jpg', videoTitle: 'Ride By Wire | The All-New Xtreme 160R 4V' },
  { eyebrow: 'Hero', title: 'Xpulse', sub: '210', tag: ['More Attitude. ', 'More Latitude.'], cta: 'Explore Petrol', href: '#/petrol', note: 'Hero banner image: Xpulse 210', image: null,
    video: '', videoFile: 'xpulse-210.mp4', poster: 'xpulse-210-poster.jpg', videoTitle: 'Xpulse 210 | More Attitude. More Latitude.' },
  { eyebrow: 'Hero VIDA', title: 'VIDA', sub: 'VX2', tag: ['Everything You ', 'Need to Know'], cta: 'Explore EV', href: '#/ev', note: 'Hero banner image: VIDA VX2', image: null,
    video: '', videoFile: 'vida-vx2.mp4', poster: 'vida-vx2-poster.jpg', videoTitle: 'VIDA VX2 | Everything You Need to Know' },
]

// "Find Your Ride" selector panels. Put photos in public/images/ and set image: 'file.png'.
export const RIDE = {
  petrol: { label: 'Petrol Two-Wheelers', head: ['Power. Performance.', 'Adventure.'], cta: 'Explore Petrol Bikes', image: null, note: 'Image: red Hero bike (transparent PNG)' },
  ev: { label: 'EV Two-Wheelers', head: ['Ride Electric.', 'Live Better.'], cta: 'Explore EV Range', image: 'vx2-red.jpg', note: 'Image: VIDA electric scooter (transparent PNG)' },
}

// Dedicated Petrol / EV pages. Put photos in public/images/ and set image: 'file.png'.
export const PAGE = {
  petrol: {
    chip: 'Petrol', title: 'Petrol Two-Wheelers', lines: ['Power. Performance.', 'Adventure.'],
    sub: 'Bikes and scooters for every road and every rider.',
    note: 'Hero banner image: petrol bike (transparent PNG)', image: null, videos: [['xtreme-250r-carbon.mp4', 'xtreme-250r-carbon-poster.jpg', 'Xtreme 250R Carbon'], ['xoom-160-ladakh.mp4', 'xoom-160-ladakh-poster.jpg', 'Xoom 160 Ladakh'], ['xtreme-160r-4v.mp4', 'xtreme-160r-4v-poster.jpg', 'Xtreme 160R 4V'], ['xpulse-210.mp4', 'xpulse-210-poster.jpg', 'Xpulse 210']],
    perks: [['calendar', 'Test ride', 'Book a ride at our showroom'], ['card', 'Finance & insurance', 'Ask us about easy financing and insurance'], ['box', 'Genuine spare parts', 'Original Hero parts for your bike']],
  },
  ev: {
    chip: 'Electric', title: 'EV Two-Wheelers', lines: ['Ride Electric.', 'Live Better.'],
    sub: 'Hero VIDA electric scooters. Smarter. Greener. Together.',
    note: 'Hero banner image: VIDA electric scooter (transparent PNG)', image: null,
    videos: [['vida-vx2.mp4', 'vida-vx2-poster.jpg', 'VIDA VX2 | Everything You Need to Know']],
    perks: [['zap', 'Charging', 'Ask our team about charging options'], ['shield', 'Battery', 'Get your battery questions answered'], ['tool', 'EV service', 'Dedicated EV service support']],
  },
}

// Listed on vidaworld.com Products menu (seen 09-11-2026) but specs NOT captured yet. Placeholder cards: send the VIDA page to fill specs, price, colours, photos.
const stub = (name, cat, kind, url, tag = '') => ({
  name, kind, cat, tag, price: '', image: null, url,
  specs: [['Details', 'Ask our team for specifications']], stats: [], highlights: [], features: [], colours: [], cmp: null,
  full: { 'Overview': { 'Details': 'Specifications coming soon. Ask our team at the showroom.' } }, brochure: '', warranty: '',
})
// ---- VX2 data from VIDA VX2 all-variants brochure (public/brochures/vida-vx2-brochure.pdf, seen 09-11-2026) ----
// Brochure covers Plus 4.4, Plus 3.4 and Go 3.4. It does NOT list Go 3.1.
const VX2_GAL = {
  'VIDA VX2 Plus 4.4 kWh': ['ev-common/vx2b-mountain.jpg', 'Plus 4.4', 'Max range. Max speed.'],
  'VIDA VX2 Plus 3.4 kWh': ['ev-common/vx2b-commute.jpg', 'Plus 3.4', 'More speed. More thrill.'],
  'VIDA VX2 Go 3.4 kWh': ['ev-common/vx2b-go-black.jpg', 'Go 3.4', 'Extra range. Extra saving.'],
}
EV.filter(m => /VX2/.test(m.name)).forEach(m => {
  const fixed = /fixed/i.test(m.specs.find(x => x[0] === 'Battery')?.[1] || '')
  if (!m.specs.some(x => x[0] === 'Motor')) m.specs.splice(3, 0, ['Motor', 'PMSM, 6 kW peak'])
  if (!m.full['Motor']) m.full['Motor'] = { 'Type': 'PMSM', 'Peak power': '6 kW' }
  m.colourImg = 'ev-common/vx2-colours.png'
  m.intro = m.name.replace('VIDA ', '') + ': ' + m.stats[0][0] + ' km IDC range, ' + m.stats[1][0] + ' km/h top speed, 6 kW swing-arm motor and VIDA Edge connectivity' + (fixed ? ', with a fixed battery.' : ', with removable batteries.')
  const g = VX2_GAL[m.name]
  m.gallery = [...(g ? [g] : []), ...(fixed ? [] : [['ev-common/vx2b-red-battery.jpg', 'Removable battery', 'Charging simple hai.']]), ['ev-common/vx2b-duo-full.jpg', 'Colours', 'Pick the VX2 that suits you.']]
})

// route helpers (do not edit)
const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
PETROL.forEach(m => { m.page = 'petrol'; m.slug = slugify(m.name); if (CARD[m.slug]) m.image = CARD[m.slug] })
EV.forEach(m => { m.page = 'ev'; m.slug = slugify(m.name) })

// ---- Front (card) images: side-view studio shots on grey. Files in public/images/. ----
// Matched by model name.
const FRONT = [
  [/VX2 Go/, 'ev-common/vx2-go-front.webp'],
  [/VX2 Plus/, 'ev-common/vx2-plus-front.webp'],
]
EV.forEach(m => { const f = FRONT.find(([re]) => re.test(m.name)); if (f) m.image = f[1] })

// ---- Group variants into main models: one card per model, variants inside (tabs on the model page) ----
const FAMILY = [
  [/VX2 Go/, 'VIDA VX2 Go'],
  [/VX2 Plus/, 'VIDA VX2 Plus'],
]
EV.forEach(m => {
  const f = FAMILY.find(([re]) => re.test(m.name))
  m.family = f ? f[1] : m.name                                  // main model shown on the card
  m.variant = f ? m.name.replace(/^VIDA VX2 /, '') : ''         // e.g. 'Go 3.4 kWh'
})

// ---- EV prices: false = every EV amount shows '-'. Set true to show prices again (they are all still in this file). ----
export const SHOW_EV_PRICES = false

// ---- VX2 Plus / Go page images (files in public/images/). Card title -> image. ----
const VX2_ART = {
  'Storage': 'storage-vidavx2.webp', 'Under-seat storage': 'boot-space-vidavx2go.webp', 'Frunk': 'frunk-vidavx2.png',
  'Space to stretch': 'long-seat-vidavx2.webp', 'No turbulence. Just balance.': 'balance-vidavx2go.webp', 'Brakes': 'brakes-vidavx2.png',
  'Reverse parking': 'reverse-parking-vidavx2.png', 'Signature lights. Solid design.': 'vidavx2feature.png',
  'Home charging': 'home-charging-vidavx2.png', 'Community charging': 'community-charging-vidavx2.png', 'Service Stations': 'service-mobile-vidavx2.png',
  'Vehicle stats': 'vehicle-stats-vidavx2.webp', 'Ping my scooter': 'ping-my-scooter-vidavx2.webp', 'Remote immobilisation': 'remoteimmobilisation-vidavx2.webp',
  'Backrest': 'backrest-accessoeies-vidavx2go.webp', 'Helmet': 'smart-helmet-accessoeies-vidavx2.webp', 'Mascot': 'mascot-2-accessoeies-vidavx2.webp',
}
VX2_PLUS.art = inDir('vx2-plus', { ...VX2_ART, 'Moves like a breeze': 'breeze-ohnicein3-1-vx2-plus.png' })
// Go 3.4 images: public/images/vx2-go-3-4/ (original file names, unchanged)
// Go 3.1 colours: images live in public/images/vx2 go 3.1/ (6 colours, same file names as 3.4 + yellow)
const GO31_PICK = [
  { name: 'Matt Inspired White', image: 'vx2 go 3.1/white-go-desktop.svg' },
  { name: 'Matte Giallo Lime', image: 'vx2 go 3.1/yellow-go-desktop.svg' },
  { name: 'Pearl Red', image: 'vx2 go 3.1/red-go-desktop.svg' },
  { name: 'Nexus Blue', image: 'vx2 go 3.1/blue-go-desktop.svg' },
  { name: 'Pearl Black', image: 'vx2 go 3.1/black-go-desktop.svg' },
  { name: 'Metallic Matt Gun Metal Grey', image: 'vx2 go 3.1/grey-go-desktop.svg' },
]
VX2_GO.variants.find(v => v.name === 'Go 3.1').colourPick = GO31_PICK
VX2_GO.art = inDir('vx2-go-3-4', {
  'Storage': 'storage.webp', 'Under-seat storage': 'Boot-Space-IMG.webp', 'Frunk': 'Frunk IMG.png', 'Space to stretch': 'long-seat-desktop.webp',
  'No turbulence. Just balance.': 'balance_desktop.webp', 'Moves like a breeze': 'Accl-go-2-2-desktop.png', 'Brakes': 'brakes-desktop.png', 'Reverse parking': 'reverse-desk.png',
  'Fast Charging Points': 'fast-charging-desktop.webp', 'Home charging': 'home-charging-desktop.png', 'Community charging': 'community-charging-desktop.png', 'Service Stations': 'service-desktop (2).png',
  'Vehicle stats': 'Vehicle Stats.webp', 'Ping my scooter': 'Ping my scooter.webp', 'Remote immobilisation': 'RI.webp',
  'Backrest': 'BACKREST.webp', 'Helmet': 'smart-helmet.webp', 'Mascot': 'MASCOT 2.webp',
})
// Wire Go 3.4 folder images into the model page (#/ev/vida-vx2-go-3-4-kwh)
const GO34 = EV.find(m => m.name === 'VIDA VX2 Go 3.4 kWh')
if (GO34) {
  GO34.colourImg = ''
  GO34.features = []   // hide dark empty 'Discover' tiles; Life section replaces them
  GO34.colourPics = Object.fromEntries(VX2_GO.colourPick.map(c => [c.name, c.image]))
  GO34.lifeCards = VX2_GO.life.filter(([t]) => t !== 'Signature lights. Solid design.').map(([t, d]) => [t, d, VX2_GO.art[t] || ''])
}
// Go 3.1 EV model page colour pics
const GO31 = EV.find(m => m.name === 'VIDA VX2 Go 3.1 kWh')
if (GO31) {
  GO31.colourImg = ''   // hide old 4-thumbnail strip
  GO31.features = []    // hide empty 'Discover' tiles, same as Go 3.4
  GO31.colourPics = Object.fromEntries(GO31_PICK.map(c => [c.name, c.image]))
  GO31.lifeCards = VX2_GO.life.filter(([t]) => t !== 'Signature lights. Solid design.').map(([t, d]) => [t, d, VX2_GO.art[t] || ''])   // same images as Go 3.4
}
// ---- Plus 4.4 only: own images in public/images/vx2 plus 4.4/ (rest same as Plus 3.4 / vx2-plus/) ----
const P44 = 'vx2 plus 4.4/'
const PLUS44_PICK = [
  { name: 'Nexus Blue', image: P44 + 'VX2-Plus-Blue (2).svg' },
  { name: 'Metallic Matt Gun Metal Grey', image: P44 + 'VX2-Plus-Gray.svg' },
  { name: 'Matt Inspired White', image: 'vx2-plus/vx2-plus-white.svg' },   // not in new zip: old file kept
  { name: 'Autumn Orange', image: P44 + 'VX2-Plus-Orange.svg' },
  { name: 'Matte Giallo Lime', image: P44 + 'VX2-Plus-Yellow.svg' },
  { name: 'Pearl Black', image: P44 + 'VX2-Plus-Black.svg' },
  { name: 'Pearl Red', image: 'vx2-plus/vx2-plus-red.svg' },             // not in new zip: old file kept
]
const PLUS44_ART = { 'Brakes': P44 + 'brake-desktop.png', 'Moves like a breeze': P44 + 'breeze-desktop-image.png' }
const PLUS44_BANNER = P44 + 'VX2-Plus-Banner-DESKTOP.jpeg'
const PV44 = VX2_PLUS.variants.find(v => v.name === 'Plus 4.4 kWh')
PV44.colourPick = PLUS44_PICK; PV44.art = PLUS44_ART; PV44.banner = PLUS44_BANNER
const PLUS44 = EV.find(m => m.name === 'VIDA VX2 Plus 4.4 kWh')
if (PLUS44) {
  PLUS44.colourImg = ''
  PLUS44.features = []
  PLUS44.colourPics = Object.fromEntries(PLUS44_PICK.map(c => [c.name, c.image]))
  PLUS44.lifeCards = VX2_PLUS.life.filter(([t]) => t !== 'Signature lights. Solid design.').map(([t, s]) => [t, s, PLUS44_ART[t] || VX2_PLUS.art[t] || ''])
}
// ---- Plus 3.4: same as Plus 4.4 (colours, banner, brakes) but own 'Moves like a breeze' image in public/images/vx2 plus 3.4/ ----
const PLUS34_ART = { ...PLUS44_ART, 'Moves like a breeze': 'vx2 plus 3.4/acc-desktop.jpeg' }
const PV34 = VX2_PLUS.variants.find(v => v.name === 'Plus 3.4 kWh')
PV34.colourPick = PLUS44_PICK; PV34.art = PLUS34_ART; PV34.banner = PLUS44_BANNER
const PLUS34 = EV.find(m => m.name === 'VIDA VX2 Plus 3.4 kWh')
if (PLUS34) {
  PLUS34.colourImg = ''
  PLUS34.features = []
  PLUS34.colourPics = Object.fromEntries(PLUS44_PICK.map(c => [c.name, c.image]))
  PLUS34.lifeCards = VX2_PLUS.life.filter(([t]) => t !== 'Signature lights. Solid design.').map(([t, s]) => [t, s, PLUS34_ART[t] || VX2_PLUS.art[t] || ''])
}
VX2_PLUS.banner = 'vx2-plus/vx2-plus-banner-desktop.jpeg'
VX2_GO.banner = 'vx2-go-3-4/3-1-desktop-banner.jpeg'
;[VX2_PLUS, VX2_GO].forEach(P => P.accessories = [...P.accessories, ['Mascot', 'Add some personality to your VIDA VX2 with the mascot accessory.']])
VX2_INFO.gallery.push(['vx2-plus/lifestyle-1-vidavx2.webp', 'Ride together', 'Easy trips for two'], ['vx2-plus/lifestyle-2-vidavx2.webp', 'Everyday life', 'Quiet, clean and stylish'], ['vx2-plus/lifestyle-3-vidavx2.webp', 'Family rides', 'Comfort for every journey'], ['vx2-plus/lifestyle-4-vidavx2.webp', 'Pause and enjoy', 'Room for your day'], ['vx2-plus/lifestyle-5-vidavx2.webp', 'Charge anywhere', 'Removable batteries'], ['vx2-plus/lifestyle-6-vidavx2.webp', 'Pick your colour', 'Plenty of VX2 shades'])
VIDA_BUY.dealer.image = 'vx2-plus/dealers-700-vidavx2.webp'
