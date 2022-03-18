const hap = function () {
  return 2;
};
const ste = function () {
  return 3;
};
const add = (c, v) => {
  return c() + v();
};
console.log("...");
console.log(add(hap, ste));
