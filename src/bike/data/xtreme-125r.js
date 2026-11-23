// XTREME 125R: copied from heromotocorp.com (Xtreme 125R page) and the feature screens you sent. PRICES: `price: null`; Hero's Delhi prices are never used.
// MILEAGE: Hero shows two figures: 66 km/l (feature claim) and 63 kmpl (WMTC, in the specification). Both are shown, labelled.
// PHOTOS: Hero names three colours; photos matched by looks (please confirm). The other colour photos are in the gallery without names (Hero's saved page did not name them).
import { WARRANTY, OFFERS, faq } from './_std.js'

export default {
  slug: 'xtreme-125r', name: 'Xtreme 125R', category: '125 cc', tagline: 'Live Xtreme',
  seoDescription: 'Hero Xtreme 125R at West Coast Motors, Mangalore: 124.7 cc, 3 ride modes, cruise control, 4.2" multicolour LCD, dual channel ABS and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/xtreme-125r.html',
  warranty: WARRANTY, offers: OFFERS, accessories: [], banner: 'banner.webp', hero: { image: null },
  film: 'xtreme-125r', layout: ['hero', 'offers', 'quick', 'features', 'colours', 'variants', 'gallery', 'specs', 'steps', 'accessories', 'testride', 'faq', 'related'],
  quick: [['5.7', 'sec', 'Acceleration 0-60 km/h'], ['124.7', 'cc', 'Engine displacement'], ['11.4', 'BHP', 'Max power @ 8250 rpm'], ['10.5', 'Nm', 'Max torque @ 6500 rpm']],
  featuresTitle: 'Xtreme 125R features',
  features: {
    'Riding': [
      { title: '3 Ride Modes', text: '3 ride modes that let you adapt your ride for every road.', image: 'feat-ride-modes.webp' },
      { title: 'Cruise Control', text: 'Set your speed and enjoy effortless cruising on every long stretch.', image: 'feat-cruise.webp' },
      { title: '4.2" Multicolor LCD', text: 'A bright, bold LCD display designed to deliver all your ride data in a single, effortless glance.', image: 'feat-ride-modes.webp' },
      { title: 'Unbeatable Wide Rear Tyre', text: 'First-in-segment 120/80 section tyre for increased stability.', image: 'feat-tyre.webp' },
      { title: 'Monoshock Suspension', text: 'Gives you improved agility and enhanced comfort.', image: 'feat-monoshock.webp' },
    ],
    'Style': [
      { title: 'New Color & Stripes', text: 'Sleek new style, same powerful presence.', image: 'feat-colour-stripes.webp' },
      { title: 'Sleek Split Seat', text: null, image: null },
      { title: 'All LED Setup', text: 'Incredible projector LED headlamp, LED tail lamp and LED winkers.', image: 'feat-all-led.webp' },
      { title: 'Sporty Muffler Cover', text: 'Make a style statement with the Xtreme 125R’s superior design.', image: 'feat-muffler.webp' },
    ],
    'Safety': [
      { title: 'Dual Channel ABS', text: 'Enhanced braking precision with dual-wheel safety for total control.', image: 'feat-dual-abs.webp' },
      { title: 'Panic Brake Alert', text: 'Smart safety that warns others the moment you hit the brakes.', image: 'feat-panic.webp' },
      { title: 'Front Disc Brake', text: 'Stop in seconds with the 276 mm front disc brake that makes safety its priority.', image: 'feat-front-disc.webp' },
      { title: 'Single-Channel ABS', text: 'First-in-segment ABS for greater control.', image: 'feat-single-abs.webp' },
    ],
    'Performance': [
      { title: 'ETB / Ride By Wire Technology', text: 'Precision at your fingertips for smoother, sharper throttle response.', image: 'feat-etb.webp' },
      { title: 'Sprint-EBT Engine', text: 'Increased power and tuned gear ratio to deliver on ride quality and acceleration.', image: 'feat-sprint.webp' },
      { title: 'Fantastic Mileage', text: 'Unbelievable efficiency with an astounding 66 km/l mileage (Hero’s feature claim; the WMTC figure in the specification is 63 kmpl).', image: 'feat-mileage.webp' },
    ],
  },
  variants: [
    { id: 'dual-abs', name: 'Dual Channel ABS', price: null }, { id: 'abs-single', name: 'ABS Single Seat', price: null },
    { id: 'abs-obd2b', name: 'ABS OBD2B', price: null }, { id: 'ibs-obd2b', name: 'IBS OBD2B', price: null },
  ],
  colours: [
    { name: 'Black Leaf Green', hex: '#3f7a3a', image: 'colour-black-leaf-green.webp' }, { name: 'Black Matt Shadow Grey', hex: '#3a3d42', image: 'colour-matt-shadow-grey.webp' },
    { name: 'Black Pearl Red', hex: '#a3141c', image: 'colour-black-pearl-red.webp' },
  ],
  variantNote: 'Hero lists these four variants. Prices are not shown yet; ask us for the Mangalore price of each.',
  colourNote: 'Hero’s page names these three colours. The gallery below shows other colour options without names; ask us what is in stock.',
  gallery: [{ file: 'g-blue.webp', label: 'Xtreme 125R, blue' }, { file: 'g-yellow.webp', label: 'Xtreme 125R, yellow' }, { file: 'g-orange.webp', label: 'Xtreme 125R, orange' }, { file: 'g-silver.webp', label: 'Xtreme 125R, silver' }, { file: 'g-red-silver.webp', label: 'Xtreme 125R, red and silver' }, { file: 'g-blue-silver.webp', label: 'Xtreme 125R, blue and silver' }],
  specs: {
    'Engine': { 'Acceleration 0-60 km/h': '5.7 sec', 'Fuel Consumption': '63 kmpl (WMTC, BS VI)', 'Engine Type': 'Air cooled, 4 stroke', 'Bore & Stroke': '52.4 mm x 57.8 mm', 'Displacement': '124.7 cc', 'Max. Power': '11.4 BHP @ 8250 rpm', 'Max. Torque': '10.5 Nm @ 6500 rpm', 'Fuel System': 'Fuel Injection' },
    'Transmission & Chassis': { 'Transmission Type': 'Constant mesh, 5 speed', 'Clutch Type': 'Wet multi plate', 'Frame Type': 'Diamond', 'Swing Arm': 'Tubular - fabricated', 'Caster': '24.1°', 'Steering Angle': '43°' },
    'Suspension': { 'Front Suspension': 'Telescopic forks', 'Rear Suspension': 'Adjustable monoshock' },
    'Brakes & Tyres': { 'Wheel Type': 'Alloy', 'Front Tyre': '90/90-17 TL', 'Rear Tyre': '120/80-17 TL', 'Front Brake': 'Disc (CBS) Dia 240 mm; Disc (ABS) Dia 276 mm', 'Rear Brake': 'Drum Dia 130 mm (with CBS)' },
    'Dimensions': { 'Overall Length': '2009 mm', 'Overall Width': '793 mm', 'Overall Height': '1051 mm', 'Wheelbase': '1319 mm', 'Seat Height': '790 mm', 'Ground Clearance': '180 mm', 'Trail': '89.2 mm', 'Fuel Tank Capacity': '10 L', 'Kerb Weight': '136 kg (Self Disc Cast)' },
    'Electricals': { 'Battery': 'MF 12V, 4 Ah (ETZ 5)', 'Starting System': 'Self (with i3S) and kick', 'ACG Capacity': '160 W / 5000 rpm' },
  },
  specNote: 'Specifications are as shown on Hero’s page. Hero states 66 km/l in its feature description and 63 kmpl (WMTC) in the specification; real-world mileage varies with riding and road conditions.',
  faq: faq('Xtreme 125R', [
    ['What variants does it come in?', 'Hero lists Dual Channel ABS, ABS Single Seat, ABS OBD2B and IBS OBD2B.'],
    ['How much mileage does it give?', 'Hero shows 66 km/l as a feature claim and 63 kmpl (WMTC) in the specification. Everyday mileage depends on how and where you ride.'],
    ['What engine does it have?', '124.7 cc air-cooled, 4-stroke, fuel injected: 11.4 BHP at 8250 rpm and 10.5 Nm at 6500 rpm, 5-speed gearbox.'],
  ]),
  related: ['Xtreme 160R', 'Xtreme 160R 4V', 'Glamour X', 'Glamour'],
}
