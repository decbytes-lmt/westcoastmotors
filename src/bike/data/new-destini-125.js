// NEW DESTINI 125: copied from heromotocorp.com (New Destini 125 page). PRICES: `price: null`; Hero's Delhi prices are never used.
// WARRANTY: scooters carry 5 years or 50,000 km, as stated on Hero's page.
// FEATURE/GALLERY PHOTOS: your second batch of loose photos; each feature uses the closest photo, matched by looks (please confirm).
// PHOTOS: your 11 loose colour photos + banner. Hero names six colours (Gun Metal Grey, Regal Black, Eternal White, Mystique Magenta, Cosmic Blue, Groovy Red) but does not say which variant has which.
// Photo to variant/colour matches were made by looks (brown-seat photos under ZX+, black-seat magenta/blue under ZX, your VX-named files under VX): PLEASE CONFIRM. Goldfish Silver, Teal Blue and Pearl Blue are your file names, not on Hero's page.
import { OFFERS, faq } from './_std.js'

export default {
  slug: 'new-destini-125', name: 'New Destini 125', category: 'Scooter', tagline: 'A perfect combination of performance, style and comfort',
  seoDescription: 'Hero New Destini 125 at West Coast Motors, Mangalore: 124.6 cc, i3S technology, 56.2 kmpl mileage claim, retro chrome styling, projector LED with DRL and a 5-year warranty. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/scooters/new-destini-125.html',
  warranty: '5 years or 50,000 km (whichever comes first), as stated by Hero MotoCorp for its scooters',
  offers: [OFFERS[0], OFFERS[1], ['5-year warranty', '5 years or 50,000 km, whichever comes first. T&C apply.']],
  accessories: [], banner: 'banner.webp', hero: { image: null },
  layout: ['hero', 'offers', 'quick', 'highlights', 'features', 'colours', 'variants', 'gallery', 'specs', 'finance', 'steps', 'accessories', 'testride', 'faq', 'related'],

  quick: [['56.2', 'kmpl', 'Mileage, as stated by Hero*'], ['124.6', 'cc', 'Displacement'], ['9', 'bhp', 'Max power @ 7000 rpm'], ['10.4', 'Nm', 'Max torque @ 5500 rpm']],
  highlights: [['Retro Chrome Design'], ['Longer Seat'], ['Larger Wheels'], ['Projector LED with DRL'], ['Illuminated Start Button'], ['i3S Technology']],
  featuresTitle: 'A perfect combination of performance, style and comfort',
  features: [
    { title: 'Best in Segment Mileage', text: 'Fuel efficiency is where the New Destini 125 shines. Thanks to Hero’s smart engine tuning and i3S technology, it ensures fewer fuel stops and more savings per ride without compromising on performance.', image: 'feat-mileage.webp' },
    { title: 'Comfortable Long Seat', text: 'The long seat offers ample space for both rider and pillion, with premium cushioning and ergonomic support for comfort on longer rides.', image: 'feat-seat.webp' },
    { title: 'Elegant Retro Chrome Styling', text: 'Retro chrome styling brings a timeless charm to modern roads, from chrome-finished mirrors to side elements.', image: 'feat-chrome.webp' },
    { title: 'Stylish Projector LED with DRL', text: 'A focused projector LED headlamp with integrated daytime running lights improves night visibility and adds a signature look.', image: 'feat-led.webp' },
    { title: 'Auto-Cancel Winkers', text: 'The winkers turn off by themselves after a turn is completed, for added safety and convenience.', image: 'feat-winkers.webp' },
    { title: 'Timeless Colours', text: 'Choose from Groovy Red, Regal Black, Eternal White, Cosmic Blue or Mystique Magenta, depending on the variant.', image: 'zxp-goldfish-silver.webp' },
  ],
  variants: [
    { id: 'zxp', name: 'ZX+', price: null, image: 'zxp-regal-black.webp', colours: [
      { name: 'Regal Black', hex: '#1b1b1d', image: 'zxp-regal-black.webp' }, { name: 'Eternal White', hex: '#f1f1f1', image: 'zxp-eternal-white.webp' },
      { name: 'Goldfish Silver', hex: '#b9b3a8', image: 'zxp-goldfish-silver.webp' }, { name: 'Gun Metal Grey', hex: '#6d7075', image: 'zxp-gun-metal-grey.webp' },
      { name: 'Pearl Blue', hex: '#26335f', image: 'zxp-pearl-blue.webp' }, { name: 'Teal Blue', hex: '#3f7f8f', image: 'zxp-teal-blue.webp' }] },
    { id: 'zx', name: 'ZX', price: null, image: 'zx-mystique-magenta.webp', colours: [
      { name: 'Mystique Magenta', hex: '#a3286f', image: 'zx-mystique-magenta.webp' }, { name: 'Cosmic Blue', hex: '#1f4fa3', image: 'zx-cosmic-blue.webp' }] },
    { id: 'vx', name: 'VX', price: null, image: 'vx-groovy-red.webp', colours: [
      { name: 'Groovy Red', hex: '#d3202a', image: 'vx-groovy-red.webp' }, { name: 'Eternal White', hex: '#f1f1f1', image: 'vx-eternal-white.webp' }, { name: 'Regal Black', hex: '#1b1b1d', image: 'vx-regal-black.webp' }] },
  ],
  variantNote: 'Hero lists the Destini 125 ZX+, ZX and VX. The ZX+ and ZX have a front disc brake; the VX has a drum brake (width: disc 703 mm, drum 697 mm). Prices are not shown yet; ask us for the Mangalore price of each.',
  colourNote: 'Hero names Gun Metal Grey, Regal Black, Eternal White, Mystique Magenta, Cosmic Blue and Groovy Red, depending on the variant, but does not say which colour belongs to which variant. We matched your photos to variants by looks, please confirm. Goldfish Silver, Teal Blue and Pearl Blue are names from the supplied photo files. Ask us what is in stock.',
  gallery: [{ file: 'g-studio-white.webp', label: 'New Destini 125, studio' }, { file: 'g-pink-wall.webp', label: 'New Destini 125 Eternal White' }, { file: 'g-graffiti.webp', label: 'New Destini 125 in the city' }, { file: 'g-accessories.webp', label: 'Backrest, seat cover, floor mat and side stand' }],
  specs: {
    'Engine': { 'Type': 'Air cooled, 4 stroke, SI engine', 'Displacement': '124.6 cc', 'Max. Power': '9 bhp @ 7000 rpm', 'Max. Torque': '10.4 Nm @ 5500 rpm', 'Ignition': 'Fuel Injection (FI)' },
    'Transmission': { 'Type': 'Dry, Centrifugal', 'Clutch Type': 'CVT' },
    'Suspension': { 'Front': 'Telescopic Fork', 'Rear': 'Single Coil Spring Hydraulic Type' },
    'Tyres': { 'Front Tyre': '90/90 - 12', 'Rear Tyre': '100/80 - 12' },
    'Dimensions': { 'Length': '1862 mm', 'Width': 'Disc - 703 mm (ZX+ & ZX); Drum - 697 mm (VX)', 'Height': '1125 mm', 'Wheelbase': '1302 mm', 'Seat Height': '770 mm', 'Ground Clearance': '162 mm' },
    'Electricals': { 'Battery': '12V-4Ah / ETZ-5 (MF Battery)', 'Starting System': 'Electric Start / Kick Start' },
    'Weight': { 'Kerb Weight': '115 kg', 'Fuel Tank Capacity': '5.3 Litres' },
  },
  specNote: '*Mileage is the figure shown by Hero; actual mileage varies with riding and road conditions.',
  faq: faq('New Destini 125', [
    ['What variants does the New Destini 125 come in?', 'Hero lists the ZX+, ZX and VX.'],
    ['What colours are available?', 'Hero names Gun Metal Grey, Regal Black, Eternal White, Mystique Magenta, Cosmic Blue and Groovy Red, depending on the variant. Ask us what is in stock.'],
    ['How much mileage does it give?', 'Hero states 56.2 kmpl. Everyday mileage depends on how and where you ride.'],
    ['What warranty does it have?', '5 years or 50,000 km, whichever comes first, as stated by Hero for its scooters. T&C apply.'],
  ]),
  related: ['Destini 110', 'Destini Prime', 'Xoom 125', 'Pleasure+ Xtec'],
}
