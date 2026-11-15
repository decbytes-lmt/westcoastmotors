// Shared wording used by every bike data file. Edit once here.
export const WARRANTY = '5 years or 70,000 km (whichever comes first), as stated by Hero MotoCorp'
export const OFFERS = [['Free roadside assistance', '1 year on online bookings. T&C apply.'], ['Exchange your old vehicle', 'Best value at checkout on online purchase. T&C apply.'], ['5-year warranty', '5 years or 70,000 km, whichever comes first']]
export const FINANCE = { promo: [], promoNote: 'Use the EMI estimator below for an idea. Actual EMI depends on the financier and your profile. Ask our team for live offers.' }
// Standard answers every page needs. `extra` goes in the middle.
export const faq = (name, extra = []) => [
  [`What is the price of the ${name} in Mangalore?`, 'Ex-showroom prices vary by city and variant, and our Mangalore price list is not published on this page yet. Ask us for today’s ex-showroom and on-road price. On-road price also depends on RTO charges and insurance.'],
  ...extra,
  ['How do I book a test ride?', 'Fill the test ride form on this page, WhatsApp us, call the showroom, or walk in at Kankanady, Mangalore.'],
]
