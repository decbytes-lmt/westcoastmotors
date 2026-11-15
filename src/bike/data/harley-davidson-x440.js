// HARLEY-DAVIDSON X440: copied from Hero's Harley-Davidson X440 page. PRICES: `price: null`; Delhi prices are never used.
// PHOTOS: Hero names seven colours for the X440 (listed in the colour note); only two photos match with confidence. Thick Red is named by Hero's own file; the dark photo was matched by looks as Matte Black (please confirm). The other photos are unnamed.
import { WARRANTY, OFFERS, faq } from './_std.js'
import { HD_SPECS } from './_hd.js'

export default {
  slug: 'harley-davidson-x440', name: 'Harley-Davidson X440', category: 'Premium', tagline: 'Everything will change',
  seoDescription: 'Harley-Davidson X440 at West Coast Motors, Mangalore: 440 cc air-oil cooled, 27 bhp, 38 Nm, USD forks, trellis frame, 3.5" TFT, switchable traction control. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/harley-davidson-x440.html',
  warranty: WARRANTY, offers: OFFERS, accessories: [], hero: { image: 'hero.webp' },
  layout: ['hero', 'offers', 'quick', 'features', 'colours', 'variants', 'gallery', 'specs', 'steps', 'accessories', 'testride', 'faq', 'related'],
  quick: [['27', 'bhp', 'Max power @ 6000 rpm'], ['38', 'Nm', 'Max torque @ 4000 rpm'], ['440', 'cc', 'Air-oil cooled'], ['43', 'mm', 'KYB USD forks']],
  featuresTitle: 'The Harley-Davidson X440',
  features: [
    { title: '440 cc Air-Oil Cooled Engine', text: 'All new 440 cc single with the powerful signature Harley-Davidson exhaust note. 27 bhp @ 6000 rpm and 38 Nm @ 4000 rpm.', image: 'feat-exhaust.webp' },
    { title: 'Ride By Wire', text: 'Electronic throttle body, with an assist and slipper clutch on the 6-speed gearbox.', image: null },
    { title: 'KYB 43 mm USD Forks and Trellis Frame', text: '130 mm of fork travel, gas charged twin shocks with 7-step pre-load adjustment and a trellis frame body.', image: null },
    { title: 'Switchable Traction Control and Rear ABS', text: '320 mm front and 240 mm rear disc brakes.', image: null },
    { title: '3.5" TFT Display', text: 'Round gauge with Bluetooth music control, call and message alerts, and the H-D Connect app.', image: null },
    { title: 'All-LED Lighting', text: 'Multi-projector headlamp with signature DRL and auto headlamp illumination.', image: 'feat-headlamp.webp' },
    { title: 'Signature Tank Badge', text: 'The Harley-Davidson X mark on the tank.', image: 'feat-tank.webp' },
  ],
  variants: [{ id: 's', name: 'X440 S', price: null }, { id: 'vivid', name: 'X440 Vivid', price: null }],
  colours: [
    { name: 'Metallic Thick Red', hex: '#9b1b24', image: 'colour-thick-red.webp' },
    { name: 'Matte Black', hex: '#1c1c1e', image: 'colour-matte-black.webp' },
  ],
  variantNote: 'Hero lists the X440 S and the X440 Vivid. Prices are not shown yet; ask us for the Mangalore price of each.',
  colourNote: 'Hero names Matte Black, Baja Orange, Metallic Thick Red, Metallic Dark Silver, Mustard, Goldfish Silver and Mustard Denim. We show the photos we have; ask us what is in stock.',
  gallery: [
    { file: 'g-01.webp', label: 'X440 in orange and black' }, { file: 'g-02.webp', label: 'X440 in red' }, { file: 'g-03.webp', label: 'X440 in silver' }, { file: 'g-04.webp', label: 'X440 lineup' },
    { file: 'g-05.webp', label: 'X440 in mustard' }, { file: 'g-07.webp', label: 'X440 in the city' }, { file: 'g-09.webp', label: 'X440 on the road' }, { file: 'g-10.webp', label: 'X440 tank close-up' },
  ],
  specs: HD_SPECS,
  specNote: 'Hero shows a single specification table for the X440 range. Specifications are as shown on Hero’s page.',
  faq: faq('Harley-Davidson X440', [
    ['What variants and colours does it come in?', 'Hero lists the X440 S and X440 Vivid, in Matte Black, Baja Orange, Metallic Thick Red, Metallic Dark Silver, Mustard, Goldfish Silver and Mustard Denim. Ask us what is in stock.'],
    ['What engine does it have?', '440 cc air-oil cooled single cylinder: 27 bhp at 6000 rpm and 38 Nm at 4000 rpm, with a 6-speed gearbox and assist and slipper clutch.'],
    ['What is the warranty?', 'Hero lists 5 years or 70,000 km.'],
  ]),
  related: ['Harley-Davidson X440 T', 'Karizma XMR', 'Xtreme 250R', 'Xpulse 210'],
}
