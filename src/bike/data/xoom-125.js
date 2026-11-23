// XOOM 125: copied from heromotocorp.com (Xoom 125 page) + the brochure PDF. PRICES: `price: null`; Hero's Delhi price is never used.
// WARRANTY: scooters carry 5 years or 50,000 km, as stated on Hero's page.
// COLOURS: per-variant colour photos supplied by the user; names from the photo file names (Hero lists the same colours).
// FEATURE PHOTOS: none supplied separately; each feature uses the closest loose photo, matched by looks (please confirm).
import { OFFERS, faq } from './_std.js'

export default {
  slug: 'xoom-125', name: 'Xoom 125', category: 'Scooter', tagline: 'Get. Set. Xoom.',
  seoDescription: 'Hero Xoom 125 at West Coast Motors, Mangalore: 124.6 cc, fastest 125cc scooter claim (0-60 km/h in 7.6 s), 14-inch wheels, LED projector headlamp, sequential LED winkers, turn-by-turn navigation and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/scooters/xoom-125.html',
  warranty: '5 years or 50,000 km (whichever comes first), as stated by Hero MotoCorp for its scooters',
  offers: [OFFERS[0], OFFERS[1], ['5-year warranty', '5 years or 50,000 km, whichever comes first. T&C apply.']],
  accessories: [], banner: 'banner.webp', hero: { image: null },
  film: 'xoom', layout: ['hero', 'offers', 'quick', 'highlights', 'features', 'colours', 'variants', 'compare', 'gallery', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],

  quick: [['7.6', 'sec', '0-60 km/h, as stated by Hero*'], ['124.6', 'cc', 'Displacement'], ['9.8', 'bhp', 'Max power @ 7250 rpm (7.3 kW)'], ['10.4', 'Nm', 'Max torque @ 6000 rpm']],
  highlights: [['Fastest 125cc Scooter*'], ['14 Inch Large Wheels'], ['120 mm Wide Rear Tyre'], ['LED Projector Headlamp'], ['Front Disc Brake (ZX)'], ['Illuminated Start Switch'], ['Falcon Inspired Position Light'], ['Sequential LED Winkers'], ['i3S Fuel Saving']],
  featuresTitle: 'Transform your ride',
  features: [
    { title: '14 Inch Large Wheels & Wider Tyre', text: 'Large 14-inch wheels and a wide rear tyre give better grip, stability and comfort on city turns and open roads.', image: 'feat-wheel.webp' },
    { title: 'LED Projector Headlamp', text: 'A focused, powerful beam for safer night riding, and a bold modern face for the scooter.', image: 'feat-headlamp.webp' },
    { title: 'Falcon Inspired Position Light', text: 'A sharp, falcon-inspired position light gives the front an aggressive look and better visibility in traffic.', image: 'feat-front.webp' },
    { title: 'External Fuel Lid with Open Buzzer', text: 'Refuel without lifting the seat. A buzzer alerts you if the lid is left open.', image: 'g-5.webp' },
    { title: 'Sequential LED Winkers', text: 'Sweeping sequential indicators give clearer signalling and a premium look.', image: 'g-1.webp' },
    { title: 'Digital Speedometer with Turn-by-Turn Navigation', text: 'A fully digital speedometer with Bluetooth turn-by-turn navigation, plus speed and fuel readouts (ZX variant).', image: 'g-4.webp' },
  ],
  variants: [
    { id: 'zx', name: 'Xoom 125 ZX OBD2B', price: null, image: 'c-zx-matt-giallo-lime.webp', colours: [{ name: 'Matt Giallo Lime', hex: '#f0c419', image: 'c-zx-matt-giallo-lime.webp' }, { name: 'Candy Blazing Red', hex: '#d8262b', image: 'c-zx-candy-blazing-red.webp' }, { name: 'Pearl Blue', hex: '#27418a', image: 'c-zx-pearl-blue.webp' }, { name: 'Matt Grey Gold', hex: '#b8a27a', image: 'c-zx-mat-grey-gold.webp' }, { name: 'Matt Grey Yellow', hex: '#a7b52a', image: 'c-zx-mat-grey-yellow.webp' }] },
    { id: 'vx', name: 'Xoom 125 VX OBD2B', price: null, image: 'c-vx-matt-grey-silver.webp', colours: [{ name: 'Matt Grey Silver', hex: '#c9c9cc', image: 'c-vx-matt-grey-silver.webp' }, { name: 'Vibrant Blue Metallic', hex: '#2b4fb5', image: 'c-vx-vibrant-blue-metallic.webp' }] },
  ],
  variantNote: 'Hero lists ZX and VX OBD2B variants. Prices are not shown yet; ask us for the Mangalore price.',
  colourNote: 'Colours follow the photos supplied for each variant (ZX 5, VX 2). Names come from the photo file names. Ask us what is in stock.',
  compare: { title: 'Xoom 125 ZX vs VX', heads: ['', 'VX', 'ZX'], rows: [['Wheel type', 'Cast alloy', 'Machined alloys'], ['LED winkers', 'Yes', 'Yes (sequential)'], ['Front disc brake', 'No', 'Yes (petal)'], ['Turn-by-turn navigation', 'No', 'Yes'], ['Front storage and USB port', 'No', 'Yes'], ['Illuminated start button', 'No', 'Yes'], ['Boot lamp', 'No', 'Yes']] },
  gallery: [{ file: 'c-zx-matt-giallo-lime.webp', label: 'Xoom 125 ZX, side view' }, { file: 'feat-front.webp', label: 'Front view' }, { file: 'g-1.webp', label: 'Xoom 125' }, { file: 'g-2.webp', label: 'The Xoom range' }, { file: 'g-3.webp', label: 'Ride together' }, { file: 'g-6.webp', label: 'Xoom 125' }, { file: 'g-4.webp', label: 'City ride' }, { file: 'g-5.webp', label: 'Rear view' }, { file: 'g-7.webp', label: 'Night look' }, { file: 'g-acc.webp', label: 'Accessories: saree step, floor mat, body beading, side stand' }],
  specs: {
    'Engine': { 'Type': 'Air Cooled, 4 stroke, SI Engine', 'Displacement': '124.6 cc', 'Max. Power': '7.3 kW (9.8 BHP) @ 7250 rpm', 'Max. Torque': '10.4 Nm @ 6000 rpm', 'Ignition': 'Fuel Injection (FI)', 'Starting': 'Electric / Kick start' },
    'Transmission': { 'Type': 'CVT', 'Clutch': 'Dry, Centrifugal' },
    'Suspension': { 'Front': 'Telescopic Hydraulic Shock Absorber', 'Rear': 'Single Side Shock Absorber' },
    'Tyres': { 'Front Tyre': '110/80 - 14"', 'Rear Tyre': '120/70 - 14"' },
    'Dimensions': { 'Length': '1978 mm', 'Width': 'Disc 749 mm / Drum 739 mm', 'Height': '1131 mm', 'Wheelbase': '1327 mm', 'Seat Height': '777 mm', 'Ground Clearance': '164 mm', 'Fuel Tank': '5 litres', 'Kerb Weight': 'Disc 121 kg / Drum 120 kg' },
    'Electricals': { 'Battery': '12 V - 4 Ah / ETZ-5' },
  },
  specNote: '*0-60 km/h time is the figure shown by Hero; actual performance varies with riding and road conditions.',
  faq: faq('Xoom 125', [
    ['What variants does the Xoom 125 come in?', 'Hero lists ZX and VX OBD2B variants. Ask us for the Mangalore price of each.'],
    ['What colours are available?', 'Hero’s page names Matt Grey, Vibrant Blue Metallic, Candy Blazing Red and Matt Giallo Lime, and its brochure also shows Matt Grey Gold. Colours depend on the variant, so ask us what is in stock.'],
    ['How fast is it?', 'Hero states 0-60 km/h in 7.6 seconds and calls it the fastest 125cc scooter.'],
    ['What warranty does it have?', '5 years or 50,000 km, whichever comes first, as stated by Hero for its scooters. T&C apply.'],
  ]),
  related: ['Xoom 110', 'Pleasure+ Xtec', 'New Destini 125', 'Destini Prime'],
}
