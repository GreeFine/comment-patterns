module.exports = {
    name: 'Rust',
    nameMatchers: ['.rs'],
    multiLineComment: require('./common/c-style.js').multiLine(),
    singleLineComment: require('./common/c-style.js').singleLine()
  }
  