const add = (a, b) => a + b

if (add(1, 2) !== 4) {
  throw new Error('Expected 3 to be 4')
}

// https://kentcdodds.com/blog/improve-test-error-messages-of-your-abstractions