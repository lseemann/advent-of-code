const { readFileSync } = require("fs");
const path = require("path");
const {
  isVisible,
  parseGrid,
  countVisibleTrees,
  countVisbility,
  getSceneryScore,
} = require("../../2022/08/helpers");

const data = readFileSync(
  path.resolve(__dirname, "../../2022/08/test-data.txt"),
  "utf-8"
);

const [rows, cols] = parseGrid(data);

describe("Day 8 Part I", () => {
  it("parses correctly", () => {
    expect(rows[0]).toEqual([3, 0, 3, 7, 3]);
    expect(rows[4]).toEqual([3, 5, 3, 9, 0]);
    expect(cols[0]).toEqual([3, 2, 6, 3, 3]);
    expect(cols[2]).toEqual([3, 5, 3, 5, 3]);
  });

  it("identifies visible trees", () => {
    expect(isVisible(rows, cols, 1, 1)).toBeTrue();
    expect(isVisible(rows, cols, 2, 1)).toBeTrue();
    expect(isVisible(rows, cols, 3, 1)).toBeFalse();
    expect(isVisible(rows, cols, 1, 2)).toBeTrue();
    expect(isVisible(rows, cols, 2, 2)).toBeFalse();
    expect(isVisible(rows, cols, 2, 3)).toBeTrue();
    expect(isVisible(rows, cols, 1, 3)).toBeFalse();
    expect(isVisible(rows, cols, 3, 3)).toBeFalse();
  });

  it("counts the visible trees", () => {
    expect(countVisibleTrees(data)).toBe(21);
  });
});

describe("Day 8 Part II", () => {
  it("counts scenery", () => {
    expect(countVisbility(cols[2], 1, "up")).toBe(1);
    expect(countVisbility(cols[2], 1, "down")).toBe(2);
    expect(countVisbility(rows[1], 2, "left")).toBe(1);
    expect(countVisbility(rows[1], 2, "right")).toBe(2);
    expect(countVisbility(cols[2], 3, "up")).toBe(2);
    expect(countVisbility(cols[2], 3, "down")).toBe(1);
    expect(countVisbility(rows[3], 2, "left")).toBe(2);
    expect(countVisbility(rows[3], 2, "right")).toBe(2);
  });

  it("calculates scenery score", () => {
    expect(getSceneryScore(rows, cols, 3, 2)).toBe(8);
    expect(getSceneryScore(rows, cols, 2, 2)).toBe(1);
    expect(getSceneryScore(rows, cols, 1, 1)).toBe(1);
    expect(getSceneryScore(rows, cols, 1, 3)).toBe(1);
    expect(getSceneryScore(rows, cols, 4, 4)).toBe(0);
    expect(getSceneryScore(rows, cols, 1, 2)).toBe(4);
  });
});
