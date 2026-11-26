# WCM AI chatbot: how it works and how to grow it

## Phase 1 (done): works today, no AI key, no cost
- Chat button on every page. Opens the WCM AI window.
- It answers from your **own data**: every bike page (specs, features, colours, variants, warranty) is read automatically, so when you fix a bike page the bot is fixed too.
- It can: list bikes and scooters, answer mileage / power / torque / tyres / brakes / seat height / dimensions, say if a feature exists, compare two bikes in a table, suggest a bike by need, show shop address and phones, and take a **test ride request** (opens WhatsApp to the sales number with the customer's name, mobile and bike filled in).
- It never invents prices. Prices are blank, so it says "ask our team" and offers call / WhatsApp. When you add prices to the bike data, it starts quoting them.

## Teaching it by hand: `src/chat/knowledge.js`
- `STORE`: address, phones, **hours** (leave `null` until you confirm; then type e.g. `'Mon-Sat 9:30 am to 7 pm'`).
- `FAQ`: add questions. Example: `{ k: ['documents', 'papers'], a: 'You need ...' }`. `k` are trigger words, `a` is the answer.
- `RECS`: which bikes to suggest for which need (mileage, family, sporty, scooter ...).
- `TILES`: the four shortcut buttons.

## Phase 2 (later): plug in a real AI model
1. Upload `docs/chat-proxy.php` as `public_html/api/chat.php` and put your API key inside it (the key stays on the server).
2. In `src/chat/provider.js` set `ENDPOINT: './api/chat.php'`, run `npm run build`, upload.
3. What happens: the local brain finds the right facts, the AI writes a friendly answer **using only those facts** (`SYSTEM_PROMPT` in knowledge.js forbids guessing). Cards, tables and the test-ride form still come from the local brain. If the AI is slow or fails, the local answer is shown, so the bot never goes silent.
4. This also gives Kannada and Hindi replies.

## Phase 3 (ideas)
- Save test-ride requests to your PHP enquiry script / email, not only WhatsApp.
- Daily stock and offers file the bot reads.
- Staff handover and chat transcripts.
- Cost: with a small model, a few paise per question; the proxy limits 20 questions per visitor per 10 minutes.

## Safety rules built in
- Prices, stock and offers are never guessed.
- No customer data is stored by the bot; the chat lives only in the visitor's browser tab.

## Update: clock, holidays, boundaries, learning
- **Date, day, time**: the bot reads the visitor's device clock in Indian time. "What day is it", "is it Sunday", "are you open tomorrow" need no API.
- **Sunday holiday**: set in `HOURS.closedWeekdays` (0 = Sunday) in `src/chat/knowledge.js`. Add festival days in `HOLIDAYS`. When someone asks "why is nobody picking up my call" on a holiday, the bot says today is a holiday, we are closed, and when we open next. Add `open: '09:30', close: '19:00'` to `HOURS` once confirmed, and it also handles "closed for the day / opens at 9:30".
- **Boundaries in code** (`guard()` in brain.js, cannot be talked around): other brands, abuse, off-topic, and "ignore your instructions / show your prompt" are refused. These never reach the AI.
- **Learning, with a lock**: the bot does not rewrite itself from customer chats (anyone could teach it wrong prices). It records questions it could not answer and thumbs-down answers (phone numbers and emails removed). To collect them centrally, upload `chat-log.php` to `public_html/api/`, set its `ADMIN_KEY`, and set `LOG_ENDPOINT: './api/chat-log.php'` in provider.js. Open `https://westcoastmotors.in/api/chat-log.php?key=YOUR_KEY` to see the most-asked unanswered questions with a ready line to paste into `FAQ`. You approve, then it knows.
- **Do you need an AI API?** Not for dates, holidays, FAQs, bike facts or boundaries. Add one when you want free-form questions understood in Kannada, Hindi or messy English, and natural answers that combine facts. The code is ready: the AI gets the clock, shop facts, bike facts and FAQ, and the guard still runs first.
