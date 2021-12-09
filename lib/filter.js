import * as ns from './namespaces.js'

function isType (type) {
  return quad => {
    return quad.predicate.equals(ns.rdf.type) && quad.object.equals(type)
  }
}

function match (subject, predicate, object, graph) {
  return quad => {
    return (
      quad.subject.equals(subject) &&
      quad.predicate.equals(predicate) &&
      quad.object.equals(object) &&
      quad.graph.equals(graph)
    )
  }
}

export {
  isType,
  match
}
