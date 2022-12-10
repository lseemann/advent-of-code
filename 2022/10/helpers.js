const CRT_WIDTH = 40;
const CRT_DEPTH = 6;
const SPRITE_WIDTH = 3;

const parseData = (program) => {
  let value = 1;
  const values = [1];

  program.forEach((line) => {
    if (line === "noop") {
      values.push(value);
      return;
    }

    const change = parseInt(line.split(" ")[1]);
    values.push(value);
    value += change;
    values.push(value);
  });

  return values;
};

const getValueAtCycle = (values, cycle) => {
  return values[cycle - 1];
};

const getStrengthAtCycle = (values, cycle) => {
  const value = getValueAtCycle(values, cycle);

  return cycle * value;
};

const sumStrengths = (program, cycles) => {
  const sum = cycles.reduce((sum, cycle) => {
    return sum + getStrengthAtCycle(program, cycle);
  }, 0);

  return sum;
};

const getCRT = (values) => {
  const rows = Array.from(Array(CRT_DEPTH), () =>
    Array.from(Array(CRT_WIDTH), () => ".")
  );

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    const row = rows[rowIndex];

    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      const spriteMiddle = values[rowIndex * CRT_WIDTH + colIndex];
      if (Math.abs(spriteMiddle - colIndex) < SPRITE_WIDTH - 1) {
        rows[rowIndex][colIndex] = "#";
      }
    }
  }

  return rows.map((row) => row.join(""));
};

module.exports = {
  getCRT,
  getStrengthAtCycle,
  getValueAtCycle,
  parseData,
  sumStrengths,
};
