document.getElementById("btn").onclick = function () {
    if (document.getElementById("pass").getAttribute("type") == "password") {
        document.getElementById("pass").removeAttribute("type");
        document.getElementById("pass").setAttribute("type", "text");
        document.getElementById("pass").style.cssText = `
                width: 100%;
                height: 100%;
                background-color: transparent;
                border-color: transparent transparent #fff transparent;
                border-bottom: 2px #fff solid;
                font-size: 18px;
                font-variant: small-caps;
                `
    }
    else if (document.getElementById("pass").getAttribute("type") == "text") {
        document.getElementById("pass").removeAttribute("type");
        document.getElementById("pass").setAttribute("type", "password");
    }
    else {
        alert("eror!!")
    }
}