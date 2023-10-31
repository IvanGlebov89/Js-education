function toPower(num, power) {
  const res = num ** power;
  return res;
}
console.log(toPower(2, 3));

const toPowerArrow = (num, power) => {
  const res = num ** power;
  return res;
};

console.log(toPowerArrow(2, 3));
