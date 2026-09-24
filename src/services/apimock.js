const blueprints = [
  {
    author: 'JohnConnor',
    name: 'house',
    points: [
      { x: 80, y: 260 },
      { x: 80, y: 140 },
      { x: 180, y: 60 },
      { x: 280, y: 140 },
      { x: 280, y: 260 },
      { x: 80, y: 260 },
    ],
  },
  {
    author: 'JohnConnor',
    name: 'triangle',
    points: [
      { x: 120, y: 260 },
      { x: 260, y: 80 },
      { x: 400, y: 260 },
      { x: 120, y: 260 },
    ],
  },
  {
    author: 'Sarah',
    name: 'square',
    points: [
      { x: 120, y: 80 },
      { x: 360, y: 80 },
      { x: 360, y: 280 },
      { x: 120, y: 280 },
      { x: 120, y: 80 },
    ],
  },
]

const clone = (value) => structuredClone(value)

const apimock = {
  getAll: async () => clone(blueprints),
  getByAuthor: async (author) => clone(blueprints.filter((bp) => bp.author === author)),
  getByAuthorAndName: async (author, name) =>
    clone(blueprints.find((bp) => bp.author === author && bp.name === name)),
  create: async (blueprint) => {
    blueprints.push(clone(blueprint))
    return clone(blueprint)
  },
}

export default apimock
