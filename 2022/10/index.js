const { readFileSync } = require("fs");
const { parseData, sumStrengths, getCRT } = require("./helpers");

const data = readFileSync("./data.txt", "utf-8");
const program = data.split(/\r?\n/);
const values = parseData(program);

// Part I
const cycles = [20, 60, 100, 140, 180, 220];
const sum = sumStrengths(values, cycles);
console.log("Signal strength sum:", sum);

// Part II
const rows = getCRT(values);
rows.forEach((row) => console.log(row));
