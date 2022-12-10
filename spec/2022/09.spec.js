const { readFileSync } = require("fs");
const path = require("path");
const { countTailPositions, parseData } = require("../../2022/09/helpers");

describe("Day 9 Part I", () => {
  const data = readFileSync(
    path.resolve(__dirname, "../../2022/09/test-data.txt"),
    "utf-8"
  );
  const moves = parseData(data);

  it("counts tail positions correctly", () => {
    expect(countTailPositions(moves, 2)).toBe(13);
  });
});

describe("Day 9 Part II", () => {
  const data = readFileSync(
    path.resolve(__dirname, "../../2022/09/long-test-data.txt"),
    "utf-8"
  );
  const moves = parseData(data);

  it("counts long tail positions correctly", () => {
    expect(countTailPositions(moves, 10)).toBe(36);
  });
});
