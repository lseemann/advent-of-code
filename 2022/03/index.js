const { readFileSync } = require('fs');
const { getSharedItemPriority, sortIntoGroups, getPriorityForGroup } = require("./helpers");

const data = readFileSync('./data.txt', 'utf-8');
const rucksacks = data.split(/\r?\n/);

// Part I
let total = 0;

rucksacks.forEach(rucksack => {
  if (rucksack) {
    total += getSharedItemPriority(rucksack);
  }
});

console.log('Part I:', total);

// Part II
total = 0;
const GROUP_SIZE = 3;

const groups = sortIntoGroups(rucksacks, GROUP_SIZE);

groups.forEach(group => {
  total += getPriorityForGroup(group);
})

console.log('Part II:', total);
