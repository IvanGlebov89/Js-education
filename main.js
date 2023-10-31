const toPowerArrow = (num, power) => {
  const power2 = power ?? 2;
  const res = num ** power2;
  return res;
};
console.log(toPowerArrow(2));
console.log(toPowerArrow(2, 5));
