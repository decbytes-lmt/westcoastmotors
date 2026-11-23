// DESTINI PRIME: copied from heromotocorp.com (Destini Prime page). PRICES: `price: null`; Hero's Delhi price is never used.
// WARRANTY: scooters carry 5 years or 50,000 km, as stated on Hero's page.
// COLOURS: Hero's page names Panther Black, Metallic Nexus Blue, "Nobel" Red (spelled Noble Red on your photo file) and Pearl Silver White. Photo to name matches follow your file names.
// FEATURE PHOTOS: no separate feature photos were supplied; each feature uses the closest loose photo, matched by looks (please confirm).
import { OFFERS, faq } from './_std.js'

export default {
  slug: 'destini-prime', name: 'Destini Prime', category: 'Scooter', tagline: 'Hero ka Scooter, Scooter ka Hero',
  seoDescription: 'Hero Destini Prime at West Coast Motors, Mangalore: 124.6 cc, FI engine, 56 kmpl mileage claim, digi-analog speedometer, boot lamp, LED guide lamps and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/scooters/destini-prime.html',
  warranty: '5 years or 50,000 km (whichever comes first), as stated by Hero MotoCorp for its scooters',
  offers: [OFFERS[0], OFFERS[1], ['5-year warranty', '5 years or 50,000 km, whichever comes first. T&C apply.']],
  accessories: [], banner: 'banner.webp', hero: { image: null },
  layout: ['hero', 'offers', 'quick', 'highlights', 'features', 'colours', 'variants', 'gallery', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],

  quick: [['56', 'kmpl', 'Mileage, as stated by Hero*'], ['124.6', 'cc', 'Displacement'], ['9', 'bhp', 'Max power @ 7000 rpm (6.69 kW)'], ['10.36', 'Nm', 'Max torque @ 5500 rpm']],
  highlights: [['Retro Chrome Design'], ['LED Guide Lamps'], ['Boot Lamp'], ['Digi-Analog Speedometer'], ['Mobile Charging Port']],
  featuresTitle: 'A perfect combination of performance, style and comfort',
  features: [
    { title: 'Digi-Analog Speedometer', text: 'Combining classic charm with practical tech, the Digi-Analog console keeps you informed with at-a-glance trip, fuel and service updates.', image: 'feat-front.webp' },
    { title: 'Boot Lamp', text: 'The automatic boot lamp lights up the under-seat storage when opened, making it easy to find items day or night.', image: 'feat-rear.webp' },
    { title: 'Mobile Charging Port', text: 'Stay connected on the move with a convenient charging port that keeps your gear powered up anytime.', image: 'feat-quarter.webp' },
    { title: 'LED Guide Lamps', text: 'Sleek LED guide lamps boost low-light visibility and safety while giving the scooter a sharp, modern look.', image: 'feat-led.webp' },
  ],
  variants: [
    { id: 'obd2b', name: 'Destini Prime OBD2B', price: null, image: 'colour-pearl-silver-white.webp', colours: [
      { name: 'Pearl Silver White', hex: '#f1f1f1', image: 'colour-pearl-silver-white.webp' }, { name: 'Panther Black', hex: '#1b1b1d', image: 'colour-panther-black.webp' },
      { name: 'Metallic Nexus Blue', hex: '#1f4fa3', image: 'colour-nexus-blue.webp' }, { name: 'Noble Red', hex: '#8f1d2c', image: 'colour-noble-red.webp' }] },
  ],
  variantNote: 'Hero lists one variant, the Destini Prime OBD2B. Prices are not shown yet; ask us for the Mangalore price.',
  colourNote: 'Hero’s page names Panther Black, Metallic Nexus Blue, Noble Red and Pearl Silver White. Ask us what is in stock.',
  gallery: [{ file: 'g-studio.webp', label: 'Destini Prime, studio' }, { file: 'feat-front.webp', label: 'Front view' }],
  specs: {
    'Engine': { 'Type': 'Air Cooled, 4-Stroke, SI Engine', 'Displacement': '124.6 cc', 'Max. Power': '6.69 kW (9 BHP) @ 7000 rpm', 'Max. Torque': '10.36 Nm @ 5500 rpm', 'Ignition': 'Fuel Injection (FI)' },
    'Suspension': { 'Front': 'Telescopic Fork', 'Rear': 'Single Coil Spring Hydraulic Type' },
    'Brakes': { 'Front Brake': '130 mm', 'Rear Brake': '130 mm' },
    'Electricals': { 'Battery': '12 V - 4 Ah ETZ5 MF Battery', 'Starting System': 'Electric / Self-Start', 'Tail/Stop Lamp': '12 V - 5/21 W (Multi-Reflector Type)' },
    'Dimensions': { 'Overall Length': '1809 mm', 'Overall Width': '729 mm', 'Wheelbase': '1245 mm' },
  },
  specNote: '*Mileage is the figure shown by Hero; actual mileage varies with riding and road conditions.',
  faq: faq('Destini Prime', [
    ['What variant does the Destini Prime come in?', 'Hero lists the Destini Prime OBD2B.'],
    ['What colours are available?', 'Hero names Panther Black, Metallic Nexus Blue, Noble Red and Pearl Silver White. Ask us what is in stock.'],
    ['How much mileage does it give?', 'Hero states 56 kmpl. Everyday mileage depends on how and where you ride.'],
    ['What warranty does it have?', '5 years or 50,000 km, whichever comes first, as stated by Hero for its scooters. T&C apply.'],
  ]),
  related: ['New Destini 125', 'Destini 110', 'Xoom 125', 'Pleasure+ Xtec'],
}
