function logoName(name, surname) {
  console.log(`mu name ${name} ${surname}`);
}
logoName("Ivan", "Glebov");

function countDepositSum(depositUSD, month, rate) {
  const sum = depositUSD * (1 + rate / 12) ** month;
  return sum;
}
const example1 = countDepositSum(1000, 24, 0.12);
console.log(example1);
