// How answers are produced. Today: the local brain (free, instant, no internet needed).
// LATER: set ENDPOINT to your server proxy and a real AI model writes the wording, using ONLY the facts
// the brain looked up. If the AI call fails for any reason, the local answer is used, so the bot never goes silent.
import { ask, factsFor } from './brain.js'
import { SYSTEM_PROMPT } from './knowledge.js'

export const CHAT_CONFIG = {
  ENDPOINT: '',          // e.g. './api/chat.php'  (see docs/AI-CHATBOT-GUIDE.md). Empty = local brain only.
  TIMEOUT_MS: 20000,
}

export async function getReply(text, history, ctx) {
  const local = ask(text, ctx)
  if (!CHAT_CONFIG.ENDPOINT) return local
  try {
    const ac = new AbortController(); const t = setTimeout(() => ac.abort(), CHAT_CONFIG.TIMEOUT_MS)
    const r = await fetch(CHAT_CONFIG.ENDPOINT, {
      method: 'POST', headers: { 'Content-Type': 'application/json' }, signal: ac.signal,
      body: JSON.stringify({ system: SYSTEM_PROMPT, facts: factsFor(text, ctx), messages: history.slice(-8).map(m => ({ role: m.role, content: m.text })).concat([{ role: 'user', content: text }]) }),
    })
    clearTimeout(t)
    const j = await r.json()
    if (j && typeof j.text === 'string' && j.text.trim()) return { ...local, text: j.text.trim(), form: local.form, table: local.table }
  } catch (e) { /* fall back to the local answer */ }
  return local
}
