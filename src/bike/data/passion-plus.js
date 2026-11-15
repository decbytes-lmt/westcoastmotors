// PASSION+ : copied from the Hero MotoCorp Passion+ page text and screenshots supplied by the owner.
// PRICES: `price: null`; fill the Mangalore ex-showroom price per variant when ready.
// COLOURS: Hero's page text does not name the Passion+ colours, so none are named here (no guessing). The photos are shown in the gallery.
// Folder: public/images/passion-plus/
import { WARRANTY, OFFERS, FINANCE, faq } from './_std.js'

export default {
  slug: 'passion', folder: 'passion-plus', name: 'Passion+', category: '100 cc', tagline: 'All new Passion+',
  seoDescription: 'Passion+ at West Coast Motors, Mangalore: 97.2 cc fuel-injected commuter with dual-tone graphics, disc brake and Bluetooth call and SMS alerts on the disc variant. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/passion-plus.html',
  warranty: WARRANTY, offers: OFFERS, finance: FINANCE, accessories: [], banner: 'banner.webp',
  hero: { image: null, bike: 'g-1.webp' },
  layout: ['hero', 'offers', 'quick', 'overview', 'features', 'variants', 'compare', 'sec:colours-note', 'gallery', 'specs', 'finance', 'steps', 'testride', 'faq', 'related'],
  quick: [['70', 'kmpl', 'Mileage, as stated by Hero'], ['97.2', 'cc', 'Displacement'], ['5.9', 'kW', 'Max power @ 8000 rpm'], ['8.05', 'Nm', 'Max torque @ 6000 rpm']],
  overview: { title: 'Bold dual-tone, built to last', intro: 'The all-new Passion+ comes with bold dual-tone graphics, an LED projector headlamp and a disc brake option, on a fuel-injected 97.2 cc engine.', images: ['banner.webp'] },
  featuresTitle: 'Discover what makes Passion+ lovable',
  features: [
    { title: 'Plush and comfortable seat', text: 'Long seat, more comfort for the rider and pillion.', image: null },
    { title: 'Bluetooth call and SMS alerts', text: 'Stay informed on every ride. Available on the Disc variant.', image: null },
    { title: 'Elegant chrome garnish', text: '', image: null },
    { title: 'i3S technology', text: 'Idle stop-start for better fuel efficiency.', image: null },
    { title: 'Side stand engine cut-off', text: 'Prevents the bike from moving while the side stand is engaged.', image: null },
    { title: 'Spacious utility box', text: '', image: null },
    { title: 'USB charging port', text: 'Charge your phone on the move.', image: null },
    { title: 'LED projector headlamp', text: 'Brighter, wider light for the road ahead.', image: null },
    { title: 'Full digital meter', text: 'Fully digital instrument cluster on the Disc variant.', image: null },
    { title: 'Front disc brake', text: 'Confident braking on the Disc variant.', image: null },
  ],
  variants: [
    { id: 'drum', name: 'Drum Brake OBD2B', price: null, blurb: 'Drum brakes front and rear, digi-analog cluster.' },
    { id: 'disc', name: 'Disc', price: null, blurb: 'Front disc brake, fully digital cluster, Bluetooth call and SMS alert.' },
    { id: 'm125', name: '125 Million Edition', price: null, blurb: 'Special edition. Ask us for details.' },
  ],
  variantNote: 'Prices are not shown yet; ask us for the Mangalore price of each variant.',
  compare: { title: 'Drum vs Disc', heads: ['', 'Drum variant', 'Disc variant'], rows: [['Brake type', 'Drum - Drum', 'Disc - Drum'], ['Instrument cluster', 'Digi - Analog', 'Fully digital'], ['Mileage (Hero)', '70 kmpl', '70 kmpl'], ['Kerb weight', '115 kg', '116 kg'], ['Bluetooth with call and SMS alert', 'No', 'Yes'], ['Projector LED headlight', 'Yes', 'Yes']] },
  sections: [{ id: 'colours-note', nav: 'Colours', eyebrow: 'Design and colour', title: 'Colour options', intro: 'Passion+ comes in several dual-tone colour schemes, shown in the gallery below. Hero’s page does not publish colour names, so ask our team which colours are in stock at the showroom.' }],
  gallery: ['g-1.webp', 'g-2.webp', 'g-3.webp', 'g-4.webp', 'g-5.webp', 'g-6.webp', 'g-7.webp'].map(f => ({ file: f, label: 'Passion+ colour option' })),
  specs: { 'Engine': { 'Type': 'Air cooled, 4 stroke', 'Displacement': '97.2 cc', 'Max power': '5.9 kW @ 8,000 rpm', 'Max torque': '8.05 Nm @ 6,000 rpm', 'Bore x stroke': '50 mm x 49.5 mm', 'Fuel system': 'Fuel injection (FI)' } },
  specNote: 'Hero’s page lists only the engine specifications for Passion+. Ask our team for the full sheet or the brochure.',
  faq: faq('Passion+', [
    ['What variants does the Passion+ come in?', 'Passion+ Drum Brake OBD2B, Passion+ Disc and the Passion+ 125 Million Edition.'],
    ['What mileage does it give?', 'Hero states 70 kmpl for both the Drum and Disc variants. Real-world mileage depends on how and where you ride.'],
    ['What engine does it have?', '97.2 cc, air-cooled, 4-stroke with fuel injection. 5.9 kW at 8,000 rpm and 8.05 Nm at 6,000 rpm.'],
    ['Which colours are available?', 'Hero’s page does not name the colours. Ask us what is in stock.'],
  ]),
  related: ['Splendor+', 'HF Deluxe', 'Glamour', 'Super Splendor Xtec'],
}
