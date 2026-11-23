// XOOM 110: copied from heromotocorp.com (Xoom 110 page). PRICES: `price: null`; Hero's Delhi price is never used.
// WARRANTY: scooters carry 5 years or 50,000 km, as stated on Hero's page.
// COLOURS: per-variant colour photos supplied by the user; names from the photo file names (Hero FAQ lists the same colours).
// FEATURE PHOTOS: no separate feature photos supplied; each feature uses the closest loose photo, matched by looks (please confirm).
import { OFFERS, faq } from './_std.js'

export default {
  slug: 'xoom-110', name: 'Xoom 110', category: 'Scooter', tagline: 'Get. Set. Xoom.',
  seoDescription: 'Hero Xoom 110 at West Coast Motors, Mangalore: 110.9 cc, fastest 110cc scooter claim (0-60 km/h in 9.35 s), corner bending lights, front disc brake, 12-inch wheels and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/scooters/xoom.html',
  warranty: '5 years or 50,000 km (whichever comes first), as stated by Hero MotoCorp for its scooters',
  offers: [OFFERS[0], OFFERS[1], ['5-year warranty', '5 years or 50,000 km, whichever comes first. T&C apply.']],
  accessories: [], banner: 'banner.webp', hero: { image: null },
  film: 'xoom', layout: ['hero', 'offers', 'quick', 'highlights', 'features', 'colours', 'variants', 'compare', 'gallery', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],

  quick: [['9.35', 'sec', '0-60 km/h, as stated by Hero*'], ['110.9', 'cc', 'Displacement'], ['8.05', 'bhp', 'Max power @ 7250 rpm (6.0 kW)'], ['8.70', 'Nm', 'Max torque @ 5750 rpm']],
  highlights: [['Fastest 110cc Scooter'], ['Diamond Cut Alloy Wheels'], ['Sporty Graphics'], ['12 Inch Large Wheels'], ['100 mm Wide Rear Tyre'], ['Corner Bending Lights'], ['Front Disc Brake'], ['Projector LED Headlamp']],
  featuresTitle: 'Much more than an ordinary scooter',
  features: [
    { title: 'Fastest Acceleration', text: 'The Xoom delivers the fastest acceleration in its segment, with a smooth, lively burst when you twist the throttle.', image: 'g-3.webp' },
    { title: 'Sporty Design', text: 'Sharp lines, a bold stance and an aggressive front fascia give the Xoom a youthful, sporty look.', image: 'g-top.webp' },
    { title: '12 Inch Bigger, Wider Tyre', text: 'Large 12-inch wheels and wide tyres give strong grip and a composed, stable feel through lane changes and corners.', image: 'g-1.webp' },
    { title: 'Corner Bending Lights', text: 'Corner bending lights brighten dark turns as you lean in, for better visibility at night.', image: 'g-2.webp' },
    { title: 'Front Disc Brake', text: 'A front disc brake gives stronger, more dependable stopping power in city traffic and sudden stops.', image: 'feat-disc.webp' },
    { title: 'Bluetooth Connectivity', text: 'Pair your smartphone for call alerts and message notifications on the digital display.', image: 'g-4.webp' },
  ],
  variants: [
    { id: 'zx', name: 'Xoom 110 ZX OBD2B', price: null, image: 'c-zx-sports-red.webp', colours: [{ name: 'Sports Red', hex: '#d8341c', image: 'c-zx-sports-red.webp' }, { name: 'Black', hex: '#1b1b1d', image: 'c-zx-black.webp' }, { name: 'Moon Yellow', hex: '#f2c200', image: 'c-zx-moon-yellow.webp' }] },
    { id: 'vx', name: 'Xoom 110 VX OBD2B', price: null, image: 'c-vx-black.webp', colours: [{ name: 'Black', hex: '#1b1b1d', image: 'c-vx-black.webp' }, { name: 'Moon Yellow', hex: '#f2c200', image: 'c-vx-moon-yellow.webp' }, { name: 'Polestar Blue', hex: '#1f86e0', image: 'c-vx-polestar-blue.webp' }] },
    { id: 'combat', name: 'Xoom 110 Combat OBD2B', price: null, image: 'c-combat-matt-shadow-grey.webp', colours: [{ name: 'Matt Shadow Grey', hex: '#8a8e96', image: 'c-combat-matt-shadow-grey.webp' }] },
  ],
  variantNote: 'Hero lists VX, ZX and Combat OBD2B variants. Prices are not shown yet; ask us for the Mangalore price.',
  colourNote: 'Colours follow the photos supplied for each variant (ZX 3, VX 3, Combat 1). Colour names come from the photo file names. Ask us what is in stock.',
  compare: { title: 'Xoom 110 VX vs ZX vs Combat', heads: ['', 'VX', 'ZX', 'Combat'], rows: [['Wheel type', 'Cast alloy', 'Machined alloys', 'Machined alloys'], ['Corner bending light', 'No', 'Yes', 'Yes'], ['Bluetooth connectivity', 'No', 'Yes', 'Yes'], ['Diamond cut alloy wheels', 'No', 'Yes', 'Yes'], ['Front disc brake', 'No', 'Yes', 'Yes']] },
  gallery: [{ file: 'c-zx-sports-red.webp', label: 'Xoom 110, side view' }, { file: 'g-front.webp', label: 'Front view' }, { file: 'g-top.webp', label: 'From above' }, { file: 'g-1.webp', label: 'In the city' }, { file: 'g-2.webp', label: 'Xoom 110' }, { file: 'g-3.webp', label: 'On the move' }, { file: 'g-4.webp', label: 'Ride' }, { file: 'g-5.webp', label: 'Xoom 110' }, { file: 'g-6.webp', label: 'Xoom 110 in motion' }, { file: 'g-7.webp', label: 'Xoom 110' }],
  specs: {
    'Engine': { 'Type': 'Air Cooled, 4 stroke, SI Engine', 'Displacement': '110.9 cc', 'Max. Power': '6.0 kW (8.05 BHP) @ 7250 rpm', 'Max. Torque': '8.70 Nm @ 5750 rpm', 'Fuel System': 'Fuel Injection (FI)' },
    'Suspension': { 'Front': 'Telescopic Hydraulic Shock Absorbers', 'Rear': 'Unit Swing with Spring Loaded Hydraulic Damper' },
    'Brakes': { 'Front Brake': '130 mm', 'Rear Brake': '130 mm' },
    'Electricals': { 'Battery': '12 V - 4 Ah ETZ5 (MF Battery)' },
    'Dimensions': { 'Overall Length': '1881 mm', 'Overall Width': 'Drum 717 mm / Disc 731 mm', 'Seat Height': '770 mm', 'Wheelbase': '1300 mm' },
  },
  specNote: '*0-60 km/h time is the figure shown by Hero; actual performance varies with riding and road conditions.',
  faq: faq('Xoom 110', [
    ['What variants does the Xoom 110 come in?', 'Hero lists VX, ZX and Combat OBD2B variants. Ask us for the Mangalore price of each.'],
    ['What colours are available?', 'Hero names Black, Polestar Blue, Moon Yellow, Sports Red and Matt Shadow Grey. Ask us what is in stock.'],
    ['How fast is it?', 'Hero states 0-60 km/h in 9.35 seconds and calls it the fastest 110cc scooter.'],
    ['What warranty does it have?', '5 years or 50,000 km, whichever comes first, as stated by Hero for its scooters. T&C apply.'],
  ]),
  related: ['Pleasure+ Xtec', 'Destini Prime', 'New Destini 125', 'Destini 110'],
}
