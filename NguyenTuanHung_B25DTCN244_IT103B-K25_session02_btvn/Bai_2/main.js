let bookNumber = +prompt("Nhập số lượng sách");

if(bookNumber < 10){
    console.log("Thư viện có ít sách");
}
else if(bookNumber >= 10 && bookNumber <= 20){
    console.log("Thư viện có số lượng sách vừa đủ");
}
else{
    console.log("Thư viện có nhiều sách");
}