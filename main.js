const isAdmin = false;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`);
console.log(`Обычный файл ${isAdmin || canWrite}`);
