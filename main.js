const toPowerArrow = (num, power) => {
  const power2 = power ?? 2;
  const res = num ** power2;
  return res;
};
console.log(toPowerArrow(2));
console.log(toPowerArrow(2, 5));

const canAccessWebsite = (age) => {
  if (age < 18) {
    return false;
  } else {
    return true;
  }
};

console.log(canAccessWebsite(16));

const canAccessWebsite2 = (age) => (age < 18 ? false : true);
console.log(canAccessWebsite2(21));
