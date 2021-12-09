function gt (value) {
  const test = result => result > value ? false : new Error(`expected >${value}, actual: ${result}`)

  test.toString = () => `>${value}`

  return test
}

function gte (value) {
  const test = result => result >= value ? false : new Error(`expected >=${value}, actual: ${result}`)

  test.toString = () => `>=${value}`

  return test
}

export {
  gt,
  gte
}
