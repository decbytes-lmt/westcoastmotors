import xtreme160r4v from './xtreme-160r-4v.js'
import splendor from './splendor-plus.js'
// One entry per URL slug: { d: data, start: model tab to open }. Add each new bike family here.
// A family page (Splendor+) is one data object served at several slugs, each opening its own tab.
export const BIKES = {
  [xtreme160r4v.slug]: { d: xtreme160r4v },
  ...Object.fromEntries(splendor.models.map(m => [m.id, { d: splendor, start: m.id }])),
}
