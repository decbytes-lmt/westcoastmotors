// HF DELUXE: copied from heromotocorp.com (HF Deluxe page). Hero shows features/specs for the selected variant (Pro).
// PRICES: `price: null` everywhere. Fill the Mangalore ex-showroom price per variant when ready.
// PHOTOS: the four Pro colours were matched to names by looks; check them. Folder: public/images/hf-deluxe/
import { WARRANTY, OFFERS, FINANCE, faq } from './_std.js'

export default {
  slug: 'hf-deluxe', name: 'HF Deluxe', category: '100 cc', tagline: 'Smarter every day',
  seoDescription: 'HF Deluxe at West Coast Motors, Mangalore: 97.2 cc, xSENS fuel injection, LED headlamp on the Pro, i3S on selected variants and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/practical/hf-deluxe.html',
  warranty: WARRANTY, offers: OFFERS, finance: FINANCE, accessories: [], hero: { image: null },
  layout: ['hero', 'offers', 'quick', 'highlights', 'overview', 'features', 'colours', 'variants', 'compare', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],

  quick: [['72', 'kmpl', 'Mileage, as stated by Hero'], ['97.2', 'cc', 'Displacement'], ['5.9', 'kW', 'Max power @ 8000 rpm'], ['8.05', 'Nm', 'Max torque @ 6000 rpm']],
  overview: { title: 'Smarter every day', intro: 'The HF Deluxe Pro adds an LED headlamp with HIPL and new sharp graphics to the HF Deluxe’s xSENS fuel-injected, low running cost formula.', images: ['ov-1.webp', 'ov-2.webp'] },
  highlights: [['New Stylish Graphics'], ['LED Headlamp', 'Brighter illumination and enhanced visibility.'], ['Superior Mileage'], ['Digital Console', 'Enhanced accuracy and readability.'], ['i3S Technology', 'Enhances fuel efficiency.']],
  featuresTitle: 'Discover what makes HF Deluxe Pro smarter',
  features: [
    { title: 'LED Headlamp', text: 'Provides brighter illumination and a wider spread across any engine speed, enhancing visibility in all conditions.', image: null },
    { title: 'xSENS Smart Sensor Technology', text: 'Intelligent sensor-based technology ensures high fuel efficiency, instant pick-up and power.', image: null },
    { title: 'Mileage', text: 'Ensuring low running cost.', image: null },
    { title: 'New Graphics', text: 'Sharp and edgy graphics offer a bold and contemporary design.', image: null },
  ],
  variants: [
    { id: 'all-black', name: 'All Black OBD2B', price: null, colours: [], image: 'all-black.webp' },
    { id: 'pro', name: 'Pro', price: null, colours: [
      { name: 'Black Nexus Blue', hex: '#1d2a6b', image: 'pro-blue.webp' }, { name: 'Black Grey Stripe', hex: '#4a4f56', image: 'pro-grey.webp' },
      { name: 'Black-Red Stripe', hex: '#a3141c', image: 'pro-red.webp' }, { name: 'Blk Funk Lime Yellow', hex: '#c9d12a', image: 'pro-yellow.webp' }] },
    { id: 'i3s-cast', name: 'i3S Cast OBD2B', price: null, colours: [] },
    { id: 'kick-cast', name: 'Kick Cast OBD2B', price: null, colours: [] },
    { id: 'self-cast', name: 'Self Cast OBD2B', price: null, colours: [] },
  ],
  variantNote: 'Hero lists these five variants. Features and specifications shown here are for the Pro, as on Hero’s page. Prices are not shown yet; ask us for the Mangalore price of each.',
  colourNote: 'Colour names are published on Hero’s page for the Pro only. Ask us which colours are in stock for the other variants.',
  specs: {"Engine": {"Type": "Air cooled, 4-stroke, Single cylinder, OHC", "Displacement": "97.2 cc", "Max. Power": "5.9 Kw @ 8000 rpm", "Max. Torque": "8.05 Nm @ 6000 rpm", "Bore x Stroke": "50.0 x 49.5 mm", "Fuel System": "Programmed Fuel Injection"}, "Transmission & Chassis": {"Clutch Type": "Multiplate Wet Type", "Transmission Type": "4-speed Constant Mesh", "Frame Type": "Tubular Double Cradle"}, "Suspension": {"Front Suspension": "Telescopic Hydraulic Shock Absorbers", "Rear Suspension": "2-Step Adjustable Hydraulic Shock Absorbers"}, "Brakes & Tyres": {"Front Tyre": "80/100-18 M/C 47P (Tubeless)", "Rear Tyre": "80/100-18 M/C 54P (Tubeless)", "Front Brake": "Drum (130 mm)", "Rear Brake": "Drum (130 mm), Integrated Braking System"}, "Dimensions": {"Overall Length": "1965 mm", "Overall Width": "720 mm", "Overall Height": "1045 mm", "Seat Height": "805 mm", "Saddle Height": "805 mm", "Wheelbase": "1235 mm", "Ground Clearance": "165 mm", "Fuel Tank Capacity": "9.6 Litre", "Kerb Weight": "112 kg"}, "Electricals": {"Starting System": "Electric Start", "Battery": "MF Battery, 12V - 3Ah", "Head Lamp": "LED Headlamp w/ HIPL", "Tail/Stop Lamp": "12V -5 / 10W - MFR", "Position Lamp": "W5W-12V", "Turn Signal Lamp": "12V - 10W x 4 - MFR"}},
  specNote: 'Specifications are for the HF Deluxe Pro as shown on Hero’s page. Mileage is the figure shown by Hero; real-world mileage varies with riding and road conditions.',
  compare: { title: 'HF Deluxe vs HF 100', heads: ['', 'HF 100', 'HF Deluxe'], rows: [['Tubeless tyres', 'No', 'Yes'], ['USB charger', 'No', 'Yes (as an accessory)'], ['i3S technology', 'No', 'Yes (selected variants)'], ['Fuel tank capacity', '9.1 litre', '9.6 litre']] },
  faq: faq('HF Deluxe', [
    ['What variants does the HF Deluxe come in?', 'Hero lists All Black OBD2B, Pro, i3S Cast OBD2B, Kick Cast OBD2B and Self Cast OBD2B.'],
    ['What colours are available?', 'The Pro is shown in Black Nexus Blue, Black Grey Stripe, Black-Red Stripe and Blk Funk Lime Yellow. Ask us what is in stock for other variants.'],
    ['How much mileage does it give?', 'Hero states 72 kmpl on its page. Everyday mileage depends on how and where you ride.'],
    ['What engine does it have?', '97.2 cc air-cooled, 4-stroke single cylinder with programmed fuel injection: 5.9 kW at 8000 rpm and 8.05 Nm at 6000 rpm, 4-speed gearbox.'],
  ]),
  related: ['HF 100', 'Splendor+', 'Passion+', 'Super Splendor Xtec'],
}
