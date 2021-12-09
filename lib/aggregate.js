import rdf from 'rdf-ext'

const count = {}

count.quad = () => {
  let count = 0

  return () => {
    count++

    return count
  }
}

count.quad.distinct = () => {
  const quads = rdf.dataset()

  return quad => {
    quads.add(quad)

    return quads.size
  }
}

count.subject = () => {
  const subjects = rdf.termSet()

  return quad => {
    subjects.add(quad.subject)

    return subjects.size
  }
}

export {
  count
}
