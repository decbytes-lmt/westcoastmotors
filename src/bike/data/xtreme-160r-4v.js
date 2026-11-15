// XTREME 160R 4V: every value below was copied from heromotocorp.com/en-in/motorcycles/xtreme-160r-4v.html.
// Anything Hero did not publish is left null/empty on purpose (price, mileage, accessories, variant price).
// PHOTOS: six colour photos matched to names by looks (Pro Black vs Carbon Black especially): please confirm. Standard has only a 'coming soon' image on Hero, so no photo.
// EDIT FREELY. Photos: drop files in public/images/xtreme-160r-4v/ and put the file name in the `image` fields.
export default {
  slug: 'xtreme-160r-4v',
  name: 'Xtreme 160R 4V',
  category: 'Premium',
  tagline: 'The Adrenaline Machine',
  seoDescription: 'Xtreme 160R 4V at West Coast Motors, Mangalore: 163.2 cc 4-valve oil-cooled engine, Ride By Wire, cruise control, TFT display and dual channel ABS. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/xtreme-160r-4v.html',
  brochure: 'https://www.heromotocorp.com/content/dam/hero-commerce/in/en/products/performance/content-fragments/xtreme-160r-4v/assets/xtreme-160r-4v-brochure-new.pdf',
  warranty: '5 years or 70,000 km (whichever comes first), as stated by Hero MotoCorp',

  layout: ['hero', 'quick', 'overview', 'features', 'colours', 'variants', 'compare', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],
  featuresTitle: 'Discover what makes it the Adrenaline Machine',
  variantNote: 'Hero MotoCorp does not publish separate prices or a feature-by-feature comparison for Carbon, Pro and Standard, so none are shown here. Ask us for the current difference.',
  compare: { title: 'How it improves on the Xtreme 160R', heads: ['', 'Xtreme 160R', 'Xtreme 160R 4V'], rows: [['0–60 km/h', '4.5 s', '4.4 s'], ['Engine', '2V, air-cooled', '4V, oil-cooled'], ['Display', 'LCD', 'TFT'], ['Ride By Wire', 'No', 'Yes'], ['Cruise control', 'No', 'Yes']] },
  hero: { image: null },                                   // wide hero photo, e.g. 'hero.jpg'
  overview: {
    intro: 'An aggressive, agile 160 cc motorcycle with a 4-valve oil-cooled engine, Ride By Wire throttle and a feature list that reaches well beyond the segment. Hero describes it as the fastest 160 cc in its class, with 0–60 km/h in 4.4 s.',
    points: [
      ['New Cybersharp', 'Design'],
      ['Adrenaline', 'Machine'],
      ['TFT with 60+ features', 'Technology'],
      ['Ride By Wire', 'Control'],
      ['Upside Down Forks', 'Agility'],
    ],
    note: '0–60 km/h in 4.4 s as per Hero MotoCorp internal testing, compared with air-cooled 160 cc motorcycles.',
    images: [null, null],                                  // two editorial photos
  },

  // Quick specs strip: [value, unit, label]
  quick: [
    ['163.2', 'cc', 'Engine displacement'],
    ['17.1', 'ps', 'Max power @ 8750 rpm'],
    ['14.6', 'Nm', 'Max torque @ 6500 rpm'],
    ['5', 'speed', 'Constant mesh transmission'],
    ['ABS', 'dual channel', 'Braking system'],
  ],

  // Variants named on Hero's FAQ. Hero publishes no variant prices or per-variant spec table, so price stays null.
  variants: [
    { id: 'carbon', name: 'Carbon', price: null, blurb: 'Carbon colour range.',
      colours: [
        { name: 'Carbon Red', hex: '#c8102e', image: 'colour-carbon-red.webp' },
        { name: 'Carbon Black', hex: '#15161a', image: 'colour-carbon-black.webp' },
        { name: 'Carbon Grey', hex: '#6b7078', image: 'colour-carbon-grey.webp' },
        { name: 'Abrax Orange', hex: '#ff6a13', image: 'colour-abrax-orange.webp' },
      ] },
    { id: 'pro', name: 'Pro', price: null, blurb: 'Pro colour range.',
      colours: [
        { name: 'Pro Black', hex: '#0d0d10', image: 'colour-pro-black.webp' },
        { name: 'Pro Red', hex: '#d3202a', image: 'colour-pro-red.webp' },
      ] },
    { id: 'standard', name: 'Standard', price: null, blurb: 'Colours not yet published by Hero.', colours: [] },
  ],

  // Key features, grouped. Only features Hero lists for this model.
  features: {
    'Design and styling': [
      { title: 'New Cybersharp design', text: 'Sharp, aggressive styling that gives the Xtreme 160R 4V its stance.', image: null },
      { title: 'Class D LED headlamp', text: 'LED headlamp that switches on automatically.', image: null },
    ],
    'Performance': [
      { title: '4-valve oil-cooled engine', text: '163.2 cc, 4-stroke single cylinder engine making 17.1 ps and 14.6 Nm.', image: null },
      { title: 'Ride By Wire, 3 ride modes', text: 'Rain, Road and Sports modes adapt the bike to the road you are on.', image: null },
      { title: 'Upside Down golden forks', text: 'USD front suspension for confident cornering.', image: null },
    ],
    'Technology': [
      { title: '10.67 cm TFT display', text: 'Multicolour display with 60+ features and connectivity.', image: null },
      { title: 'Drag race timer', text: 'Two drag modes (0–60 km/h and quarter mile), plus top speed and lap timers.', image: null },
    ],
    'Safety': [
      { title: 'Dual channel ABS', text: 'Anti-lock braking on both wheels for safer, more stable stops.', image: null },
      { title: 'Panic brake alert', text: 'Winkers flash when you brake hard to warn riders behind. Hero calls it a first in the segment.', image: null },
    ],
    'Comfort and convenience': [
      { title: 'Cruise control', text: 'Set a speed and hold it on long stretches.', image: null },
      { title: 'USB Type-C charging', text: 'Charge your phone on the move.', image: null },
    ],
  },

  specs: {
    'Engine': { 'Engine type': '4V, oil-cooled, 4-stroke single cylinder', 'Displacement': '163.2 cc', 'Bore x stroke': '66.5 x 47 mm', 'Compression ratio': '10.1', 'Max power': '17.1 ps @ 8750 rpm', 'Max torque': '14.6 Nm @ 6500 rpm', 'Fuel type': 'E20', 'Throttle': 'Electronic (Ride By Wire)' },
    'Dimensions': { 'Overall length': '1977 mm', 'Overall width': '793 mm', 'Overall height': '1052 mm', 'Wheelbase': '1329 mm', 'Ground clearance': '165 mm', 'Seat height': '805 mm', 'Kerb weight': '149 kg', 'Seating capacity': '2' },
    'Transmission': { 'Gearbox': '5-speed constant mesh', 'Clutch': 'Multiplate wet clutch' },
    'Chassis and suspension': { 'Frame': 'Tubular underbone diamond type', 'Swingarm': 'Box type (50 x 30 rectangular tube)', 'Front suspension': 'USD fork, 37 mm dia., 130 mm stroke', 'Rear suspension': 'Monoshock, 39 mm stroke' },
    'Brakes and tyres': { 'Front brake': '276 mm petal disc', 'Rear brake': '220 mm petal disc', 'ABS': 'Dual channel', 'Wheels': 'Alloy, black rims', 'Front tyre': '100/80-17 tubeless', 'Rear tyre': '130/70 R17 tubeless' },
    'Electrical system': { 'Battery': '12 V, 6 Ah (VRLA)', 'Starting': 'Electric', 'Lighting': 'LED headlamp, position lamp, tail lamp and winkers', 'Charging port': 'USB Type-C', 'Handlebar switches': 'Non-illuminated' },
    'Performance': { '0–60 km/h': '4.41 s', '0–100 km/h': '19.05 s' },
    'Other specifications': { 'Ride modes': '3 (Rain, Road, Sports)', 'Display': '10.67 cm multicolour TFT, 60+ features', 'Cruise control': 'Yes' },
  },

  finance: {
    // Shown on Hero's page as a festive promotion; may change or end. Shown with a caveat, never as a guarantee.
    promo: ['EMI starting at ₹1,200 per month', 'Interest rate from 0% (select schemes)'],
    promoNote: 'As displayed on Hero MotoCorp’s page during its festive offer. Offers vary by financier and date; ask our team for what is live today.',
  },

  accessories: [],     // Hero lists none for this model. Add { name, description, image } objects when you have real ones.

  faq: [
    ['What is the price of the Xtreme 160R 4V in Mangalore?', 'Hero publishes the ex-showroom price city-wise and our price list is not final on this page yet. Ask us for today’s ex-showroom and on-road price. On-road price depends on RTO charges and insurance.'],
    ['What mileage does it give?', 'Hero does not publish a verified mileage figure for this model on its page. It positions the bike as a balance of performance and efficiency for city and highway use. Ask us for current guidance.'],
    ['What engine does it have?', '163.2 cc, 4-valve, oil-cooled, 4-stroke single cylinder. 17.1 ps at 8750 rpm and 14.6 Nm at 6500 rpm, 5-speed gearbox, E20 fuel compatible.'],
    ['What are the key features?', 'Ride By Wire with Rain, Road and Sports modes, cruise control, 10.67 cm TFT with 60+ features and connectivity, drag race timer, dual channel ABS, panic brake alert, Class D LED headlamp and upside down forks.'],
    ['Which colours are available?', 'Carbon variant: Carbon Red, Carbon Black, Carbon Grey and Abrax Orange. Pro variant: Pro Black and Pro Red. Availability at the showroom may vary.'],
    ['What variants are there?', 'Hero lists Carbon, Pro and Standard variants. Variant prices are not published on Hero’s page, so contact us for the latest.'],
    ['How do I book a test ride or the bike?', 'Fill the test ride form on this page, WhatsApp us, call the showroom, or walk in at Kankanady, Mangalore.'],
  ],

  related: ['Xtreme 250R', 'Xtreme 160R', 'Xpulse 210', 'Karizma XMR'],
}
