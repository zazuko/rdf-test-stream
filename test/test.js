import { strictEqual } from 'assert'
import { describe, it } from 'mocha'
import * as rdfTestStream from '../index.js'

describe('rdf-test-stream', () => {
  it('should export aggregate', () => {
    strictEqual(typeof rdfTestStream.aggregate, 'object')
  })

  it('should export filter', () => {
    strictEqual(typeof rdfTestStream.filter, 'object')
  })

  it('should export rule', () => {
    strictEqual(typeof rdfTestStream.rule, 'object')
  })

  it('should export test', () => {
    strictEqual(typeof rdfTestStream.test, 'object')
  })

  it('should export validate', () => {
    strictEqual(typeof rdfTestStream.validate, 'object')
  })

  it('should export Validator', () => {
    strictEqual(typeof rdfTestStream.Validator, 'function')
  })
})
