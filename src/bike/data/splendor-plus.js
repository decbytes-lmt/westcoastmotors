// SPLENDOR+ FAMILY: Hero shows Splendor+, Splendor+ XTEC and Splendor+ XTEC 2.0 on ONE page with model tabs.
// Same here. Highlights, feature names and colour names are copied from heromotocorp.com. Hero did not publish
// descriptions, prices, power or most specs in a form we could read, so those are left empty rather than guessed.
// Short feature descriptions below are our own plain-English wording of the feature name.
const T = { i3s: 'Hero’s idle stop-start system (i3S) switches the engine off at a standstill and restarts it when you pull the clutch.',
  sse: 'The engine cuts off if the side stand is down, so you cannot ride away by mistake.',
  usb: 'Charge your phone on the move.', rtmi: 'Shows your mileage live on the console.' }

const common = {
  category: '100 cc',
  tagline: 'World’s No.1 Motorcycle',
  seoDescription: 'Splendor+, Splendor+ XTEC and Splendor+ XTEC 2.0 at West Coast Motors, Mangalore. Compare features, colours and specs and book a test ride.',
  warranty: '5 years or 70,000 km (whichever comes first), as stated by Hero MotoCorp',
  offers: [['Free roadside assistance', '1 year on online bookings. T&C apply.'], ['Exchange your old vehicle', 'Corporate offers. T&C apply.'], ['5-year warranty', '5 years or 70,000 km, whichever comes first']],
  featuresTitle: 'Discover what makes it smarter',
  specNote: 'Hero MotoCorp publishes the full specification sheet in its brochure. Ask our team and we will share it.',
  finance: { promo: ['EMI starting at ₹1,200 per month'], promoNote: 'As displayed on Hero MotoCorp’s page. Actual EMI depends on the financier. Ask our team for live offers.' },
  accessories: [],
  faq: [
    ['What is the price in Mangalore?', 'Ex-showroom prices vary by city and variant. Ask us for today’s Mangalore price. On-road price also depends on RTO charges and insurance.'],
    ['What colours are available?', 'Hero says Splendor+ comes in 11 colours, and Splendor+ XTEC and XTEC 2.0 in 3 each. Ask us what is in stock.'],
    ['What mileage does it give?', 'Hero highlights superior mileage for all three, and calls the XTEC 2.0 best-in-class for fuel economy. No single verified figure is published on the page, so ask us for guidance.'],
    ['What engine does it have?', '97.2 cc, air-cooled, 4-stroke, single cylinder, OHC. Max torque 8.05 Nm at 6000 rpm.'],
    ['Which model should I choose?', 'Splendor+ is the classic. XTEC adds a digital meter with real-time mileage, LED position light and a mobile charging port. XTEC 2.0 adds Bluetooth call and SMS alerts and a hinged utility case. See the compare table on this page.'],
    ['How do I book a test ride?', 'Use the form on this page, WhatsApp us, call the showroom, or walk in at Kankanady, Mangalore.'],
    ['Can I get finance?', 'Yes. We help with financing and documents. Use the EMI estimator on this page, then ask us for live options.'],
  ],
  related: ['HF Deluxe', 'Passion+', 'Super Splendor Xtec', 'Glamour'],
}
const quick = [['97.2', 'cc', 'Engine displacement'], ['8.05', 'Nm', 'Max torque @ 6000 rpm'], ['Air', 'cooled', '4-stroke, single cylinder, OHC']]
const specs = { 'Engine': { 'Engine type': 'Air cooled, 4-stroke, single cylinder, OHC', 'Displacement': '97.2 cc', 'Max torque': '8.05 Nm @ 6000 rpm' } }
const f = (title, text) => ({ title, text: text || '', image: null })

export default {
  ...common, slug: 'splendor-plus', name: 'Splendor+ family', hero: { image: null },
  layout: ['hero', 'offers', 'quick', 'highlights', 'features', 'colours', 'variants', 'compare', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],
  models: [
    { id: 'splendor', name: 'Splendor+', fuelClaim: 'Superior Mileage', quick, specs,
      highlights: [['Iconic Design'], ['Superior Mileage'], ['Peace of Mind'], ['Unmatched Reliability'], ['Integrated Braking System']],
      features: [f('Superior Mileage'), f('Stylish Cluster'), f('i3S Technology', T.i3s), f('5 Step adjustable suspension'), f('Side Stand Engine Cut-off', T.sse), f('Tubeless Tyres')],
      variants: [{ id: 'std', name: 'Standard', price: null }],
      colours: [{ name: 'Blue Black', hex: '#1e3a6e', image: null }, { name: 'Red Black', hex: '#9b1c1c', image: null }],
      colourNote: 'Hero lists 11 colours for Splendor+. Only these two names are published on its page, so more will be added when confirmed.' },
    { id: 'splendor-xtec', name: 'Splendor+ XTEC', fuelClaim: 'Superior Mileage', quick, specs,
      highlights: [['Iconic Design'], ['Superior Mileage'], ['Full Digital Meter with RTMI'], ['Advanced Tech'], ['Advanced Safety'], ['Advanced Connectivity']],
      features: [f('Superior Mileage'), f('LED Position Light'), f('Mobile charging port', T.usb), f('i3S Technology', T.i3s), f('Plush Seat'), f('Real Time Mileage Indicator (RTMI)', T.rtmi), f('Side Stand Engine Cut-off', T.sse)],
      variants: [{ id: 'drum', name: 'Drum Brake', price: null }, { id: 'disc', name: 'Disc Brake', price: null }],
      variantNote: 'Drum and Disc brake versions are listed by Hero for XTEC. Prices are not shown here; ask us for the Mangalore price of each.',
      colours: [] },
    { id: 'splendor-xtec-2-0', name: 'Splendor+ XTEC 2.0', fuelClaim: 'Best in Class Fuel Economy', quick, specs,
      highlights: [['Iconic Design'], ['Best in Class Fuel Economy'], ['Advanced Tech'], ['Advanced Safety'], ['Unmistakable Full LED Style']],
      features: [f('Bluetooth with call & SMS alert'), f('Spacious utility case with hinge'), f('Plush Seat'), f('Real Time Mileage Indicator (RTMI)', T.rtmi), f('i3S Technology', T.i3s), f('Mobile charging port', T.usb), f('Side Stand Engine Cut-off', T.sse)],
      variants: [{ id: 'std', name: 'Standard', price: null }],
      colours: [] },
  ],
}
