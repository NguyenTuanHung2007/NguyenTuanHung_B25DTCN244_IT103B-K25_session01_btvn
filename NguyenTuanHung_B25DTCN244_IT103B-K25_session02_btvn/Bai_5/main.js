let bookName = prompt("Nhập tên sách: ");
let bookStatus = prompt("Nhập trạng thái sách (có sẵn, đã mượn): ");
let bookPublishYear = +prompt("Nhập năm xuất bản sách: ");
let currentYear = new Date().getFullYear();

if(currentYear - bookPublishYear <= 5 && bookPublishYear < currentYear && bookStatus === "có sẵn"){
    console.log("Sách này mới và có sẵn để mượn");
}
else if(currentYear - bookPublishYear <= 10 && bookPublishYear < currentYear && bookStatus === "đã mượn"){
    console.log("Sách này đã mượn nhưng khá mới, có thể mượn lại sau");
}
else if(currentYear - bookPublishYear > 10 && bookPublishYear < currentYear && bookStatus === "đã mượn"){
    console.log("Sách này đã mượn và khá cũ");
}
else if(currentYear - bookPublishYear > 5 && bookPublishYear < currentYear && bookStatus === "có sẵn"){
    console.log("Sách này có sẵn nhưng đã lâu năm");
}
else{
    console.log("Sách không hợp lệ");
}