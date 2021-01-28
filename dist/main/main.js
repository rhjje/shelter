/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/js/burger-menu.js":
/*!************************************!*
  !*** ./src/main/js/burger-menu.js ***!
  \************************************/
/***/ (() => {

var burgerButton = document.querySelector('.menu-icon');
var burgerMenu = document.querySelector('.burger-menu');
var heading = document.querySelector('.heading');
var burgerBackground = document.querySelector('.burger-background');
burgerButton.addEventListener('click', function () {
  burgerButton.classList.toggle('menu-icon_open');
  heading.classList.toggle('heading_disabled');
  burgerBackground.classList.toggle('burger-background_closed');

  if (burgerButton.classList.contains('menu-icon_open')) {
    burgerMenu.style.transform = 'translateX(0px)';
    document.body.style.overflowY = 'hidden';
  } else {
    document.body.style.overflowY = 'visible';
    burgerMenu.style.transform = 'translateX(320px)';
  }
});
burgerBackground.addEventListener('click', function () {
  burgerButton.click();
});

/***/ }),

/***/ "./src/main/js/index.js":
/*!******************************!*
  !*** ./src/main/js/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger-menu */ "./src/main/js/burger-menu.js");
/* harmony import */ var _burger_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_burger_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-window */ "./src/main/js/modal-window.js");
/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal_window__WEBPACK_IMPORTED_MODULE_1__);

 // import slider from './slider';

/***/ }),

/***/ "./src/main/js/modal-window.js":
/*!*************************************!*
  !*** ./src/main/js/modal-window.js ***!
  \*************************************/
/***/ (() => {

var cards = document.querySelectorAll('.card_button');
var modalWindowContainer = document.querySelector('.modal-window');
var closeModalButton = document.querySelector('.close-modal');
var backgroundModal = document.querySelector('.modal-background');
var pets;

var renderModalWindow = function renderModalWindow(name) {
  while (modalWindowContainer.firstChild) {
    modalWindowContainer.removeChild(modalWindowContainer.firstChild);
  }

  var pet;
  pets.forEach(function (item) {
    if (item.name === name) {
      pet = item;
    }
  });
  modalWindowContainer.innerHTML = "<div class=\"modal-window__image\">\n    <img src=\"".concat(pet.img, "\" alt=\"Pets\">\n  </div>\n  <div class=\"information\">\n    <div class=\"information__name\">").concat(pet.name, "</div>\n    <div class=\"information__type-pets\">").concat(pet.type, " - ").concat(pet.breed, "</div>\n    <div class=\"information__description\">").concat(pet.description, "</div>\n    <ul class=\"information__extra\">\n      <li class=\"information__extra-item\"><b>Age:</b> ").concat(pet.age, "</li>\n      <li class=\"information__extra-item\"><b>Inoculations:</b> ").concat(pet.inoculations, "</li>\n      <li class=\"information__extra-item\"><b>Diseases:</b> ").concat(pet.diseases, "</li>\n      <li class=\"information__extra-item\"><b>Parasites:</b> ").concat(pet.parasites, "</li>\n    </ul>");
  modalWindowContainer.classList.remove('modal-window_closed');
  closeModalButton.classList.remove('modal-window_closed');
  backgroundModal.classList.remove('modal-window_closed');
};

fetch('./assets/json/pets.json').then(function (result) {
  return result.json();
}).then(function (result) {
  pets = result;
});
cards.forEach(function (card) {
  card.addEventListener('click', function () {
    renderModalWindow(card.getAttribute('data-name'));
  });
});
closeModalButton.addEventListener('click', function () {
  modalWindowContainer.classList.add('modal-window_closed');
  closeModalButton.classList.add('modal-window_closed');
  backgroundModal.classList.add('modal-window_closed');
});
backgroundModal.addEventListener('click', function () {
  closeModalButton.click();
});

/***/ }),

