// FLEX FUEL FAMILY: Hero shows Splendor+ Flex and HF Deluxe Flex on ONE page with two tabs; so do we.
// Copied from heromotocorp.com (Flexible Fuel E85 page). PRICES: `price: null`; Hero's Delhi prices are never used.
// PHOTOS: Lime Yellow bike photos matched to each model by looks: please confirm. Folder: public/images/splendor-hf-flex/
import { WARRANTY, OFFERS, faq } from './_std.js'

const common = {
  category: '100 cc', tagline: 'Ready for the fuel of tomorrow',
  seoDescription: 'Hero Splendor+ Flex and HF Deluxe Flex at West Coast Motors, Mangalore: Hero’s first flex-fuel motorcycles, compatible with E20 to E85 ethanol blends, 97.2 cc, 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/flexible-fuel-e85.html',
  warranty: WARRANTY, offers: OFFERS, accessories: [], hero: { image: null },
  layout: ['hero', 'offers', 'quick', 'sec:flex', 'features', 'colours', 'variants', 'sec:planet', 'specs', 'steps', 'accessories', 'testride', 'faq', 'related'],
  featuresTitle: 'Discover what makes it special',
  sections: [
    { id: 'flex', nav: 'Flex Fuel', eyebrow: 'Flex Fuel', title: 'Hero’s first flex-fuel motorcycles', dark: true,
      intro: 'Developed at Hero’s Centre for Innovation & Technology (CIT) in Jaipur, the Splendor+ Flex Fuel and HF Deluxe Flex Fuel combine trusted Hero reliability with future-ready engineering.',
      items: [
        { title: 'Adaptable performance', text: 'Fully compatible with ethanol flex-fuel blends ranging from E20 to E85.' },
        { title: 'Future-proof ownership', text: 'Ride with confidence as India’s fuel landscape evolves, without compromising on reliability, power and practicality.' },
        { title: 'Proven reliability', text: 'Built on Hero’s trusted 100 cc platform, trusted by millions for everyday commuting.' },
        { title: 'Higher power and torque with E85', text: 'Hero states 7% higher power and 3% higher torque with E85 fuel.' },
      ] },
    { id: 'planet', nav: 'Cleaner tomorrow', eyebrow: 'A cleaner tomorrow', title: 'Better for the road ahead', alt: true,
      items: [
        { title: '77% lower CO', text: 'Reduction in carbon monoxide (CO) emissions, as stated by Hero.' },
        { title: '14% lower THC', text: 'Reduction in total hydrocarbons (THC) emissions, as stated by Hero.' },
        { title: '40% lower NMHC', text: 'Reduction in non-methane hydrocarbons (NMHC) emissions, as stated by Hero.' },
        { title: 'Drive a better tomorrow', text: 'Helps reduce crude oil imports, supports farmers and agriculture, lower carbon emissions than petrol, renewable and locally produced.' },
      ] },
  ],
  related: ['Splendor+', 'HF Deluxe', 'Passion+', 'Super Splendor Xtec'],
}
const quick = [['E20–E85', '', 'Flex-fuel compatible'], ['97.2', 'cc', 'Displacement'], ['6.3', 'kW', 'Max power with E85 @ 8000 rpm'], ['8.3', 'Nm', 'Max torque with E85 @ 6000 rpm']]
const NOTE = 'Power and torque figures are with E85 fuel, as shown by Hero. Real-world performance varies with fuel, riding and road conditions.'
const f = (title, text, image) => ({ title, text, image: image || null })

