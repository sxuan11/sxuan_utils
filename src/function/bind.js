import {call} from './call'

export function bind(fun, obj, ...args) {
  return (...args2) => {
    return call(fun, obj, ...args, ...args2)
  }
}