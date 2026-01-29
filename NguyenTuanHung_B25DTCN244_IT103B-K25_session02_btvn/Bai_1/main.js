let bookName = prompt("Nhập tên sách: ");
let bookAuthor = prompt("Nhập tên tác giả: ");
let bookPublishYear = +prompt("Nhập năm xuất bản: ");
let dateToday = new Date().getFullYear();

if(bookPublishYear === dateToday){
    console.log("Đây là sách mới");
}
else if(dateToday - bookPublishYear <= 5 && bookPublishYear < dateToday){
    console.log("Sách khá mới");
}
else{
    console.log("Sách đã cũ");
}