let users = [
    {
        name: "thanhcuong20",
        passWord: "123"
    }
]

// if (localStorage.getItem("rememberMe") === "true") {
//     window.location.href="home.html"
// }else{
//     window.location.href="logging.html"
// }

let loggingUser = localStorage.getItem("loggingUser") || sessionStorage.getItem("loggingUser");
let rememberMe = localStorage.getItem("rememberMe") === "true";
if (loggingUser && rememberMe) {
    window.location.href = "home.html";
} else if (!rememberMe && sessionStorage.getItem("loggingUser")) {
    window.location.href = "home.html";
} else {
    window.location.href = "logging.html";
}


if (!localStorage.getItem("users")) {
    localStorage.setItem("users", JSON.stringify(users));
} else {
    users = JSON.parse(localStorage.getItem("users"));
}
function updateData() {
    localStorage.setItem("users", JSON.stringify(users))
}
function register(e) {
    e.preventDefault()
    let temp = {
        name: e.target.name.value,
        passWord: e.target.passWord.value
    }
    if (users.find(value => value.name === temp.name)) {
        alert("tên đăng nhập không được trùng")
        return
    }
    users.push(temp)
    updateData()
    e.target.reset()
    window.location.href = "logging.html";

}
function logging(e) {
    e.preventDefault()
    let temp = {
        name: e.target.name.value,
        passWord: e.target.passWord.value
    }
    let rememberMe = e.target.rememberMe.checked;
    let user = users.find(value => value.name === temp.name && value.passWord === temp.passWord)
    if (!temp.name || !temp.passWord) {
        alert("vui lòng không để trống")
        return
    } else if (!user) {
        alert("tài khoảng hoặc mật khẩu ko đúng")
        return
    }
    if (rememberMe) {
        localStorage.setItem("loggingUser", JSON.stringify(user))
        localStorage.setItem("rememberMe", "true")
    } else {
        sessionStorage.setItem("loggingUser", JSON.stringify(user))
        sessionStorage.setItem("rememberMe", "false")
    }
    window.location.href = "home.html"
}
function logOut() {
    if (!confirm("bạn có chắc chắn đăng xuất không")) {
        return
    }
    localStorage.removeItem("loggingUser");
    localStorage.removeItem("rememberMe");
    sessionStorage.removeItem("loggingUser");
    sessionStorage.removeItem("rememberMe");
    window.location.href = "logging.html"
}
function registrationPage() {
    window.location.href = "register.html"
}
function loggingPage() {
    window.location.href = "logging.html"
}
