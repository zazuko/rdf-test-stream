import { Transform } from 'readable-stream'

function aggregate (rules, quad) {
  for (const rule of rules) {
    if (rule.filter && !rule.filter(quad)) {
      continue
    }

    rule.result = rule.aggregate(quad, rule.result)
  }
}

function test (rules) {
  const results = []

  for (const rule of rules) {
    const error = rule.test(rule.result)

    results.push({ error, rule })
  }

  return results
}

class Validator extends Transform {
  constructor (rules, { log } = {}) {
    super({ objectMode: true })

    this.rules = rules
    this.log = log
  }

  _transform (quad, encoding, callback) {
    aggregate(this.rules, quad)

    callback(null, quad)
  }

  _flush (callback) {
    this.results = test(this.rules)

    let error = null

    const errorResults = this.results.filter(result => result.error)

    if (errorResults.length > 0) {
      error = new Error(errorResults.map(result => result.error.message).join('\n'))
      error.results = errorResults
    }

    if (Boolean(this.log) === true) {
      for (const result of this.results) {
        const { error, rule } = result

        console.log(`${rule.label} (${rule.test.toString()}): ${error ? error.message : 'passed'}`)
      }
    }

    callback(error)
  }
}

export {
  Validator as default,
  aggregate,
  test
}
