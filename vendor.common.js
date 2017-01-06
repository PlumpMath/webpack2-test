module.test = function() {
  console.log('hello');
}

module.unused = function() {
  console.log('this should not be included');
};

module.exports = function() {
  console.log('not good');
}
