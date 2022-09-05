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

eval("const submenu = document.querySelectorAll('div.submenu');\r\nconst submenu1 = document.querySelector('#icon1');\r\nconst submenu2 = document.querySelector('#icon2');\r\nconst submenu3 = document.querySelector('#icon3');\r\nconst submenu4 = document.querySelector('#icon4');\r\nconst submenu5 = document.querySelector('#icon5');\r\nconst submenu6 = document.querySelector('#icon6');\r\nconst submenu7 = document.querySelector('#icon7');\r\nconst submenu8 = document.querySelector('#icon8');\r\nconst submenu9 = document.querySelector('#icon9');\r\nconst submenu10 = document.querySelector('#icon10');\r\nconst submenu11 = document.querySelector('#icon11');\r\nconst submenu12 = document.querySelector('#icon12');\r\n\r\nfunction mouseOverEvents (elements) {\r\n    elements.forEach(function (element) {\r\n        element.addEventListener(\"mouseover\", function () {\r\n            element.style.transform = \"scale(1.3)\";\r\n        })\r\n        element.addEventListener(\"mouseleave\", function () {\r\n            element.style.transform = \"scale(1)\";\r\n        })\r\n    })\r\n}\r\n\r\nfunction mouseClickLink (element, link) {\r\n\r\n    element.addEventListener(\"click\", function () {\r\n            document.location = link;\r\n        });\r\n}\r\n\r\nmouseClickLink(submenu1, \"https://google.fr\");\r\nmouseClickLink(submenu2, \"https://youtube.fr\");\r\nmouseClickLink(submenu3, \"https://twitter.com\");\r\nmouseClickLink(submenu4, \"https://twitch.fr\");\r\nmouseClickLink(submenu5, \"https://youtube.fr\");\r\nmouseClickLink(submenu6, \"https://youtube.fr\");\r\nmouseClickLink(submenu7, \"https://youtube.fr\");\r\nmouseClickLink(submenu8, \"https://youtube.fr\");\r\nmouseClickLink(submenu9, \"https://youtube.fr\");\r\nmouseClickLink(submenu10, \"https://youtube.fr\");\r\nmouseClickLink(submenu11, \"https://youtube.fr\");\r\nmouseClickLink(submenu12, \"https://youtube.fr\");\r\n\r\nmouseOverEvents(submenu);\r\n\n\n//# sourceURL=webpack://dock-mackos/./assets/js/app.js?");

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