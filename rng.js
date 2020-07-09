const presentStats = require('./present-stats');

const spawnTable = {
  0: 2,
  1: 7,
  2: 8,
  3: 10,
  4: 11,
  5: 14,
  6: 18,
}

const debugLabels = {
  2: 'T',
  7: 'J',
  8: 'Z',
  10: 'O',
  11: 'S',
  14: 'L',
  18: 'I',
};

const getCounter = () => ({
  'T': {
    'T': 0,
    'J': 0,
    'Z': 0,
    'O': 0,
    'S': 0,
    'L': 0,
    'I': 0,
  },
  'J': {
    'T': 0,
    'J': 0,
    'Z': 0,
    'O': 0,
    'S': 0,
    'L': 0,
    'I': 0,
  },
  'Z': {
    'T': 0,
    'J': 0,
    'Z': 0,
    'O': 0,
    'S': 0,
    'L': 0,
    'I': 0,
  },
  'O': {
    'T': 0,
    'J': 0,
    'Z': 0,
    'O': 0,
    'S': 0,
    'L': 0,
    'I': 0,
  },
  'S': {
    'T': 0,
    'J': 0,
    'Z': 0,
    'O': 0,
    'S': 0,
    'L': 0,
    'I': 0,
  },
  'L': {
    'T': 0,
    'J': 0,
    'Z': 0,
    'O': 0,
    'S': 0,
    'L': 0,
    'I': 0,
  },
  'I': {
    'T': 0,
    'J': 0,
    'Z': 0,
    'O': 0,
    'S': 0,
    'L': 0,
    'I': 0,
  },
});

const iterations = 10000001;
const totalAttempts = 1;
let counter = 0;

const comparisonResults = [];
const comparisonFunction = (stats) => stats['O']['O'] <= 0.02;

while (counter < totalAttempts) {
  let fullDebugCounter = getCounter();
  let spawnCount = 0;
  let index = 0;
  let spawnId = 0;

  for (let i = 0; i < iterations; i++) {
    const lastSpawnId = spawnId;

    spawnCount += 1;

    if (spawnCount === 256) {
      spawnCount = 0;
    }

    index = Math.floor(Math.random() * 8);
    let newSpawnId;

    if (index !== 7) {
      newSpawnId = spawnTable[index];

      if (newSpawnId !== spawnId) {
        spawnId = newSpawnId;

        if (debugLabels[lastSpawnId] && debugLabels[spawnId]) {
          fullDebugCounter[debugLabels[lastSpawnId]][debugLabels[spawnId]]++;
        }
        continue;
      }
    }

    index = Math.floor(Math.random() * 8);
    index += spawnId;
    index = index % 7;

    newSpawnId = spawnTable[index];

    spawnId = newSpawnId;

    if (debugLabels[lastSpawnId] && debugLabels[spawnId]) {
      fullDebugCounter[debugLabels[lastSpawnId]][debugLabels[spawnId]]++;
    }
  }

  console.log(presentStats(fullDebugCounter));
  const stats = presentStats(fullDebugCounter);
  comparisonResults.push(comparisonFunction(stats));
  counter += 1;
}

// console.log(comparisonResults.filter(r => !!r).length / totalAttempts);