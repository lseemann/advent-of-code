const { readFileSync } = require('fs');
const path = require('path');
const { makeMoves, parseCrates, parseMoves, findTops } = require('../../2022/05/helpers');

const data = readFileSync(path.resolve(__dirname, '../../2022/05/test-data.txt'), 'utf-8');

const NUMBER_OF_STACKS = 3;

describe('Day 5 Part I', () => {
  it('correctly parses the stacks', () =>{
    const stacks = parseCrates(data, NUMBER_OF_STACKS);

    expect(stacks[0]).toEqual(['N', 'Z']);
    expect(stacks[1]).toEqual(['D', 'C', 'M']);
    expect(stacks[2]).toEqual(['P']);
  });

  it('correctly parses the moves', () => {
    const moves = parseMoves(data);

    expect(moves[0]).toEqual({ count: 1, origin: 2, destination: 1});
    expect(moves[1]).toEqual({ count: 3, origin: 1, destination: 3});
    expect(moves[2]).toEqual({ count: 2, origin: 2, destination: 1});
    expect(moves[3]).toEqual({ count: 1, origin: 1, destination: 2});
  })

  it('correctly makes the moves', () => {
    const stacks = parseCrates(data, NUMBER_OF_STACKS);
    const moves = parseMoves(data);
    const newStacks = makeMoves(stacks, moves);

    expect(newStacks[0]).toEqual(['C']);
    expect(newStacks[1]).toEqual(['M']);
    expect(newStacks[2]).toEqual(['Z', 'N', 'D', 'P']);
  })

  it('finds the tops', () => {
    const stacks = parseCrates(data, NUMBER_OF_STACKS);
    const moves = parseMoves(data);
    const newStacks = makeMoves(stacks, moves);
    const tops = findTops(newStacks);

    expect(tops).toBe('CMZ');
  })

  it('handles the CrateMover 9001', () => {
    const stacks = parseCrates(data, NUMBER_OF_STACKS);
    const moves = parseMoves(data);
    const newStacks = makeMoves(stacks, moves, true);
    const tops = findTops(newStacks);

    expect(tops).toBe('MCD');
  })
});
