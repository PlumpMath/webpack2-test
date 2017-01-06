export function test() {
  console.log("hello");
};
export function unused() {
  console.log("this should not be included");
};
export default function() {
  console.log("not good");
};
