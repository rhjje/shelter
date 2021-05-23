/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _classCallCheck
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => /* binding */ _createClass
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

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
  document.body.style.overflowY = 'hidden';
};

fetch('./assets/json/pets.json').then(function (result) {
  return result.json();
}).then(function (result) {
  pets = result;
});

var hideModalWindow = function hideModalWindow() {
  modalWindowContainer.classList.add('modal-window_closed');
  closeModalButton.classList.add('modal-window_closed');
  backgroundModal.classList.add('modal-window_closed');
  document.body.style.overflowY = '';
};

closeModalButton.addEventListener('click', hideModalWindow);
backgroundModal.addEventListener('click', hideModalWindow);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderModalWindow);

/***/ }),

/***/ "./src/pets/js/slider.js":
/*!*******************************!*
  !*** ./src/pets/js/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _modal_window__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal-window */ "./src/pets/js/modal-window.js");



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
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Card);

    this.name = name;
    this.image = image;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Card, [{
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
      (0,_modal_window__WEBPACK_IMPORTED_MODULE_2__.default)(card.getAttribute('data-name'));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9wZXRzL2pzL2J1cmdlci1tZW51LmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvcGV0cy9qcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL3BldHMvanMvbW9kYWwtd2luZG93LmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvcGV0cy9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9wZXRzL3Nhc3Mvc3R5bGVzLnNjc3M/MDM2MCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJidXJnZXJCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJCdXR0b25JbWFnZSIsImJ1cmdlck1lbnUiLCJoZWFkaW5nIiwiYnVyZ2VyQmFja2dyb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInN0eWxlIiwidHJhbnNmb3JtIiwiYm9keSIsIm92ZXJmbG93WSIsInNyYyIsInNldFRpbWVvdXQiLCJjbGljayIsIm1vZGFsV2luZG93Q29udGFpbmVyIiwiY2xvc2VNb2RhbEJ1dHRvbiIsImJhY2tncm91bmRNb2RhbCIsInBldHMiLCJyZW5kZXJNb2RhbFdpbmRvdyIsIm5hbWUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJwZXQiLCJmb3JFYWNoIiwiaXRlbSIsImlubmVySFRNTCIsImltZyIsInR5cGUiLCJicmVlZCIsImRlc2NyaXB0aW9uIiwiYWdlIiwiaW5vY3VsYXRpb25zIiwiZGlzZWFzZXMiLCJwYXJhc2l0ZXMiLCJyZW1vdmUiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiaGlkZU1vZGFsV2luZG93IiwiYWRkIiwidG9CZWdpbm5pbmciLCJ0b0VuZCIsInNsaWRlTGVmdCIsInNsaWRlUmlnaHQiLCJwYWdlIiwibnVtYmVyc09mQ2FyZHMiLCJjdXJyZW50UGFnZSIsIm1heE51bWJlclBhZ2UiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiQ2FyZCIsImltYWdlIiwiY2FyZCIsInJlbmRlckNhcmRzIiwiY2FyZHNDb250YWluZXIiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsImkiLCJyZW5kZXIiLCJjYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRBdHRyaWJ1dGUiLCJzZXRTZXR0aW5nc0NvbnRyb2xQYW5lbCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImV2ZW50IiwiY3VycmVudE51bWJlcnNPZkNhcmRzIiwiY3VycmVudE1heE51bWJlclBhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBLGlCQUFpQixrQkFBa0I7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7O0FDZEEsSUFBTUEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBckI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUExQjtBQUNBLElBQU1FLFVBQVUsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsSUFBTUcsT0FBTyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQSxJQUFNSSxnQkFBZ0IsR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUVBRixZQUFZLENBQUNPLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDM0NQLGNBQVksQ0FBQ1EsU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsZ0JBQTlCO0FBQ0FKLFNBQU8sQ0FBQ0csU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsa0JBQXpCO0FBQ0FILGtCQUFnQixDQUFDRSxTQUFqQixDQUEyQkMsTUFBM0IsQ0FBa0MsMEJBQWxDOztBQUVBLE1BQUlULFlBQVksQ0FBQ1EsU0FBYixDQUF1QkUsUUFBdkIsQ0FBZ0MsZ0JBQWhDLENBQUosRUFBdUQ7QUFDckROLGNBQVUsQ0FBQ08sS0FBWCxDQUFpQkMsU0FBakIsR0FBNkIsaUJBQTdCO0FBQ0FYLFlBQVEsQ0FBQ1ksSUFBVCxDQUFjRixLQUFkLENBQW9CRyxTQUFwQixHQUFnQyxRQUFoQztBQUNBWCxxQkFBaUIsQ0FBQ1ksR0FBbEIsR0FBd0IseUJBQXhCO0FBQ0QsR0FKRCxNQUlPO0FBQ0xkLFlBQVEsQ0FBQ1ksSUFBVCxDQUFjRixLQUFkLENBQW9CRyxTQUFwQixHQUFnQyxTQUFoQztBQUNBVixjQUFVLENBQUNPLEtBQVgsQ0FBaUJDLFNBQWpCLEdBQTZCLG1CQUE3QjtBQUNBSSxjQUFVLENBQUMsWUFBTTtBQUNmYix1QkFBaUIsQ0FBQ1ksR0FBbEIsR0FBd0IsK0JBQXhCO0FBQ0QsS0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdEO0FBQ0YsQ0FoQkQ7QUFrQkFULGdCQUFnQixDQUFDQyxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBTTtBQUMvQ1AsY0FBWSxDQUFDaUIsS0FBYjtBQUNELENBRkQsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDREEsSUFBTUMsb0JBQW9CLEdBQUdqQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBN0I7QUFDQSxJQUFNaUIsZ0JBQWdCLEdBQUdsQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBekI7QUFDQSxJQUFNa0IsZUFBZSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUF4QjtBQUNBLElBQUltQixJQUFKOztBQUVBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2xDLFNBQU9MLG9CQUFvQixDQUFDTSxVQUE1QixFQUF3QztBQUN0Q04sd0JBQW9CLENBQUNPLFdBQXJCLENBQWlDUCxvQkFBb0IsQ0FBQ00sVUFBdEQ7QUFDRDs7QUFFRCxNQUFJRSxHQUFKO0FBQ0FMLE1BQUksQ0FBQ00sT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUNyQixRQUFJQSxJQUFJLENBQUNMLElBQUwsS0FBY0EsSUFBbEIsRUFBd0I7QUFDdEJHLFNBQUcsR0FBR0UsSUFBTjtBQUNEO0FBQ0YsR0FKRDtBQU1BVixzQkFBb0IsQ0FBQ1csU0FBckIsaUVBQ2NILEdBQUcsQ0FBQ0ksR0FEbEIsNkdBSW1DSixHQUFHLENBQUNILElBSnZDLCtEQUt3Q0csR0FBRyxDQUFDSyxJQUw1QyxnQkFLc0RMLEdBQUcsQ0FBQ00sS0FMMUQsaUVBTTBDTixHQUFHLENBQUNPLFdBTjlDLDBIQVE0RFAsR0FBRyxDQUFDUSxHQVJoRSxrR0FTcUVSLEdBQUcsQ0FBQ1MsWUFUekUsOEZBVWlFVCxHQUFHLENBQUNVLFFBVnJFLCtGQVdrRVYsR0FBRyxDQUFDVyxTQVh0RTtBQWNBbkIsc0JBQW9CLENBQUNWLFNBQXJCLENBQStCOEIsTUFBL0IsQ0FBc0MscUJBQXRDO0FBQ0FuQixrQkFBZ0IsQ0FBQ1gsU0FBakIsQ0FBMkI4QixNQUEzQixDQUFrQyxxQkFBbEM7QUFDQWxCLGlCQUFlLENBQUNaLFNBQWhCLENBQTBCOEIsTUFBMUIsQ0FBaUMscUJBQWpDO0FBQ0FyQyxVQUFRLENBQUNZLElBQVQsQ0FBY0YsS0FBZCxDQUFvQkcsU0FBcEIsR0FBZ0MsUUFBaEM7QUFDRCxDQTlCRDs7QUFnQ0F5QixLQUFLLENBQUMseUJBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsTUFBRDtBQUFBLFNBQVlBLE1BQU0sQ0FBQ0MsSUFBUCxFQUFaO0FBQUEsQ0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCcEIsTUFBSSxHQUFHb0IsTUFBUDtBQUNELENBSkg7O0FBTUEsSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCekIsc0JBQW9CLENBQUNWLFNBQXJCLENBQStCb0MsR0FBL0IsQ0FBbUMscUJBQW5DO0FBQ0F6QixrQkFBZ0IsQ0FBQ1gsU0FBakIsQ0FBMkJvQyxHQUEzQixDQUErQixxQkFBL0I7QUFDQXhCLGlCQUFlLENBQUNaLFNBQWhCLENBQTBCb0MsR0FBMUIsQ0FBOEIscUJBQTlCO0FBQ0EzQyxVQUFRLENBQUNZLElBQVQsQ0FBY0YsS0FBZCxDQUFvQkcsU0FBcEIsR0FBZ0MsRUFBaEM7QUFDRCxDQUxEOztBQU9BSyxnQkFBZ0IsQ0FBQ1osZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDb0MsZUFBM0M7QUFDQXZCLGVBQWUsQ0FBQ2IsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDb0MsZUFBMUM7QUFFQSxpRUFBZXJCLGlCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckRBO0FBRUEsSUFBTXVCLFdBQVcsR0FBRzVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUFwQjtBQUNBLElBQU00QyxLQUFLLEdBQUc3QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsU0FBdkIsQ0FBZDtBQUNBLElBQU02QyxTQUFTLEdBQUc5QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsYUFBdkIsQ0FBbEI7QUFDQSxJQUFNOEMsVUFBVSxHQUFHL0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsSUFBTStDLElBQUksR0FBR2hELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1Qix1QkFBdkIsQ0FBYjtBQUVBLElBQUltQixJQUFKO0FBQ0EsSUFBSTZCLGNBQUo7QUFDQSxJQUFJQyxXQUFXLEdBQUcsQ0FBbEI7QUFDQSxJQUFJQyxhQUFKOztBQUVBLElBQUlDLE1BQU0sQ0FBQ0MsVUFBUCxHQUFvQixJQUF4QixFQUE4QjtBQUM1QkosZ0JBQWMsR0FBRyxDQUFqQjtBQUNBRSxlQUFhLEdBQUcsQ0FBaEI7QUFDRCxDQUhELE1BR08sSUFBSUMsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQ2xDSixnQkFBYyxHQUFHLENBQWpCO0FBQ0FFLGVBQWEsR0FBRyxDQUFoQjtBQUNELENBSE0sTUFHQTtBQUNMRixnQkFBYyxHQUFHLENBQWpCO0FBQ0FFLGVBQWEsR0FBRyxFQUFoQjtBQUNEOztJQUVLRyxJO0FBQ0osZ0JBQVloQyxJQUFaLEVBQWtCaUMsS0FBbEIsRUFBeUI7QUFBQTs7QUFDdkIsU0FBS2pDLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtpQyxLQUFMLEdBQWFBLEtBQWI7QUFDRDs7Ozs2QkFFUTtBQUNQLFVBQU1DLElBQUkseUZBRU0sS0FBS0QsS0FGWCw2RUFJa0IsS0FBS2pDLElBSnZCLHFFQUtpQyxLQUFLQSxJQUx0Qyx1Q0FBVjtBQVFBLGFBQU9rQyxJQUFQO0FBQ0Q7Ozs7OztBQUdILElBQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsTUFBTUMsY0FBYyxHQUFHMUQsUUFBUSxDQUFDQyxhQUFULENBQXVCLFFBQXZCLENBQXZCOztBQUNBLFNBQU95RCxjQUFjLENBQUNuQyxVQUF0QixFQUFrQztBQUNoQ21DLGtCQUFjLENBQUNsQyxXQUFmLENBQTJCa0MsY0FBYyxDQUFDbkMsVUFBMUM7QUFDRDs7QUFDREgsTUFBSSxDQUFDdUMsSUFBTCxDQUFVO0FBQUEsV0FBTUMsSUFBSSxDQUFDQyxNQUFMLEtBQWdCLEdBQXRCO0FBQUEsR0FBVjs7QUFFQSxPQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdiLGNBQXBCLEVBQW9DYSxDQUFDLElBQUksQ0FBekMsRUFBNEM7QUFDMUMsUUFBTU4sSUFBSSxHQUFHLElBQUlGLElBQUosQ0FBU2xDLElBQUksQ0FBQzBDLENBQUQsQ0FBSixDQUFReEMsSUFBakIsRUFBdUJGLElBQUksQ0FBQzBDLENBQUQsQ0FBSixDQUFRakMsR0FBL0IsQ0FBYjtBQUNBNkIsa0JBQWMsQ0FBQzlCLFNBQWYsSUFBNEI0QixJQUFJLENBQUNPLE1BQUwsRUFBNUI7QUFDRDs7QUFFRCxNQUFNQyxLQUFLLEdBQUdoRSxRQUFRLENBQUNpRSxnQkFBVCxDQUEwQixjQUExQixDQUFkO0FBQ0FELE9BQUssQ0FBQ3RDLE9BQU4sQ0FBYyxVQUFDOEIsSUFBRCxFQUFVO0FBQ3RCQSxRQUFJLENBQUNsRCxnQkFBTCxDQUFzQixPQUF0QixFQUErQixZQUFNO0FBQ25DZSw0REFBaUIsQ0FBQ21DLElBQUksQ0FBQ1UsWUFBTCxDQUFrQixXQUFsQixDQUFELENBQWpCO0FBQ0QsS0FGRDtBQUdELEdBSkQ7QUFLRCxDQWxCRDs7QUFvQkEsSUFBTUMsdUJBQXVCLEdBQUcsU0FBMUJBLHVCQUEwQixHQUFNO0FBQ3BDLE1BQUlqQixXQUFXLEtBQUssQ0FBcEIsRUFBdUI7QUFDckJOLGVBQVcsQ0FBQ3JDLFNBQVosQ0FBc0JvQyxHQUF0QixDQUEwQixpQkFBMUI7QUFDQUMsZUFBVyxDQUFDd0IsWUFBWixDQUF5QixVQUF6QixFQUFxQyxJQUFyQztBQUNBdEIsYUFBUyxDQUFDdkMsU0FBVixDQUFvQm9DLEdBQXBCLENBQXdCLGlCQUF4QjtBQUNBRyxhQUFTLENBQUNzQixZQUFWLENBQXVCLFVBQXZCLEVBQW1DLElBQW5DO0FBRUF2QixTQUFLLENBQUN0QyxTQUFOLENBQWdCOEIsTUFBaEIsQ0FBdUIsaUJBQXZCO0FBQ0FRLFNBQUssQ0FBQ3dCLGVBQU4sQ0FBc0IsVUFBdEI7QUFDQXRCLGNBQVUsQ0FBQ3hDLFNBQVgsQ0FBcUI4QixNQUFyQixDQUE0QixpQkFBNUI7QUFDQVUsY0FBVSxDQUFDc0IsZUFBWCxDQUEyQixVQUEzQjtBQUNELEdBVkQsTUFVTyxJQUFJbkIsV0FBVyxLQUFLQyxhQUFwQixFQUFtQztBQUN4Q1AsZUFBVyxDQUFDckMsU0FBWixDQUFzQjhCLE1BQXRCLENBQTZCLGlCQUE3QjtBQUNBTyxlQUFXLENBQUN5QixlQUFaLENBQTRCLFVBQTVCO0FBQ0F2QixhQUFTLENBQUN2QyxTQUFWLENBQW9COEIsTUFBcEIsQ0FBMkIsaUJBQTNCO0FBQ0FTLGFBQVMsQ0FBQ3VCLGVBQVYsQ0FBMEIsVUFBMUI7QUFFQXhCLFNBQUssQ0FBQ3RDLFNBQU4sQ0FBZ0JvQyxHQUFoQixDQUFvQixpQkFBcEI7QUFDQUUsU0FBSyxDQUFDdUIsWUFBTixDQUFtQixVQUFuQixFQUErQixJQUEvQjtBQUNBckIsY0FBVSxDQUFDeEMsU0FBWCxDQUFxQm9DLEdBQXJCLENBQXlCLGlCQUF6QjtBQUNBSSxjQUFVLENBQUNxQixZQUFYLENBQXdCLFVBQXhCLEVBQW9DLElBQXBDO0FBQ0QsR0FWTSxNQVVBO0FBQ0x4QixlQUFXLENBQUNyQyxTQUFaLENBQXNCOEIsTUFBdEIsQ0FBNkIsaUJBQTdCO0FBQ0FPLGVBQVcsQ0FBQ3lCLGVBQVosQ0FBNEIsVUFBNUI7QUFDQXZCLGFBQVMsQ0FBQ3ZDLFNBQVYsQ0FBb0I4QixNQUFwQixDQUEyQixpQkFBM0I7QUFDQVMsYUFBUyxDQUFDdUIsZUFBVixDQUEwQixVQUExQjtBQUVBeEIsU0FBSyxDQUFDdEMsU0FBTixDQUFnQjhCLE1BQWhCLENBQXVCLGlCQUF2QjtBQUNBUSxTQUFLLENBQUN3QixlQUFOLENBQXNCLFVBQXRCO0FBQ0F0QixjQUFVLENBQUN4QyxTQUFYLENBQXFCOEIsTUFBckIsQ0FBNEIsaUJBQTVCO0FBQ0FVLGNBQVUsQ0FBQ3NCLGVBQVgsQ0FBMkIsVUFBM0I7QUFDRDtBQUNGLENBaENEOztBQWtDQXRCLFVBQVUsQ0FBQ3pDLGdCQUFYLENBQTRCLE9BQTVCLEVBQXFDLFlBQU07QUFDekMsTUFBSTRDLFdBQVcsR0FBR0MsYUFBbEIsRUFBaUM7QUFDL0JELGVBQVcsSUFBSSxDQUFmO0FBQ0FGLFFBQUksQ0FBQ3NCLFNBQUwsR0FBaUJwQixXQUFqQjtBQUNBTyxlQUFXO0FBQ1o7O0FBRURVLHlCQUF1QjtBQUN4QixDQVJEO0FBVUFyQixTQUFTLENBQUN4QyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxZQUFNO0FBQ3hDLE1BQUk0QyxXQUFXLEdBQUcsQ0FBbEIsRUFBcUI7QUFDbkJBLGVBQVcsSUFBSSxDQUFmO0FBQ0FGLFFBQUksQ0FBQ3NCLFNBQUwsR0FBaUJwQixXQUFqQjtBQUNBTyxlQUFXO0FBQ1o7O0FBRURVLHlCQUF1QjtBQUN4QixDQVJEO0FBVUF2QixXQUFXLENBQUN0QyxnQkFBWixDQUE2QixPQUE3QixFQUFzQyxZQUFNO0FBQzFDNEMsYUFBVyxHQUFHLENBQWQ7QUFDQUYsTUFBSSxDQUFDc0IsU0FBTCxHQUFpQixDQUFqQjtBQUNBYixhQUFXO0FBQ1hVLHlCQUF1QjtBQUN4QixDQUxEO0FBT0F0QixLQUFLLENBQUN2QyxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxZQUFNO0FBQ3BDNEMsYUFBVyxHQUFHQyxhQUFkO0FBQ0FILE1BQUksQ0FBQ3NCLFNBQUwsR0FBaUJuQixhQUFqQjtBQUNBTSxhQUFXO0FBQ1hVLHlCQUF1QjtBQUN4QixDQUxEO0FBT0E3QixLQUFLLENBQUMseUJBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsTUFBRDtBQUFBLFNBQVlBLE1BQU0sQ0FBQ0MsSUFBUCxFQUFaO0FBQUEsQ0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCcEIsTUFBSSxHQUFHb0IsTUFBUDtBQUNBaUIsYUFBVztBQUNaLENBTEg7QUFPQUwsTUFBTSxDQUFDOUMsZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsVUFBQ2lFLEtBQUQsRUFBVztBQUMzQyxNQUFJQyxxQkFBSjtBQUNBLE1BQUlDLG9CQUFKOztBQUVBLE1BQUlGLEtBQUssQ0FBQ0csTUFBTixDQUFhckIsVUFBYixHQUEwQixJQUE5QixFQUFvQztBQUNsQ21CLHlCQUFxQixHQUFHLENBQXhCO0FBQ0FDLHdCQUFvQixHQUFHLENBQXZCO0FBQ0QsR0FIRCxNQUdPLElBQUlGLEtBQUssQ0FBQ0csTUFBTixDQUFhckIsVUFBYixHQUEwQixHQUE5QixFQUFtQztBQUN4Q21CLHlCQUFxQixHQUFHLENBQXhCO0FBQ0FDLHdCQUFvQixHQUFHLENBQXZCO0FBQ0QsR0FITSxNQUdBO0FBQ0xELHlCQUFxQixHQUFHLENBQXhCO0FBQ0FDLHdCQUFvQixHQUFHLEVBQXZCO0FBQ0Q7O0FBRUQsTUFBSUQscUJBQXFCLEtBQUt2QixjQUE5QixFQUE4QztBQUM1Q0Esa0JBQWMsR0FBR3VCLHFCQUFqQjtBQUNBckIsaUJBQWEsR0FBR3NCLG9CQUFoQjtBQUNBdkIsZUFBVyxHQUFHLENBQWQ7QUFDQUYsUUFBSSxDQUFDc0IsU0FBTCxHQUFpQixDQUFqQjtBQUNBSCwyQkFBdUI7QUFDdkJWLGVBQVc7QUFDWjtBQUNGLENBdkJELEU7Ozs7Ozs7Ozs7OztBQzFJQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoicGV0cy9wZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn0iLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59IiwiY29uc3QgYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbicpO1xyXG5jb25zdCBidXJnZXJCdXR0b25JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24gPiBpbWcnKTtcclxuY29uc3QgYnVyZ2VyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItbWVudScpO1xyXG5jb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRpbmcnKTtcclxuY29uc3QgYnVyZ2VyQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItYmFja2dyb3VuZCcpO1xyXG5cclxuYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGJ1cmdlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWljb25fb3BlbicpO1xyXG4gIGhlYWRpbmcuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGluZ19kaXNhYmxlZCcpO1xyXG4gIGJ1cmdlckJhY2tncm91bmQuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLWJhY2tncm91bmRfY2xvc2VkJyk7XHJcblxyXG4gIGlmIChidXJnZXJCdXR0b24uY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWljb25fb3BlbicpKSB7XHJcbiAgICBidXJnZXJNZW51LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknO1xyXG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcclxuICAgIGJ1cmdlckJ1dHRvbkltYWdlLnNyYyA9ICdhc3NldHMvaWNvbnMvYnVyZ2VyLnBuZyc7XHJcbiAgfSBlbHNlIHtcclxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Zpc2libGUnO1xyXG4gICAgYnVyZ2VyTWVudS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgzMjBweCknO1xyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgIGJ1cmdlckJ1dHRvbkltYWdlLnNyYyA9ICdhc3NldHMvaWNvbnMvYnVyZ2VyLWJsYWNrLnBuZyc7XHJcbiAgICB9LCA0MDApO1xyXG4gIH1cclxufSk7XHJcblxyXG5idXJnZXJCYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGJ1cmdlckJ1dHRvbi5jbGljaygpO1xyXG59KTtcclxuIiwiaW1wb3J0IGJ1cmdlck1lbnUgZnJvbSAnLi9idXJnZXItbWVudSc7XHJcbmltcG9ydCBtb2RhbFdpbmRvdyBmcm9tICcuL21vZGFsLXdpbmRvdyc7XHJcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xyXG4iLCJjb25zdCBtb2RhbFdpbmRvd0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3cnKTtcclxuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpO1xyXG5jb25zdCBiYWNrZ3JvdW5kTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtYmFja2dyb3VuZCcpO1xyXG5sZXQgcGV0cztcclxuXHJcbmNvbnN0IHJlbmRlck1vZGFsV2luZG93ID0gKG5hbWUpID0+IHtcclxuICB3aGlsZSAobW9kYWxXaW5kb3dDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgbW9kYWxXaW5kb3dDb250YWluZXIucmVtb3ZlQ2hpbGQobW9kYWxXaW5kb3dDb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG5cclxuICBsZXQgcGV0O1xyXG4gIHBldHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgaWYgKGl0ZW0ubmFtZSA9PT0gbmFtZSkge1xyXG4gICAgICBwZXQgPSBpdGVtO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBtb2RhbFdpbmRvd0NvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvd19faW1hZ2VcIj5cclxuICAgIDxpbWcgc3JjPVwiJHtwZXQuaW1nfVwiIGFsdD1cIlBldHNcIj5cclxuICA8L2Rpdj5cclxuICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fbmFtZVwiPiR7cGV0Lm5hbWV9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX3R5cGUtcGV0c1wiPiR7cGV0LnR5cGV9IC0gJHtwZXQuYnJlZWR9PC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX2Rlc2NyaXB0aW9uXCI+JHtwZXQuZGVzY3JpcHRpb259PC9kaXY+XHJcbiAgICA8dWwgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmFcIj5cclxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5BZ2U6PC9iPiA8c3Bhbj4ke3BldC5hZ2V9PC9zcGFuPjwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+SW5vY3VsYXRpb25zOjwvYj4gPHNwYW4+JHtwZXQuaW5vY3VsYXRpb25zfTwvc3Bhbj48L2xpPlxyXG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPkRpc2Vhc2VzOjwvYj4gPHNwYW4+JHtwZXQuZGlzZWFzZXN9PC9zcGFuPjwvbGk+XHJcbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+UGFyYXNpdGVzOjwvYj4gPHNwYW4+JHtwZXQucGFyYXNpdGVzfTwvc3Bhbj48L2xpPlxyXG4gICAgPC91bD5gO1xyXG5cclxuICBtb2RhbFdpbmRvd0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XHJcbiAgY2xvc2VNb2RhbEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XHJcbiAgYmFja2dyb3VuZE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcclxuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xyXG59O1xyXG5cclxuZmV0Y2goJy4vYXNzZXRzL2pzb24vcGV0cy5qc29uJylcclxuICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQuanNvbigpKVxyXG4gIC50aGVuKChyZXN1bHQpID0+IHtcclxuICAgIHBldHMgPSByZXN1bHQ7XHJcbiAgfSk7XHJcblxyXG5jb25zdCBoaWRlTW9kYWxXaW5kb3cgPSAoKSA9PiB7XHJcbiAgbW9kYWxXaW5kb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xyXG4gIGNsb3NlTW9kYWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xyXG4gIGJhY2tncm91bmRNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XHJcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnJztcclxufTtcclxuXHJcbmNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTW9kYWxXaW5kb3cpO1xyXG5iYWNrZ3JvdW5kTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTW9kYWxXaW5kb3cpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgcmVuZGVyTW9kYWxXaW5kb3c7XHJcbiIsImltcG9ydCByZW5kZXJNb2RhbFdpbmRvdyBmcm9tICcuL21vZGFsLXdpbmRvdyc7XHJcblxyXG5jb25zdCB0b0JlZ2lubmluZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1iZWdpbm5pbmcnKTtcclxuY29uc3QgdG9FbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZW5kJyk7XHJcbmNvbnN0IHNsaWRlTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1sZWZ0Jyk7XHJcbmNvbnN0IHNsaWRlUmlnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtcmlnaHQnKTtcclxuY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXBhZ2VfX251bWJlcicpO1xyXG5cclxubGV0IHBldHM7XHJcbmxldCBudW1iZXJzT2ZDYXJkcztcclxubGV0IGN1cnJlbnRQYWdlID0gMTtcclxubGV0IG1heE51bWJlclBhZ2U7XHJcblxyXG5pZiAod2luZG93LmlubmVyV2lkdGggPiAxMjc5KSB7XHJcbiAgbnVtYmVyc09mQ2FyZHMgPSA4O1xyXG4gIG1heE51bWJlclBhZ2UgPSA2O1xyXG59IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY3KSB7XHJcbiAgbnVtYmVyc09mQ2FyZHMgPSA2O1xyXG4gIG1heE51bWJlclBhZ2UgPSA4O1xyXG59IGVsc2Uge1xyXG4gIG51bWJlcnNPZkNhcmRzID0gMztcclxuICBtYXhOdW1iZXJQYWdlID0gMTY7XHJcbn1cclxuXHJcbmNsYXNzIENhcmQge1xyXG4gIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlKSB7XHJcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xyXG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgY29uc3QgY2FyZCA9IGA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9faW1hZ2VcIj5cclxuICAgICAgICA8aW1nIHNyYz1cIiR7dGhpcy5pbWFnZX1cIiBhbHQ9XCJQZXRzXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fbmFtZVwiPiR7dGhpcy5uYW1lfTwvZGl2PlxyXG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY2FyZF9idXR0b25cIiBkYXRhLW5hbWU9XCIke3RoaXMubmFtZX1cIj5MZWFybiBtb3JlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5gO1xyXG5cclxuICAgIHJldHVybiBjYXJkO1xyXG4gIH1cclxufVxyXG5cclxuY29uc3QgcmVuZGVyQ2FyZHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcclxuICB3aGlsZSAoY2FyZHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xyXG4gICAgY2FyZHNDb250YWluZXIucmVtb3ZlQ2hpbGQoY2FyZHNDb250YWluZXIuZmlyc3RDaGlsZCk7XHJcbiAgfVxyXG4gIHBldHMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuXHJcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzT2ZDYXJkczsgaSArPSAxKSB7XHJcbiAgICBjb25zdCBjYXJkID0gbmV3IENhcmQocGV0c1tpXS5uYW1lLCBwZXRzW2ldLmltZyk7XHJcbiAgICBjYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gY2FyZC5yZW5kZXIoKTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfYnV0dG9uJyk7XHJcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xyXG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgcmVuZGVyTW9kYWxXaW5kb3coY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcclxuICAgIH0pO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuY29uc3Qgc2V0U2V0dGluZ3NDb250cm9sUGFuZWwgPSAoKSA9PiB7XHJcbiAgaWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XHJcbiAgICB0b0JlZ2lubmluZy5jbGFzc0xpc3QuYWRkKCdidXR0b25fZGlzYWJsZWQnKTtcclxuICAgIHRvQmVnaW5uaW5nLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgIHNsaWRlTGVmdC5jbGFzc0xpc3QuYWRkKCdidXR0b25fZGlzYWJsZWQnKTtcclxuICAgIHNsaWRlTGVmdC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XHJcblxyXG4gICAgdG9FbmQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX2Rpc2FibGVkJyk7XHJcbiAgICB0b0VuZC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICBzbGlkZVJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbl9kaXNhYmxlZCcpO1xyXG4gICAgc2xpZGVSaWdodC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgfSBlbHNlIGlmIChjdXJyZW50UGFnZSA9PT0gbWF4TnVtYmVyUGFnZSkge1xyXG4gICAgdG9CZWdpbm5pbmcuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX2Rpc2FibGVkJyk7XHJcbiAgICB0b0JlZ2lubmluZy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICBzbGlkZUxlZnQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX2Rpc2FibGVkJyk7XHJcbiAgICBzbGlkZUxlZnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xyXG5cclxuICAgIHRvRW5kLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9kaXNhYmxlZCcpO1xyXG4gICAgdG9FbmQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgc2xpZGVSaWdodC5jbGFzc0xpc3QuYWRkKCdidXR0b25fZGlzYWJsZWQnKTtcclxuICAgIHNsaWRlUmlnaHQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gIH0gZWxzZSB7XHJcbiAgICB0b0JlZ2lubmluZy5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fZGlzYWJsZWQnKTtcclxuICAgIHRvQmVnaW5uaW5nLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcclxuICAgIHNsaWRlTGVmdC5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fZGlzYWJsZWQnKTtcclxuICAgIHNsaWRlTGVmdC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcblxyXG4gICAgdG9FbmQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX2Rpc2FibGVkJyk7XHJcbiAgICB0b0VuZC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgICBzbGlkZVJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbl9kaXNhYmxlZCcpO1xyXG4gICAgc2xpZGVSaWdodC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XHJcbiAgfVxyXG59O1xyXG5cclxuc2xpZGVSaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAoY3VycmVudFBhZ2UgPCBtYXhOdW1iZXJQYWdlKSB7XHJcbiAgICBjdXJyZW50UGFnZSArPSAxO1xyXG4gICAgcGFnZS5pbm5lclRleHQgPSBjdXJyZW50UGFnZTtcclxuICAgIHJlbmRlckNhcmRzKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTZXR0aW5nc0NvbnRyb2xQYW5lbCgpO1xyXG59KTtcclxuXHJcbnNsaWRlTGVmdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XHJcbiAgICBjdXJyZW50UGFnZSAtPSAxO1xyXG4gICAgcGFnZS5pbm5lclRleHQgPSBjdXJyZW50UGFnZTtcclxuICAgIHJlbmRlckNhcmRzKCk7XHJcbiAgfVxyXG5cclxuICBzZXRTZXR0aW5nc0NvbnRyb2xQYW5lbCgpO1xyXG59KTtcclxuXHJcbnRvQmVnaW5uaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGN1cnJlbnRQYWdlID0gMTtcclxuICBwYWdlLmlubmVyVGV4dCA9IDE7XHJcbiAgcmVuZGVyQ2FyZHMoKTtcclxuICBzZXRTZXR0aW5nc0NvbnRyb2xQYW5lbCgpO1xyXG59KTtcclxuXHJcbnRvRW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gIGN1cnJlbnRQYWdlID0gbWF4TnVtYmVyUGFnZTtcclxuICBwYWdlLmlubmVyVGV4dCA9IG1heE51bWJlclBhZ2U7XHJcbiAgcmVuZGVyQ2FyZHMoKTtcclxuICBzZXRTZXR0aW5nc0NvbnRyb2xQYW5lbCgpO1xyXG59KTtcclxuXHJcbmZldGNoKCcuL2Fzc2V0cy9qc29uL3BldHMuanNvbicpXHJcbiAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcclxuICAudGhlbigocmVzdWx0KSA9PiB7XHJcbiAgICBwZXRzID0gcmVzdWx0O1xyXG4gICAgcmVuZGVyQ2FyZHMoKTtcclxuICB9KTtcclxuXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXZlbnQpID0+IHtcclxuICBsZXQgY3VycmVudE51bWJlcnNPZkNhcmRzO1xyXG4gIGxldCBjdXJyZW50TWF4TnVtYmVyUGFnZTtcclxuXHJcbiAgaWYgKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoID4gMTI3OSkge1xyXG4gICAgY3VycmVudE51bWJlcnNPZkNhcmRzID0gODtcclxuICAgIGN1cnJlbnRNYXhOdW1iZXJQYWdlID0gNjtcclxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoID4gNzY3KSB7XHJcbiAgICBjdXJyZW50TnVtYmVyc09mQ2FyZHMgPSA2O1xyXG4gICAgY3VycmVudE1heE51bWJlclBhZ2UgPSA4O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBjdXJyZW50TnVtYmVyc09mQ2FyZHMgPSAzO1xyXG4gICAgY3VycmVudE1heE51bWJlclBhZ2UgPSAxNjtcclxuICB9XHJcblxyXG4gIGlmIChjdXJyZW50TnVtYmVyc09mQ2FyZHMgIT09IG51bWJlcnNPZkNhcmRzKSB7XHJcbiAgICBudW1iZXJzT2ZDYXJkcyA9IGN1cnJlbnROdW1iZXJzT2ZDYXJkcztcclxuICAgIG1heE51bWJlclBhZ2UgPSBjdXJyZW50TWF4TnVtYmVyUGFnZTtcclxuICAgIGN1cnJlbnRQYWdlID0gMTtcclxuICAgIHBhZ2UuaW5uZXJUZXh0ID0gMTtcclxuICAgIHNldFNldHRpbmdzQ29udHJvbFBhbmVsKCk7XHJcbiAgICByZW5kZXJDYXJkcygpO1xyXG4gIH1cclxufSk7XHJcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wZXRzL2pzL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BldHMvc2Fzcy9zdHlsZXMuc2Nzc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=