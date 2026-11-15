// SPLENDOR+ FAMILY: Hero shows Splendor+, Splendor+ XTEC and Splendor+ XTEC 2.0 on ONE page with model tabs, so do we.
// Everything below is copied from heromotocorp.com (Splendor Plus page). Anything Hero did not publish is null/empty on purpose.
// PRICES: leave `price: null`. Fill the Mangalore ex-showroom price (e.g. '₹ 78,000') per variant when ready.
// PHOTOS: colour photos were matched to colour names by looks; check them. Folder: public/images/splendor-plus/
import { WARRANTY, OFFERS, FINANCE, faq } from './_std.js'

const common = {
  category: '100 cc',
  tagline: 'World’s No.1 Motorcycle',
  seoDescription: 'Splendor+, Splendor+ XTEC and Splendor+ XTEC 2.0 at West Coast Motors, Mangalore: 97.2 cc, up to 70 kmpl claimed with E20 fuel. Compare models and book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/practical/splendor-plus.html',
  warranty: WARRANTY, offers: OFFERS, finance: FINANCE,
  featuresTitle: 'Discover what makes it special',
  hero: { image: null },
  accessories: [],
  related: ['HF Deluxe', 'Passion+', 'Super Splendor Xtec', 'Glamour'],
}
const quick = [['70', 'kmpl*', 'Claimed mileage, E20 fuel'], ['97.2', 'cc', 'Engine displacement'], ['5.9', 'kW', 'Max power @ 8000 rpm'], ['8.05', 'Nm', 'Max torque @ 6000 rpm']]
const MIL = '*Mileage claim as published by Hero MotoCorp for E20 fuel. Real-world mileage varies with riding style, load and road.'
const f = (title, text) => ({ title, text, image: null })
const mk = (id, name, extra) => ({ id, name, quick, specNote: MIL, ...extra })

