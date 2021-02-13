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
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ "./src/pets/js/slider.js");




/***/ }),

/***/ "./src/pets/js/modal-window.js":
/*!*************************************!*
  !*** ./src/pets/js/modal-window.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
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
  modalWindowContainer.innerHTML = "<div class=\"modal-window__image\">\n    <img src=\"".concat(pet.img, "\" alt=\"Pets\">\n  </div>\n  <div class=\"information\">\n    <div class=\"information__name\">").concat(pet.name, "</div>\n    <div class=\"information__type-pets\">").concat(pet.type, " - ").concat(pet.breed, "</div>\n    <div class=\"information__description\">").concat(pet.description, "</div>\n    <ul class=\"information__extra\">\n      <li class=\"information__extra-item\"><b>Age:</b> <span>").concat(pet.age, "</span></li>\n      <li class=\"information__extra-item\"><b>Inoculations:</b> <span>").concat(pet.inoculations, "</span></li>\n      <li class=\"information__extra-item\"><b>Diseases:</b> <span>").concat(pet.diseases, "</span></li>\n      <li class=\"information__extra-item\"><b>Parasites:</b> <span>").concat(pet.parasites, "</span></li>\n    </ul>");
  modalWindowContainer.classList.remove('modal-window_closed');
  closeModalButton.classList.remove('modal-window_closed');
  backgroundModal.classList.remove('modal-window_closed');
};

fetch('./assets/json/pets.json').then(function (result) {
  return result.json();
}).then(function (result) {
  pets = result;
});
closeModalButton.addEventListener('click', function () {
  modalWindowContainer.classList.add('modal-window_closed');
  closeModalButton.classList.add('modal-window_closed');
  backgroundModal.classList.add('modal-window_closed');
});
backgroundModal.addEventListener('click', function () {
  closeModalButton.click();
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderModalWindow);

/***/ }),

/***/ "./src/pets/js/slider.js":
/*!*******************************!*
  !*** ./src/pets/js/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modal-window */ "./src/pets/js/modal-window.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var toBeginning = document.querySelector('.to-beginning');
var toEnd = document.querySelector('.to-end');
var slideLeft = document.querySelector('.slide-left');
var slideRight = document.querySelector('.slide-right');
var page = document.querySelector('.current-page__number');
var pets;
var numbersOfCards;
var currentPage = 1;
var maxNumberPage;

if (window.innerWidth > 1279) {
  numbersOfCards = 8;
  maxNumberPage = 6;
} else if (window.innerWidth > 767) {
  numbersOfCards = 6;
  maxNumberPage = 8;
} else {
  numbersOfCards = 3;
  maxNumberPage = 16;
}

var Card = /*#__PURE__*/function () {
  function Card(name, image) {
    _classCallCheck(this, Card);

    this.name = name;
    this.image = image;
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var card = "<div class=\"card\">\n      <div class=\"card__image\">\n        <img src=\"".concat(this.image, "\" alt=\"Pets\">\n      </div>\n      <div class=\"card__name\">").concat(this.name, "</div>\n      <button class=\"card_button\" data-name=\"").concat(this.name, "\">Learn more</button>\n    </div>");
      return card;
    }
  }]);

  return Card;
}();

var renderCards = function renderCards() {
  var cardsContainer = document.querySelector('.cards');

  while (cardsContainer.firstChild) {
    cardsContainer.removeChild(cardsContainer.firstChild);
  }

  pets.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < numbersOfCards; i += 1) {
    var card = new Card(pets[i].name, pets[i].img);
    cardsContainer.innerHTML += card.render();
  }

  var cards = document.querySelectorAll('.card_button');
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      (0,_modal_window__WEBPACK_IMPORTED_MODULE_0__.default)(card.getAttribute('data-name'));
    });
  });
};

var setSettingsControlPanel = function setSettingsControlPanel() {
  if (currentPage === 1) {
    toBeginning.classList.add('button_disabled');
    toBeginning.setAttribute('disabled', true);
    slideLeft.classList.add('button_disabled');
    slideLeft.setAttribute('disabled', true);
    toEnd.classList.remove('button_disabled');
    toEnd.removeAttribute('disabled');
    slideRight.classList.remove('button_disabled');
    slideRight.removeAttribute('disabled');
  } else if (currentPage === maxNumberPage) {
    toBeginning.classList.remove('button_disabled');
    toBeginning.removeAttribute('disabled');
    slideLeft.classList.remove('button_disabled');
    slideLeft.removeAttribute('disabled');
    toEnd.classList.add('button_disabled');
    toEnd.setAttribute('disabled', true);
    slideRight.classList.add('button_disabled');
    slideRight.setAttribute('disabled', true);
  } else {
    toBeginning.classList.remove('button_disabled');
    toBeginning.removeAttribute('disabled');
    slideLeft.classList.remove('button_disabled');
    slideLeft.removeAttribute('disabled');
    toEnd.classList.remove('button_disabled');
    toEnd.removeAttribute('disabled');
    slideRight.classList.remove('button_disabled');
    slideRight.removeAttribute('disabled');
  }
};

