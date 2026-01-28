let bookName = prompt("Nhập tên sách: ");
let bookAuthor = prompt("Nhập tên tác giả: ");
let bookPublishYear = +prompt("Nhập năm xuất bản: ");
let bookPrice = parseFloat(prompt("Nhập giá tiền của sách: "));
let bookImport = +prompt("Số lượng nhập kho: ");

let newBookName = bookName.trim();
let newBookAuthor = bookAuthor.toUpperCase()
let bookId = newBookAuthor.slice(0, 3) + bookPublishYear + "-" + Math.floor(Math.random() * 1000) + 1;
let bookAge = 2026 - bookPublishYear;
let bookTotal = bookPrice * bookImport;
let bookRandom = Math.floor(Math.random() * 10) + 1;

console.log("---Phiếu nhập kho---");
console.log(`Mã sách: ${bookId}`);
console.log(`Tên sách: ${newBookName}`);
console.log(`Tác giả: ${newBookAuthor}`);
console.log(`Năm xuất bản: ${bookPublishYear}`);
console.log(`Tuổi sách: ${bookAge}`);
console.log(`Tổng giá trị: ${bookTotal}`);
console.log(`Kệ số: ${bookRandom}`);
