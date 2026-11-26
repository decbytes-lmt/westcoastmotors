<?php
// WCM AI review list. Upload as public_html/api/chat-log.php, set ADMIN_KEY below, then in src/chat/provider.js
// set LOG_ENDPOINT: './api/chat-log.php' and rebuild.
// POST (from the chat) = save one line.  GET ?key=YOUR_KEY = see what customers asked that the bot could not answer.
$ADMIN_KEY = 'CHANGE-THIS-LONG-SECRET';
$FILE = dirname(__DIR__) . '/wcm_chatlog.jsonl';   // saved ABOVE public_html so nobody can download it
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  header('Content-Type: application/json');
  $in = json_decode(file_get_contents('php://input'), true);
  if (!is_array($in) || empty($in['q'])) { http_response_code(400); exit('{}'); }
  $rl = sys_get_temp_dir() . '/wcm_lg_' . md5($_SERVER['REMOTE_ADDR'] ?? 'x'); $now = time();
  $h = array_filter(@json_decode(@file_get_contents($rl), true) ?: [], fn($t) => $t > $now - 600);
  if (count($h) >= 30) { http_response_code(429); exit('{}'); }
  $h[] = $now; @file_put_contents($rl, json_encode(array_values($h)));
  $row = ['t' => date('c'), 'type' => substr((string)($in['type'] ?? ''), 0, 12), 'q' => mb_substr((string)$in['q'], 0, 200), 'a' => mb_substr((string)($in['a'] ?? ''), 0, 120), 'page' => mb_substr((string)($in['page'] ?? ''), 0, 60)];
  if (is_file($FILE) && filesize($FILE) > 2000000) { exit('{}'); }
  file_put_contents($FILE, json_encode($row, JSON_UNESCAPED_UNICODE) . "\n", FILE_APPEND | LOCK_EX);
  echo '{"ok":true}'; exit;
}
if (!hash_equals($ADMIN_KEY, (string)($_GET['key'] ?? ''))) { http_response_code(403); exit('Forbidden'); }
$rows = is_file($FILE) ? array_map(fn($l) => json_decode($l, true), array_filter(explode("\n", file_get_contents($FILE)))) : [];
$count = []; foreach ($rows as $r) { if (($r['type'] ?? '') === 'good') continue; $k = strtolower(trim($r['q'] ?? '')); $count[$k] = ($count[$k] ?? ['n' => 0, 'type' => $r['type']]); $count[$k]['n']++; }
uasort($count, fn($a, $b) => $b['n'] <=> $a['n']);
header('Content-Type: text/html; charset=utf-8'); ?>
<!doctype html><meta name="viewport" content="width=device-width,initial-scale=1"><title>WCM AI review</title>
<style>body{font:15px system-ui;margin:20px;max-width:900px}td,th{padding:8px;border-bottom:1px solid #ddd;text-align:left;vertical-align:top}code{background:#f3f3f3;padding:6px;display:block;white-space:pre-wrap}</style>
<h1>Questions the bot could not answer (most asked first)</h1>
<p>For each good one, add a line to <b>FAQ</b> in <b>src/chat/knowledge.js</b>, rebuild, upload. Type: unanswered = bot did not know, bad = customer pressed thumbs-down.</p>
<table><tr><th>Times</th><th>Type</th><th>Question</th><th>Copy into knowledge.js</th></tr>
<?php foreach ($count as $q => $c): $e = htmlspecialchars($q); $words = array_slice(array_filter(preg_split('/\W+/', $q), fn($w) => strlen($w) > 3), 0, 3); ?>
<tr><td><?= $c['n'] ?></td><td><?= htmlspecialchars($c['type']) ?></td><td><?= $e ?></td><td><code>{ k: [<?= htmlspecialchars("'" . implode("', '", $words) . "'") ?>], a: 'WRITE THE ANSWER HERE' },</code></td></tr>
<?php endforeach; ?></table>
