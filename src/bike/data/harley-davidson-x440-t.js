// HARLEY-DAVIDSON X440 T: copied from Hero's Harley-Davidson X440 page (T section). PRICES: `price: null`; Delhi prices are never used.
// PHOTOS: Pearl Blue, Pearl Red, Pearl White and Vivid Black are the four colours Hero names for the X440 T; the four bike photos were matched to them by looks (please confirm).
import { WARRANTY, OFFERS, faq } from './_std.js'
import { HD_SPECS } from './_hd.js'

export default {
  slug: 'harley-davidson-x440-t', name: 'Harley-Davidson X440 T', category: 'Premium', tagline: 'Beyond the everyday',
  seoDescription: 'Harley-Davidson X440 T at West Coast Motors, Mangalore: 440 cc air-oil cooled, 27 bhp, 38 Nm, ride by wire with Rain and Road modes, 3.5" TFT, switchable rear ABS and traction control. Book a test ride.',
  source: 'https://www.heromotocorp.com/en-in/motorcycles/harley-davidson-x440.html',
  warranty: WARRANTY, offers: OFFERS, accessories: [], hero: { image: 'hero.webp' },
  layout: ['hero', 'offers', 'quick', 'features', 'colours', 'variants', 'gallery', 'specs', 'steps', 'accessories', 'testride', 'faq', 'related'],
  quick: [['27', 'bhp', 'Max power @ 6000 rpm'], ['38', 'Nm', 'Max torque @ 4000 rpm'], ['440', 'cc', 'Air-oil cooled'], ['3.5"', 'TFT', 'Enhanced digital display']],
  featuresTitle: 'New. Beyond the everyday.',
  features: [
    { title: 'All New 440 cc Oil Cooled Engine', text: 'Ride by wire with electronic throttle body and the powerful signature Harley-Davidson exhaust note.', image: 'feat-tank.webp' },
    { title: 'New Exhaust', text: 'A sleek heat shield and refined end cap add a polished touch.', image: 'feat-exhaust.webp' },
    { title: 'Bar End Mirrors', text: 'Sleeker, custom-inspired look that elevates the overall presence.', image: 'feat-mirrors.webp' },
    { title: 'Redesigned Rear Subframe', text: 'Newly engineered rear frame with an all new tail section for a sportier, more purposeful stance.', image: 'feat-subframe.webp' },
    { title: 'Switchable Rear ABS and Traction Control', text: 'Rear ABS can be switched for precise manoeuvres on loose surfaces, and traction control stops the rear wheel spinning out under acceleration.', image: 'feat-abs.webp' },
    { title: 'Panic Braking Alert', text: 'Kicks in automatically during sudden braking, flashing all turn indicators 4 times faster than the normal rate.', image: 'feat-braking.webp' },
    { title: 'Ride Modes', text: '‘Road’ for everyday performance and ‘Rain’ for added stability and control.', image: 'feat-modes.webp' },
    { title: '3.5" Enhanced Digital Display', text: 'TFT display with Bluetooth music control, call and message alerts.', image: null },
    { title: 'All-LED Lighting', text: 'Multi-projector headlamp with signature DRL, LED winkers and LED tail lamp.', image: 'feat-headlamp.webp' },
  ],
  variants: [{ id: 't', name: 'X440 T', price: null }],
  colours: [
    { name: 'Pearl Blue', hex: '#2c3f86', image: 'colour-pearl-blue.webp' }, { name: 'Pearl Red', hex: '#c0262d', image: 'colour-pearl-red.webp' },
    { name: 'Pearl White', hex: '#f0f0f0', image: 'colour-pearl-white.webp' }, { name: 'Vivid Black', hex: '#161616', image: 'colour-vivid-black.webp' },
  ],
  colourNote: 'Hero’s page names these four colours for the X440 T. Ask us which is in stock.',
  gallery: [{ file: 'g-3.webp', label: 'X440 T, all four colours' }, { file: 'g-1.webp', label: 'X440 T after dark' }, { file: 'g-4.webp', label: 'X440 T under the lights' }, { file: 'g-5.webp', label: 'X440 T on the road' }, { file: 'g-2.webp', label: 'X440 T tail section' }],
  specs: HD_SPECS,
  specNote: 'Hero shows a single specification table for the X440 range. Specifications are as shown on Hero’s page.',
  faq: faq('Harley-Davidson X440 T', [
    ['What colours does the X440 T come in?', 'Hero names Pearl Blue, Pearl Red, Pearl White and Vivid Black. Ask us what is in stock.'],
    ['What engine does it have?', '440 cc air-oil cooled single cylinder: 27 bhp at 6000 rpm and 38 Nm at 4000 rpm, with a 6-speed gearbox and assist and slipper clutch.'],
    ['What rider aids does it have?', 'Ride by wire with Road and Rain modes, switchable traction control, switchable rear ABS and a panic braking alert.'],
  ]),
  related: ['Harley-Davidson X440', 'Karizma XMR', 'Xtreme 250R', 'Xpulse 210'],
}