export default {
  ...common, slug: 'splendor-plus', name: 'Splendor+ family',
  layout: ['hero', 'offers', 'quick', 'highlights', 'features', 'colours', 'variants', 'compare', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],
  faq: faq('Splendor+', [
    ['Which Splendor+ models are there?', 'Splendor+, Splendor+ XTEC and Splendor+ XTEC 2.0. XTEC adds a full digital meter with real-time mileage, LED position light, a mobile charging port and a front disc brake option. XTEC 2.0 adds Bluetooth call and SMS alerts, a hinged utility case and a full LED headlamp.'],
    ['What mileage does it give?', 'Hero highlights up to 70 kmpl with E20 fuel for all three models. Real-world mileage depends on how and where you ride. Ask us for guidance.'],
    ['What engine does it have?', '97.2 cc, air-cooled, 4-stroke, single cylinder, OHC with programmed fuel injection. 5.9 kW at 8000 rpm and 8.05 Nm at 6000 rpm, 4-speed constant mesh gearbox.'],
    ['Which colours are available?', 'Hero says Splendor+ comes in 11 colours and XTEC and XTEC 2.0 in 3 each. Ask us what is in stock at the showroom.'],
  ]),
  models: [
    mk('splendor', 'Splendor+', {
      overview: { title: 'The legend, reborn', intro: 'World’s No.1 motorcycle, with Hero’s xSENS fuel injection for best-in-class mileage, an integrated braking system and decades of proven reliability.', images: ['ov-1.webp', 'ov-2.webp'] },
      highlights: [['Iconic Design'], ['Superior Mileage', 'xSENS Fi technology for best-in-class mileage'], ['Peace of Mind', '5-year warranty for complete peace of mind'], ['Unmatched Reliability', 'Decades of trust and unmatched reliability'], ['Integrated Braking System', 'Optimal front and rear braking for a safe ride']],
      features: [f('Superior Mileage', '70 kmpl with E20 fuel*'), f('Stylish Cluster', 'Analog meter that speaks legacy, character that never goes out of style.'), f('i3S Technology', 'Hero’s idle stop-start (i3S) improves fuel efficiency by switching the engine off when idling at a traffic signal.'), f('5 Step adjustable suspension', 'Adjust the rear suspension to your load for a comfortable ride.'), f('Side Stand Engine Cut-off', 'Prevents the bike from moving while the side stand is engaged.'), f('Tubeless Tyres', 'Durable ride and low-pressure running.')],
      fuelClaim: '70 kmpl*',
      specs: {"Engine": {"Engine Type": "Air cooled, 4-stroke, Single cylinder, OHC", "Displacement": "97.2 cc", "Max. Power": "5.9 Kw @ 8000 rpm", "Max. Torque": "8.05 Nm @ 6000 rpm", "Bore x Stroke": "50.0 x 49.5 mm", "Fuel System": "Programmed Fuel Injection"}, "Transmission & Chassis": {"Clutch Type": "Multiplate Wet Type", "Transmission Type": "4-speed Constant Mesh", "Frame Type": "Tubular Double Cradle"}, "Suspension": {"Front Suspension Type": "Telescopic Hydraulic Shock Absorbers", "Rear Suspension Type": "Swingarm with 5-Step Adjustable Hydraulic Shock Absorbers"}, "Brakes & Tyres": {"Wheels Type": "Alloy", "Front Tyre": "80/100-18 M/C 47P (Tubeless)", "Rear Tyre": "80/100-18 M/C 54P (Tubeless)"}, "Dimensions": {"Overall Length": "2000 mm", "Overall Width": "720 mm", "Overall Height": "1052 mm", "Saddle Height": "785", "Wheelbase": "1236", "Ground Clearance": "165", "Fuel Tank Capacity": "9.8 L", "Kerb Weight": "112 kg"}, "Electricals": {"Starting Method": "Electric Start", "Battery (V-Ah)": "MF Battery, 12V - 3Ah", "Head Lamp": "12V 35 /35W Halogen Bulb MFR", "Position Lamp": "LED", "Tail/Stop Lamp": "12V -5 / 10W - Multi Focus Reflector", "Turn Signal Lamp": "12V - 10W x 4 Multi Focus Reflector"}},
      variants: [{ id: 'drum', name: 'Drum Brake OBD2B', price: null }, { id: 'i3s', name: 'i3S OBD2B', price: null }, { id: 'special', name: 'Special Editions OBD2B', price: null }, { id: 'm125', name: '125 Million Edition', price: null }],
      variantNote: 'Hero lists these four variants. Prices are not shown here; ask us for the Mangalore price of each.',
      colours: [
        { name: 'Blue Black', hex: '#1e3a6e', image: 'blue-black.webp' }, { name: 'Red Black', hex: '#9b1c1c', image: 'red-black.webp' }, { name: 'Force Silver', hex: '#b8bec6', image: 'force-silver.webp' },
        { name: 'Black Heavy Grey', hex: '#3d4147', image: null }, { name: 'Black Tornado Grey', hex: '#4a4f56', image: null }, { name: 'Black Sparking Blue', hex: '#1b2f5b', image: null },
        { name: 'Black Red Purple', hex: '#4a1d33', image: null }, { name: 'Sports Red Black', hex: '#b01620', image: null }],
      colourNote: 'Hero says Splendor+ comes in 11 colours. These eight names are the ones published on its page; more will be added when confirmed.',
    }),
    mk('splendor-xtec', 'Splendor+ XTEC', {
      overview: { title: 'More tech, same Splendor', intro: 'Everything you trust in the Splendor+, plus a full digital meter with real-time mileage, Bluetooth call and SMS alerts and a front disc brake option.', images: ['ov-2.webp', 'ov-1.webp'] },
      highlights: [['Iconic Design'], ['Superior Mileage', 'xSENS Fi tech for best-in-class mileage'], ['Advanced Tech', 'Full digital meter with RTMI'], ['Advanced Safety', 'Superior stopping power with front disc brake'], ['Advanced Connectivity', 'Bluetooth with call and SMS alert']],
      features: [f('Superior Mileage', 'An incredible 70 kmpl with E20 fuel compatibility, ensuring fewer stops and more savings.*'), f('LED Position Light', 'A distinctive, modern signature LED position light.'), f('Mobile charging port', 'Keep your devices powered on the go with the built-in mobile charging port.'), f('i3S Technology', 'Saves fuel by switching the engine off automatically during traffic idles.'), f('Plush Seat', 'A longer, ergonomically designed seat built for relaxed journeys.'), f('Real Time Mileage Indicator (RTMI)', 'Real-time fuel efficiency updates on the instrument console.'), f('Side Stand Engine Cut-off', 'Prevents the bike from moving while the side stand is engaged.')],
      fuelClaim: '70 kmpl*',
      specs: {"Engine": {"Engine Type": "Air cooled, 4-stroke, Single cylinder, OHC", "Displacement": "97.2 cc", "Max. Power": "5.9 Kw @ 8000 rpm", "Max. Torque": "8.05 Nm @ 6000 rpm", "Bore x Stroke": "50.0 x 49.5 mm", "Fuel System": "Programmed Fuel Injection"}, "Transmission & Chassis": {"Clutch Type": "Multiplate Wet Type", "Transmission Type": "4-speed Constant Mesh", "Frame Type": "Tubular Double Cradle"}, "Suspension": {"Front Suspension Type": "Telescopic Hydraulic Shock Absorbers", "Rear Suspension Type": "Swingarm with 5-Step Adjustable Hydraulic Shock Absorbers"}, "Brakes & Tyres": {"Wheels Type": "Alloy", "Front Tyre": "80/100-18 M/C 47P (Tubeless)", "Rear Tyre": "80/100-18 M/C 54P (Tubeless)"}, "Dimensions": {"Overall Length": "2000 mm", "Overall Width": "720 mm", "Overall Height": "1052 mm", "Saddle Height": "785", "Wheelbase": "1236", "Ground Clearance": "165", "Fuel Tank Capacity": "9.8 L", "Kerb Weight": "112 kg"}, "Electricals": {"Starting Method": "Electric Start", "Battery (V-Ah)": "MF Battery, 12V - 3Ah", "Head Lamp": "12V 35 /35W Halogen Bulb MFR", "Position Lamp": "LED", "Tail/Stop Lamp": "12V -5 / 10W - Multi Focus Reflector", "Turn Signal Lamp": "12V - 10W x 4 Multi Focus Reflector"}},
      variants: [{ id: 'drum', name: 'Drum Brake OBD2B', price: null }, { id: 'disc', name: 'Disc Brake OBD2B', price: null }],
      variantNote: 'Prices are not shown here; ask us for the Mangalore price of each.',
      colours: [{ name: 'Black Tornado Grey', hex: '#4a4f56', image: 'xtec-black-tornado-grey.webp' }],
      colourNote: 'Hero says XTEC comes in 3 colours; only this name is published on the page we have, so the others will be added when confirmed.',
    }),
    mk('splendor-xtec-2-0', 'Splendor+ XTEC 2.0', {
      overview: { title: 'The most advanced Splendor+', intro: 'Digital meter with Bluetooth connectivity, hazard lights, a full LED headlamp with signature HIPL and a hinged utility case, with Hero’s best-in-class fuel economy claim.', images: ['ov-1.webp', 'ov-2.webp'] },
      highlights: [['Iconic Design'], ['Best in Class Fuel Economy', '70 kmpl with E20 fuel*'], ['Advanced Tech', 'Digital meter with Bluetooth connectivity'], ['Advanced Safety', 'Hazard lights for better road visibility'], ['Unmistakable Full LED Style', 'Full LED headlamp with signature HIPL']],
      features: [f('Bluetooth with call & SMS alert', 'Stay connected on every ride with seamless Bluetooth connectivity for your smartphone.'), f('Spacious utility case with hinge', 'Access essentials and documents easily through the hinged utility case.'), f('Plush Seat', 'A longer, ergonomically designed seat for comfort on longer journeys.'), f('Real Time Mileage Indicator (RTMI)', 'Real-time fuel efficiency updates on the instrument console.'), f('i3S Technology', 'Saves fuel by switching the engine off automatically during traffic idles.'), f('Mobile charging port', 'Built-in mobile charging port to keep devices powered on the go.'), f('Side Stand Engine Cut-off', 'Prevents the bike from moving while the side stand is engaged.')],
      fuelClaim: '70 kmpl*',
      specs: {"Engine": {"Engine Type": "Air cooled, 4-stroke, Single cylinder, OHC", "Displacement": "97.2 cc", "Max. Power": "5.9 Kw @ 8000 rpm", "Max. Torque": "8.05 N-m @ 6000 rpm", "Bore x Stroke": "50.0 x 49.5 mm", "Fuel System": "Programmed Fuel Injection"}, "Transmission & Chassis": {"Clutch Type": "Multiplate Wet Type", "Transmission Type": "4-speed Constant Mesh", "Frame Type": "Tubular Double Cradle"}, "Suspension": {"Front Suspension Type": "Telescopic Hydraulic Shock Absorbers", "Rear Suspension Type": "Swingarm with 5-Step Adjustable Hydraulic Shock Absorbers"}, "Brakes & Tyres": {"Wheels Type": "Alloy", "Front Tyre": "80/100-18 M/C 47P (Tubeless)", "Rear Tyre": "80/100-18 M/C 54P (Tubeless)"}, "Dimensions": {"Overall Length": "2000 mm", "Overall Width": "720 mm", "Overall Height": "1052 mm", "Saddle Height": "785", "Wheelbase": "1236", "Ground Clearance": "165", "Fuel Tank Capacity": "9.8 L", "Kerb Weight": "112 kg"}, "Electricals": {"Starting Method": "Electric Start", "Battery (V-Ah)": "MF Battery, 12-4Ah/ETZ-5", "Head Lamp": "LED", "Position Lamp": "LED (Integrated type)"}},
      variants: [{ id: 'drum', name: 'Drum Brake OBD2B', price: null }],
      colours: [{ name: 'Black Heavy Grey', hex: '#3d4147', image: 'xtec2-black-heavy-grey.webp' }],
      colourNote: 'Hero says XTEC 2.0 comes in 3 colours; only this name is published on the page we have, so the others will be added when confirmed.',
    }),
  ],
}
