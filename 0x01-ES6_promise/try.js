function recursivePromise(count) {
  if (count === 0) {
    // Base case: return a resolved Promise
    return Promise.resolve("Done!");
  }
  return new Promise((resolve, reject) => {
    // Resolve with a new Promise
    resolve(recursivePromise(count - 1));
  });
}

const promise = console.log(recursivePromise(5));
