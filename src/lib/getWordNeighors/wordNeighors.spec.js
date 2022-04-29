import getNeighors from "./index";

const testCase = [
  ["dog cat", 0],
  ["dog DOG cat", 1],
  ["apple dog cat", 0],
  ["pineapple apple dog cat", 0],
  ["apple     apple dog cat", 1],
  ["apple dog apple dog cat", 0],
  ["dog dog DOG dog dog dog", 1],
  ["dog dog dog dog cat cat", 2],
  ["cat cat dog dog cat cat", 3],
];

describe("world neighors", () => {
  it.each(testCase)("test: %#", (str, count) => {
    expect(getNeighors(str)).toEqual(count);
  });
});
