const submenu = document.querySelectorAll('div.submenu');
const submenu1 = document.querySelector('#icon1');
const submenu2 = document.querySelector('#icon2');
const submenu3 = document.querySelector('#icon3');
const submenu4 = document.querySelector('#icon4');
const submenu5 = document.querySelector('#icon5');
const submenu6 = document.querySelector('#icon6');
const submenu7 = document.querySelector('#icon7');
const submenu8 = document.querySelector('#icon8');
const submenu9 = document.querySelector('#icon9');
const submenu10 = document.querySelector('#icon10');
const submenu11 = document.querySelector('#icon11');
const submenu12 = document.querySelector('#icon12');

function mouseOverEvents (elements) {
    elements.forEach(function (element) {
        element.addEventListener("mouseover", function () {
            element.style.transform = "scale(1.3)";
        })
        element.addEventListener("mouseleave", function () {
            element.style.transform = "scale(1)";
        })
    })
}

function mouseClickLink (element, link) {

    element.addEventListener("click", function () {
            document.location = link;
        });
}

mouseClickLink(submenu1, "https://google.fr");
mouseClickLink(submenu2, "https://youtube.fr");
mouseClickLink(submenu3, "https://twitter.com");
mouseClickLink(submenu4, "https://twitch.fr");
mouseClickLink(submenu5, "https://youtube.fr");
mouseClickLink(submenu6, "https://youtube.fr");
mouseClickLink(submenu7, "https://youtube.fr");
mouseClickLink(submenu8, "https://youtube.fr");
mouseClickLink(submenu9, "https://youtube.fr");
mouseClickLink(submenu10, "https://youtube.fr");
mouseClickLink(submenu11, "https://youtube.fr");
mouseClickLink(submenu12, "https://youtube.fr");

mouseOverEvents(submenu);
