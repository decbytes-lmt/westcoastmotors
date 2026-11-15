// XPULSE 200 4V: copied from heromotocorp.com (Xpulse 200 4V page). PRICES: `price: null`; Hero's Delhi/Noida prices are never used.
// PHOTOS: three colour names are on Hero's page; photos matched to names by looks: please confirm. The black-and-blue and white "Hero" photos are in the gallery, unnamed. Rider banners not used.
import { WARRANTY, OFFERS, faq } from './_std.js'

export default {
  slug: 'xpulse-200-4v', name: 'Xpulse 200 4V', category: 'Premium', tagline: 'Built tougher than the toughest conditions',
  seoDescription: 'Hero Xpulse 200 4V at West Coast Motors, Mangalore: 199.6 cc oil-cooled 4-valve, 18.9 BHP, 3 ABS modes, rally windshield, LED projector headlamp and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/xpulse-200-4v.html',
  warranty: WARRANTY, offers: OFFERS, accessories: [], banner: 'banner.webp', hero: { image: null },
  layout: ['hero', 'offers', 'quick', 'features', 'colours', 'variants', 'compare', 'gallery', 'specs', 'steps', 'accessories', 'testride', 'faq', 'related'],
  quick: [['199.6', 'cc', 'Displacement'], ['18.9', 'BHP', 'Max power @ 8500 rpm'], ['17.35', 'Nm', 'Max torque @ 6500 rpm'], ['5', 'speed', 'Constant mesh gearbox']],
  featuresTitle: 'Reasons you’ll love this bike',
  features: [
    { title: 'Rally-style Windshield', text: 'The new Rally-style Windshield is 60 mm taller, offering enhanced windblast protection and reduced rider fatigue.', image: null },
    { title: 'New Closed Loop Knuckle Guards', text: 'The new, reinforced Closed Loop Knuckle Guards provide better hand protection from external elements.', image: null },
    { title: 'Updated USB Charger', text: 'Higher 1A capacity and a new placement under the speedometer for easier device charging while riding, plus a sensor-based accurate gear indicator on the LCD display.', image: null },
    { title: 'Updated Ergonomics', text: 'Updated foot peg position enhances control, relieves wrist strain and enables a relaxed posture, improving the stand-up riding stance.', image: null },
    { title: 'OBD Engine', text: 'OBD2 + E20 4-valve engine for enhanced power delivery in mid-range and top-end, and longer engine life.', image: null },
    { title: 'Upswept Exhausts', text: 'Helps the bike when riding through rough, muddy water-filled trails.', image: null },
    { title: 'Updated Luggage Plate', text: 'Provisions underneath for easier attachment of bungee hooks and luggage mounting.', image: null },
    { title: '3 ABS Modes', text: 'Road, Off-road and Rally modes give the rider control over all terrains.', image: null },
    { title: 'LED Projector Headlamp with LED DRLs', text: 'Projector LED headlamp is 10 mm larger, increasing light intensity by about 230% (as stated by Hero).', image: null },
    { title: 'Hazard Switch', text: 'Warns other road users of a temporary hazard; flashes the indicators in an emergency or breakdown.', image: null },
    { title: 'All-new LED Winkers', text: 'LEDs provide brighter and clearer light than halogen bulbs.', image: null },
  ],
  variants: [{ id: 'base', name: 'Xpulse 200 4V', price: null }, { id: 'pro', name: 'Xpulse 200 4V Pro', price: null }],
  colours: [
    { name: 'Black-Sports Red', hex: '#b3141c', image: 'colour-black-sports-red.webp' }, { name: 'Black Industrial Grey', hex: '#6a6d72', image: 'colour-black-industrial-grey.webp' },
    { name: 'Met Nexus Blue White', hex: '#2a4ba0', image: 'colour-met-nexus-blue-white.webp' },
  ],
  variantNote: 'Hero lists the Xpulse 200 4V and the Xpulse 200 4V Pro. Prices are not shown yet; ask us for the Mangalore price of each.',
  colourNote: 'Hero’s page names these three colours. The gallery shows other photos without names; ask us what is in stock for each variant.',
  compare: { title: 'Xpulse 200 4V vs 4V Pro', heads: ['', 'Xpulse 200 4V', 'Xpulse 200 4V Pro'], rows: [['Seat height', '825 mm', '891 mm'], ['Ground clearance', '220 mm', '270 mm'], ['Handle bar riser', 'No', 'Yes'], ['Front suspension travel', '190 mm', '250 mm'], ['Rear suspension travel', '170 mm', '220 mm']] },
  gallery: [{ file: 'g-black-blue.webp', label: 'Xpulse 200 4V, black and blue' }, { file: 'g-white-hero.webp', label: 'Xpulse 200 4V, white' }],
  specs: {
    'Engine': { 'Type': 'Oil cooled, 4 stroke, 4 valve, single cylinder, OHC', 'Displacement': '199.6 cc', 'Max. Power': '14.1 kW / 18.9 BHP @ 8500 rpm', 'Max. Torque': '17.35 Nm @ 6500 rpm' },
    'Transmission & Chassis': { 'Transmission Type': '5-speed constant mesh', 'Clutch Type': 'Multi-plate wet type' },
    'Suspension': { 'Front Suspension': 'Pro: cartridge type (dia 37 mm) with adjustable compression and rebound damping. Base: telescopic front forks (dia 37 mm) with anti-friction bush', 'Rear Suspension': 'Rectangular swingarm with 10-step preload adjustable monoshock' },
    'Brakes & Tyres': { 'Front Tyre': '90/90-21 M/C 54S', 'Rear Tyre': '120/80-18 M/C 62S', 'Front Brake': 'Petal disc, Dia 276 mm', 'Rear Brake': 'Petal disc, Dia 220 mm' },
    'Dimensions': { 'Overall Length': '2255 mm (Pro) / 2222 mm (Base)', 'Overall Height': '1380 mm (Pro) / 1320 mm (Base)', 'Seat Height': '891 mm (Pro) / 825 mm (Base)', 'Overall Width': '862 mm', 'Wheelbase': '1427 mm (Pro) / 1410 mm (Base)', 'Ground Clearance': '270 mm (Pro) / 220 mm (Base)', 'Fuel Tank Capacity': '13.0 Litres', 'Kerb Weight': '161 kg (Pro) / 159 kg (Base)' },
    'Electricals': { 'Instrument Cluster': 'Full digital LCD with Bluetooth and turn-by-turn navigation', 'Headlamp': 'LED (Class D with DRL)', 'Tail Light': 'LED' },
  },
  specNote: 'Specifications are as shown on Hero’s page.',
  faq: faq('Xpulse 200 4V', [
    ['What variants and colours does it come in?', 'Hero lists the Xpulse 200 4V and the Xpulse 200 4V Pro, in Black-Sports Red, Black Industrial Grey and Met Nexus Blue White. Ask us what is in stock.'],
    ['What is the difference between the base and Pro?', 'The Pro has a taller seat (891 mm), more ground clearance (270 mm), a handle bar riser and longer suspension travel. See the comparison table above.'],
    ['What engine does it have?', '199.6 cc oil-cooled 4-valve single cylinder: 18.9 BHP at 8500 rpm and 17.35 Nm at 6500 rpm, 5-speed gearbox.'],
  ]),
  related: ['Xpulse 210', 'Xtreme 250R', 'Karizma XMR', 'Xtreme 160R 4V'],
}
