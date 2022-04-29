import MyPromise from './index';
import { delay } from '../../lib/utils'

describe('custom promise', () => {
  it('base callback', () => {
    const input = 1000

    new MyPromise((resolve)=>{
      resolve(input)
    }).then((res)=>{
      expect(res).toBe(input)
    })
  });

  it('error callback', () => {
    const error = new Error()

    new MyPromise((_, reject)=>{
      reject(error)
    }).catch((res)=>{
      expect(res).toBe(error)
    })
  });

  it('chian call', () => {
    const input = 1000

    new MyPromise((resolve) => {
      resolve(input)
    })
    .then((res)=>res)
    .then((res)=>res)
    .then((res)=>{
      expect(res).toBe(input)
    })
  })

  it('async callback', () => {
    const mydelay = () => {
      return new MyPromise(async (resolve) => {
        await delay(1000)
        resolve(Date.now())
      })
    }
    let now = Date.now()
    mydelay().then((time)=>{
      expect(time-now).toBeGreaterThanOrEqual(1000)
      return mydelay()
    }).then((time)=>{
      expect(time-now).toBeGreaterThanOrEqual(2000)
    })
  })

});