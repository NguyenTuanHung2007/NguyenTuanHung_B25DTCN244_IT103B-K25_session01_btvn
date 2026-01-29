let username = prompt("Nhập tên người dùng");
let userRole = +prompt("Nhập vai trò (admin = 1, student = 2, guest = 3)");
let cardBalance = parseFloat(prompt("Nhập số dư tài khoản thẻ"));
let bookPassStatus = prompt("Trạng thái thẻ thư viện (Nhập true nếu đang hoạt động, hoặc để rỗng/nhập khác để coi như bị khóa)");
let bookReturnDate = +prompt("Số ngày quá hạn trả sách (Ví dụ: 0 là đúng hạn, 5 là quá hạn 5 ngày)");
let bookResult;
let bookFine;
let newUserRole;
let newBookReturnDate;

if(bookReturnDate === null){
    bookReturnDate = 0;
}

if(bookPassStatus === "khác" || bookPassStatus === null){
    bookPassStatus === null;
    userRole = 0;
    console.log("Thẻ thư viện bị khoá");
}

if(cardBalance === null){
    cardBalance = 0;
}

switch(userRole){
    case 1:
        newUserRole = "Admin, bạn có toàn quyền hệ thống";
        console.log("Chào Admin, bạn có toàn quyền hệ thống");
        break;
    case 2:
        newUserRole = "sinh viên, bạn có thể mượn sách";
        console.log("Chào sinh viên, bạn có thể mượn sách");
        break;
    case 3:
        newUserRole = "khách, bạn chỉ có thể đọc tại chỗ";
        console.log("Chào khách, bạn chỉ có thể đọc tại chỗ");
        break;
    default:
        console.log("Lỗi: Vai trò không hợp lệ hoặc thẻ thư viện bị khoá!");
}

if(username !== null && userRole === 1 || userRole === 2 && cardBalance > 0 && bookPassStatus === "true"){
    bookResult = "Được phép mượn sách";
    console.log("Được phép mượn sách");
}
else{
    bookResult = "Yêu cầu bị từ chối";
    console.log("Yêu cầu bị từ chối");
}

if(bookReturnDate <= 0){
    newBookReturnDate = "Trả đúng hạn";
    console.log("Cảm ơn bạn đã trả đúng hạn");
}
else if(bookReturnDate >= 1 && bookReturnDate <= 5){
    newBookReturnDate = "Quá hạn " + bookReturnDate + " ngày";
    bookFine = 5000 * bookReturnDate;
}
else if(bookReturnDate >= 6 && bookReturnDate <= 10){
    newBookReturnDate = "Quá hạn " + bookReturnDate + " ngày"
    bookFine = 10000 * bookReturnDate;
}
else{
    bookFine = 200000;
    console.log("Tài khoản bị khoá");
}

console.log(`--- HỆ THỐNG MƯỢN TRẢ ---

                Người dùng: ${username}

                Quyền hạn: Chào ${newUserRole}

                Kết quả mượn: ${bookResult}

                Tình trạng trả sách: ${newBookReturnDate}

                Tiền phạt: ${bookFine} VNĐ`)