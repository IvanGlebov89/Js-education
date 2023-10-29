const isAdmin = false;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`);
console.log(`Обычный файл ${isAdmin || canWrite}`);
console.log(`Инвентируем права ${!isAdmin}`);
const isEdited = true;
const isSuperAdmin = true;
console.log(
  `Файл редактирование ${isAdmin && canWrite && (!isEdited || isSuperAdmin)}`
);
// задачка

const balace = 1050;
const isBanned = true;
const isExist = true;
const isSelling = true;

if (balace > 1000 && isBanned && isExist && isSelling) {
  console.log("вы можете купить игру");
} else {
  console.log("игра вам недоступна");
}
