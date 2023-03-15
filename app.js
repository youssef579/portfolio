const list = document.querySelector("header .list");
const closeBtn = document.querySelector("header .close");
const nav = document.querySelector("header nav");
const header = document.querySelector("header");
let scrolling = scrollY;

function filterEffect(units) {
    document
        .querySelectorAll("body > *:not(header, script), .logo")
        .forEach((element) => {
            element.style.filter = `blur(${units}px)`;
        });
}

function checkResize() {
    if (window.innerWidth <= 767) {
        document
            .querySelectorAll(".projects .main-projects article")
            .forEach(function (x) {
                if (x.nextElementSibling !== null)
                    x.nextElementSibling.style.height = `calc(${x.clientHeight}px + clamp(40px, 10vw , 80px))`;
                else
                    x.previousElementSibling.style.height = `calc(${x.clientHeight}px + clamp(40px, 10vw , 80px))`;
            });
    }
}

checkResize();

list.addEventListener("click", function () {
    nav.style.right = "0";
    filterEffect(4);
});

closeBtn.addEventListener("click", function () {
    nav.style.right = "min(-70%, -350px)";
    filterEffect(0);
});

window.addEventListener("scroll", function () {
    if (this.scrollY != 0)
        header.style.setProperty(
            "box-shadow",
            "0 10px 30px -10px rgba(2, 12, 27, 0.7"
        );
    else header.style.setProperty("box-shadow", "none");

    if (scrolling <= this.scrollY && nav.style.right !== "0px")
        header.style.top = "-95px";
    else header.style.top = "0";

    scrolling = this.scrollY;
});

window.addEventListener("resize", checkResize);

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
        });
    },
    { threshold: 0.4 }
);

document
    .querySelectorAll(
        ".about, .contact, .projects .container :is(h1, h2, .project)"
    )
    .forEach((element) => observer.observe(element));
