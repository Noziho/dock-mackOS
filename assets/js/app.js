const navbar = document.querySelector("nav");
const arrayLogo = [
        "/img/calendarIcon.png",
        "/img/faceTimeICON.png",
        "/img/downloadIcon.png",
        "/img/folderIcon.ico",
        "/img/mailIcon.png",
        "/img/planIcon.svg",
        "/img/messageIcon.svg.png",
        "/img/photoIcon.png",
        "/img/catIcon.jpg",
        "/img/safariIcon.png",
        "/img/settingsIcon.png",
        "/img/githubIcon.png",

    ];
const arrayLink = [
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.google.com",
    "https://www.youtube.com",
    "https://www.google.com",
    "https://www.youtube.com"
];
const arrayInfo = [
    "Infobulle 1",
    "Infobulle 2",
    "Infobulle 3",
    "Infobulle 4",
    "Infobulle 5",
    "Infobulle 6",
    "Infobulle 7",
    "Infobulle 8",
    "Infobulle 9",
    "Infobulle 10",
    "Infobulle 11",
    "Infobulle 12",
]


let Logo = function (arrayLogo, arrayLink, arrayInfo) {
    this.arrayLogo = arrayLogo;
    this.arrayLink = arrayLink;
    this.arrayInfo = arrayInfo;

    this.iconCreation = function () {
        for (let i = 0; i < this.arrayLogo.length && this.arrayLink.length && this.arrayInfo.length; i++) {
            let a = document.createElement('a');
            a.href = arrayLink[i];

            let image = document.createElement("img");
            image.src = arrayLogo[i];
            image.title = arrayInfo[i];


            image.addEventListener("mouseover", () => {
                image.style.transform = "scale(1.3)";
            })

            image.addEventListener("mouseleave", () => {
                setTimeout(() => {
                    image.style.transform = "scale(1)";
                },200)

            })


            navbar.append(a);
            a.append(image);
        }
    }
}

let iconCreation = new Logo(arrayLogo, arrayLink, arrayInfo);
iconCreation.iconCreation();
