// XOOM 160: copied from heromotocorp.com (Xoom 160 page). PRICES: `price: null`; Hero's Delhi price is never used.
// WARRANTY: scooters carry 5 years or 50,000 km, as stated on Hero's page.
// COLOURS: per-colour photos supplied by the user (all named ZX); names from the photo file names. Hero's FAQ calls the red "Canyon Red"; the photo file says "Candy Red".
// FEATURE PHOTOS: none supplied separately; each feature uses the closest loose photo, matched by looks (please confirm).
import { OFFERS, faq } from './_std.js'

const COL = [
  { name: 'Matte Rainforest Green', hex: '#4a5a34', image: 'c-rainforest-green.webp' },
  { name: 'Candy Red', hex: '#c8232a', image: 'c-candy-red.webp' },
  { name: 'Summit White', hex: '#eeeeee', image: 'c-summit-white.webp' },
  { name: 'Matte Volcanic Grey', hex: '#8a8a8c', image: 'c-volcanic-grey.webp' },
]

export default {
  slug: 'xoom-160', name: 'Xoom 160', category: 'Scooter', tagline: 'Everyday, a new adventure',
  seoDescription: 'Hero Xoom 160 at West Coast Motors, Mangalore: 156 cc liquid-cooled engine, i3S Silent start-stop, smart key, TBT navigation, dual chamber LED headlamp, disc brake with ABS and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/scooters/xoom-160.html',
  warranty: '5 years or 50,000 km (whichever comes first), as stated by Hero MotoCorp for its scooters',
  offers: [OFFERS[0], OFFERS[1], ['5-year warranty', '5 years or 50,000 km, whichever comes first. T&C apply.']],
  accessories: [], banner: 'banner.webp', hero: { image: null },
  film: 'xoom', layout: ['hero', 'offers', 'quick', 'highlights', 'features', 'colours', 'variants', 'gallery', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],

  quick: [['156', 'cc', 'Liquid-cooled engine'], ['14.6', 'bhp', 'Max power @ 8000 rpm (10.9 kW)'], ['14', 'Nm', 'Max torque @ 6250 rpm'], ['142', 'kg', 'Kerb weight']],
  highlights: [['Liquid Cooled Engine'], ['i3S Silent Start-Stop'], ['14 Inch Block Pattern Tyres'], ['Dual Chamber LED Headlamp'], ['Disc Brake with ABS'], ['Smart Key'], ['TBT Navigation'], ['Twin Rear Suspensions']],
  featuresTitle: 'A scooter that leaves everyone behind',
  features: [
    { title: 'Smart Key', text: 'Keyless ignition, remote seat opening and smart find let you control the scooter without taking the key out of your pocket.', image: 'g-2.webp' },
    { title: 'Liquid Cooled Engine + i3S Silent', text: 'A liquid-cooled engine keeps performance steady on long rides, and i3S Silent start-stop saves fuel in traffic and restarts quietly.', image: 'g-4.webp' },
    { title: 'Digital Speedometer with TBT Navigation', text: 'A fully digital speedometer with Bluetooth turn-by-turn navigation keeps you on route and in control.', image: 'g-7.webp' },
    { title: '14 Inch Wheels, Block Pattern Tyres', text: 'Large 14-inch wheels with block-pattern tyres give better grip and stability on rough roads and city bumps.', image: 'g-5.webp' },
    { title: 'Twin Rear Suspensions', text: 'Twin rear suspensions absorb shocks and keep the ride stable and comfortable, solo or with a pillion.', image: 'g-1.webp' },
    { title: 'Dual Chamber LED Headlamp', text: 'Distinct high and low beam zones give better light spread and visibility in all conditions.', image: 'feat-front.webp' },
    { title: 'Longer Visor & Touring Box (Accessories)', text: 'A longer visor for wind protection and a spacious touring box for extended journeys.', image: 'g-3.webp' },
  ],
  variants: [
    { id: 'zx', name: 'Xoom 160 ZX', price: null, image: 'c-rainforest-green.webp', colours: COL },
  ],
  variantNote: 'Hero lists the Xoom 160 ZX. The price is not shown yet; ask us for the Mangalore price.',
  colourNote: 'Colours follow the photos supplied (all ZX). Names come from the photo file names. Ask us what is in stock.',
  gallery: [{ file: 'g-studio.webp', label: 'Xoom 160, studio' }, { file: 'feat-front.webp', label: 'Front view' }, { file: 'g-1.webp', label: 'With touring box' }, { file: 'g-2.webp', label: 'Xoom 160' }, { file: 'g-3.webp', label: 'On the road' }, { file: 'g-4.webp', label: 'Sunset ride' }, { file: 'g-5.webp', label: 'Block pattern tyres' }, { file: 'g-6.webp', label: 'The Xoom 160 range' }, { file: 'g-7.webp', label: 'Mountain road' }, { file: 'g-acc.webp', label: 'Accessories: top box, touring visor, seat cover, body beading' }],
  specs: {
    'Engine': { 'Type': 'Liquid cooled, 4 Valve single cylinder SOHC', 'Displacement': '156 cc', 'Max. Power': '10.9 kW (14.6 BHP) @ 8000 rpm', 'Max. Torque': '14 Nm @ 6250 rpm', 'Ignition': 'Fuel Injection (FI)', 'Starting': 'Self' },
    'Transmission': { 'Type': 'CVT', 'Clutch': 'Dry, Centrifugal' },
    'Suspension': { 'Front': 'Telescopic Hydraulic Shock Absorber', 'Rear': 'Dual Shock Absorbers' },
    'Tyres': { 'Front Tyre': '120/70 - R14', 'Rear Tyre': '140/60 - R14' },
    'Dimensions': { 'Length': '1983 mm', 'Width': '839 mm', 'Height': '1214 mm', 'Wheelbase': '1348 mm', 'Seat Height': '787 mm', 'Ground Clearance': '155 mm', 'Fuel Tank': '7 litres', 'Kerb Weight': '142 kg' },
    'Electricals': { 'Battery': '12 V - 6 Ah / ETZ-7' },
  },
  specNote: 'Specifications as shown by Hero MotoCorp; actual figures vary with riding and road conditions.',
  faq: faq('Xoom 160', [
    ['What variant does the Xoom 160 come in?', 'Hero lists the Xoom 160 ZX. Ask us for the Mangalore price.'],
    ['What colours are available?', 'Hero names Matte Rainforest Green, Summit White and Matte Volcanic Grey, plus a red. Ask us what is in stock.'],
    ['What brakes does it have?', 'A disc brake with ABS, as stated by Hero.'],
    ['What warranty does it have?', '5 years or 50,000 km, whichever comes first, as stated by Hero for its scooters. T&C apply.'],
  ]),
  related: ['Xoom 125', 'Xoom 110', 'Pleasure+ Xtec', 'New Destini 125'],
}
