let bookName = prompt("Nhập tên sách: ");
let bookBorrowPerson = prompt("Nhập tên người mượn: ");
let bookFavoriteRate = +prompt("Nhập mức độ yêu thích: ");

switch(bookFavoriteRate){
    case  1: case 2:
        console.log("Sách này bạn có thể cân nhắc mượn lại sau");
        break;
    case 3:
        console.log("Sách này khá ổn, có thể mượn");
        break;
    case 4: case 5:
        console.log("Đây là cuốn sách yêu thích của bạn, hãy đọc ngay!");
        break;
    default:
        console.log("Mức độ không phù hợp");
}