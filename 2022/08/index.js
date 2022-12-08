const { readFileSync } = require("fs");
const { countVisibleTrees, parseGrid, getSceneryScore } = require("./helpers");

const data = readFileSync("./data.txt", "utf-8");

// Part I
console.log(`Visible trees: ${countVisibleTrees(data)}`);

// Part II
const [rows, cols] = parseGrid(data);
let highest = 0;

for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
  for (let colIndex = 0; colIndex < cols.length; colIndex++) {
    const score = getSceneryScore(rows, cols, rowIndex, colIndex);

    highest = score > highest ? score : highest;
  }
}

console.log(`Best scenery score: ${highest}`);
