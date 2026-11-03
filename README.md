# West Coast Motors website

React + Vite. No backend. `npm run build` makes a normal `dist/` folder you can upload to any static host.

## Run
```bash
npm install
npm run dev      # local
npm run build    # outputs dist/
```

## How opening works
1. **Splash** (about 2 sec): Hero logo, West Coast Motors, red loading bar.
2. **Website** fades in.

Plays once per browser session. Add `?intro` to the URL to replay it.
Visitors with "reduce motion" turned on skip straight to the website.

## Pages and switch
Three pages, one static site (hash routes, no server setup): Home `#/`, Petrol `#/petrol`, EV `#/ev`.
- Home "Find Your Ride": slide (or tap) the switch. Knob goes green (EV) or red (Petrol), panel grows, colour ripple, then a full-screen colour wipe opens the dedicated page.
- Petrol page: red theme, filter (All / Bikes / Scooters), perks, model cards.
- EV page: green theme, charging glow line, perks, model cards.
- Each page has its own switch to jump to the other side. Browser Back button works. Deep links like `yoursite.com/#/ev` work.
- All nav, quick links, hero buttons and footer links use the same wipe.
- Panel text/photos: `RIDE` in `src/data.js`. Page text/photos/perks: `PAGE` in `src/data.js`. Put transparent PNGs in `public/images/`.
- Verify perk wording (Charging, Battery, EV service, Finance, Spare parts) matches what the showroom really offers.

## Edit content (no coding)
Open `src/data.js`:
- phone numbers, email, address, social links
- `PETROL` and `EV` model lists (name, price, image)
- hero slides
Put photos in `public/images/` and set `image: 'filename.png'`.

## Before going live
- Confirm Sales phone: `73555 85111` or `73535 85111`.
- Add real Hero photos (from the Hero dealer portal) and real prices.
- Verify VIDA model names and add prices.
- Add real social links, Awards and Testimonials content.

## Vehicles (specs from official sites, prices blank)
- All models live in `src/data.js` (`PETROL`, `EV`). Specs copied from heromotocorp.com/en-in and vidaworld.com.
- **Prices are empty on purpose.** The card shows an "Ex-showroom price: ₹ —" slot. Add `price: '₹ 1,00,000'` to a model and it appears on the card and in the popup.
- Petrol: 29 models in Hero's own groups (100 cc, 125 cc, Premium, Scooters). EV: VIDA VX2 Go (3 battery options), VX2 Plus (2), V2 Plus, V2 Pro.
- Photos: set `image: 'file.png'` (file in `public/images/`). Use official images from Hero's dealer portal.
- Check which Premium models your showroom sells (Harley-Davidson X440 and some Xpulse/Karizma/Xtreme models are sold through Hero Premia outlets). Delete a model's line to hide it.
- V2 Lite is not on the current VIDA site, so it is not listed. V2 Pro ride modes and V2 Plus battery size are cross-checked from third-party sites, verify on vidaworld.com.

## One page per vehicle
- Click a card (or "View details") to open `#/petrol/<model>` or `#/ev/<model>`. Example: `#/petrol/glamour-x-abs`.
- A model page has: hero + stat strip, sticky tabs, feature tiles (swipe/arrows), colours, full spec accordion, warranty note, how to buy, enquiry band, related models.
- Sections hide themselves when a model has no data for them (no features = no tile section).
- **Fully filled so far:** Glamour X ABS (from Hero's official page: features, colours, full spec sheet, brochure) and all 7 VIDA EVs (features, colours, grouped specs from vidaworld.com).
- **Other petrol models** have engine, torque, cooling, and engine type only. To fill one, copy the pattern from `Glamour X ABS` in `src/data.js`: `stats`, `highlights`, `features: [[title, text]]`, `colours: []`, `brochure`, and `full: { Group: { Label: value } }`. Hero's own pages list specs in the same groups (Engine, Wheels & Tyres, Suspension, Chassis, Dimensions, Electricals).
- Feature text is written in our own words. Photos and Hero's videos/images are not copied; add your own via `image:`.
