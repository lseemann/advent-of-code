const { readFileSync } = require("fs");
const path = require("path");
const {
  getCRT,
  getStrengthAtCycle,
  getValueAtCycle,
  parseData,
  sumStrengths,
} = require("../../2022/10/helpers");

const data = readFileSync(
  path.resolve(__dirname, "../../2022/10/test-data.txt"),
  "utf-8"
);
const program = data.split(/\r?\n/);
const values = parseData(program);

describe("Day 10 Part I", () => {
  it("gets value at a given cycle", () => {
    expect(getValueAtCycle(values, 20)).toBe(21);
    expect(getValueAtCycle(values, 60)).toBe(19);
    expect(getValueAtCycle(values, 100)).toBe(18);
    expect(getValueAtCycle(values, 140)).toBe(21);
    expect(getValueAtCycle(values, 180)).toBe(16);
    expect(getValueAtCycle(values, 220)).toBe(18);
  });

  it("gets strength at a given cycle", () => {
    expect(getStrengthAtCycle(values, 20)).toBe(420);
    expect(getStrengthAtCycle(values, 60)).toBe(1140);
    expect(getStrengthAtCycle(values, 100)).toBe(1800);
    expect(getStrengthAtCycle(values, 140)).toBe(2940);
    expect(getStrengthAtCycle(values, 180)).toBe(2880);
    expect(getStrengthAtCycle(values, 220)).toBe(3960);
  });

  it("sums stregnths", () => {
    expect(sumStrengths(values, [20, 60, 100, 140, 180, 220])).toBe(13140);
  });
});

describe("Day 10, Part II", () => {
  const solution = [
    "##..##..##..##..##..##..##..##..##..##..",
    "###...###...###...###...###...###...###.",
    "####....####....####....####....####....",
    "#####.....#####.....#####.....#####.....",
    "######......######......######......####",
    "#######.......#######.......#######.....",
  ];

  const CRT = getCRT(values);

  it("renders the CRT", () => {
    expect(CRT[0]).toBe(solution[0]);
    expect(CRT[1]).toBe(solution[1]);
    expect(CRT[2]).toBe(solution[2]);
    expect(CRT[3]).toBe(solution[3]);
    expect(CRT[4]).toBe(solution[4]);
    expect(CRT[5]).toBe(solution[5]);
  });
});
