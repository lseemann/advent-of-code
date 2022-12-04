const { 
  findSharedItem, 
  getPriority, 
  getSharedItemPriority,
  getBadgeForGroup,
  getPriorityForGroup,
} = require("../../2022/03/helpers");

const rucksacks = [
  "vJrwpWtwJgWrhcsFMMfFFhFp",
  "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL",
  "PmmdzqPrVvPwwTWBwg",
  "wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn",
  "ttgJtRGJQctTZtZT",
  "CrZsJsPPZsGzwwsLwLmpwMDw",
]

describe("Day 3 Part I", () => {
  it("yields the correct shared values", () =>{
    expect(findSharedItem(rucksacks[0])).toBe('p');
    expect(findSharedItem(rucksacks[1])).toBe('L');
    expect(findSharedItem(rucksacks[2])).toBe('P');
    expect(findSharedItem(rucksacks[3])).toBe('v');
    expect(findSharedItem(rucksacks[4])).toBe('t');
    expect(findSharedItem(rucksacks[5])).toBe('s');
  });

  it("yields the correct priorities", () => {
    expect(getPriority('a')).toBe(1);
    expect(getPriority('z')).toBe(26);
    expect(getPriority('A')).toBe(27);
    expect(getPriority('Z')).toBe(52);
  });

  it("returns the correct total",  () => {
    const total = getSharedItemPriority(rucksacks[0]) 
      + getSharedItemPriority(rucksacks[1]) 
      + getSharedItemPriority(rucksacks[2]) 
      + getSharedItemPriority(rucksacks[3]) 
      + getSharedItemPriority(rucksacks[4]) 
      + getSharedItemPriority(rucksacks[5]);
    expect(total).toBe(157);
  })
});

describe("Day 3 Part II", () => {
  it("finds the right badge", () =>{
    expect(getBadgeForGroup(rucksacks.slice(0,3))).toBe('r');
    expect(getBadgeForGroup(rucksacks.slice(3))).toBe('Z')
  });

  it("yields the correct priority", () => {
    expect(getPriorityForGroup(rucksacks.slice(0,3))).toBe(18);
    expect(getPriorityForGroup(rucksacks.slice(3))).toBe(52);
  });
});
