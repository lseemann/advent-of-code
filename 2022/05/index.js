const { readFileSync } = require('fs');
const { makeMoves, parseCrates, parseMoves, findTops } = require('../../2022/05/helpers');

const data = readFileSync('./data.txt', 'utf-8');

const NUMBER_OF_STACKS = 9;

// Part I

const stacks = parseCrates(data, NUMBER_OF_STACKS);
const moves = parseMoves(data);
const newStacks = makeMoves(stacks, moves, false);
const tops = findTops(newStacks);
console.log('Tops after moves', tops);

// Part II

const newStacks2 = makeMoves(stacks, moves, true);
const tops2 = findTops(newStacks2);

console.log('Tops after moves', tops2);
