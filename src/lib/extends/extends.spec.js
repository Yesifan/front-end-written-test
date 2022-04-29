import myExtend from './index'

class Animal {
  static kind = "animal"
  constructor(age){
    this.age = age
    this.sex = 1
  }

  hello(){
    return [this.age, this.sex]
  }
}

class Cat {
  constructor(age){
    this.age = age
  }
  miao(){
    return 'miao'
  }
}

const CatExAnimal = myExtend(Cat, Animal)

describe('extends', () => {
  const cat = new CatExAnimal(100)

  it("static props", ()=>{
    expect(CatExAnimal.kind).toBe(Animal.kind)
  })

  it("instance props", ()=>{
    expect(cat.miao()).toBe('miao')
    expect(cat.hello()).toEqual([100, 1])
  })

  it("instanceof", () => {
    expect(cat instanceof Animal).toBe(true)
    expect(cat instanceof CatExAnimal).toBe(true)
  })
})