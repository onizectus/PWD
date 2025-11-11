function fn_ValForm() {
    var sMsg = "";
    
    if (document.getElementById("name").value == "") {
        sMsg += "\n* Anda belum mengisikan nama";
    }
    
    var email = document.getElementById("email").value;
    if (email == "") {
        sMsg += "\n* Anda belum mengisikan email";
    } else {
        var emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            sMsg += "\n* Format email tidak valid (contoh: nama@domain.com)";
        }
    }
    
    if (document.getElementById("message").value == "") {
        sMsg += "\n* Anda belum mengisikan pesan";
    }
    
    if (sMsg != "") {
        alert("Peringatan:\n" + sMsg);
        return false;
    } else {
        return true;
    }
}