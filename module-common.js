module.exports.test = function() {
  console.log("hello");
};
module.exports.unused = function() {
  console.log("this should not be included");
};
module.exports = function() {
  console.log("not good");
};
