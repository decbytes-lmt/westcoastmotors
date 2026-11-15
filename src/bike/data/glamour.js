// GLAMOUR: copied from heromotocorp.com (Glamour page). PRICES: `price: null`; Hero's Delhi prices are never used.
// PHOTOS: colour photos matched to names by looks (Black-Sports Red vs Candy Blazing Red especially): please confirm. Folder: public/images/glamour/
import { WARRANTY, OFFERS, FINANCE, faq } from './_std.js'

export default {
  slug: 'glamour', name: 'Glamour', category: '125 cc', tagline: 'The original Glamour',
  seoDescription: 'Hero Glamour at West Coast Motors, Mangalore: 124.7 cc fuel-injected 125, LED headlamp, full digital console, real-time mileage indicator and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/glamour.html',
  warranty: WARRANTY, offers: OFFERS, finance: FINANCE, accessories: [], banner: 'banner.webp', hero: { image: null },
  layout: ['hero', 'offers', 'quick', 'features', 'colours', 'variants', 'compare', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],
  quick: [['65', 'km/l', 'Mileage, as stated by Hero'], ['124.7', 'cc', 'Displacement'], ['7.75', 'kW', 'Max power @ 7500 rpm'], ['10.4', 'Nm', 'Max torque @ 6000 rpm']],
  featuresTitle: 'Reasons you will love this bike',
  features: [
    { title: 'New LED Headlamp', text: 'Brighten your path with style.', image: 'feat-led.webp' },
    { title: 'New Hazard Lamp', text: 'Ride in style with complete safety.', image: 'feat-hazard.webp' },
    { title: 'New Stop Start Switch', text: 'Effortless control for engine on and off.', image: 'feat-switch.webp' },
    { title: 'Original Chequered Stripes Design', text: 'Style that makes you stand apart.', image: 'feat-stripes.webp' },
    { title: 'Reliable 125cc engine', text: 'Performance you can count on every time.', image: 'feat-engine.webp' },
    { title: 'Full Digital Console', text: 'Improved visibility while riding.', image: 'feat-console.webp' },
    { title: 'Real-Time Mileage Indicator', text: 'Keep track of your ride’s efficiency.', image: 'feat-mileage-ind.webp' },
    { title: 'Mobile Charging Port', text: 'Stay connected wherever you go.', image: 'feat-charging.webp' },
    { title: 'Great Mileage', text: 'Cover more distance with 65 km/l mileage, as stated by Hero.', image: 'feat-mileage.webp' },
    { title: 'Wide Rear Tyre', text: 'Enables smoother maneuvering while riding.', image: 'feat-tyre.webp' },
    { title: 'Alloy Wheel', text: 'For the style that suits you.', image: 'feat-wheel.webp' },
    { title: 'Comfortable Seat', text: 'Stay comfortable on long rides.', image: 'feat-seat.webp' },
    { title: '3D Glamour Badging', text: 'Premium look that is flaunt-worthy.', image: 'feat-badging.webp' },
    { title: 'Low Seat Height', text: 'Effortless seating for all-day comfort. Seat height 793 mm.', image: null },
    { title: 'Good Ground Clearance', text: 'Tackle uneven roads with confidence. 170 mm.', image: 'feat-clearance.webp' },
  ],
  variants: [
    { id: 'disc', name: 'Disc Brake OBD2B', price: null, colours: [
      { name: 'Black Metallic Silver', hex: '#5b5f66', image: 'colour-silver.webp' }, { name: 'Candy Blazing Red', hex: '#c8141c', image: 'colour-candy-red.webp' },
      { name: 'Black-Sports Red', hex: '#2a2a2e', image: 'colour-sports-red.webp' }, { name: 'Techno Blu Met Blk', hex: '#1a8fd0', image: 'colour-blue.webp' }] },
    { id: 'drum', name: 'Drum Brake OBD2B', price: null, colours: [] },
  ],
  variantNote: 'Hero shows its colour images for the top (Disc) variant. Prices are not shown yet; ask us for the Mangalore price of each.',
  colourNote: 'Colour names are as published by Hero. Ask us which colours are in stock for each variant.',
  specs: {
    'Engine': { 'Type': 'Air cooled, 4 stroke', 'Displacement': '124.7 cm³', 'Max. Power': '7.75 kW @ 7500 rpm', 'Max. Torque': '10.4 Nm @ 6000 rpm', 'Fuel Efficiency': '65 km/l (as stated by Hero)', 'Fuel System': 'Fuel Injection' },
    'Transmission & Chassis': { 'Transmission Type': 'Constant mesh, 5-speed', 'Frame Type': 'Diamond', 'Clutch Type': 'Wet Multi Plate' },
    'Suspension': { 'Front Suspension': 'Dia. 30 telescopic fork, 105 stroke', 'Rear Suspension': '5-step adjustable, 73.5 mm stroke hydraulic shock absorbers' },
    'Brakes & Tyres': { 'Front Tyre': '80/100-18 tubeless', 'Rear Tyre': '100/80-18 tubeless', 'Wheel Type': 'Alloy wheels', 'Front Brake': 'Disc: Dia 240 / Drum: Dia 130', 'Rear Brake': 'Drum: Dia 130' },
    'Dimensions': { 'Overall Length': '2042 mm', 'Overall Height': '1090 mm', 'Seat Height': '793 mm', 'Overall Width': '742 mm (Disc), 720 mm (Drum)', 'Wheelbase': '1267 mm', 'Ground Clearance': '170 mm', 'Fuel Tank Capacity': '10 Litres' },
  },
  specNote: 'Mileage is the figure shown by Hero; real-world mileage varies with riding and road conditions.',
  compare: { title: 'Glamour vs Super Splendor', heads: ['', 'Glamour', 'Super Splendor'], rows: [['Console', 'Fully digital', 'Digi-analog'], ['Real-time mileage indicator', 'Yes', '-'], ['Headlamp', 'LED', 'Halogen'], ['Ground clearance', '170 mm', '180 mm'], ['Seat height', '793 mm', '798 mm']] },
  faq: faq('Glamour', [
    ['What variants and colours does the Glamour come in?', 'Hero lists the Glamour Disc Brake OBD2B and Drum Brake OBD2B, in Black Metallic Silver, Candy Blazing Red, Black-Sports Red and Techno Blu Met Blk. Ask us what is in stock.'],
    ['How much mileage does it give?', 'Hero states 65 km/l on its page. Everyday mileage depends on how and where you ride.'],
    ['What engine does it have?', '124.7 cc air-cooled, 4-stroke, fuel injected: 7.75 kW at 7500 rpm and 10.4 Nm at 6000 rpm, with a 5-speed gearbox.'],
  ]),
  related: ['Glamour X', 'Super Splendor Xtec', 'Xtreme 125R', 'Splendor+'],
}
