"use strict"

// function that returns a decorator function, replaces the decorated function
// `descriptor.value` with our own that implements caching functionality
export const cacheable = (ttl) => (target, name, descriptor) => {
  const fn = descriptor.value
  let lastCalled = 0;
  let cache;

  descriptor.value = (...args) => {
    const now = +new Date()
    const timePassed = now - lastCalled

    if (timePassed > ttl || !lastCalled) {
      cache = fn(...args)
      lastCalled = now
    }

    return cache
  }

  return descriptor
}
