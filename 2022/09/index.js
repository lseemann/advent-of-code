const { readFileSync } = require("fs");
const { parseData, countTailPositions } = require("./helpers");

const data = readFileSync("./data.txt", "utf-8");
const moves = parseData(data);

// Part I
const positions = countTailPositions(moves, 2);
console.log(`The tail occupies ${positions} unique position.`)

// Part II
const longTailPositions = countTailPositions(moves, 10);
console.log(`The long rope’s tail occupies ${longTailPositions} unique position.`)
