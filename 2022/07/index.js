const { readFileSync } = require("fs");
const { getFileSize, getFileSystem } = require("./helpers");

const data = readFileSync("./data.txt", "utf-8");
const fileSystem = getFileSystem(data);
const root = fileSystem[0];

// Part I

const MAX = 100000
const directories = fileSystem.filter(f => f.type === 'dir');
const smalls = directories.filter(dir => {
  const size = getFileSize(fileSystem, dir);
  return size <= MAX;
});

let total = 0;
smalls.forEach(small => total += getFileSize(fileSystem, small));

console.log(`Sum of directories smaller than ${MAX}: ${total}`);

// Part II

const DISK_SPACE = 70000000;
const REQUIRED = 30000000;

const free = DISK_SPACE - getFileSize(fileSystem, root);
const needToDelete = REQUIRED - free;

let closest = getFileSize(fileSystem, root);

directories.forEach(dir => {
  const size = getFileSize(fileSystem, dir);

  if (size > needToDelete && (size - needToDelete) < (closest - needToDelete)) {
    closest = size;
  }
});

console.log(`Size of directory closest to required space: ${closest}`)
