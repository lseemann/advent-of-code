// Tests whether a given tree can be seen from outside the grid
const isVisible = (rows, cols, rowIndex, colIndex) => {
  if (
    rowIndex === 0 ||
    colIndex === 0 ||
    rowIndex === rows.length - 1 ||
    colIndex === cols.length - 1
  ) {
    return true;
  }

  const height = rows[rowIndex][colIndex];

  const up = cols[colIndex].slice(0, rowIndex);
  const down = cols[colIndex].slice(rowIndex + 1);
  const left = rows[rowIndex].slice(0, colIndex);
  const right = rows[rowIndex].slice(colIndex + 1);

  return [up, down, left, right].some((direction) => {
    return direction.every((character) => character < height);
  });
};

// Convert data into an array of rows and an array of columns
const parseGrid = (data) => {
  const rows = data
    .split(/\r?\n/)
    .map((row) => row.split("").map((c) => parseInt(c)));

  const cols = Array.from(Array(rows[0].length), () => []);

  rows.forEach((row) => {
    row.forEach((character, colIndex) => {
      cols[colIndex].push(character);
    });
  });

  return [rows, cols];
};

// Trees visible from outside the grid
const countVisibleTrees = (data) => {
  const [rows, cols] = parseGrid(data);
  let count = 0;

  for (let rowIndex = 0; rowIndex < rows.length; rowIndex++) {
    for (let colIndex = 0; colIndex < cols.length; colIndex++) {
      count += isVisible(rows, cols, rowIndex, colIndex) ? 1 : 0;
    }
  }

  return count;
};

// Trees visible from a single direction from atop a given tree
const countVisbility = (trees, treeIndex, direction) => {
  if (treeIndex === 0 || treeIndex === trees.length - 1) {
    return 0;
  }

  const height = trees[treeIndex];
  const walkingDown = ["up", "left"].includes(direction);
  let count = 0;
  let blocked = false;
  let index = treeIndex + (walkingDown ? -1 : 1);

  while (!blocked && index >= 0 && index <= trees.length - 1) {
    count += 1;
    if (trees[index] < height) {
      index += walkingDown ? -1 : 1;
    } else {
      blocked = true;
    }
  }

  return count;
};

const getSceneryScore = (rows, cols, rowIndex, colIndex) => {
  const up = countVisbility(cols[colIndex], rowIndex, "up");
  const bottom = countVisbility(cols[colIndex], rowIndex, "bottom");
  const left = countVisbility(rows[rowIndex], colIndex, "left");
  const right = countVisbility(rows[rowIndex], colIndex, "right");

  return up * bottom * left * right;
};

module.exports = {
  countVisibleTrees,
  countVisbility,
  isVisible,
  parseGrid,
  getSceneryScore,
};
