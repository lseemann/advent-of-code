const { findFirstMarker } = require("../../2022/06/helpers");

const buffers = [
  "bvwbjplbgvbhsrlpgdmjqwftvncz",
  "nppdvjthqldpwncqszvftbrmjlhg",
  "nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg",
  "zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw",
  "mjqjpqmgbljsphdztnvjfqwrcgsmlb",
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
    expect(findFirstMarker(buffers[4], 14)).toBe(19);
    expect(findFirstMarker(buffers[5], 14)).toBe(23);
    expect(findFirstMarker(buffers[6], 14)).toBe(23);
    expect(findFirstMarker(buffers[7], 14)).toBe(29);
    expect(findFirstMarker(buffers[8], 14)).toBe(26);
  });
});
