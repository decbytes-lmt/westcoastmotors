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

// ---- VIDA electric scooters (vidaworld.com). VX2 figures: "certified range"; V2: "IDC range". ----
const VX2_MORE = [['Battery type', 'Removable batteries'], ['Reverse', 'Park mode (reverse up to 3 km/h)'], ['Braking', 'Regenerative braking'], ['Riding cost', '₹0.17/km (claimed by VIDA)']]
const ev = (name, cat, o) => {
  const specs = [[o.rangeLabel || 'Certified range', o.range + ' km*'], ['Top speed', o.top + ' km/h'], ['Battery', o.batt], ['0–40 km/h', o.acc + ' sec'], ...(o.motor ? [['Motor', o.motor]] : []), ['Ride modes', o.modes], ...(o.more || [])]
  const [bn, bu] = numUnit(o.batt)
  const grp = (labels) => Object.fromEntries(specs.filter(s => labels.includes(s[0])))
  const perf = [o.rangeLabel || 'Certified range', 'Top speed', '0–40 km/h', 'Motor', 'Ride modes']
  const batt = ['Battery', 'Battery type', 'Riding cost']
  const full = { 'Performance': grp(perf), 'Battery & charging': grp(batt) }
  const rest = specs.filter(s => ![...perf, ...batt].includes(s[0]))
  if (rest.length) full['Safety & convenience'] = Object.fromEntries(rest)
  return {
    name, kind: 'Electric scooter', cat, tag: o.tag || '', price: '', image: null, url: o.url || 'https://www.vidaworld.com/',
    specs, colours: o.colours || [],
    stats: [[o.range, 'km*', o.rangeLabel || 'Certified range'], [o.top, 'km/h', 'Top speed'], [o.acc, 'sec', '0–40 km/h'], [bn, bu.split(' ')[0], 'Battery']],
    highlights: o.highlights || [], features: o.features || [], full, brochure: o.brochure || '', warranty: '',
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
const GO = ['Matte Giallo Lime', 'Nexus Blue', 'Matt Inspired White', 'Pearl Red', 'Pearl Black', 'Metallic Matt Gun Metal Grey']
const PLUS = [...GO.slice(0, 5), 'Autumn Orange', 'Metallic Matt Gun Metal Grey']
const M_GO = 'Eco (0–45 km/h), Ride (0–70 km/h)'
export const EV_CATS = ['VX2 Go', 'VX2 Plus', 'V2']
export const EV = [
  ev('VIDA VX2 Go 2.2 kWh', 'VX2 Go', { range: '93', top: '70', batt: '2.2 kWh', acc: '4.2', modes: M_GO, more: VX2_MORE, colours: GO, url: VX2, features: VX2_FEAT, highlights: VX2_HL }),
  ev('VIDA VX2 Go 3.1 kWh', 'VX2 Go', { range: '127', top: '70', batt: '3.1 kWh', acc: '4.5', modes: M_GO, more: VX2_MORE, colours: GO, url: VX2, features: VX2_FEAT, highlights: VX2_HL }),
  ev('VIDA VX2 Go 3.4 kWh', 'VX2 Go', { range: '146', top: '70', batt: '3.4 kWh', acc: '4.2', modes: M_GO, more: VX2_MORE, colours: ['Metallic Matt Gun Metal Grey', ...GO.slice(1, 5)], url: VX2, features: VX2_FEAT, highlights: VX2_HL }),
  ev('VIDA VX2 Plus 3.4 kWh', 'VX2 Plus', { range: '146', top: '80', batt: '3.4 kWh', acc: '3.1', modes: 'Eco (0–45), Ride (0–70), Sports (0–80 km/h)', more: VX2_MORE, colours: PLUS, url: VX2, features: [...VX2_FEAT, ['Colour TFT display', 'The TFT screen changes colour with each ride mode (Plus variants).'], ['Sports mode', 'Extra ride mode for high-speed fun on longer routes (Plus variants only).']], highlights: ['Sports mode', ...VX2_HL] }),
  ev('VIDA VX2 Plus 4.4 kWh', 'VX2 Plus', { range: '187', top: '90', batt: '4.4 kWh', acc: '3.1', modes: 'Eco (0–45), Ride (0–70), Sports (0–90 km/h)', more: VX2_MORE, colours: PLUS, url: VX2, features: [...VX2_FEAT, ['Colour TFT display', 'The TFT screen changes colour with each ride mode (Plus variants).'], ['Sports mode', 'Extra ride mode for high-speed fun on longer routes (Plus variants only).']], highlights: ['Sports mode', ...VX2_HL] }),
  ev('VIDA V2 Plus', 'V2', { rangeLabel: 'IDC range', range: '143', top: '85', batt: '3.44 kWh', acc: '3.4', motor: '6 kW peak, 25 Nm', modes: 'Eco, Ride, Sports', more: [['Braking', 'Regenerative braking (ReGen)']], url: 'https://www.vidaworld.com/vida-v2-plus.html', features: [['6 kW motor', 'Peak motor power of 6 kW with 25 Nm of instant torque.'], ['Regenerative braking (ReGen)', 'Recovers energy while braking to stretch your range.'], ['Ride modes', 'Pick the mode that suits your ride, from city to open road.']], highlights: ['6 kW motor', '25 Nm torque', 'ReGen braking'] }),
  ev('VIDA V2 Pro', 'V2', { rangeLabel: 'IDC range', range: '165', top: '90', batt: '3.94 kWh (2 × 1.97 kWh)', acc: '2.9', motor: '6 kW peak, 25 Nm', modes: 'Eco, Ride, Sports, Boost', more: [['Braking', 'Regenerative braking (ReGen)']], features: [['6 kW motor', 'Peak motor power of 6 kW with 25 Nm of instant torque.'], ['Regenerative braking (ReGen)', 'Recovers energy while braking to stretch your range.'], ['Ride modes', 'Pick the mode that suits your ride, from city to open road.']], highlights: ['6 kW motor', '25 Nm torque', 'ReGen braking'] }),
]

export const SLIDES = [
  { eyebrow: 'Hero', title: 'Xtreme', sub: '250R', tag: ['Built to ', 'Thrill'], cta: 'Explore Petrol', href: '#/petrol', note: 'Hero banner image: Xtreme 250R on mountain road', image: null },
  { eyebrow: 'Hero VIDA', title: 'Ride the', sub: 'Change', tag: ['Smarter. Greener. ', 'Together.'], cta: 'Explore EV', href: '#/ev', note: 'Hero banner image: VIDA electric scooter', image: null },
  { eyebrow: 'Hero', title: 'Ride the', sub: 'Hero Way', tag: ['Performance. Trust. ', 'Togetherness.'], cta: 'Visit Our Showroom', href: '#contact', note: 'Hero banner image: showroom or riders', image: null },
]

// "Find Your Ride" selector panels. Put photos in public/images/ and set image: 'file.png'.
export const RIDE = {
  petrol: { label: 'Petrol Two-Wheelers', head: ['Power. Performance.', 'Adventure.'], cta: 'Explore Petrol Bikes', image: null, note: 'Image: red Hero bike (transparent PNG)' },
  ev: { label: 'EV Two-Wheelers', head: ['Ride Electric.', 'Live Better.'], cta: 'Explore EV Range', image: null, note: 'Image: VIDA electric scooter (transparent PNG)' },
}

// Dedicated Petrol / EV pages. Put photos in public/images/ and set image: 'file.png'.
export const PAGE = {
  petrol: {
    chip: 'Petrol', title: 'Petrol Two-Wheelers', lines: ['Power. Performance.', 'Adventure.'],
    sub: 'Bikes and scooters for every road and every rider.',
    note: 'Hero banner image: petrol bike (transparent PNG)', image: null,
    perks: [['calendar', 'Test ride', 'Book a ride at our showroom'], ['card', 'Finance & insurance', 'Ask us about easy financing and insurance'], ['box', 'Genuine spare parts', 'Original Hero parts for your bike']],
  },
  ev: {
    chip: 'Electric', title: 'EV Two-Wheelers', lines: ['Ride Electric.', 'Live Better.'],
    sub: 'Hero VIDA electric scooters. Smarter. Greener. Together.',
    note: 'Hero banner image: VIDA electric scooter (transparent PNG)', image: null,
    perks: [['zap', 'Charging', 'Ask our team about charging options'], ['shield', 'Battery', 'Get your battery questions answered'], ['tool', 'EV service', 'Dedicated EV service support']],
  },
}

// route helpers (do not edit)
const slugify = s => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
PETROL.forEach(m => { m.page = 'petrol'; m.slug = slugify(m.name) })
EV.forEach(m => { m.page = 'ev'; m.slug = slugify(m.name) })
