// SUPER SPLENDOR XTEC 2.0: copied from heromotocorp.com (Super Splendor Xtec 2.0 page). PRICES: `price: null`; Hero's Delhi prices, Delhi petrol-cost and total-savings figures are not used.
// PHOTOS: the five colour photos match Hero's colour names by looks (strong visual match): please confirm. Kill-switch photo placed on "Engine Kill Switch" by looks. Hero's rider banner not used. Folder: public/images/super-splendor-xtec-2-0/
import { WARRANTY, OFFERS, FINANCE, faq } from './_std.js'

export default {
  slug: 'super-splendor-xtec-2-0', name: 'Super Splendor Xtec 2.0', category: '125 cc', tagline: 'Super Splendor Xtec 2.0, smarter',
  seoDescription: 'Hero Super Splendor XTEC 2.0 at West Coast Motors, Mangalore: 124.7 cc, silent start (ISG), USB Type-C charging, Bluetooth with call and SMS alerts and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/super-splendor-xtec-2-0.html',
  warranty: WARRANTY, offers: OFFERS, finance: FINANCE, accessories: [], banner: 'banner.webp', hero: { image: null },
  film: 'super-splendor-xtec', layout: ['hero', 'offers', 'quick', 'features', 'colours', 'variants', 'sec:ownership', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],
  quick: [['75', 'kmpl', 'Mileage, as stated by Hero*'], ['124.7', 'cc', 'Displacement'], ['10.7', 'BHP', 'Max power @ 7500 rpm'], ['10.6', 'Nm', 'Max torque @ 6000 rpm']],
  featuresTitle: 'Discover what makes Super Splendor Xtec 2.0 smarter',
  features: [
    { title: 'Silent Start (ISG)', text: 'Supports noiseless engine start.', image: null },
    { title: 'USB Charging Type C', text: 'Charge your devices on the go, so you stay connected and powered throughout your journey.', image: null },
    { title: 'Long & Comfortable Seat', text: 'Super space, super comfort.', image: null },
    { title: 'Bluetooth with Call & SMS Alerts', text: 'Stay connected on the go.', image: null },
    { title: 'Engine Kill Switch', text: 'Smart engine cut-off system.', image: 'feat-kill-switch.webp' },
  ],
  variants: [{ id: 'disc', name: 'Disc', price: null }, { id: 'drum', name: 'Drum', price: null }],
  colours: [
    { name: 'Candy Blazing Red', hex: '#c8141c', image: 'colour-candy-red.webp' }, { name: 'Glossy Black', hex: '#111214', image: 'colour-glossy-black.webp' },
    { name: 'Matt Axis Grey', hex: '#6a6d72', image: 'colour-matt-axis-grey.webp' }, { name: 'Matt Nexus Blue', hex: '#1d3a8a', image: 'colour-matt-nexus-blue.webp' },
    { name: 'Matt Chestnut Brown', hex: '#7a5638', image: 'colour-matt-chestnut-brown.webp' },
  ],
  variantNote: 'Hero lists the Super Splendor Xtec 2.0 in Disc and Drum. Prices are not shown yet; ask us for the Mangalore price of each.',
  colourNote: 'Colour names are as published by Hero. Ask us which colours are in stock for each variant.',
  sections: [{
    id: 'ownership', nav: 'Ownership cost', eyebrow: 'Super savings', title: 'Cost of ownership: Hero’s comparison', alt: true,
    intro: 'Hero compares the Super Splendor Xtec 2.0 with competition 125cc models on its page. Only the rows that do not depend on Delhi fuel prices are shown here.',
    table: { heads: ['', 'Competition 125cc models', 'Super Splendor Xtec 2.0'], rows: [['Mileage', '60 kmpl', '75 kmpl*'], ['Service cost (5 years)', '₹12,390', '₹11,445'], ['Warranty period', '3 years / 42,000 km', '5 years / 70,000 km']] },
    note: '*Based on the testing report of a government-certified agency, as stated by Hero. Actual mileage may vary with riding conditions. Service cost is Hero’s estimate for 50 km of daily running.',
  }],
  specs: {
    'Engine': { 'Type': '2V, air cooled, 4-stroke single cylinder', 'Bore x Stroke': '52.4 x 57.8 mm', 'Displacement': '124.7 cc', 'Max. Power': '10.7 BHP @ 7500 rpm', 'Max. Torque': '10.6 Nm @ 6000 rpm', 'Fuel System': 'Advanced Programmed Fuel Injection' },
    'Transmission & Chassis': { 'Frame Type': 'Diamond frame', 'Transmission Type': '5-speed constant mesh', 'Clutch Type': 'Wet multi plate' },
    'Suspension': { 'Front Suspension': 'Telescopic hydraulic shock absorbers', 'Rear Suspension': 'Swingarm with 5-step adjustable telescopic hydraulic shock absorbers' },
    'Brakes & Tyres': { 'Front Brake': 'Disc 240 mm / Drum 130 mm', 'Rear Brake': 'Drum 130 mm', 'Front Tyre': '80/100-18 tubeless', 'Rear Tyre': '90/90-18 tubeless' },
    'Dimensions': { 'Overall Length': '2034 mm', 'Overall Width': '740 mm (Disc) / 729 mm (Drum)', 'Overall Height': '1082 mm', 'Wheelbase': '1263 mm', 'Seat Height': '788 mm', 'Ground Clearance': '170 mm', 'Fuel Tank Capacity': '12 Litre', 'Kerb Weight': '121 kg (Disc-Drum) / 122 kg (Drum-Drum)' },
    'Electricals': { 'Battery': 'MF Battery, 12V-4Ah', 'Starting System': 'Silent start with ISG (with i3S) and kick' },
  },
  specNote: 'Mileage is the figure shown by Hero; real-world mileage varies with riding and road conditions. Hero’s summary labels max power in kW and its specification in BHP; the specification value is shown.',
  faq: faq('Super Splendor Xtec 2.0', [
    ['What variants and colours does it come in?', 'Hero lists Disc and Drum variants in Candy Blazing Red, Glossy Black, Matt Axis Grey, Matt Nexus Blue and Matt Chestnut Brown. Ask us what is in stock.'],
    ['How much mileage does it give?', 'Hero states 75 kmpl, based on a government-certified agency test report. Everyday mileage depends on how and where you ride.'],
    ['What is new on the 2.0?', 'Hero lists silent start (ISG), USB Type-C charging, Bluetooth with call and SMS alerts, a long comfortable seat and an engine kill switch.'],
  ]),
  related: ['Super Splendor Xtec', 'Glamour', 'Splendor+', 'Passion+'],
}
