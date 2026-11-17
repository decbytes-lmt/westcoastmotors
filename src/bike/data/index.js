import xtreme160r4v from './xtreme-160r-4v.js'
import splendor from './splendor-plus.js'
import hfDeluxe from './hf-deluxe.js'
import hf100 from './hf-100.js'
import passion from './passion-plus.js'
import glamour from './glamour.js'
import glamourX from './glamour-x.js'
import glamourXAbs from './glamour-x-abs.js'
import x160 from './xtreme-160r.js'
import x125 from './xtreme-125r.js'
import x250 from './xtreme-250r.js'
import xp200 from './xpulse-200-4v.js'
import xp210 from './xpulse-210.js'
import flex from './flex-fuel.js'
import ssx from './super-splendor-xtec.js'
import ssx2 from './super-splendor-xtec-2-0.js'
import km from './karizma-xmr.js'
import hd from './harley-davidson-x440.js'
import hdt from './harley-davidson-x440-t.js'
import destini110 from './destini-110.js'
import destini125 from './new-destini-125.js'
// One entry per URL slug: { d: data, start: model tab to open }. Add each new bike here.
// A family page (Splendor+) is one data object served at several slugs, each opening its own tab.
export const BIKES = {
  [xtreme160r4v.slug]: { d: xtreme160r4v },
  [hfDeluxe.slug]: { d: hfDeluxe },
  [hf100.slug]: { d: hf100 },
  [passion.slug]: { d: passion },
  [glamour.slug]: { d: glamour },
  [glamourX.slug]: { d: glamourX },
  [glamourXAbs.slug]: { d: glamourXAbs },
  [ssx.slug]: { d: ssx },
  [x160.slug]: { d: x160 },
  [x125.slug]: { d: x125 },
  [x250.slug]: { d: x250 },
  [xp200.slug]: { d: xp200 },
  [xp210.slug]: { d: xp210 },
  [ssx2.slug]: { d: ssx2 },
  [km.slug]: { d: km },
  [hd.slug]: { d: hd },
  [hdt.slug]: { d: hdt },
  [destini110.slug]: { d: destini110 },
  [destini125.slug]: { d: destini125 },
  ...Object.fromEntries(flex.models.map(m => [m.id, { d: flex, start: m.id }])),
  ...Object.fromEntries(splendor.models.map(m => [m.id, { d: splendor, start: m.id }])),
}
