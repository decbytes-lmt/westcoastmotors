<?php
// WCM AI proxy (PHP, works on normal cPanel hosting). Keeps your API key OFF the website code.
// 1) Upload this file as public_html/api/chat.php   2) Put your key in the line below (or a server env var)
// 3) In src/chat/provider.js set ENDPOINT: './api/chat.php' and rebuild.   Never put the key in React code.
header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: no-store');
$API_KEY = getenv('ANTHROPIC_API_KEY') ?: 'PUT-YOUR-KEY-HERE';
$MODEL   = 'claude-haiku-5-5';          // small and cheap is enough for shop questions
$ORIGIN  = 'https://westcoastmotors.in'; // only your site may call this
if (($_SERVER['HTTP_ORIGIN'] ?? '') && $_SERVER['HTTP_ORIGIN'] !== $ORIGIN) { http_response_code(403); echo '{}'; exit; }
$in = json_decode(file_get_contents('php://input'), true);
if (!$in || empty($in['messages'])) { http_response_code(400); echo '{}'; exit; }
// simple rate limit: 20 requests per 10 minutes per visitor
$f = sys_get_temp_dir() . '/wcm_rl_' . md5($_SERVER['REMOTE_ADDR'] ?? 'x'); $now = time();
$hits = array_filter(@json_decode(@file_get_contents($f), true) ?: [], fn($t) => $t > $now - 600);
if (count($hits) >= 20) { http_response_code(429); echo '{}'; exit; }
$hits[] = $now; @file_put_contents($f, json_encode(array_values($hits)));
$system = ($in['system'] ?? '') . "\n\nFACTS (JSON):\n" . json_encode($in['facts'] ?? [], JSON_UNESCAPED_UNICODE);
$msgs = [];
foreach (array_slice($in['messages'], -9) as $m) { $msgs[] = ['role' => ($m['role'] === 'user' ? 'user' : 'assistant'), 'content' => mb_substr((string)$m['content'], 0, 600)]; }
$ch = curl_init('https://api.anthropic.com/v1/messages');
curl_setopt_array($ch, [CURLOPT_RETURNTRANSFER => true, CURLOPT_POST => true, CURLOPT_TIMEOUT => 18,
  CURLOPT_HTTPHEADER => ['content-type: application/json', 'x-api-key: ' . $API_KEY, 'anthropic-version: 2023-06-01'],
  CURLOPT_POSTFIELDS => json_encode(['model' => $MODEL, 'max_tokens' => 400, 'system' => $system, 'messages' => $msgs])]);
$res = curl_exec($ch); $j = json_decode($res, true);
echo json_encode(['text' => $j['content'][0]['text'] ?? '']);
