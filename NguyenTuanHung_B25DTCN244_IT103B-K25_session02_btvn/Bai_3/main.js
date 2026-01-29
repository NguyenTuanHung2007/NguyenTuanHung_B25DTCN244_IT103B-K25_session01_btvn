let bookName = prompt("Nhập tên sách");
let bookType = prompt("Nhập thể loại sách");
let bookStatus = Math.random() < 0.5 ? "Có sẵn" : "Đã mượn";

if(bookType === "Khoa học" || bookType === "Lịch sử" && bookStatus === "Có sẵn"){
    console.log("Sách có sẵn trong thư viện");
}
else if(bookType === "Khoa học" || bookType === "Lịch sử" && bookStatus === "Đã mượn"){
    console.log("Sách đã mượn");
}
else if(bookType === "Văn học" || bookType ==="Truyện"){
    console.log("Sách này có thể đọc giải trí");
}
else{
    console.log("Sách này không có trong thư viện");
}