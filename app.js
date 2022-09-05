let list = document.querySelector("header .list");
let closeBtn = document.querySelector("header .close");
let nav = document.querySelector("header nav");
let header = document.querySelector("header");

var scrolling = 0;

list.addEventListener("click", function () {
    nav.style.right = "0";
})

closeBtn.addEventListener("click", function () {
    nav.style.right = "min(-70%, -350px)";
})

window.addEventListener("scroll", function () {
    if (this.scrollY != 0)
        header.style.setProperty("box-shadow", "0 10px 30px -10px rgba(2, 12, 27, 0.7");
    else
        header.style.setProperty("box-shadow", "none");

    if (scrolling > this.scrollY)
        header.style.top = "0";
    else
        header.style.top = "-95px";

    scrolling = this.scrollY;
})