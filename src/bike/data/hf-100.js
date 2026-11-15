// HF 100: copied from heromotocorp.com (HF 100 page). PRICES: `price: null`; fill the Mangalore ex-showroom price when ready.
// PHOTOS: Red Black and Blue Black matched by looks. Folder: public/images/hf-100/
import { WARRANTY, OFFERS, FINANCE, faq } from './_std.js'

export default {
  slug: 'hf-100', name: 'HF 100', category: '100 cc', tagline: 'Smart. Reliable. Every day.',
  seoDescription: 'HF 100 at West Coast Motors, Mangalore: 97.2 cc xSENS fuel-injected commuter with 130 mm drum brakes, side stand engine cut-off and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/hf-100.html',
  warranty: WARRANTY, offers: OFFERS, finance: FINANCE, accessories: [], banner: 'banner.webp', hero: { image: null },
  layout: ['hero', 'offers', 'quick', 'features', 'colours', 'variants', 'compare', 'specs', 'gallery', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],
  quick: [['72', 'kmpl', 'Mileage, as stated by Hero'], ['97.2', 'cc', 'Displacement'], ['5.9', 'kW', 'Max power @ 8000 rpm'], ['8.05', 'Nm', 'Max torque @ 6000 rpm']],
  featuresTitle: 'Discover what makes HF 100 smarter',
  features: [
    { title: 'xSENS FI Technology', text: 'Intelligent sensor-based technology ensures high fuel efficiency, instant pick-up and power.', image: null },
    { title: 'All weather easy start', text: 'Trouble-free start in all weather conditions for delightful rides.', image: null },
    { title: 'More mileage', text: 'High fuel efficiency with xSENS FI technology.', image: null },
    { title: 'Better pulling power', text: 'Better pulling power in varying loads and road conditions.', image: null },
    { title: 'Engine cut-off at fall', text: 'Ensures the safety of the rider by cutting off the engine at a fall.', image: null },
    { title: 'Side stand engine cut-off', text: 'Utmost safety of the rider: HF 100 won’t move unless the side stand is up.', image: null },
    { title: '130 mm rear brake', text: 'Lower braking distance with a 130 mm rear brake for a safer ride.', image: null },
    { title: '5-year warranty', text: 'Complete peace of mind with durable performance and low maintenance.', image: null },
    { title: 'Comfortable seat', text: 'A 735 mm long seat gives extra comfort under all road and load conditions.', image: null },
  ],
  variants: [{ id: 'drum-kick', name: 'Drum Kick Cast OBD2B', price: null, colours: [{ name: 'Red Black', hex: '#a3141c', image: 'red-black.webp' }, { name: 'Blue Black', hex: '#1d2a6b', image: 'blue-black.webp' }] }],
  specs: {"Engine": {"Type": "Air cooled, 4-stroke, Single cylinder, OHC", "Displacement": "97.2 cc", "Max. Power": "5.9 Kw @ 8000 rpm", "Max. Torque": "8.05 Nm @ 6000 rpm", "Bore x Stroke": "50.0 x 49.5 mm", "Fuel System": "Advanced Programmed Fuel Injection"}, "Transmission & Chassis": {"Clutch Type": "Multiplate Wet Type", "Transmission Type": "4-speed Constant Mesh", "Frame Type": "Tubular Double Cradle"}, "Suspension": {"Front Suspension": "Telescopic Hydraulic Shock Absorbers", "Rear Suspension": "Swingarm with 2-Step Adjustable Hydraulic Shock Absorbers"}, "Brakes & Tyres": {"Front Tyre": "2.75 x 18 - 4PR/42P", "Rear Tyre": "2.75 x 18 - 6PR/48P", "Front Brake": "Drum (130 mm)", "Rear Brake": "Drum (130 mm), Integrated Braking System"}, "Dimensions": {"Overall Length": "1965 mm", "Overall Width": "720 mm", "Overall Height": "1045 mm", "Seat Height": "805 mm", "Saddle Height": "805 mm", "Wheelbase": "1235 mm", "Ground Clearance": "165 mm", "Fuel Tank Capacity": "9.1 Litre", "Kerb Weight": "110 kg"}, "Electricals": {"Starting System": "Kick", "Battery": "MF Battery, 12V - 3Ah (Kick start)", "Head Lamp": "12 V - 35 / 35 W (Halogen Bulb), Trapezoidal MFR", "Tail/Stop Lamp": "12 V - 5 / 21 W - MFR", "Turn Signal Lamp": "12V - 10W x 4 - MFR"}},
  specNote: 'Mileage is the figure shown by Hero; real-world mileage varies with riding and road conditions.',
  compare: { title: 'HF 100 vs HF Deluxe', heads: ['', 'HF 100', 'HF Deluxe'], rows: [['Tubeless tyres', 'No', 'Yes'], ['USB charger', 'No', 'Yes (as an accessory)'], ['i3S technology', 'No', 'Yes (selected variants)'], ['Fuel tank capacity', '9.1 litre', '9.6 litre']] },
  gallery: [{ file: 'g-1.webp', label: 'HF 100' }, { file: 'g-2.webp', label: 'HF 100' }],
  faq: faq('HF 100', [
    ['What variant and colours does the HF 100 come in?', 'Hero lists the HF 100 Drum Kick Cast OBD2B in Red Black and Blue Black. Ask us what is in stock.'],
    ['How much mileage does it give?', 'Hero states 72 kmpl on its page. Everyday mileage depends on how and where you ride.'],
    ['What engine does it have?', '97.2 cc air-cooled, 4-stroke single cylinder with programmed fuel injection: 5.9 kW at 8000 rpm and 8.05 Nm at 6000 rpm, 4-speed gearbox, kick start.'],
  ]),
  related: ['HF Deluxe', 'Splendor+', 'Passion+', 'Super Splendor Xtec'],
}
