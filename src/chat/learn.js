// "Learning" with a safety lock: the bot NEVER changes its own rules from customer chats (anyone could teach it lies).
// Instead it keeps a list of questions it could not answer or that got a thumbs-down. The owner reviews that list
// and adds good answers to knowledge.js (FAQ). Approve first, learn second.
import { CHAT_CONFIG } from './provider.js'

const KEY = 'wcm-chat-log'
const clean = t => String(t || '').replace(/\d[\d\s-]{6,}\d/g, '[number]').replace(/[\w.+-]+@[\w-]+\.[\w.]+/g, '[email]').slice(0, 200)   // never keep phone numbers or emails

export function logEvent(type, q, a) {
  const row = { t: new Date().toISOString(), type, q: clean(q), a: a ? clean(a).slice(0, 120) : undefined, page: (location.hash || '#/').slice(0, 60) }
  try { const l = JSON.parse(localStorage.getItem(KEY) || '[]'); l.push(row); localStorage.setItem(KEY, JSON.stringify(l.slice(-100))) } catch (e) {}
  if (CHAT_CONFIG.LOG_ENDPOINT) { try { fetch(CHAT_CONFIG.LOG_ENDPOINT, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(row), keepalive: true }).catch(() => {}) } catch (e) {} }
}
