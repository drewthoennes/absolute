module.exports = {
  dev: {
    'port': 8080,
    'database': 'mongodb://localhost:27017/absolute',
    'name': 'Dev - Absolute',
    'host': 'alpine'
  },
  prod: {
    'port': 8080,
    'database': 'mongodb://localhost:27017/absolute',
    'name': 'Absolute',
    'host': 'absolutegame'
  }
}
