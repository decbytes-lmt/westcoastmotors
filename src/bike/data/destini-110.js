// DESTINI 110: copied from heromotocorp.com (Destini 110 page) and the Hero brochure you sent. PRICES: `price: null`; Hero's Delhi prices are never used.
// WARRANTY: scooters carry 5 years or 50,000 km (not the 70,000 km of motorcycles), as stated on Hero's page.
// PHOTOS: all from your loose photos. Colour photos matched to variants by looks / Hero's brochure swatches (please confirm). The Groovy Red photo was not supplied, so it is left out.
// FEATURE IMAGES: Hero's feature photos were not sent as separate files, so each feature uses the closest loose photo (please confirm).
import { OFFERS, faq } from './_std.js'

export default {
  slug: 'destini-110', name: 'Destini 110', category: 'Scooter', tagline: 'Hero ka Scooter, Scooter ka Hero',
  seoDescription: 'Hero Destini 110 at West Coast Motors, Mangalore: 110.9 cc, strong metal body, 56.2 kmpl best-in-segment mileage claim, longest seat, LED projector headlamp and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/scooters/destini-110.html',
  warranty: '5 years or 50,000 km (whichever comes first), as stated by Hero MotoCorp for its scooters',
  offers: [OFFERS[0], OFFERS[1], ['5-year warranty', '5 years or 50,000 km, whichever comes first. T&C apply.']],
  accessories: [], banner: 'banner.webp', hero: { image: null },
  layout: ['hero', 'offers', 'quick', 'highlights', 'features', 'colours', 'variants', 'compare', 'gallery', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],

  quick: [['56.2', 'kmpl', 'Mileage, as stated by Hero*'], ['110.9', 'cc', 'Displacement'], ['6', 'kW', 'Max power @ 7250 rpm'], ['8.7', 'Nm', 'Max torque @ 5750 rpm']],
  highlights: [['Retro Chrome Design'], ['Longest Seat', 'Best-in-class seat length, as stated by Hero.'], ['Larger 12 inch Wheels'], ['Projector LED Headlamps'], ['Chrome Accents'], ['Strong Metal Body']],
  featuresTitle: 'Style, strength, mileage. All in one scooter',
  features: [
    { title: 'Best in Segment Mileage', text: 'Fuel efficiency is where the Destini 110 shines. With best in segment mileage (56.2 kmpl, based on Hero’s internal testing of 110 cc scooters), it ensures fewer fuel stops and more savings per ride.', image: 'g-grey-coast.webp' },
    { title: 'Strong Metal Body', text: 'Built to withstand daily wear, the Destini 110 features a tough, full metal body for durability, long-term protection and a solid, reassuring feel on every road.', image: 'banner.webp' },
    { title: 'Elegant Chrome Styling', text: 'Retro chrome styling brings a timeless charm to modern roads, with chrome accents on the mirrors and body.', image: 'g-front-quarter.webp' },
    { title: 'Comfortable Long Seat', text: 'The long seat offers ample space for both rider and pillion, with premium cushioning and ergonomic support for comfort on longer rides. Hero’s brochure quotes a 785 mm seat.', image: 'g-rear.webp' },
    { title: 'Bigger Alloy Wheels', text: 'Bigger and wider R12 alloy wheels for enhanced road presence, grip, stability and smoother handling over bumps.', image: 'g-blue-street.webp' },
    { title: 'LED Projector Headlamp', text: 'A focused projector LED beam improves night visibility and adds a premium touch to the design.', image: 'g-front.webp' },
    { title: 'Large Spacious Floorboard', text: 'A large floorboard gives unmatched legroom (154 mm, best in segment per Hero’s brochure) and room to carry daily groceries and essential bags.', image: 'g-blue-rider.webp' },
    { title: 'Mobile Charging Glove Box', text: 'A glove box with a mobile charging point, as shown in Hero’s brochure.', image: null },
    { title: 'Classic Colours', text: 'Choose from Aqua Grey, Nexus Blue, Groovy Red, Matt Steel Grey and Eternal White, depending on the variant.', image: 'colour-aqua-grey.webp' },
  ],
  variants: [
    { id: 'special', name: 'Special Edition', price: null, image: 'colour-aqua-grey.webp', colours: [{ name: 'Aqua Grey', hex: '#9db8a8', image: 'colour-aqua-grey.webp' }] },
    { id: 'zx', name: 'ZX (Cast, front disc)', price: null, image: 'zx-nexus-blue.webp', colours: [{ name: 'Nexus Blue', hex: '#1f4fa3', image: 'zx-nexus-blue.webp' }] },
    { id: 'vx', name: 'VX (Cast, drum)', price: null, image: 'vx-nexus-blue.webp', colours: [{ name: 'Matt Steel Grey', hex: '#4a4d52', image: 'vx-matt-steel-grey.webp' }, { name: 'Eternal White', hex: '#f1f1f1', image: 'vx-eternal-white.webp' }, { name: 'Nexus Blue', hex: '#1f4fa3', image: 'vx-nexus-blue.webp' }, { name: 'Pearl Black', hex: '#1b1b1d', image: 'vx-pearl-black.webp' }] },
  ],
  variantNote: 'Hero lists the Destini 110 Special Edition, ZX and VX. Prices are not shown yet; ask us for the Mangalore price of each.',
  colourNote: 'Hero names Aqua Grey, Nexus Blue, Groovy Red, Matt Steel Grey and Eternal White. Hero’s brochure also shows the ZX in a light grey and Groovy Red, but their photos are not added yet. Pearl Black is a supplied photo, shown under the VX: please confirm. Colours were matched to variants by looks and Hero’s brochure swatches. Ask us what is in stock.',
  compare: { title: 'Destini 110 ZX vs VX', heads: ['', 'ZX', 'VX'], rows: [['Wheel type', 'Cast disc', 'Cast drum'], ['Front disc brake', 'Yes', 'No'], ['Projector LED headlamps', 'Yes', 'Yes'], ['Wider rear tyre 100/80', 'Yes', 'Yes'], ['Digi-analog speedometer', 'Yes', 'Yes'], ['Chrome styling', 'Yes', 'Yes'], ['Seat back rest', 'Yes', 'No']] },
  gallery: [{ file: 'g-grey-coast.webp', label: 'Destini 110 by the coast' }, { file: 'g-blue-rider.webp', label: 'Destini 110 Nexus Blue' }, { file: 'g-blue-street.webp', label: 'Destini 110 in the city' }, { file: 'g-front-quarter.webp', label: 'Front three-quarter view' }, { file: 'g-rear.webp', label: 'Seat and body' }, { file: 'g-front.webp', label: 'Front view' }],
  specs: {
    'Engine': { 'Type': 'Air cooled, 4 stroke engine', 'Displacement': '110.9 cc', 'Max. Power': '6 kW @ 7250 rpm', 'Max. Torque': '8.7 Nm @ 5750 rpm', 'Ignition': 'Fuel Injection (FI)' },
    'Transmission': { 'Clutch Type': 'Dry, Centrifugal', 'Transmission Type': 'CVT' },
    'Suspension': { 'Front': 'Telescopic Fork', 'Rear': 'Single Coil Spring Hydraulic Type' },
    'Tyres': { 'Front Tyre': '90/90 - 12 (Tubeless)', 'Rear Tyre': '100/80 - 12 (Tubeless)' },
    'Dimensions': { 'Length': '1859 mm', 'Width': 'Disc - 703 mm, Drum - 697 mm', 'Height': '1125 mm', 'Wheelbase': '1302 mm', 'Seat Height': '770 mm', 'Ground Clearance': '162 mm' },
    'Electricals': { 'Battery': '12V-4Ah MF', 'Starting System': 'Electric Start / Kick Start' },
    'Weight': { 'Kerb Weight': '114 kg', 'Fuel Tank Capacity': '5.3 Litres' },
  },
  specNote: '*Mileage is based on Hero’s internal testing of 110 cc scooters and on the testing report of a government certified agency. Actual mileage varies with riding conditions.',
  faq: faq('Destini 110', [
    ['What variants does the Destini 110 come in?', 'Hero lists the Special Edition, ZX (cast wheels with front disc brake) and VX (cast wheels with drum brake).'],
    ['What colours are available?', 'Hero names Aqua Grey, Nexus Blue, Groovy Red, Matt Steel Grey and Eternal White, depending on the variant. Ask us what is in stock.'],
    ['How much mileage does it give?', 'Hero states 56.2 kmpl based on its internal testing of 110 cc scooters. Everyday mileage depends on how and where you ride.'],
    ['What warranty does it have?', '5 years or 50,000 km, whichever comes first, as stated by Hero for its scooters. T&C apply.'],
  ]),
  related: ['New Destini 125', 'Destini Prime', 'Xoom 110', 'Pleasure+ Xtec'],
}
