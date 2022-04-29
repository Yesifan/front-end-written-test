import getSet from './index'

const testCase = [
  [
    [1, 2, 3, 4, 5, 6, 7], 
    [3, 4, 5, 7], 
    [1, 2, 6]
  ],
  [
    [1, 2, 3, 4, 5, 6, 7],
    [11, 22, 33],
    []
  ],
  [
    [1, 2, 11, 4, 5, 6, 7], 
    [11], 
    [11]
  ],
  [
    [1, 2, 11, 11, 5, 6, 6], 
    [2, 99, 66],
    [1, 2]
  ],

  [
    [1, 2, 11, 11, 5, 6, 6], 
    [11, 11, 66],
    [1, 11]
  ],
]

describe('deep copy', () => {
  test.each(testCase)('test: %#', (a, b, c) => {
    const target = getSet(a, b)
    expect(target).toEqual(c)
  })
})