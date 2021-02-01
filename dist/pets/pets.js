/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/pets/js/burger-menu.js":
/*!************************************!*
  !*** ./src/pets/js/burger-menu.js ***!
  \************************************/
/***/ (() => {

var burgerButton = document.querySelector('.menu-icon');
var burgerButtonImage = document.querySelector('.menu-icon > img');
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
    burgerButtonImage.src = 'assets/icons/burger.png';
  } else {
    document.body.style.overflowY = 'visible';
    burgerMenu.style.transform = 'translateX(320px)';
    setTimeout(function () {
      burgerButtonImage.src = 'assets/icons/burger-black.png';
    }, 400);
  }
});
burgerBackground.addEventListener('click', function () {
  burgerButton.click();
});

/***/ }),

/***/ "./src/pets/js/index.js":
/*!******************************!*
  !*** ./src/pets/js/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./burger-menu */ "./src/pets/js/burger-menu.js");
/* harmony import */ var _burger_menu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_burger_menu__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modal-window */ "./src/pets/js/modal-window.js");
/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modal_window__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/pets/js/modal-window.js":
/*!*************************************!*
  !*** ./src/pets/js/modal-window.js ***!
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

/***/ "./src/pets/sass/styles.scss":
/*!***********************************!*
  !*** ./src/pets/sass/styles.scss ***!
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
/******/ 	__webpack_require__("./src/pets/js/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ 	__webpack_require__("./src/pets/sass/styles.scss");
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL3BldHMvanMvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9wZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvcGV0cy9qcy9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9wZXRzL3Nhc3Mvc3R5bGVzLnNjc3M/MDM2MCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJidXJnZXJCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJCdXR0b25JbWFnZSIsImJ1cmdlck1lbnUiLCJoZWFkaW5nIiwiYnVyZ2VyQmFja2dyb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInN0eWxlIiwidHJhbnNmb3JtIiwiYm9keSIsIm92ZXJmbG93WSIsInNyYyIsInNldFRpbWVvdXQiLCJjbGljayIsImNhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZGFsV2luZG93Q29udGFpbmVyIiwiY2xvc2VNb2RhbEJ1dHRvbiIsImJhY2tncm91bmRNb2RhbCIsInBldHMiLCJyZW5kZXJNb2RhbFdpbmRvdyIsIm5hbWUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJwZXQiLCJmb3JFYWNoIiwiaXRlbSIsImlubmVySFRNTCIsImltZyIsInR5cGUiLCJicmVlZCIsImRlc2NyaXB0aW9uIiwiYWdlIiwiaW5vY3VsYXRpb25zIiwiZGlzZWFzZXMiLCJwYXJhc2l0ZXMiLCJyZW1vdmUiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiY2FyZCIsImdldEF0dHJpYnV0ZSIsImFkZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBckI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUExQjtBQUNBLElBQU1FLFVBQVUsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsSUFBTUcsT0FBTyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQSxJQUFNSSxnQkFBZ0IsR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUVBRixZQUFZLENBQUNPLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDM0NQLGNBQVksQ0FBQ1EsU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsZ0JBQTlCO0FBQ0FKLFNBQU8sQ0FBQ0csU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsa0JBQXpCO0FBQ0FILGtCQUFnQixDQUFDRSxTQUFqQixDQUEyQkMsTUFBM0IsQ0FBa0MsMEJBQWxDOztBQUVBLE1BQUlULFlBQVksQ0FBQ1EsU0FBYixDQUF1QkUsUUFBdkIsQ0FBZ0MsZ0JBQWhDLENBQUosRUFBdUQ7QUFDckROLGNBQVUsQ0FBQ08sS0FBWCxDQUFpQkMsU0FBakIsR0FBNkIsaUJBQTdCO0FBQ0FYLFlBQVEsQ0FBQ1ksSUFBVCxDQUFjRixLQUFkLENBQW9CRyxTQUFwQixHQUFnQyxRQUFoQztBQUNBWCxxQkFBaUIsQ0FBQ1ksR0FBbEIsR0FBd0Is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L0I7QUFDQXpCLGlCQUFlLENBQUNkLFNBQWhCLENBQTBCdUMsR0FBMUIsQ0FBOEIscUJBQTlCO0FBQ0QsQ0FKRDtBQU1BekIsZUFBZSxDQUFDZixnQkFBaEIsQ0FBaUMsT0FBakMsRUFBMEMsWUFBTTtBQUM5Q2Msa0JBQWdCLENBQUNKLEtBQWpCO0FBQ0QsQ0FGRCxFOzs7Ozs7Ozs7Ozs7QUN2REE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InBldHMvcGV0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcbmNvbnN0IGJ1cmdlckJ1dHRvbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbiA+IGltZycpO1xuY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItbWVudScpO1xuY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkaW5nJyk7XG5jb25zdCBidXJnZXJCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1iYWNrZ3JvdW5kJyk7XG5cbmJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYnVyZ2VyQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaWNvbl9vcGVuJyk7XG4gIGhlYWRpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGluZ19kaXNhYmxlZCcpO1xuICBidXJnZXJCYWNrZ3JvdW5kLmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlci1iYWNrZ3JvdW5kX2Nsb3NlZCcpO1xuXG4gIGlmIChidXJnZXJCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWljb25fb3BlbicpKSB7XG4gICAgYnVyZ2VyTWVudS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwcHgpJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgIGJ1cmdlckJ1dHRvbkltYWdlLnNyYyA9ICdhc3NldHMvaWNvbnMvYnVyZ2VyLnBuZyc7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAndmlzaWJsZSc7XG4gICAgYnVyZ2VyTWVudS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgzMjBweCknO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYnVyZ2VyQnV0dG9uSW1hZ2Uuc3JjID0gJ2Fzc2V0cy9pY29ucy9idXJnZXItYmxhY2sucG5nJztcbiAgICB9LCA0MDApO1xuICB9XG59KTtcblxuYnVyZ2VyQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYnVyZ2VyQnV0dG9uLmNsaWNrKCk7XG59KTtcbiIsImltcG9ydCBidXJnZXJNZW51IGZyb20gJy4vYnVyZ2VyLW1lbnUnO1xuaW1wb3J0IG1vZGFsV2luZG93IGZyb20gJy4vbW9kYWwtd2luZG93JztcbiIsImNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfYnV0dG9uJyk7XG5jb25zdCBtb2RhbFdpbmRvd0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3cnKTtcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGJhY2tncm91bmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1iYWNrZ3JvdW5kJyk7XG5sZXQgcGV0cztcblxuY29uc3QgcmVuZGVyTW9kYWxXaW5kb3cgPSAobmFtZSkgPT4ge1xuICB3aGlsZSAobW9kYWxXaW5kb3dDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIG1vZGFsV2luZG93Q29udGFpbmVyLnJlbW92ZUNoaWxkKG1vZGFsV2luZG93Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgbGV0IHBldDtcbiAgcGV0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcGV0ID0gaXRlbTtcbiAgICB9XG4gIH0pO1xuXG4gIG1vZGFsV2luZG93Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibW9kYWwtd2luZG93X19pbWFnZVwiPlxuICAgIDxpbWcgc3JjPVwiJHtwZXQuaW1nfVwiIGFsdD1cIlBldHNcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fbmFtZVwiPiR7cGV0Lm5hbWV9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uX190eXBlLXBldHNcIj4ke3BldC50eXBlfSAtICR7cGV0LmJyZWVkfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZGVzY3JpcHRpb25cIj4ke3BldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmFcIj5cbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+QWdlOjwvYj4gJHtwZXQuYWdlfTwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPklub2N1bGF0aW9uczo8L2I+ICR7cGV0Lmlub2N1bGF0aW9uc308L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5EaXNlYXNlczo8L2I+ICR7cGV0LmRpc2Vhc2VzfTwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPlBhcmFzaXRlczo8L2I+ICR7cGV0LnBhcmFzaXRlc308L2xpPlxuICAgIDwvdWw+YDtcblxuICBtb2RhbFdpbmRvd0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGNsb3NlTW9kYWxCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBiYWNrZ3JvdW5kTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xufTtcblxuZmV0Y2goJy4vYXNzZXRzL2pzb24vcGV0cy5qc29uJylcbiAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcbiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIHBldHMgPSByZXN1bHQ7XG4gIH0pO1xuXG5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVuZGVyTW9kYWxXaW5kb3coY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcbiAgfSk7XG59KTtcblxuY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbW9kYWxXaW5kb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBjbG9zZU1vZGFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgYmFja2dyb3VuZE1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbn0pO1xuXG5iYWNrZ3JvdW5kTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNsb3NlTW9kYWxCdXR0b24uY2xpY2soKTtcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BldHMvanMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGV0cy9zYXNzL3N0eWxlcy5zY3NzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==