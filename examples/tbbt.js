import rdf from 'rdf-ext'
import { aggregate, filter, test, rule, validate } from '../index.js'

const ns = {
  rdf: rdf.namespace('http://www.w3.org/1999/02/22-rdf-syntax-ns#'),
  schema: rdf.namespace('http://schema.org/'),
  tbbt: rdf.namespace('http://localhost:8080/data/')
}

async function main () {
  await validate.file('node_modules/tbbt-ld/dist/tbbt.nt', [{
    label: 'quad count',
    aggregate: aggregate.count.quad(),
    test: test.gte(120)
  }, {
    label: 'includes schema:Person',
    filter: filter.isType(ns.schema.Person),
    aggregate: aggregate.count.subject(),
    test: test.gte(5)
  }])

  await validate.file('node_modules/tbbt-ld/dist/tbbt.nt', [
    rule.includesQuad(ns.tbbt('person/amy-farrah-fowler'), ns.schema.givenName, rdf.literal('Amy')),
    rule.includesType(ns.schema.Person, 5),
    rule.quadCount(120)
  ])
}

main()
