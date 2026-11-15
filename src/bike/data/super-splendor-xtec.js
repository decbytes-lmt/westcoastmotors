// SUPER SPLENDOR XTEC: copied from heromotocorp.com (Super Splendor XTEC page). PRICES: `price: null`; Hero's Delhi prices are never used.
// PHOTOS: colour photos (about 490 px wide) matched to names by looks: please confirm. Hero's rider banner (68 kmpl) not used. Folder: public/images/super-splendor-xtec/
import { WARRANTY, OFFERS, FINANCE, faq } from './_std.js'

export default {
  slug: 'super-splendor-xtec', name: 'Super Splendor Xtec', category: '125 cc', tagline: 'Super Splendor XTEC',
  seoDescription: 'Hero Super Splendor XTEC at West Coast Motors, Mangalore: 124.7 cc, full digital meter, Bluetooth with call and SMS alerts, USB charger, i3S and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/super-splendor-xtec.html',
  warranty: WARRANTY, offers: OFFERS, finance: FINANCE, accessories: [], banner: 'banner.webp', hero: { image: null },
  layout: ['hero', 'offers', 'quick', 'features', 'colours', 'variants', 'compare', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],
  quick: [['68', 'km/l', 'Mileage, as stated by Hero*'], ['124.7', 'cc', 'Displacement'], ['10.7', 'BHP', 'Max power @ 7500 rpm'], ['10.6', 'Nm', 'Max torque @ 6000 rpm']],
  featuresTitle: 'Reasons you will love the Super Splendor XTEC',
  features: [
    { title: 'Super Mileage', text: 'Enjoy longer rides with 68 km/l super mileage. *Mileage figures subject to conditions; T&C apply (Hero).', image: 'feat-mileage.webp' },
    { title: 'Full Digital Meter', text: 'An advanced digital display that tracks your fuel efficiency in real time.', image: 'feat-speedo.webp' },
    { title: 'Bluetooth with Call, SMS Alert', text: 'Receive important call and message alerts on the go.', image: 'feat-bluetooth.webp' },
    { title: 'USB Charger', text: 'Charge your devices on the go.', image: 'feat-usb.webp' },
    { title: 'i3S Technology', text: 'Proprietary technology that optimises fuel efficiency by automatically turning off the engine when idle.', image: null },
    { title: 'Long and comfortable seat', text: 'A spacious, ergonomically designed seat for comfortable rides and long journeys.', image: 'feat-seat.webp' },
    { title: 'Side Stand Engine Cut-off', text: 'Prevents accidental start-ups when the side stand is down, protecting both the rider and the bike.', image: 'feat-sidestand.webp' },
    { title: 'Autosail Technology', text: 'Effortless riding in traffic, making city commutes smoother.', image: 'feat-autosail.webp' },
    { title: 'Super power', text: 'A robust engine that delivers super power and acceleration.', image: 'feat-engine.webp' },
    { title: 'High HIPL', text: 'Enhanced visibility and safety with a powerful and unique lighting system.', image: null },
  ],
  variants: [{ id: 'disc', name: 'Disc Brake OBD2B', price: null }, { id: 'drum', name: 'Drum Brake OBD2B', price: null }],
  colours: [
    { name: 'Candy Blazing Red', hex: '#c8141c', image: 'colour-candy-red.webp' }, { name: 'Black', hex: '#111214', image: 'colour-black.webp' },
    { name: 'Matt Grey', hex: '#6a6d72', image: 'colour-matt-grey.webp' }, { name: 'Matt Nexus Blue', hex: '#1d3a8a', image: 'colour-matt-nexus-blue.webp' },
  ],
  variantNote: 'Hero shows its colour images for the top (Disc) variant. Prices are not shown yet; ask us for the Mangalore price of each.',
  colourNote: 'Colour names are as published by Hero. Ask us which colours are in stock for each variant.',
  specs: {
    'Engine': { 'Type': 'Air cooled, 4-stroke, OHC, single cylinder', 'Displacement': '124.7 cc', 'Max. Power': '10.7 BHP @ 7500 rpm', 'Max. Torque': '10.6 Nm @ 6000 rpm', 'Bore x Stroke': '52.4 x 57.8 mm', 'Fuel System': 'Advanced Programmed Fuel Injection' },
    'Transmission & Chassis': { 'Transmission Type': '5-speed constant mesh', 'Frame Type': 'Tubular diamond', 'Clutch Type': 'Wet multi plate' },
    'Suspension': { 'Front Suspension': 'Telescopic hydraulic shock absorbers', 'Rear Suspension': '5-step adjustable telescopic hydraulic shock absorbers' },
    'Brakes & Tyres': { 'Front Tyre': '80/100-18 tubeless', 'Rear Tyre': '90/90-18 tubeless', 'Front Brake': 'Disc: Dia 240 mm / Drum: Dia 130 mm', 'Rear Brake': 'Drum 130 mm' },
    'Dimensions': { 'Overall Length': '2042 mm', 'Overall Height': '1092 mm', 'Seat Height': '793 mm', 'Overall Width': '752 mm (Disc) / 729 mm (Drum)', 'Wheelbase': '1267 mm' },
    'Electricals': { 'Battery': 'MF Battery, 12V-4Ah', 'Starting System': 'Self start (with i3S) and kick' },
  },
  specNote: 'Mileage is the figure shown by Hero; real-world mileage varies with riding and road conditions.',
  compare: { title: 'Super Splendor XTEC vs Super Splendor', heads: ['', 'Super Splendor XTEC', 'Super Splendor'], rows: [['LED headlamp', 'Yes', 'No'], ['High intensity position lamp', 'Yes', 'No'], ['Fully digital speedometer', 'Yes', 'No'], ['Bluetooth connectivity', 'Yes', 'No'], ['Call and SMS alerts', 'Yes', 'No']] },
  faq: faq('Super Splendor XTEC', [
    ['What variants and colours does it come in?', 'Hero lists the Super Splendor XTEC Disc Brake OBD2B and Drum Brake OBD2B in Candy Blazing Red, Black, Matt Grey and Matt Nexus Blue. Ask us what is in stock.'],
    ['How much mileage does it give?', 'Hero states 68 km/l (figures subject to conditions). Everyday mileage depends on how and where you ride.'],
    ['Does it have Bluetooth?', 'Yes. Hero lists Bluetooth with call and SMS alerts, a full digital meter and a USB charger.'],
  ]),
  related: ['Super Splendor Xtec 2.0', 'Glamour', 'Splendor+', 'Passion+'],
}