export default {
  ...common, slug: 'splendor-flex', folder: 'splendor-hf-flex', name: 'Splendor+ Flex and HF Deluxe Flex',
  faq: faq('Splendor+ Flex', [
    ['What is a flex-fuel motorcycle?', 'Hero describes these as its first flex-fuel motorcycles, compatible with ethanol blends from E20 to E85 (fuel compatibility listed as E5 to E85).'],
    ['Which models are there?', 'Splendor+ Flex and HF Deluxe Flex, both on Hero’s 97.2 cc platform.'],
    ['What colour does it come in?', 'Hero shows Lime Yellow for both models. Ask us what is in stock.'],
  ]),
  models: [
    { id: 'splendor-flex', name: 'Splendor+ Flex', quick, specNote: NOTE,
      features: [
        f('New Digi-Analog Meter', 'New Digi-Analog Meter with ethanol blend, i3S, side stand and headlight indicators.', 'feat-meter.webp'),
        f('Distinctive Flex Fuel Styling', 'Bold new graphics that highlight its advanced Flex Fuel identity.', 'feat-graphics.webp'),
        f('Improved Performance On Every Ride', 'Delivers 7% higher power and 3% higher torque for a stronger ride experience with E85 Fuel.', 'feat-performance.webp'),
        f('i3S Technology', 'Automatically switches off the engine at idle to help improve fuel efficiency.', 'feat-i3s.webp'),
        f('Plush & Comfortable Seat', 'Long and well-cushioned seat designed for everyday riding comfort.', 'feat-seat.webp'),
        f('USB Charging', 'Charge your mobile conveniently, wherever the road takes you.', 'feat-usb.webp'),
      ],
      variants: [{ id: 'flex', name: 'Splendor+ Flex', price: null, colours: [{ name: 'Lime Yellow', hex: '#c9d12a', image: 'splendor-lime-yellow.webp' }] }],
      variantNote: 'Hero lists one variant, in Lime Yellow. Prices are not shown yet; ask us for the Mangalore price.',
      specs: {
        'Engine': { 'Type': 'Air cooled, 4-stroke, single cylinder, OHC', 'Displacement': '97.2 cc', 'Max. Power': '6.3 kW (with E85) @ 8000 rpm', 'Max. Torque': '8.3 Nm (with E85) @ 6000 rpm', 'Bore x Stroke': '50.0 x 49.5 mm', 'Fuel Compatibility': 'E5 to E85 fuel' },
        'Transmission & Chassis': { 'Frame Type': 'Tubular double cradle', 'Transmission Type': '4-speed constant mesh', 'Clutch Type': 'Multiplate wet type', 'Starting System': 'Electric start' },
        'Suspension': { 'Front Suspension': 'Telescopic hydraulic shock absorbers', 'Rear Suspension': '5-step adjustable hydraulic shock absorbers' },
        'Brakes & Tyres': { 'Front Tyre': '80/100-18 M/C 47P', 'Rear Tyre': '80/100-18 M/C 54P' },
        'Dimensions': { 'Overall Length': '2000 mm', 'Overall Width': '720 mm', 'Overall Height': '1052 mm', 'Saddle Height': '785 mm', 'Wheelbase': '1236 mm', 'Ground Clearance': '165 mm', 'Kerb Weight': '113 kg' },
        'Electricals': { 'Battery': 'MF Battery, 12V - 3Ah', 'Head Lamp': '12V 35/35W halogen bulb', 'Tail/Stop Lamp': '12V - 5/10W - MFR', 'Turn Signal Lamp': '12V - 10W x 4 - MFR', 'USB Charger': '1A +/- 50 mA (output current)' },
      } },
    { id: 'hf-deluxe-flex', name: 'HF Deluxe Flex', quick, specNote: NOTE,
      features: [
        f('New Digi-Analog Meter', 'Advanced Digi-Analog Meter with ethanol blend and ride status indicators.', 'feat-meter-hf.webp'),
        f('Distinctive Flex Fuel Styling', 'Fresh graphics that reflect the motorcycle’s Flex Fuel capability.', 'feat-graphics.webp'),
        f('Improved Performance On Every Ride', 'Enhanced performance with 7% higher power and 3% higher torque with E85 Fuel.', 'feat-performance.webp'),
        f('Plush & Comfortable Seat', 'Designed to keep you comfortable through daily commutes and beyond.', 'feat-seat.webp'),
      ],
      variants: [{ id: 'flex', name: 'HF Deluxe Flex', price: null, colours: [{ name: 'Lime Yellow', hex: '#c9d12a', image: 'hf-lime-yellow.webp' }] }],
      variantNote: 'Hero lists one variant, in Lime Yellow. Prices are not shown yet; ask us for the Mangalore price.',
      specs: {
        'Engine': { 'Type': 'Air cooled, 4-stroke, single cylinder, OHC', 'Displacement': '97.2 cc', 'Max. Power': '6.3 kW (with E85) @ 8000 rpm', 'Max. Torque': '8.3 Nm (with E85) @ 6000 rpm', 'Bore x Stroke': '50.0 x 49.5 mm', 'Fuel Compatibility': 'E5 to E85 fuel' },
        'Transmission & Chassis': { 'Frame Type': 'Tubular double cradle', 'Transmission Type': '4-speed constant mesh', 'Clutch Type': 'Multiplate wet type', 'Starting System': 'Electric start' },
        'Suspension': { 'Front Suspension': 'Telescopic hydraulic shock absorbers', 'Rear Suspension': 'Swingarm with 2-step adjustable hydraulic shock absorbers' },
        'Brakes & Tyres': { 'Front Tyre': '80/100-18 M/C 47P', 'Rear Tyre': '80/100-18 M/C 54P' },
        'Dimensions': { 'Overall Length': '1965 mm', 'Overall Width': '720 mm', 'Overall Height': '1045 mm', 'Wheelbase': '1235 mm', 'Saddle Height': '805 mm', 'Ground Clearance': '165 mm', 'Kerb Weight': '112.5 kg' },
        'Electricals': { 'Battery': 'MF Battery, 12V - 3Ah', 'Head Lamp': '12V 35/35W halogen bulb', 'Tail/Stop Lamp': '12V - 5/21W - MFR', 'Turn Signal Lamp': '12V - 10W x 4 - MFR' },
      } },
  ],
}
