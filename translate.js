const fs = require('fs');

const replacements = [
  ['🚀 開啟 \\(Advanced\\)', '🚀 Open (Advanced)'],
  ['📦 開啟 \\(相容下載模式\\)', '📦 Open (Compat)'],
  ['尚未Select Folder', 'No folder selected'],
  ['請點擊左上角「Select Folder」開始瀏覽', 'Click "Select Folder" to start browsing'],
  ['請點擊左上角「Select Project Folder」開始瀏覽', 'Click "Select Project Folder" to start browsing'],
  ['請重新Select Folder並顯示隱藏檔案，讓瀏覽器讀取', 'Please re-select folder and show hidden files so the browser can read'],
  ["'Git History   \\|   共 ' \\+ gitCommits.length \\+ ' 筆紀錄'", "'Git History   |   Total ' + gitCommits.length + ' commits'"],
  ["'共 ' \\+ commits.length \\+ ' 筆 commit 紀錄'", "'Total ' + commits.length + ' commits'"],
  ["'✓ Git history loaded: ' \\+ gitCommits.length \\+ ' 筆 commit'", "'✓ Git history loaded: ' + gitCommits.length + ' commits'"]
];

function translateFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  for (const [chi, eng] of replacements) {
    const re = new RegExp(chi, 'g');
    content = content.replace(re, eng);
  }
  fs.writeFileSync(filePath, content, 'utf-8');
  console.log('Translated', filePath);
}

translateFile('code-viewer/index.html');
translateFile('git-viewer/index.html');
