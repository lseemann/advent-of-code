const { findFirstMarker } = require("../../2022/06/helpers");

const buffers = [
  "bvwbjplbgvbhsrlpgdmjqwftvncz",
  "nppdvjthqldpwncqszvftbrmjlhg",
  "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg",
  "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw",
];

describe("Day 6 Part I", () => {
  it("finds the correct marker", () => {
    expect(findFirstMarker(buffers[0], 4)).toBe(5);
    expect(findFirstMarker(buffers[1], 4)).toBe(6);
    expect(findFirstMarker(buffers[2], 4)).toBe(10);
    expect(findFirstMarker(buffers[3], 4)).toBe(11);
  });
});
