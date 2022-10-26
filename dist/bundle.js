/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ (() => {

eval("const navbar = document.querySelector(\"nav\");\r\nconst arrayLogo = [\r\n        \"/img/calendarIcon.png\",\r\n        \"/img/faceTimeICON.png\",\r\n        \"/img/downloadIcon.png\",\r\n        \"/img/folderIcon.ico\",\r\n        \"/img/mailIcon.png\",\r\n        \"/img/planIcon.svg\",\r\n        \"/img/messageIcon.svg.png\",\r\n        \"/img/photoIcon.png\",\r\n        \"/img/catIcon.jpg\",\r\n        \"/img/safariIcon.png\",\r\n        \"/img/settingsIcon.png\",\r\n        \"/img/githubIcon.png\",\r\n\r\n    ];\r\nconst arrayLink = [\r\n    \"https://www.google.com\",\r\n    \"https://www.youtube.com\",\r\n    \"https://www.google.com\",\r\n    \"https://www.youtube.com\",\r\n    \"https://www.google.com\",\r\n    \"https://www.youtube.com\",\r\n    \"https://www.google.com\",\r\n    \"https://www.youtube.com\",\r\n    \"https://www.google.com\",\r\n    \"https://www.youtube.com\",\r\n    \"https://www.google.com\",\r\n    \"https://www.youtube.com\"\r\n];\r\nconst arrayInfo = [\r\n    \"Infobulle 1\",\r\n    \"Infobulle 2\",\r\n    \"Infobulle 3\",\r\n    \"Infobulle 4\",\r\n    \"Infobulle 5\",\r\n    \"Infobulle 6\",\r\n    \"Infobulle 7\",\r\n    \"Infobulle 8\",\r\n    \"Infobulle 9\",\r\n    \"Infobulle 10\",\r\n    \"Infobulle 11\",\r\n    \"Infobulle 12\",\r\n]\r\n\r\n\r\nlet Logo = function (arrayLogo, arrayLink, arrayInfo) {\r\n    this.arrayLogo = arrayLogo;\r\n    this.arrayLink = arrayLink;\r\n    this.arrayInfo = arrayInfo;\r\n\r\n    this.iconCreation = function () {\r\n        for (let i = 0; i < this.arrayLogo.length && this.arrayLink.length && this.arrayInfo.length; i++) {\r\n            let a = document.createElement('a');\r\n            a.href = arrayLink[i];\r\n\r\n            let image = document.createElement(\"img\");\r\n            image.src = arrayLogo[i];\r\n            image.title = arrayInfo[i];\r\n\r\n\r\n            image.addEventListener(\"mouseover\", () => {\r\n                image.style.transform = \"scale(1.3)\";\r\n            })\r\n\r\n            image.addEventListener(\"mouseleave\", () => {\r\n                setTimeout(() => {\r\n                    image.style.transform = \"scale(1)\";\r\n                },200)\r\n\r\n            })\r\n\r\n\r\n            navbar.append(a);\r\n            a.append(image);\r\n        }\r\n    }\r\n}\r\n\r\nlet iconCreation = new Logo(arrayLogo, arrayLink, arrayInfo);\r\niconCreation.iconCreation();\r\n\n\n//# sourceURL=webpack://dock-mackos/./assets/js/app.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./assets/js/app.js"]();
/******/ 	
/******/ })()
;