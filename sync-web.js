// מעתיק את קבצי האתר (../snakes-site) לתיקיית www של האפליקציה. מריצים לפני כל בנייה: node sync-web.js
const fs = require('fs'), path = require('path');
const src = path.join(__dirname, '..', 'snakes-site'), dst = path.join(__dirname, 'www');
fs.rmSync(dst, { recursive: true, force: true });
fs.mkdirSync(dst);
for (const f of ['index.html', 'credits.html', 'privacy.html']) if (fs.existsSync(path.join(src, f))) fs.copyFileSync(path.join(src, f), path.join(dst, f));
for (const d of ['img', 'video', 'fonts']) fs.cpSync(path.join(src, d), path.join(dst, d), { recursive: true });
console.log('www ready:', fs.readdirSync(dst).join(', '));
