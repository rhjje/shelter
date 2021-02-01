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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL21haW4vanMvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL2pzL2luZGV4LmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvbWFpbi9qcy9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL3Nhc3Mvc3R5bGVzLnNjc3M/YTdlZiIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJidXJnZXJCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJNZW51IiwiaGVhZGluZyIsImJ1cmdlckJhY2tncm91bmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY29udGFpbnMiLCJzdHlsZSIsInRyYW5zZm9ybSIsImJvZHkiLCJvdmVyZmxvd1kiLCJjbGljayIsImNhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZGFsV2luZG93Q29udGFpbmVyIiwiY2xvc2VNb2RhbEJ1dHRvbiIsImJhY2tncm91bmRNb2RhbCIsInBldHMiLCJyZW5kZXJNb2RhbFdpbmRvdyIsIm5hbWUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJwZXQiLCJmb3JFYWNoIiwiaXRlbSIsImlubmVySFRNTCIsImltZyIsInR5cGUiLCJicmVlZCIsImRlc2NyaXB0aW9uIiwiYWdlIiwiaW5vY3VsYXRpb25zIiwiZGlzZWFzZXMiLCJwYXJhc2l0ZXMiLCJyZW1vdmUiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiY2FyZCIsImdldEF0dHJpYnV0ZSIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBckI7QUFDQSxJQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBLElBQU1FLE9BQU8sR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0EsSUFBTUcsZ0JBQWdCLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBekI7QUFFQUYsWUFBWSxDQUFDTSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQzNDTixjQUFZLENBQUNPLFNBQWIsQ0FBdUJDLE1BQXZCLENBQThCLGdCQUE5QjtBQUNBSixTQUFPLENBQUNHLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLGtCQUF6QjtBQUNBSCxrQkFBZ0IsQ0FBQ0UsU0FBakIsQ0FBMkJDLE1BQTNCLENBQWtDLDBCQUFsQzs7QUFFQSxNQUFJUixZQUFZLENBQUNPLFNBQWIsQ0FBdUJFLFFBQXZCLENBQWdDLGdCQUFoQyxDQUFKLEVBQXVEO0FBQ3JETixjQUFVLENBQUNPLEtBQVgsQ0FBaUJDLFNBQWpCLEdBQTZCLGlCQUE3QjtBQUNBVixZQUFRLENBQUNXLElBQVQsQ0FBY0YsS0FBZCxDQUFvQkcsU0FBcEIsR0FBZ0MsUUFBaEM7QUFDRCxHQUhELE1BR087QUFDTFosWUFBUSxDQUFDVyxJQUFULENBQWNGLEtBQWQsQ0FBb0JHLFNBQXBCLEdBQWdDLFNBQWhDO0FBQ0FWLGNBQVUsQ0FBQ08sS0FBWCxDQUFpQkMsU0FBakIsR0FBNkIsbUJBQTdCO0FBQ0Q7QUFD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O1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6Im1haW4vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcbmNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLW1lbnUnKTtcbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZycpO1xuY29uc3QgYnVyZ2VyQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItYmFja2dyb3VuZCcpO1xuXG5idXJnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGJ1cmdlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWljb25fb3BlbicpO1xuICBoZWFkaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRpbmdfZGlzYWJsZWQnKTtcbiAgYnVyZ2VyQmFja2dyb3VuZC5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItYmFja2dyb3VuZF9jbG9zZWQnKTtcblxuICBpZiAoYnVyZ2VyQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pY29uX29wZW4nKSkge1xuICAgIGJ1cmdlck1lbnUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHB4KSc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICd2aXNpYmxlJztcbiAgICBidXJnZXJNZW51LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDMyMHB4KSc7XG4gIH1cbn0pO1xuXG5idXJnZXJCYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBidXJnZXJCdXR0b24uY2xpY2soKTtcbn0pO1xuIiwiaW1wb3J0IGJ1cmdlck1lbnUgZnJvbSAnLi9idXJnZXItbWVudSc7XG5pbXBvcnQgbW9kYWxXaW5kb3cgZnJvbSAnLi9tb2RhbC13aW5kb3cnO1xuLy8gaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcic7XG4iLCJjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX2J1dHRvbicpO1xuY29uc3QgbW9kYWxXaW5kb3dDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93Jyk7XG5jb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW1vZGFsJyk7XG5jb25zdCBiYWNrZ3JvdW5kTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYmFja2dyb3VuZCcpO1xubGV0IHBldHM7XG5cbmNvbnN0IHJlbmRlck1vZGFsV2luZG93ID0gKG5hbWUpID0+IHtcbiAgd2hpbGUgKG1vZGFsV2luZG93Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBtb2RhbFdpbmRvd0NvbnRhaW5lci5yZW1vdmVDaGlsZChtb2RhbFdpbmRvd0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGxldCBwZXQ7XG4gIHBldHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHBldCA9IGl0ZW07XG4gICAgfVxuICB9KTtcblxuICBtb2RhbFdpbmRvd0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvd19faW1hZ2VcIj5cbiAgICA8aW1nIHNyYz1cIiR7cGV0LmltZ31cIiBhbHQ9XCJQZXRzXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX25hbWVcIj4ke3BldC5uYW1lfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fdHlwZS1wZXRzXCI+JHtwZXQudHlwZX0gLSAke3BldC5icmVlZH08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX2Rlc2NyaXB0aW9uXCI+JHtwZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPHVsIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhXCI+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPkFnZTo8L2I+ICR7cGV0LmFnZX08L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5Jbm9jdWxhdGlvbnM6PC9iPiAke3BldC5pbm9jdWxhdGlvbnN9PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+RGlzZWFzZXM6PC9iPiAke3BldC5kaXNlYXNlc308L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5QYXJhc2l0ZXM6PC9iPiAke3BldC5wYXJhc2l0ZXN9PC9saT5cbiAgICA8L3VsPmA7XG5cbiAgbW9kYWxXaW5kb3dDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBjbG9zZU1vZGFsQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgYmFja2dyb3VuZE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbn07XG5cbmZldGNoKCcuL2Fzc2V0cy9qc29uL3BldHMuanNvbicpXG4gIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5qc29uKCkpXG4gIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICBwZXRzID0gcmVzdWx0O1xuICB9KTtcblxuY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbmRlck1vZGFsV2luZG93KGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XG4gIH0pO1xufSk7XG5cbmNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1vZGFsV2luZG93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgY2xvc2VNb2RhbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGJhY2tncm91bmRNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG59KTtcblxuYmFja2dyb3VuZE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjbG9zZU1vZGFsQnV0dG9uLmNsaWNrKCk7XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluL2pzL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4vc2Fzcy9zdHlsZXMuc2Nzc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=