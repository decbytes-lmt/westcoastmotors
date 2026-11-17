// GLAMOUR X: copied from heromotocorp.com (Glamour X page). PRICES: `price: null`; Hero's Delhi prices are never used.
// PHOTOS: Black Pearl Red is confirmed by Hero's own graphic; the other four were matched to names by looks: please confirm. Folder: public/images/glamour-x/
import { WARRANTY, OFFERS, FINANCE, faq } from './_std.js'

export default {
  slug: 'glamour-x', name: 'Glamour X', category: '125 cc', tagline: 'India’s most futuristic 125cc',
  seoDescription: 'Hero Glamour X at West Coast Motors, Mangalore: 124.7 cc, cruise control, 3 ride modes, multicolour console, panic brake alert and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/glamour-x.html',
  warranty: WARRANTY, offers: OFFERS, finance: FINANCE, accessories: [], banner: 'banner.webp', hero: { image: null },
  layout: ['hero', 'offers', 'quick', 'highlights', 'features', 'colours', 'variants', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],
  quick: [['65', 'kmpl', 'Mileage with E20 fuel, as stated by Hero'], ['124.7', 'cc', 'Displacement'], ['8.5', 'kW', 'Max power @ 8250 rpm'], ['10.5', 'Nm', 'Max torque @ 6500 rpm']],
  highlights: [['Muscular Design'], ['Unmatched Performance', '11.4 BHP (8.5 kW) power @ 8250 rpm'], ['Intelligent Ride Technology', 'Adaptive display with 60+ features'], ['Superior Comfort', 'Long and wide seat'], ['Advanced Safety', 'Panic Brake Alert'], ['Cruise Control', 'First in segment technology that maintains your pace for steady rides, as stated by Hero'], ['3 Ride Modes'], ['10.7 cm Multicolour Console'], ['All-LED Setup']],
  featuresTitle: 'Discover what makes Glamour X futuristic',
  features: [
    { title: 'Superior mileage', text: 'Ride further with superior mileage, Distance to Empty and Average Fuel Efficiency display. 65 km/l with E20 fuel, based on third-party testing reports as stated by Hero; actual figures vary with riding conditions.', image: null },
    { title: 'SPRINT-EBT engine', text: 'Smoothness you can feel. Performance you will love. All enabled by Engine Balancer Technology.', image: null },
    { title: 'Panic Brake Alert', text: 'First in segment smart winker-alert when you brake hard, for added safety.', image: null },
    { title: 'Kickstart in low battery', text: 'A smart solenoid valve enables kickstart even with a low battery (stated by Hero as a world first).', image: null },
    { title: 'Smart storage space', text: 'Storage that can house 2 mobile phones and an AirPod case.', image: null },
    { title: 'Enhanced riding comfort', text: 'Comfortable riding posture for relaxed back and arms.', image: null },
    { title: 'Head-turning style', text: 'Muscular build and sporty graphics, made to be noticed.', image: 'feat-style.webp' },
    { title: 'Aerodynamic visor', text: 'Dynamic visor design to reduce wind resistance and enhance rider stability.', image: null },
  ],
  variants: [
    { id: 'drum', name: 'Drum Brake', price: null },
    { id: 'disc', name: 'Disc Brake', price: null },
  ],
  colours: [
    { name: 'Black Pearl Red', hex: '#2a2a2e', image: 'colour-black-pearl-red.webp' }, { name: 'Black Teal Blue', hex: '#0f6f7a', image: 'colour-teal-blue.webp' },
    { name: 'Candy Blazing Red', hex: '#c8141c', image: 'colour-candy-red.webp' }, { name: 'Matt Metallic Silver', hex: '#a9adb3', image: 'colour-silver.webp' },
    { name: 'Metallic Nexus Blue', hex: '#1d3a8a', image: 'colour-nexus-blue.webp' },
  ],
  variantNote: 'Hero lists the Glamour X in Drum Brake and Disc Brake. Prices are not shown yet; ask us for the Mangalore price of each.',
  colourNote: 'Colour names are as published by Hero. Ask us which colours are in stock for each variant.',
  specs: {
    'Engine': { 'Type': 'Air cooled, 4S', 'Displacement': '124.7 cc', 'Max. Power': '8.5 kW @ 8250 rpm', 'Max. Torque': '10.5 Nm @ 6500 rpm', 'Bore x Stroke': '52.4 x 57.8 mm', 'Fuel System': 'FI', 'Starting Method': 'Kick / Self' },
    'Transmission & Chassis': { 'Clutch Type': 'Wet type, multi plate', 'Transmission Type': 'Manual', 'Frame Type': 'Diamond', 'Swing Arm': 'Tubular type' },
    'Suspension': { 'Front Suspension': 'Telescopic (Dia. 30)', 'Rear Suspension': '5-step adjustable hydraulic shock absorbers, 73.5 mm' },
    'Brakes & Tyres': { 'Wheel Type': 'Alloy', 'Front Tyre': '80/100-18" tubeless', 'Rear Tyre': '100/80-18" tubeless' },
    'Dimensions': { 'Overall Length': '2045 mm', 'Overall Width': '796 mm', 'Overall Height': '1126 mm', 'Seat Height': '790 mm', 'Wheelbase': '1267 mm', 'Ground Clearance': '170 mm', 'Trail': '88 mm', 'Fuel Tank Capacity': '10 L', 'Kerb Weight': '125.5 kg (Drum Self Cast), 127.0 kg (Disc Self Cast)' },
    'Electricals': { 'Battery': '4Ah / 12V', 'Head Lamp': 'LED Headlamp, 12V', 'Tail Lamp': 'Bulb tail-lamp 21/5W (Drum), LED tail-lamp (Disc)', 'Position Lamp': '21/5W, 12V', 'Turn Signal Lamp': 'Bulb winkers 10W (Drum), LED winkers (Disc)' },
  },
  specNote: 'Mileage is the figure shown by Hero (E20 fuel, third-party testing); real-world mileage varies with riding and road conditions.',
  faq: faq('Glamour X', [
    ['What variants and colours does the Glamour X come in?', 'Hero lists Drum Brake and Disc Brake variants in Black Pearl Red, Black Teal Blue, Candy Blazing Red, Matt Metallic Silver and Metallic Nexus Blue. Ask us what is in stock.'],
    ['What is special about the Glamour X?', 'Hero highlights cruise control, 3 ride modes, a 10.7 cm multicolour console with 60+ features, panic brake alert and an all-LED setup.'],
    ['What engine does it have?', '124.7 cc air-cooled, 4-stroke, fuel injected: 8.5 kW at 8250 rpm and 10.5 Nm at 6500 rpm.'],
  ]),
  related: ['Glamour', 'Glamour X ABS', 'Xtreme 125R', 'Super Splendor Xtec'],
}
