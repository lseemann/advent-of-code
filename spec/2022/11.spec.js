const { readFileSync } = require("fs");
const path = require("path");
const {
  calculateMonkeyBusiness,
  parseData,
  performOperations,
} = require("../../2022/11/helpers");

const data = readFileSync(
  path.resolve(__dirname, "../../2022/11/test-data.txt"),
  "utf-8"
);

describe("Day 11 Part I", () => {
  let { monkeys, divisorProduct } = parseData(data);

  it("parses Operators", () => {
    expect(monkeys[0].operation(2)).toBe(38);
    expect(monkeys[1].operation(20)).toBe(26);
    expect(monkeys[2].operation(9)).toBe(81);
    expect(monkeys[3].operation(7)).toBe(10);
    expect(monkeys[0].test(46)).toBeTrue();
    expect(monkeys[0].test(47)).toBeFalse();
    expect(monkeys[1].test(38)).toBeTrue();
    expect(monkeys[1].test(99)).toBeFalse();
    expect(monkeys[2].test(39)).toBeTrue();
    expect(monkeys[2].test(35)).toBeFalse();
    expect(monkeys[3].test(17)).toBeTrue();
    expect(monkeys[3].test(33)).toBeFalse();
  });

  it("counts inspections", () => {
    monkeys = performOperations(monkeys, 3, 20, divisorProduct);
    const inspections = monkeys.map((monkey) => monkey.inspections);
    expect(inspections).toEqual([101, 95, 7, 105]);
    expect(calculateMonkeyBusiness(inspections)).toBe(10605);
  });
});

describe("Day 11 Part II", () => {
  let { monkeys, divisorProduct } = parseData(data);

  it("counts inspections", () => {
    monkeys = performOperations(monkeys, 1, 1, divisorProduct);
    let inspections = monkeys.map((monkey) => monkey.inspections);
    expect(inspections).toEqual([2, 4, 3, 6]);

    monkeys = performOperations(monkeys, 1, 19, divisorProduct);

    inspections = monkeys.map((monkey) => monkey.inspections);
    expect(inspections).toEqual([99, 97, 8, 103]);

    monkeys = performOperations(monkeys, 1, 980, divisorProduct);
    inspections = monkeys.map((monkey) => monkey.inspections);
    expect(inspections).toEqual([5204, 4792, 199, 5192]);

    monkeys = performOperations(monkeys, 1, 9000, divisorProduct);
    inspections = monkeys.map((monkey) => monkey.inspections);
    expect(inspections).toEqual([52166, 47830, 1938, 52013]);
    expect(calculateMonkeyBusiness(inspections)).toBe(2713310158);
  });
});
