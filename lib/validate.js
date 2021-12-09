import rdf from 'rdf-ext'
import fromFile from 'rdf-utils-fs/fromFile.js'
import { finished } from 'readable-stream'
import Validator from './Validator.js'

async function validateFile (filename, rules) {
  return validateStream(fromFile(filename, { factory: rdf }), rules)
}

async function validateStream (stream, rules) {
  return new Promise(resolve => {
    const validator = new Validator(rules, { log: true })

    stream.pipe(validator)
    validator.resume()

    finished(validator, () => resolve())
  })
}

export {
  validateFile as file,
  validateStream as stream
}