/***/ "./src/main/sass/styles.scss":
/*!***********************************!*
  !*** ./src/main/sass/styles.scss ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/main/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./src/main/sass/styles.scss");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL21haW4vanMvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL2pzL2luZGV4LmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvbWFpbi9qcy9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL3Nhc3Mvc3R5bGVzLnNjc3MiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOlsiYnVyZ2VyQnV0dG9uIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiYnVyZ2VyTWVudSIsImhlYWRpbmciLCJidXJnZXJCYWNrZ3JvdW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJib2R5Iiwib3ZlcmZsb3dZIiwiY2xpY2siLCJjYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJtb2RhbFdpbmRvd0NvbnRhaW5lciIsImNsb3NlTW9kYWxCdXR0b24iLCJiYWNrZ3JvdW5kTW9kYWwiLCJwZXRzIiwicmVuZGVyTW9kYWxXaW5kb3ciLCJuYW1lIiwiZmlyc3RDaGlsZCIsInJlbW92ZUNoaWxkIiwicGV0IiwiZm9yRWFjaCIsIml0ZW0iLCJpbm5lckhUTUwiLCJpbWciLCJ0eXBlIiwiYnJlZWQiLCJkZXNjcmlwdGlvbiIsImFnZSIsImlub2N1bGF0aW9ucyIsImRpc2Vhc2VzIiwicGFyYXNpdGVzIiwicmVtb3ZlIiwiZmV0Y2giLCJ0aGVuIiwicmVzdWx0IiwianNvbiIsImNhcmQiLCJnZXRBdHRyaWJ1dGUiLCJhZGQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXJCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQSxJQUFNRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUNBLElBQU1HLGdCQUFnQixHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXpCO0FBRUFGLFlBQVksQ0FBQ00sZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBTTtBQUMzQ04sY0FBWSxDQUFDTyxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixnQkFBOUI7QUFDQUosU0FBTyxDQUFDRyxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixrQkFBekI7QUFDQUgsa0JBQWdCLENBQUNFLFNBQWpCLENBQTJCQyxNQUEzQixDQUFrQywwQkFBbEM7O0FBRUEsTUFBSVIsWUFBWSxDQUFDTyxTQUFiLENBQXVCRSxRQUF2QixDQUFnQyxnQkFBaEMsQ0FBSixFQUF1RDtBQUNyRE4sY0FBVSxDQUFDTyxLQUFYLENBQWlCQyxTQUFqQixHQUE2QixpQkFBN0I7QUFDQVYsWUFBUSxDQUFDVyxJQUFULENBQWNGLEtBQWQsQ0FBb0JHLFNBQXBCLEdBQWdDLFFBQWhDO0FBQ0QsR0FIRCxNQUdPO0FBQ0xaLFlBQVEsQ0FBQ1csSUFBVCxDQUFjRixLQUFkLENBQW9CRyxTQUFwQixHQUFnQyxTQUFoQztBQUNBVixjQUFVLENBQUNPLEtBQVgsQ0FBaUJDLFNBQWpCLEdBQTZCLG1CQUE3QjtBQUNEO0FBQ0YsQ0Fa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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXJnZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJyk7XG5jb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1tZW51Jyk7XG5jb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRpbmcnKTtcbmNvbnN0IGJ1cmdlckJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLWJhY2tncm91bmQnKTtcblxuYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBidXJnZXJCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pY29uX29wZW4nKTtcbiAgaGVhZGluZy5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkaW5nX2Rpc2FibGVkJyk7XG4gIGJ1cmdlckJhY2tncm91bmQuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLWJhY2tncm91bmRfY2xvc2VkJyk7XG5cbiAgaWYgKGJ1cmdlckJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaWNvbl9vcGVuJykpIHtcbiAgICBidXJnZXJNZW51LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAndmlzaWJsZSc7XG4gICAgYnVyZ2VyTWVudS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgzMjBweCknO1xuICB9XG59KTtcblxuYnVyZ2VyQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYnVyZ2VyQnV0dG9uLmNsaWNrKCk7XG59KTtcbiIsImltcG9ydCBidXJnZXJNZW51IGZyb20gJy4vYnVyZ2VyLW1lbnUnO1xuaW1wb3J0IG1vZGFsV2luZG93IGZyb20gJy4vbW9kYWwtd2luZG93Jztcbi8vIGltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuIiwiY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9idXR0b24nKTtcbmNvbnN0IG1vZGFsV2luZG93Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdpbmRvdycpO1xuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpO1xuY29uc3QgYmFja2dyb3VuZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJhY2tncm91bmQnKTtcbmxldCBwZXRzO1xuXG5jb25zdCByZW5kZXJNb2RhbFdpbmRvdyA9IChuYW1lKSA9PiB7XG4gIHdoaWxlIChtb2RhbFdpbmRvd0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgbW9kYWxXaW5kb3dDb250YWluZXIucmVtb3ZlQ2hpbGQobW9kYWxXaW5kb3dDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBsZXQgcGV0O1xuICBwZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5uYW1lID09PSBuYW1lKSB7XG4gICAgICBwZXQgPSBpdGVtO1xuICAgIH1cbiAgfSk7XG5cbiAgbW9kYWxXaW5kb3dDb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb2RhbC13aW5kb3dfX2ltYWdlXCI+XG4gICAgPGltZyBzcmM9XCIke3BldC5pbWd9XCIgYWx0PVwiUGV0c1wiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uX19uYW1lXCI+JHtwZXQubmFtZX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX3R5cGUtcGV0c1wiPiR7cGV0LnR5cGV9IC0gJHtwZXQuYnJlZWR9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uX19kZXNjcmlwdGlvblwiPiR7cGV0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDx1bCBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYVwiPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5BZ2U6PC9iPiAke3BldC5hZ2V9PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+SW5vY3VsYXRpb25zOjwvYj4gJHtwZXQuaW5vY3VsYXRpb25zfTwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPkRpc2Vhc2VzOjwvYj4gJHtwZXQuZGlzZWFzZXN9PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+UGFyYXNpdGVzOjwvYj4gJHtwZXQucGFyYXNpdGVzfTwvbGk+XG4gICAgPC91bD5gO1xuXG4gIG1vZGFsV2luZG93Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgY2xvc2VNb2RhbEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGJhY2tncm91bmRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG59O1xuXG5mZXRjaCgnLi9hc3NldHMvanNvbi9wZXRzLmpzb24nKVxuICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQuanNvbigpKVxuICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgcGV0cyA9IHJlc3VsdDtcbiAgfSk7XG5cbmNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICByZW5kZXJNb2RhbFdpbmRvdyhjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xuICB9KTtcbn0pO1xuXG5jbG9zZU1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtb2RhbFdpbmRvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGNsb3NlTW9kYWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBiYWNrZ3JvdW5kTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xufSk7XG5cbmJhY2tncm91bmRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY2xvc2VNb2RhbEJ1dHRvbi5jbGljaygpO1xufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi9qcy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluL3Nhc3Mvc3R5bGVzLnNjc3NcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9