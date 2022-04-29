
import deepcopy from "./index";

const map = new Map();
map.set('key', 'value');
map.set('front end', 'interview');

const set = new Set();
set.add('front end');
set.add('interview');

const testCase = [
  {
    title: '基础测试用例',
    target: {
      field1: 1,
      field2: undefined,
      field3: {
        child: 'child'
      },
      field4: [2, 4, 8]
    },
  },
  {
    title: '基础测试用例2',
    target: {
      field1: 1,
      field2: undefined,
      field3: {
        child: 'child'
      },
      field4: [2, 4, 8],
      f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: { f: {} } } } } } } } } } } },
    }
  },
  {
    title: 'Map, Set 测试用例',
    target: {
      field1: 1,
      field2: undefined,
      field3: {
        child: 'child'
      },
      field4: [2, 4, 8],
      empty: null,
      map,
      set,
    },
  },
  {
    title: 'symbol date reg 测试用例',
    target: {
      field1: 1,
      field2: undefined,
      symbol: Object(Symbol(1)),
      date: new Date(),
      reg: /\d+/,
    },
  }
]

function getType(target) {
  return Object.prototype.toString.call(target)
}

function isObject(target) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}

const isDeep = (a, b) => {
  if (!a) { return a === b }
  if (isObject(a) && isObject(b)) {
    const type1 = getType(a)
    const type2 = getType(b)
    if (a === b) return false
    if (type1 !== type2) return false
    const keys = Object.keys(a)
    return keys.reduce((acc, key) => {
      if (acc) {
        const result = isDeep(a[key], b[key])
        if (result) return true
        return false
      }
      return false
    }, true)
  }
  if (!isObject(a) && !isObject(b)) {
    return a === b
  }
  return false
}

describe('deep copy', () => {
  test.each(testCase)('$title', ({ target }) => {
    const copy = deepcopy(target)
    expect(isDeep(copy, target)).toBe(true)
  })
})