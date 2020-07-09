const fs = require('fs');
const presentStats = require('./present-stats');
const files = [
  'diytQOZbSec - Semifinal 1',
  'UneIsOIIEwk - Semifinal 2',
  'nfo8hmIcoDQ - Finals',
]

let contents = [];
files.forEach(file => {
  contents = contents.concat(fs.readFileSync(`../CTWC 2019/${file}.txt`, 'utf8').split('\n'));
})

const results = {};
for (let i = 0; i < contents.length - 1; i++) {
  const first = contents[i].replace('\r', '');
  const second = contents[i+1].replace('\r', '');

  if (!first || !second || first.startsWith('Game') || second.startsWith('Game')) {
    continue;
  }

  if (results[first] === undefined) {
    results[first] = {};
  }

  if (results[first][second] === undefined) {
    results[first][second] = 0;
  }

  results[first][second]++;
}

console.log(presentStats(results));