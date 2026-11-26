# Add WCM AI chat to the West Coast Motors project

Needs the latest source zip (it has `src/bike/data/index.js`, `src/bike/cardImages.js`, `src/data.js`).

FIRST TIME
1. Copy the folder `chat` from this zip into the project's `src` folder.
2. Open `src/App.jsx`. At the top add: `import ChatWidget from './chat/ChatWidget.jsx'`
   At the very end of `App()`, just before the closing `</>)`, add: `<ChatWidget />`
3. `npm run dev`. Red chat button appears bottom-right.

UPDATING (chat already installed): just replace the whole `src/chat` folder with this one. App.jsx stays as it is.

Edit working days, holidays, shop info and FAQ in `src/chat/knowledge.js`. No new npm packages.
Real AI + review list: see AI-CHATBOT-GUIDE.md, chat-proxy.php, chat-log.php.
