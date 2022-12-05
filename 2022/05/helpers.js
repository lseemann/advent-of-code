const parseCrates = (data, stackCount) => {
  const lines = data.split(/\r?\n/);
  const stacks = Array.from(Array(stackCount), () => []);

  for (let index = 0; index < lines.length && lines[index].indexOf('move') !== 0; index++) {
    const line = lines[index];

    stacks.forEach((stack, index) => {
      const crate = line.substring(index * 4 + 1, index * 4 + 2);
      if (crate.match(/[A-Z]/i)) {
        stacks[index].push(crate);
      }
    });
  }

  return stacks;
}

const parseMoves = (data) => {
  const lines = data.split(/\r?\n/);
  const moves = [];

  lines.forEach(line => {
    if (line.indexOf('move') === 0) {
      const strings = line.split(' ');
      moves.push({
        count: parseInt(strings[1]),
        origin: parseInt(strings[3]),
        destination: parseInt(strings[5]),
      })
    }
  });

  return moves;
}

const makeMoves = (stacks, moves, canMoveMultiples) => {
  const newStacks = JSON.parse(JSON.stringify(stacks));

  moves.forEach(move => {
    const {count, origin, destination} = move;
  
    if (canMoveMultiples) {
      const crates = newStacks[origin - 1].splice(0, count);
      newStacks[destination - 1].unshift(...crates);
    } else {
      for (let index = 0; index < count; index++) {
        const crate = newStacks[origin -1].shift();
        newStacks[destination -1].unshift(crate);
      }
    }
  });

  return newStacks;
}

const findTops = (stacks) => {
  let tops = '';

  stacks.forEach(stack => {
    tops += stack[0] || '';
  })

  return tops;
}


module.exports = {
  findTops,
  makeMoves,
  parseCrates,
  parseMoves,
};
