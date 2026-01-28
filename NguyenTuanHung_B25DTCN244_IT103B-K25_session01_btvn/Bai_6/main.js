let bookId = +parseInt(prompt("Nhập thứ tự sách trong thư viện: "));
let bookName = prompt("Nhập tên sách: ");

let newBookName = bookName.trim().toUpperCase();
let bookForm = "LIB - " + newBookName + " - " + bookId;

console.log("Tên sách gốc: " + bookName);
console.log("Mã sách được chuẩn hoá: " + bookForm);