import rdf from 'rdf-ext'
import { rule, Validator } from '../index.js'

const ns = {
  schema: rdf.namespace('http://schema.org/')
}

export default new Validator([
  rule.includesType(ns.schema.Person, 5),
  rule.quadCount(120)
], { log: true })
