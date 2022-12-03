const getPriority = (letter) => {
  const priorities = '-abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return priorities.indexOf(letter);
}

// Find the character that is repeated in the first and second halves of a string.
const findSharedItem = (rucksack) => {
  const middle = Math.floor(rucksack.length / 2);
  const first = rucksack.slice(0, middle);
  const second = rucksack.slice(middle);

  let repeatedCharacter = '';
  let index = 0;

  while (!repeatedCharacter) {
    if (second.indexOf(first[index]) > -1) {
      repeatedCharacter = first[index];
    }

    index += 1;
  }

  return repeatedCharacter;
}

// Find the characters in a rucksack that are present in the running list
// of possible matches. This list will be empty on first run.
const findSharedItems = (rucksack, candidates) => {
  if (!candidates) {
    return rucksack;
  }

  let newCandidates = '';
  
  for (let index = 0; index < candidates.length; index++) {
    const character = candidates[index];
    if (rucksack.indexOf(character) > -1
      && newCandidates.indexOf(character) === -1) {
      newCandidates += character;
    }
  }

  return newCandidates;
}

const getSharedItemPriority = (rucksack) => {
  return getPriority(findSharedItem(rucksack));
}

const getBadgeForGroup = (rucksacks) => {
  let badge = '';

  for (let index = 0; index < rucksacks.length; index++) {
    badge = findSharedItems(rucksacks[index], badge);
  }

  return badge;
}

const getPriorityForGroup = (rucksacks) => {
  return getPriority(getBadgeForGroup(rucksacks));
}

const sortIntoGroups = (rucksacks, groupSize) => {
  const groups = [];
  let group = [];

  for (let index = 0; index < rucksacks.length; index++) {
    const rucksack = rucksacks[index];

    group.push(rucksack);
    
    if ((index + 1) % groupSize === 0) {
      groups.push(group);
      group = [];
    }
  }

  return groups;
}

module.exports = {
  getPriority,
  findSharedItem,
  getSharedItemPriority,
  getBadgeForGroup,
  getPriorityForGroup,
  sortIntoGroups,
};
