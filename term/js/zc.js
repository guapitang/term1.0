var ouser = document.getElementById("user");
var ops1 = document.getElementById("pass");
var ops2 = document.getElementById("ps2");
var osub = document.getElementById("sub");
var ocw1 = document.querySelector(".cw1");
var ocw2 = document.querySelector(".cw2");
var ocw3 = document.querySelector(".cw3");

var user = ps1 = ps2 =0;

ouser.onblur = function () {
    var str = ouser.value;
    var oureg = /^1[0-9]{10}$/ || /^([\w\.-]+)@([0-9a-zA-Z\.-]+)\.([a-zA-Z]{2,6}|\.)$/;
    if (oureg.test(str)) {
        ocw1.style.display = "none";
        user = 1;
    } else {
        ocw1.style.display = "block";
        user = 0;
    }
}


ops1.onblur = function () {
    var str = ops1.value;
    var opreg = /^[a-z0-9]{6,12}$/;
    if (opreg.test(str)) {
        ocw2.style.display = "none";
        ps1 = 1;
    } else {
        ocw2.style.display = "block";
        ps1 = 0;
    }
}

ops2.onblur = function () {
    var str = ops1.value;
    var str2 = ops2.value;
    if (str == str2) {
        ocw3.style.display = "none";
        ps2 = 1;
    } else {
        ocw3.style.display = "block";
        ps2 = 0;
    }
}

osub.onclick = function () {
    if (user && ps1 && ps2) {
        alert("注册成功");
    } else {
        alert("注册失败");
    }
}


class Login {
    constructor() {
        this.url = "http://api.icodeilife.cn:81/user";
        this.user = $("#user");
        this.pass = $("#pass");
        this.ps2 = $("#ps2");
        this.sub = $("#sub");
        this.state = $("p i");
        this.addEvent();
    }
    addEvent() {
        var that = this;
        this.sub.click(function () {
            that.load()
        })
    }
    load() {
        $.ajax({
            url: this.url,
            data: {
                type: "register",
                user: this.user.val(),
                pass: this.pass.val(),
                ps2: this.ps2.val(),
            },
            success: (res) => {
                res = JSON.parse(res);
                console.log(res);
                if (res.code == 0) {

                    this.state.html("注册失败，请重新注册");

                } else if (res.code == 1) {

                    this.state.html("注册成功，5秒后跳转到<a href='yichaodl.html'>登录</a>");
                    setTimeout(() => {
                        location.href = "yichaodl.html"
                    }, 5000);

                }
            }
        })
    }
}

new Login();
