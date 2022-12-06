const { readFileSync } = require("fs");
const { findFirstMarker } = require("./helpers");

const data = readFileSync("./data.txt", "utf-8");

// Part I
console.log("Start of packet:", findFirstMarker(data, 4));

// Part II
console.log("Start of message:", findFirstMarker(data, 14));