slideRight.addEventListener('click', function () {
  if (currentPage < maxNumberPage) {
    currentPage += 1;
    page.innerText = currentPage;
    renderCards();
  }

  setSettingsControlPanel();
});
slideLeft.addEventListener('click', function () {
  if (currentPage > 1) {
    currentPage -= 1;
    page.innerText = currentPage;
    renderCards();
  }

  setSettingsControlPanel();
});
toBeginning.addEventListener('click', function () {
  currentPage = 1;
  page.innerText = 1;
  renderCards();
  setSettingsControlPanel();
});
toEnd.addEventListener('click', function () {
  currentPage = maxNumberPage;
  page.innerText = maxNumberPage;
  renderCards();
  setSettingsControlPanel();
});
fetch('./assets/json/pets.json').then(function (result) {
  return result.json();
}).then(function (result) {
  pets = result;
  renderCards();
});
window.addEventListener('resize', function (event) {
  var currentNumbersOfCards;
  var currentMaxNumberPage;

  if (event.target.innerWidth > 1279) {
    currentNumbersOfCards = 8;
    currentMaxNumberPage = 6;
  } else if (event.target.innerWidth > 767) {
    currentNumbersOfCards = 6;
    currentMaxNumberPage = 8;
  } else {
    currentNumbersOfCards = 3;
    currentMaxNumberPage = 16;
  }

  if (currentNumbersOfCards !== numbersOfCards) {
    numbersOfCards = currentNumbersOfCards;
    maxNumberPage = currentMaxNumberPage;
    currentPage = 1;
    page.innerText = 1;
    setSettingsControlPanel();
    renderCards();
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL3BldHMvanMvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9wZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvcGV0cy9qcy9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9wZXRzL2pzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL3BldHMvc2Fzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJidXJnZXJCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJCdXR0b25JbWFnZSIsImJ1cmdlck1lbnUiLCJoZWFkaW5nIiwiYnVyZ2VyQmFja2dyb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInN0eWxlIiwidHJhbnNmb3JtIiwiYm9keSIsIm92ZXJmbG93WSIsInNyYyIsInNldFRpbWVvdXQiLCJjbGljayIsIm1vZGFsV2luZG93Q29udGFpbmVyIiwiY2xvc2VNb2RhbEJ1dHRvbiIsImJhY2tncm91bmRNb2RhbCIsInBldHMiLCJyZW5kZXJNb2RhbFdpbmRvdyIsIm5hbWUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJwZXQiLCJmb3JFYWNoIiwiaXRlbSIsImlubmVySFRNTCIsImltZyIsInR5cGUiLCJicmVlZCIsImRlc2NyaXB0aW9uIiwiYWdlIiwiaW5vY3VsYXRpb25zIiwiZGlzZWFzZXMiLCJwYXJhc2l0ZXMiLCJyZW1vdmUiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiYWRkIiwidG9CZWdpbm5pbmciLCJ0b0VuZCIsInNsaWRlTGVmdCIsInNsaWRlUmlnaHQiLCJwYWdlIiwibnVtYmVyc09mQ2FyZHMiLCJjdXJyZW50UGFnZSIsIm1heE51bWJlclBhZ2UiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiQ2FyZCIsImltYWdlIiwiY2FyZCIsInJlbmRlckNhcmRzIiwiY2FyZHNDb250YWluZXIiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsImkiLCJyZW5kZXIiLCJjYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRBdHRyaWJ1dGUiLCJzZXRTZXR0aW5nc0NvbnRyb2xQYW5lbCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImV2ZW50IiwiY3VycmVudE51bWJlcnNPZkNhcmRzIiwiY3VycmVudE1heE51bWJlclBhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXJCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBMUI7QUFDQSxJQUFNRSxVQUFVLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBLElBQU1HLE9BQU8sR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0EsSUFBTUksZ0JBQWdCLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBekI7QUFFQUYsWUFBWSxDQUFDTyxn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QXJCLGlCQUFhLEdBQUdzQixvQkFBaEI7QUFDQXZCLGVBQVcsR0FBRyxDQUFkO0FBQ0FGLFFBQUksQ0FBQ3NCLFNBQUwsR0FBaUIsQ0FBakI7QUFDQUgsMkJBQXVCO0FBQ3ZCVixlQUFXO0FBQ1o7QUFDRixDQXZCRCxFOzs7Ozs7Ozs7Ozs7QUMxSUE7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0NyQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsc0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7VUNOQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwiZmlsZSI6InBldHMvcGV0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcbmNvbnN0IGJ1cmdlckJ1dHRvbkltYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbiA+IGltZycpO1xuY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItbWVudScpO1xuY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkaW5nJyk7XG5jb25zdCBidXJnZXJCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1iYWNrZ3JvdW5kJyk7XG5cbmJ1cmdlckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYnVyZ2VyQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaWNvbl9vcGVuJyk7XG4gIGhlYWRpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGluZ19kaXNhYmxlZCcpO1xuICBidXJnZXJCYWNrZ3JvdW5kLmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlci1iYWNrZ3JvdW5kX2Nsb3NlZCcpO1xuXG4gIGlmIChidXJnZXJCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWljb25fb3BlbicpKSB7XG4gICAgYnVyZ2VyTWVudS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgwcHgpJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgIGJ1cmdlckJ1dHRvbkltYWdlLnNyYyA9ICdhc3NldHMvaWNvbnMvYnVyZ2VyLnBuZyc7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAndmlzaWJsZSc7XG4gICAgYnVyZ2VyTWVudS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgzMjBweCknO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYnVyZ2VyQnV0dG9uSW1hZ2Uuc3JjID0gJ2Fzc2V0cy9pY29ucy9idXJnZXItYmxhY2sucG5nJztcbiAgICB9LCA0MDApO1xuICB9XG59KTtcblxuYnVyZ2VyQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYnVyZ2VyQnV0dG9uLmNsaWNrKCk7XG59KTtcbiIsImltcG9ydCBidXJnZXJNZW51IGZyb20gJy4vYnVyZ2VyLW1lbnUnO1xuaW1wb3J0IG1vZGFsV2luZG93IGZyb20gJy4vbW9kYWwtd2luZG93JztcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuIiwiY29uc3QgbW9kYWxXaW5kb3dDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93Jyk7XG5jb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNsb3NlLW1vZGFsJyk7XG5jb25zdCBiYWNrZ3JvdW5kTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYmFja2dyb3VuZCcpO1xubGV0IHBldHM7XG5cbmNvbnN0IHJlbmRlck1vZGFsV2luZG93ID0gKG5hbWUpID0+IHtcbiAgd2hpbGUgKG1vZGFsV2luZG93Q29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBtb2RhbFdpbmRvd0NvbnRhaW5lci5yZW1vdmVDaGlsZChtb2RhbFdpbmRvd0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGxldCBwZXQ7XG4gIHBldHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHBldCA9IGl0ZW07XG4gICAgfVxuICB9KTtcblxuICBtb2RhbFdpbmRvd0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvd19faW1hZ2VcIj5cbiAgICA8aW1nIHNyYz1cIiR7cGV0LmltZ31cIiBhbHQ9XCJQZXRzXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX25hbWVcIj4ke3BldC5uYW1lfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fdHlwZS1wZXRzXCI+JHtwZXQudHlwZX0gLSAke3BldC5icmVlZH08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX2Rlc2NyaXB0aW9uXCI+JHtwZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPHVsIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhXCI+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPkFnZTo8L2I+IDxzcGFuPiR7cGV0LmFnZX08L3NwYW4+PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+SW5vY3VsYXRpb25zOjwvYj4gPHNwYW4+JHtwZXQuaW5vY3VsYXRpb25zfTwvc3Bhbj48L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5EaXNlYXNlczo8L2I+IDxzcGFuPiR7cGV0LmRpc2Vhc2VzfTwvc3Bhbj48L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5QYXJhc2l0ZXM6PC9iPiA8c3Bhbj4ke3BldC5wYXJhc2l0ZXN9PC9zcGFuPjwvbGk+XG4gICAgPC91bD5gO1xuXG4gIG1vZGFsV2luZG93Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgY2xvc2VNb2RhbEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGJhY2tncm91bmRNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG59O1xuXG5mZXRjaCgnLi9hc3NldHMvanNvbi9wZXRzLmpzb24nKVxuICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQuanNvbigpKVxuICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgcGV0cyA9IHJlc3VsdDtcbiAgfSk7XG5cbmNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG1vZGFsV2luZG93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgY2xvc2VNb2RhbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGJhY2tncm91bmRNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG59KTtcblxuYmFja2dyb3VuZE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjbG9zZU1vZGFsQnV0dG9uLmNsaWNrKCk7XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTW9kYWxXaW5kb3c7XG4iLCJpbXBvcnQgcmVuZGVyTW9kYWxXaW5kb3cgZnJvbSAnLi9tb2RhbC13aW5kb3cnO1xuXG5jb25zdCB0b0JlZ2lubmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1iZWdpbm5pbmcnKTtcbmNvbnN0IHRvRW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWVuZCcpO1xuY29uc3Qgc2xpZGVMZWZ0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLWxlZnQnKTtcbmNvbnN0IHNsaWRlUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtcmlnaHQnKTtcbmNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wYWdlX19udW1iZXInKTtcblxubGV0IHBldHM7XG5sZXQgbnVtYmVyc09mQ2FyZHM7XG5sZXQgY3VycmVudFBhZ2UgPSAxO1xubGV0IG1heE51bWJlclBhZ2U7XG5cbmlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDEyNzkpIHtcbiAgbnVtYmVyc09mQ2FyZHMgPSA4O1xuICBtYXhOdW1iZXJQYWdlID0gNjtcbn0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjcpIHtcbiAgbnVtYmVyc09mQ2FyZHMgPSA2O1xuICBtYXhOdW1iZXJQYWdlID0gODtcbn0gZWxzZSB7XG4gIG51bWJlcnNPZkNhcmRzID0gMztcbiAgbWF4TnVtYmVyUGFnZSA9IDE2O1xufVxuXG5jbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW1hZ2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjYXJkID0gYDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9faW1hZ2VcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke3RoaXMuaW1hZ2V9XCIgYWx0PVwiUGV0c1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fbmFtZVwiPiR7dGhpcy5uYW1lfTwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhcmRfYnV0dG9uXCIgZGF0YS1uYW1lPVwiJHt0aGlzLm5hbWV9XCI+TGVhcm4gbW9yZTwvYnV0dG9uPlxuICAgIDwvZGl2PmA7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfVxufVxuXG5jb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcbiAgd2hpbGUgKGNhcmRzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjYXJkc0NvbnRhaW5lci5yZW1vdmVDaGlsZChjYXJkc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuICBwZXRzLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzT2ZDYXJkczsgaSArPSAxKSB7XG4gICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKHBldHNbaV0ubmFtZSwgcGV0c1tpXS5pbWcpO1xuICAgIGNhcmRzQ29udGFpbmVyLmlubmVySFRNTCArPSBjYXJkLnJlbmRlcigpO1xuICB9XG5cbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9idXR0b24nKTtcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW5kZXJNb2RhbFdpbmRvdyhjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmNvbnN0IHNldFNldHRpbmdzQ29udHJvbFBhbmVsID0gKCkgPT4ge1xuICBpZiAoY3VycmVudFBhZ2UgPT09IDEpIHtcbiAgICB0b0JlZ2lubmluZy5jbGFzc0xpc3QuYWRkKCdidXR0b25fZGlzYWJsZWQnKTtcbiAgICB0b0JlZ2lubmluZy5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgc2xpZGVMZWZ0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9kaXNhYmxlZCcpO1xuICAgIHNsaWRlTGVmdC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG5cbiAgICB0b0VuZC5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fZGlzYWJsZWQnKTtcbiAgICB0b0VuZC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgc2xpZGVSaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fZGlzYWJsZWQnKTtcbiAgICBzbGlkZVJpZ2h0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA9PT0gbWF4TnVtYmVyUGFnZSkge1xuICAgIHRvQmVnaW5uaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbl9kaXNhYmxlZCcpO1xuICAgIHRvQmVnaW5uaW5nLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBzbGlkZUxlZnQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgc2xpZGVMZWZ0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblxuICAgIHRvRW5kLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9kaXNhYmxlZCcpO1xuICAgIHRvRW5kLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICBzbGlkZVJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9kaXNhYmxlZCcpO1xuICAgIHNsaWRlUmlnaHQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHRvQmVnaW5uaW5nLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbl9kaXNhYmxlZCcpO1xuICAgIHRvQmVnaW5uaW5nLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBzbGlkZUxlZnQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgc2xpZGVMZWZ0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcblxuICAgIHRvRW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbl9kaXNhYmxlZCcpO1xuICAgIHRvRW5kLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBzbGlkZVJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbl9kaXNhYmxlZCcpO1xuICAgIHNsaWRlUmlnaHQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9XG59O1xuXG5zbGlkZVJpZ2h0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoY3VycmVudFBhZ2UgPCBtYXhOdW1iZXJQYWdlKSB7XG4gICAgY3VycmVudFBhZ2UgKz0gMTtcbiAgICBwYWdlLmlubmVyVGV4dCA9IGN1cnJlbnRQYWdlO1xuICAgIHJlbmRlckNhcmRzKCk7XG4gIH1cblxuICBzZXRTZXR0aW5nc0NvbnRyb2xQYW5lbCgpO1xufSk7XG5cbnNsaWRlTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGN1cnJlbnRQYWdlID4gMSkge1xuICAgIGN1cnJlbnRQYWdlIC09IDE7XG4gICAgcGFnZS5pbm5lclRleHQgPSBjdXJyZW50UGFnZTtcbiAgICByZW5kZXJDYXJkcygpO1xuICB9XG5cbiAgc2V0U2V0dGluZ3NDb250cm9sUGFuZWwoKTtcbn0pO1xuXG50b0JlZ2lubmluZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY3VycmVudFBhZ2UgPSAxO1xuICBwYWdlLmlubmVyVGV4dCA9IDE7XG4gIHJlbmRlckNhcmRzKCk7XG4gIHNldFNldHRpbmdzQ29udHJvbFBhbmVsKCk7XG59KTtcblxudG9FbmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGN1cnJlbnRQYWdlID0gbWF4TnVtYmVyUGFnZTtcbiAgcGFnZS5pbm5lclRleHQgPSBtYXhOdW1iZXJQYWdlO1xuICByZW5kZXJDYXJkcygpO1xuICBzZXRTZXR0aW5nc0NvbnRyb2xQYW5lbCgpO1xufSk7XG5cbmZldGNoKCcuL2Fzc2V0cy9qc29uL3BldHMuanNvbicpXG4gIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5qc29uKCkpXG4gIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICBwZXRzID0gcmVzdWx0O1xuICAgIHJlbmRlckNhcmRzKCk7XG4gIH0pO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKGV2ZW50KSA9PiB7XG4gIGxldCBjdXJyZW50TnVtYmVyc09mQ2FyZHM7XG4gIGxldCBjdXJyZW50TWF4TnVtYmVyUGFnZTtcblxuICBpZiAoZXZlbnQudGFyZ2V0LmlubmVyV2lkdGggPiAxMjc5KSB7XG4gICAgY3VycmVudE51bWJlcnNPZkNhcmRzID0gODtcbiAgICBjdXJyZW50TWF4TnVtYmVyUGFnZSA9IDY7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlubmVyV2lkdGggPiA3NjcpIHtcbiAgICBjdXJyZW50TnVtYmVyc09mQ2FyZHMgPSA2O1xuICAgIGN1cnJlbnRNYXhOdW1iZXJQYWdlID0gODtcbiAgfSBlbHNlIHtcbiAgICBjdXJyZW50TnVtYmVyc09mQ2FyZHMgPSAzO1xuICAgIGN1cnJlbnRNYXhOdW1iZXJQYWdlID0gMTY7XG4gIH1cblxuICBpZiAoY3VycmVudE51bWJlcnNPZkNhcmRzICE9PSBudW1iZXJzT2ZDYXJkcykge1xuICAgIG51bWJlcnNPZkNhcmRzID0gY3VycmVudE51bWJlcnNPZkNhcmRzO1xuICAgIG1heE51bWJlclBhZ2UgPSBjdXJyZW50TWF4TnVtYmVyUGFnZTtcbiAgICBjdXJyZW50UGFnZSA9IDE7XG4gICAgcGFnZS5pbm5lclRleHQgPSAxO1xuICAgIHNldFNldHRpbmdzQ29udHJvbFBhbmVsKCk7XG4gICAgcmVuZGVyQ2FyZHMoKTtcbiAgfVxufSk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGV0cy9qcy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wZXRzL3Nhc3Mvc3R5bGVzLnNjc3NcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9