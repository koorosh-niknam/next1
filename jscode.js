
let inptag = document.getElementById("clcinp");

window.addEventListener('click', function (e) {
    var clickover = document.getElementById("flbox");
    if (inptag.contains(e.target)) {
        clickover.style.display = "block";
        inptag.style.boxShadow = "0 1px 6px rgba(32,33,36,.28)";
        inptag.style.borderBottomRightRadius = 0;
        inptag.style.borderBottomLeftRadius = 0;
        inptag.style.borderColor = "rgba(223,225,229,0)";
    }
    else {
        clickover.style.display = "none";
        inptag.style.borderBottomRightRadius = "24px";
        inptag.style.borderBottomLeftRadius = "24px";
        inptag.style.boxShadow = "none";
        inptag.style.border = '1px solid gainsboro';
    }
})
