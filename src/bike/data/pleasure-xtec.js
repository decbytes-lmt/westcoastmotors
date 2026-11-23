// PLEASURE+ XTEC: copied from heromotocorp.com (Pleasure+ Xtec page). PRICES: `price: null`; Hero's Delhi price is never used.
// WARRANTY: scooters carry 5 years or 50,000 km, as stated on Hero's page.
// COLOURS: per-variant colour photos supplied by the user; colour names taken from the photo file names.
// FEATURE PHOTOS: no separate feature photos supplied; each feature uses the closest loose photo, matched by looks (please confirm).
import { OFFERS, faq } from './_std.js'

export default {
  slug: 'pleasure-xtec', name: 'Pleasure+ Xtec', category: 'Scooter', tagline: 'Style packed with tech',
  seoDescription: 'Hero Pleasure+ Xtec at West Coast Motors, Mangalore: 110.9 cc, i3S fuel saving, Bluetooth connectivity, fully digital speedometer, telescopic suspension and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/scooters/pleasure-plus-xtec.html',
  warranty: '5 years or 50,000 km (whichever comes first), as stated by Hero MotoCorp for its scooters',
  offers: [OFFERS[0], OFFERS[1], ['5-year warranty', '5 years or 50,000 km, whichever comes first. T&C apply.']],
  accessories: [], banner: null, hero: { image: null },
  layout: ['hero', 'offers', 'quick', 'highlights', 'features', 'colours', 'variants', 'compare', 'gallery', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],

  quick: [['55', 'kmpl', 'Mileage, as stated by Hero*'], ['110.9', 'cc', 'Displacement'], ['8', 'bhp', 'Max power @ 7250 rpm (6 kW)'], ['8.70', 'Nm', 'Max torque @ 5750 rpm']],
  highlights: [['Chrome Fascia'], ['Dual-Tone Inner Panel'], ['Fully Digital Speedometer'], ['Bluetooth Connectivity'], ['Telescopic Suspension'], ['i3S Fuel Saving']],
  featuresTitle: 'Reasons you will love this scooter',
  features: [
    { title: 'Chrome Fascia', text: 'A chrome fascia and accents give the front a bright, premium look.', image: 'feat-front.webp' },
    { title: 'Dual-Tone Inner Panel', text: 'A dual-tone inner panel adds a stylish contrast to the body colour.', image: 'colour-pearl-blue.webp' },
    { title: 'Telescopic Suspension', text: 'Telescopic suspension helps the scooter handle bumps with more comfort.', image: 'feat-tyre.webp' },
    { title: 'Fully Digital Speedometer + Bluetooth', text: 'A fully digital speedometer with Bluetooth connectivity keeps you informed and connected on the ride (ZX variant).', image: 'feat-studio.webp' },
  ],
  variants: [
    { id: 'zx', name: 'Pleasure+ Xtec ZX OBD2B', price: null, image: 'c-zx-pearl-blue.webp', colours: [{ name: 'Pearl Blue', hex: '#26407a', image: 'c-zx-pearl-blue.webp' }, { name: 'Matte Vernier Grey', hex: '#b3b3b6', image: 'c-zx-vernier-grey.webp' }, { name: 'Matt Black', hex: '#25252a', image: 'c-zx-matt-black.webp' }, { name: 'Aqua Grey', hex: '#aebfc4', image: 'c-zx-aqua-grey.webp' }, { name: 'Copper Brown', hex: '#c8793a', image: 'c-zx-copper-brown.webp' }, { name: 'Teal Blue', hex: '#2f7a96', image: 'c-zx-teal-blue.webp' }] },
    { id: 'vx', name: 'Pleasure+ VX OBD2B', price: null, image: 'c-vx-matt-black.webp', colours: [{ name: 'Matt Black', hex: '#25252a', image: 'c-vx-matt-black.webp' }, { name: 'Matte Vernier Grey', hex: '#9a9da2', image: 'c-vx-vernier-grey.webp' }, { name: 'Aqua Grey', hex: '#aebfc4', image: 'c-vx-aqua-grey.webp' }, { name: 'Matte Red', hex: '#b3262d', image: 'c-vx-matte-red.webp' }, { name: 'Teal Blue', hex: '#4fb0c0', image: 'c-vx-teal-blue.webp' }] },
    { id: 'lx', name: 'Pleasure+ LX OBD2B', price: null, image: 'c-lx-pearl-silver-white.webp', colours: [{ name: 'Pearl Silver White', hex: '#f2f2f2', image: 'c-lx-pearl-silver-white.webp' }, { name: 'Polestar Blue', hex: '#2f7fd0', image: 'c-lx-polestar-blue.webp' }, { name: 'Sport Red', hex: '#c4161c', image: 'c-lx-sport-red.webp' }] },
  ],
  variantNote: 'Hero lists ZX, VX and LX OBD2B variants. Prices are not shown yet; ask us for the Mangalore price.',
  colourNote: 'Colours follow the photos supplied for each variant (ZX 6, VX 5, LX 3). Ask us what is in stock.',
  compare: { title: 'Pleasure+ Xtec ZX vs VX vs LX', heads: ['', 'ZX', 'VX', 'LX'], rows: [
    ['Telescopic suspension', 'Yes', 'Yes', 'No'], ['Bluetooth connectivity', 'Yes', 'No', 'No'], ['Wheel type', 'Cast', 'Cast', 'Sheet'], ['i3S', 'Yes', 'Yes', 'No'],
    ['Speedometer', 'Digital', 'Digi-analog', 'Analog'], ['Inner panel colour', 'Dual textured', 'Black', 'Black'], ['Backrest', 'Yes', 'No', 'No'],
    ['Chrome fascia & accents', 'Yes', 'Yes', 'Yes'], ['LED headlamp', 'Projector LED', 'Halogen', 'Halogen']] },
  gallery: [{ file: 'g-studio.webp', label: 'Pleasure+ Xtec, studio' }, { file: 'g-1.webp', label: 'On the road' }, { file: 'g-2.webp', label: 'City ride' }, { file: 'g-3.webp', label: 'Matte finish' }, { file: 'g-4.webp', label: 'Everyday ride' }, { file: 'g-5.webp', label: 'Pleasure+ Xtec' }, { file: 'g-6.webp', label: 'Pleasure+ Xtec' }, { file: 'g-7.webp', label: 'Pleasure+ Xtec' }, { file: 'g-8.webp', label: 'Pleasure+ Xtec' }],
  specs: {
    'Engine': { 'Type': 'Air Cooled, 4 stroke Single Cylinder OHC', 'Displacement': '110.9 cc', 'Max. Power': '6.0 kW (8 BHP) @ 7250 rpm', 'Max. Torque': '8.70 Nm @ 5750 rpm', 'Starting': 'Electric Start / Kick Start', 'Compression Ratio': '10:01', 'Ignition': 'Fuel Injection (FI)' },
    'Transmission': { 'Clutch': 'Dry, Automatic Centrifugal Clutch' },
    'Suspension': { 'Front': 'Bottom link with spring loaded hydraulic dampers', 'Rear': 'Swing arm with spring loaded hydraulic dampers' },
    'Tyres & Brakes': { 'Front Tyre': '90/100 x 10-53 J (Tubeless)', 'Rear Tyre': '90/100 x 10-53 J (Tubeless)', 'Front Brake': 'Internal Expanding Shoe (130 mm)', 'Rear Brake': 'Internal Expanding Shoe (130 mm)' },
    'Electricals': { 'Battery': '12 V - 4 Ah / ETZ-5', 'Headlamp': 'LED Projector (ZX); 12 V 35/35 W Halogen multi-focal reflector (LX / VX)' },
    'Dimensions': { 'Length': '1769 mm', 'Width': '704 mm', 'Height': '1161 mm', 'Wheelbase': '1238 mm', 'Ground Clearance': '155 mm', 'Fuel Tank': '4.8 litres', 'Kerb Weight': '106 kg (ZX) / 104 kg (LX, VX)', 'Max Payload': '130 kg' },
  },
  specNote: '*Mileage is the figure shown by Hero; actual mileage varies with riding and road conditions.',
  faq: faq('Pleasure+ Xtec', [
    ['What variants does the Pleasure+ Xtec come in?', 'Hero lists ZX, VX and LX OBD2B variants. Ask us for the Mangalore price of each.'],
    ['What colours are available?', 'Hero names Matte Black, Matte Vernier Grey and Pearl Blue. Ask us what is in stock.'],
    ['How much mileage does it give?', 'Hero states 55 kmpl. Everyday mileage depends on how and where you ride.'],
    ['What warranty does it have?', '5 years or 50,000 km, whichever comes first, as stated by Hero for its scooters. T&C apply.'],
  ]),
  related: ['New Destini 125', 'Destini 110', 'Destini Prime', 'Xoom 125'],
}
