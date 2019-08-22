module.exports = {
  client: {
    name: 'name',
    tagName: 'graphql',
    includes: ['src/apollo/*.graphql'],
    excludes: ['generated/**'],
    endpoint: 'http://localhost/api/graphql',
    target: 'typescript',
    addTypename: true
  }
};
