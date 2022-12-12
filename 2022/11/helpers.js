const addFn = (n) => (old) => old + n;

const multiplyFn = (n) => (old) => old * n;

const squareFn = () => (old) => old * old;

const testFn = (n) => (old) => old % n === 0;

const throwFn = (toIndex, monkeys) => (item) => {
  monkeys[toIndex].items.push(item);
};

const parseData = (data) => {
  const rawMonkeys = data
    .split(/\r?\n\n/)
    .map((monkey) => monkey.split(/\r?\n/).map((line) => line.trim()));

  const monkeys = [];
  const divisors = [];

  rawMonkeys.forEach((monkey, index) => {
    const [, rawItems, rawOperation, rawTest, rawTrue, rawFalse] = monkey;

    const items = rawItems
      .split(": ")[1]
      .split(", ")
      .map((item) => parseInt(item));

    const operator = rawOperation.substring(21, 22);
    let value;
    let operation;
    if (operator === "+") {
      value = parseInt(rawOperation.split(" + ")[1]);
      operation = addFn(value);
    } else if (operator === "*") {
      value = rawOperation.split(" * ")[1];
      if (value === "old") {
        operation = squareFn();
      } else {
        operation = multiplyFn(parseInt(value));
      }
    }

    const divisor = parseInt(rawTest.split("by ")[1]);
    divisors.push(divisor);
    const test = testFn(divisor);

    const toMonkeyIndexTrue = parseInt(rawTrue.split("to monkey ")[1]);
    const toMonkeyIndexFalse = parseInt(rawFalse.split("to monkey ")[1]);

    const ifTrue = throwFn(toMonkeyIndexTrue, monkeys);
    const ifFalse = throwFn(toMonkeyIndexFalse, monkeys);

    monkeys.push({
      items,
      operation,
      test,
      ifTrue,
      ifFalse,
      inspections: 0,
    });
  });

  let divisorProduct = 1;
  divisors.forEach((d) => (divisorProduct *= d));

  return { monkeys, divisorProduct };
};

const performOperations = (
  monkeys,
  worryDivisor,
  roundCount,
  divisorProduct
) => {
  for (let index = 0; index < roundCount; index++) {
    monkeys.forEach((monkey, mI) => {
      while (monkey.items.length > 0) {
        let item = monkey.items.shift();
        item = monkey.operation(item);
        item = Math.floor(item / worryDivisor);
        item = item % divisorProduct;

        monkey.inspections += 1;
        if (monkey.test(item)) {
          monkey.ifTrue(item);
        } else {
          monkey.ifFalse(item);
        }
      }
    });
  }

  return monkeys;
};

const calculateMonkeyBusiness = (inspections) => {
  inspections.sort((a, b) => b - a);
  return inspections[0] * inspections[1];
};

module.exports = {
  performOperations,
  calculateMonkeyBusiness,
  parseData,
};
