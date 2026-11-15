// XTREME 160R: copied from heromotocorp.com (Xtreme 160R page). PRICES: `price: null`; Hero's Delhi prices are never used.
// PHOTOS: Stealth Black is the colour shown on Hero's page; Matt Pearl White matched by looks. Folder: public/images/xtreme-160r/
import { WARRANTY, OFFERS, FINANCE, faq } from './_std.js'

export default {
  slug: 'xtreme-160r', name: 'Xtreme 160R', category: 'Premium', tagline: 'Race-ready look',
  seoDescription: 'Hero Xtreme 160R at West Coast Motors, Mangalore: 163.2 cc, LED headlight, 276 mm petal front disc, monoshock, USB charger and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/xtreme-160r.html',
  warranty: WARRANTY, offers: OFFERS, finance: FINANCE, accessories: [], banner: 'banner.webp', hero: { image: null },
  layout: ['hero', 'offers', 'quick', 'features', 'colours', 'variants', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],
  quick: [['163.2', 'cc', 'Displacement'], ['15', 'PS', 'Max power @ 8500 rpm'], ['14', 'Nm', 'Max torque @ 6500 rpm'], ['5', 'speed', 'Constant mesh gearbox']],
  featuresTitle: 'Xtreme 160R features',
  features: [
    { title: 'Stealth Black Color', text: 'The race-ready look is now complete.', image: null },
    { title: 'Sporty Muffler Cover', text: 'Let your speed make the noise.', image: null },
    { title: 'New LED Tail Lamp', text: 'Get noticed, even in low light conditions.', image: null },
  ],
  variants: [{ id: 'single', name: 'Single Disc', price: null }, { id: 'double', name: 'Double Disc', price: null }],
  colours: [
    { name: 'Stealth Black', hex: '#1a1a1c', image: 'colour-stealth-black.webp' }, { name: 'Matt Pearl White', hex: '#e8e8e6', image: 'colour-matt-pearl-white.webp' },
  ],
  variantNote: 'Hero lists the Xtreme 160R in Single Disc and Double Disc. Prices are not shown yet; ask us for the Mangalore price of each.',
  colourNote: 'Colour names are as published by Hero. Ask us which colours are in stock for each variant.',
  specs: {
    'Engine': { 'Type': '4 stroke, air cooled, 2 valve', 'Displacement': '163.2 cc', 'Max. Power': '15 PS @ 8500 rpm', 'Max. Torque': '14 Nm @ 6500 rpm' },
    'Transmission & Chassis': { 'Transmission Type': '5-speed constant mesh', 'Clutch Type': 'Multiplate wet', 'Frame Type': 'Tubular underbone diamond type', 'Swing Arm': 'Box type (50x30 mm rectangle tube)' },
    'Suspension': { 'Front Suspension': 'Standard telescopic, 37 mm dia', 'Rear Suspension': '7-step adjustable monoshock' },
    'Brakes & Tyres': { 'Front Tyre': '100/80-17 tubeless', 'Rear Tyre': '130/70 R17 tubeless', 'Wheel Type': 'Alloy', 'Front Brake': 'Disc 276 mm petal', 'Rear Brake': 'Disc 220 mm petal / Drum 130 mm' },
    'Dimensions': { 'Overall Length': '2029 mm', 'Overall Width': '793 mm', 'Overall Height': '1052 mm', 'Seat Height': '790 mm', 'Wheelbase': '1327 mm', 'Ground Clearance': '167 mm', 'Fuel Tank Capacity': '12 Litres', 'Kerb Weight': '139.5 kg' },
    'Electricals': { 'Starting System': 'Self start', 'USB': 'USB charger', 'Head Lamp': 'LED headlight with position lamps', 'Tail Lamp & Winkers': 'LED tail light and LED winkers' },
  },
  specNote: 'Specifications are as shown on Hero’s page for the Single Disc variant.',
  faq: faq('Xtreme 160R', [
    ['What variants and colours does it come in?', 'Hero lists Single Disc and Double Disc variants in Stealth Black and Matt Pearl White. Ask us what is in stock.'],
    ['What engine does it have?', '163.2 cc air-cooled, 4-stroke, 2 valve: 15 PS at 8500 rpm and 14 Nm at 6500 rpm, with a 5-speed gearbox.'],
  ]),
  related: ['Xtreme 160R 4V', 'Xtreme 125R', 'Glamour X', 'Xpulse 200 4V'],
}
