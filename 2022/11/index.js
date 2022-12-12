const { readFileSync } = require("fs");
const {
  parseData,
  performOperations,
  calculateMonkeyBusiness,
} = require("./helpers");

const data = readFileSync("./data.txt", "utf-8");

// Part I
const partI = () => {
  let { monkeys, divisorProduct } = parseData(data);
  monkeys = performOperations(monkeys, 3, 20, divisorProduct);
  let inspections = monkeys.map((monkey) => monkey.inspections);
  let monkeyBusiness = calculateMonkeyBusiness(inspections);

  console.log(`Monkey business: ${monkeyBusiness}`);
};

// Part II
const partII = () => {
  let { monkeys, divisorProduct } = parseData(data);
  monkeys = performOperations(monkeys, 1, 10000, divisorProduct);

  inspections = monkeys.map((monkey) => monkey.inspections);
  monkeyBusiness = calculateMonkeyBusiness(inspections);

  console.log(`Monkey business, part deux: ${monkeyBusiness}`);
};

partI();
partII();
