import * as aggregate from './aggregate.js'
import * as filter from './filter.js'
import * as test from './test.js'
import { argsToQuad } from './utils.js'

function includesQuad (subject, predicate, object, graph) {
  const quad = argsToQuad(subject, predicate, object, graph)

  return {
    label: `includes quad: ${quad.toCanonical()}`,
    filter: filter.match(subject, predicate, object, graph),
    aggregate: aggregate.count.quad(),
    test: test.gte(1)
  }
}

function includesType (type, min = 1) {
  return {
    label: `includes type ${type.toCanonical()}`,
    filter: filter.isType(type),
    aggregate: aggregate.count.subject(),
    test: test.gte(min)
  }
}

function quadCount (min = 1) {
  return {
    label: 'quad count',
    aggregate: aggregate.count.quad(),
    test: test.gte(min)
  }
}

export {
  includesQuad,
  includesType,
  quadCount
}
