// GLAMOUR X ABS: copied from heromotocorp.com (Glamour X ABS page). Shares the Glamour X feature set. PRICES: `price: null`; Hero's Delhi prices and its dated ABS price banner are not used.
// PHOTOS: four colour photos (about 380 px wide, the size we have) matched to names by looks; Matt Axis Grey vs Gun Metal Grey especially: please confirm. Folder: public/images/glamour-x-abs/
import gx from './glamour-x.js'

export default {
  ...gx,
  slug: 'glamour-x-abs', name: 'Glamour X ABS', tagline: 'India’s most futuristic 125cc, now with ABS',
  seoDescription: 'Hero Glamour X ABS at West Coast Motors, Mangalore: 124.7 cc with ABS, cruise control, 3 ride modes, multicolour console, panic brake alert and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/glamour-x-abs.html',
  highlights: [['Muscular Design'], ['Unmatched Performance', '11.4 BHP (8.5 kW) power @ 8250 rpm'], ['ABS'], ['Intelligent Ride Technology', 'Adaptive display with 60+ features'], ['Advanced Safety', 'Panic Brake Alert'], ['Cruise Control', 'First in segment technology that maintains your pace for steady rides, as stated by Hero'], ['3 Ride Modes'], ['10.7 cm Multicolour Console'], ['All-LED Setup']],
  featuresTitle: 'Discover what makes Glamour X ABS futuristic',
  variants: [{ id: 'abs', name: 'Glamour X ABS', price: null }],
  colours: [
    { name: 'Black Pearl Red', hex: '#2a2a2e', image: 'colour-black-pearl-red.webp' }, { name: 'Black Teal Blue', hex: '#0f6f7a', image: 'colour-teal-blue.webp' },
    { name: 'Gun Metal Grey', hex: '#6a6e75', image: 'colour-gun-metal-grey.webp' }, { name: 'Matt Axis Grey', hex: '#2b2d31', image: 'colour-matt-axis-grey.webp' },
  ],
  variantNote: 'Hero lists one Glamour X ABS variant. Prices are not shown yet; ask us for the Mangalore price.',
  specs: {
    ...gx.specs,
    'Dimensions': { ...gx.specs.Dimensions, 'Kerb Weight': '128.5 kg' },
    'Electricals': { ...gx.specs.Electricals },
  },
  faq: gx.faq.map(([q, a]) => [q.replace('Glamour X', 'Glamour X ABS'), a.replace('Hero lists Drum Brake and Disc Brake variants in Black Pearl Red, Black Teal Blue, Candy Blazing Red, Matt Metallic Silver and Metallic Nexus Blue.', 'Hero lists the Glamour X ABS in Black Pearl Red, Black Teal Blue, Gun Metal Grey and Matt Axis Grey.')]),
  related: ['Glamour X', 'Glamour', 'Xtreme 125R', 'Super Splendor Xtec'],
}
