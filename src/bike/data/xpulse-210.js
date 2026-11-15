// XPULSE 210: copied from heromotocorp.com (Xpulse 210 page). PRICES: `price: null`; Hero's Delhi prices are never used.
// PHOTOS: Hero's saved page names one colour (Glacier White); the photo was matched by looks (please confirm). The blue and silver photos are in the gallery, unnamed.
// NOTE: Hero lists variants as BASE and TOP but calls the top variant "Pro" in its specification and cluster rows; shown as "Top" here with that remark.
import { WARRANTY, OFFERS, faq } from './_std.js'

export default {
  slug: 'xpulse-210', name: 'Xpulse 210', category: 'Premium', tagline: 'Dominate any terrain',
  seoDescription: 'Hero Xpulse 210 at West Coast Motors, Mangalore: 210 cc liquid-cooled DOHC 4-valve, 24.6 PS, 6-speed with assist and slipper clutch, 210 mm travel, 3 ABS modes and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/xpulse-210.html',
  warranty: WARRANTY, offers: OFFERS, accessories: [], hero: { image: 'hero.webp' },
  layout: ['hero', 'offers', 'quick', 'features', 'colours', 'variants', 'compare', 'gallery', 'specs', 'steps', 'accessories', 'testride', 'faq', 'related'],
  quick: [['210', 'cc', 'Liquid-cooled engine'], ['24.6', 'PS', 'Max power @ 9250 rpm'], ['20.7', 'Nm', 'Max torque @ 7250 rpm'], ['210', 'mm', 'Front suspension travel']],
  featuresTitle: 'Built to explore the unknown',
  features: [
    { title: '4V DOHC Liquid Cooled Engine', text: 'Dominate any terrain with the powerful 210 cc DOHC liquid-cooled engine. Max power 24.6 PS @ 9250 rpm and max torque 20.7 Nm @ 7250 rpm.', image: null },
    { title: '6-Speed Transmission with Assist and Slipper Clutch', text: 'Lighter clutch operation during upshifts.', image: null },
    { title: 'Long-Travel Suspension', text: 'High impact absorption with 210 mm front and 205 mm rear suspension travel, for superior control with responsive braking.', image: null },
    { title: 'New High Tensile Semi-Double Cradle Frame', text: 'Frame archetype offering optimum stiffness for on and off-road riding conditions, with linkage rear suspension.', image: null },
    { title: 'Upswept Exhaust', text: 'Take on water crossings and tough trails confidently; enhances clearance and delivers a sporty growl.', image: null },
    { title: 'Class-D LED Projector Headlamp with DRL', text: 'With white light illumination for better road visibility.', image: null },
    { title: 'Instrument Cluster with Bluetooth', text: '4.2" display with Bluetooth call and SMS alerts and turn-by-turn navigation; clear readability even in bright light.', image: null },
    { title: '3 ABS Modes', text: 'Single channel with 3 ABS modes (Base); dual channel with 3 ABS modes (Top).', image: null },
  ],
  variants: [{ id: 'base', name: 'Xpulse 210 Base', price: null }, { id: 'top', name: 'Xpulse 210 Top', price: null }],
  colours: [{ name: 'Glacier White', hex: '#e9ebee', image: 'colour-glacier-white.webp' }],
  variantNote: 'Hero lists the Xpulse 210 in Base and Top. Prices are not shown yet; ask us for the Mangalore price of each.',
  colourNote: 'Hero’s saved page names one colour. The gallery shows other photos without names; ask us what is in stock.',
  compare: { title: 'Xpulse 210 Base vs Top', heads: ['', 'Base', 'Top'], rows: [['Kerb weight', '168 kg', '170 kg'], ['Instrument cluster', 'Full digital LCD', 'Full digital (TFT per specification)'], ['ABS', 'Single channel', 'Dual channel']] },
  gallery: [{ file: 'g-blue.webp', label: 'Xpulse 210, blue' }, { file: 'g-silver.webp', label: 'Xpulse 210, silver' }, { file: 'g-scenic.webp', label: 'Xpulse 210 on the trail' }, { file: 'g-snow.webp', label: 'Xpulse 210 in the snow' }, { file: 'g-dust.webp', label: 'Xpulse 210 on dirt' }, { file: 'g-wheelie.webp', label: 'Xpulse 210' }, { file: 'g-rear-wheel.webp', label: 'Xpulse 210 rear wheel' }],
  specs: {
    'Engine': { 'Type': '4 stroke, 4 valve, single cylinder, liquid cooled, DOHC', 'Bore & Stroke': '73 mm x 50 mm', 'Displacement': '210 cc', 'Compression Ratio': '12:1', 'Max. Power': '24.6 PS @ 9250 rpm', 'Max. Torque': '20.7 Nm @ 7250 rpm', 'Fuel Delivery': 'Fuel injection' },
    'Transmission & Chassis': { 'Frame Type': 'Semi double cradle of high tensile steel', 'Swing Arm': 'Rectangular swingarm with linkage rod', 'Transmission Type': '6 speed', 'Clutch Type': 'Wet type, assist and slip' },
    'Suspension': { 'Front Suspension': 'Telescopic front forks Dia 41 mm with anti-friction bush', 'Rear Suspension': 'Rectangular swingarm with 10-step adjustable gas charged monoshock', 'Front Suspension Travel': '210 mm', 'Rear Suspension Travel': '205 mm' },
    'Brakes & Tyres': { 'Front Brake': 'Disc 276 mm (petal)', 'Rear Brake': 'Disc 220 mm (petal)', 'ABS': 'Single channel with 3 ABS modes (Base); dual channel with 3 ABS modes (Top)', 'Front Tyre': '90/90-21 M/C 54H', 'Rear Tyre': '120/80-18 M/C 62H' },
    'Dimensions': { 'Overall Length': '2254 mm', 'Overall Width': '872 mm (Base) / 884 mm (Pro)', 'Overall Height': '1230 mm (Base) / 1348 mm (Pro)', 'Wheelbase': '1446 mm', 'Seat Height': '830 mm', 'Ground Clearance': '220 mm', 'Fuel Tank Capacity': '13 L', 'Kerb Weight': '168 kg (Base) / 170 kg (Pro)' },
    'Electricals': { 'Battery': '12V - 6 Ah', 'Headlight': 'Class-D LED projector with DRL', 'Taillight': 'New signature LED taillight', 'Winkers': 'LED winkers with hazard indicator switch', 'Instrument Cluster': '4.2" LCD (Base) / 4.2" TFT (Pro)', 'Connectivity': 'Bluetooth (call and SMS alerts), turn-by-turn navigation', 'Starting System': 'Electric' },
  },
  specNote: 'Specifications are as shown on Hero’s page. Hero labels the higher variant “Top” in its variant list and “Pro” in its specification table.',
  faq: faq('Xpulse 210', [
    ['What variants does it come in?', 'Hero lists the Xpulse 210 Base and Top. Top has dual channel ABS; Base has single channel ABS.'],
    ['What engine does it have?', '210 cc liquid-cooled 4-valve DOHC single cylinder: 24.6 PS at 9250 rpm and 20.7 Nm at 7250 rpm, with a 6-speed gearbox and assist and slipper clutch.'],
  ]),
  related: ['Xpulse 200 4V', 'Xtreme 250R', 'Karizma XMR', 'Harley-Davidson X440'],
}
