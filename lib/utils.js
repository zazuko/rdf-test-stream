import rdf from 'rdf-ext'

function argsToQuad (subject, predicate, object, graph) {
  if (Array.isArray(subject)) {
    return rdf.quad(subject[0], subject[1], subject[2], subject[3])
  }

  if (subject.termType === 'Quad') {
    return subject
  }

  return rdf.quad(subject, predicate, object, graph)
}

export {
  argsToQuad
}
