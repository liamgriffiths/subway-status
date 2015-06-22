"use strict"

// helper to replace the original descriptor with our own
const makeDecorator = (fn) => (...args) => (target, name, descriptor) => {
  descriptor.value = fn(descriptor.value, ...args)
  return descriptor
}

export const _cachable = (fn, ttl) => {
  let lastCalled = 0;
  let cache;

  return (...args) => {
    const now = +new Date()
    const timePassed = now - lastCalled

    if (timePassed > ttl || !lastCalled) {
      cache = fn(...args)
      lastCalled = now
    }

    return cache
  }
}

export const cacheable = makeDecorator(_cachable)
