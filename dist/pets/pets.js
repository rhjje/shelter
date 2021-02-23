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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL3BldHMvanMvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9wZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvcGV0cy9qcy9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9wZXRzL2pzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL3BldHMvc2Fzcy9zdHlsZXMuc2Nzcz8wMzYwIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImJ1cmdlckJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1cmdlckJ1dHRvbkltYWdlIiwiYnVyZ2VyTWVudSIsImhlYWRpbmciLCJidXJnZXJCYWNrZ3JvdW5kIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsInRvZ2dsZSIsImNvbnRhaW5zIiwic3R5bGUiLCJ0cmFuc2Zvcm0iLCJib2R5Iiwib3ZlcmZsb3dZIiwic3JjIiwic2V0VGltZW91dCIsImNsaWNrIiwibW9kYWxXaW5kb3dDb250YWluZXIiLCJjbG9zZU1vZGFsQnV0dG9uIiwiYmFja2dyb3VuZE1vZGFsIiwicGV0cyIsInJlbmRlck1vZGFsV2luZG93IiwibmFtZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInBldCIsImZvckVhY2giLCJpdGVtIiwiaW5uZXJIVE1MIiwiaW1nIiwidHlwZSIsImJyZWVkIiwiZGVzY3JpcHRpb24iLCJhZ2UiLCJpbm9jdWxhdGlvbnMiLCJkaXNlYXNlcyIsInBhcmFzaXRlcyIsInJlbW92ZSIsImZldGNoIiwidGhlbiIsInJlc3VsdCIsImpzb24iLCJoaWRlTW9kYWxXaW5kb3ciLCJhZGQiLCJ0b0JlZ2lubmluZyIsInRvRW5kIiwic2xpZGVMZWZ0Iiwic2xpZGVSaWdodCIsInBhZ2UiLCJudW1iZXJzT2ZDYXJkcyIsImN1cnJlbnRQYWdlIiwibWF4TnVtYmVyUGFnZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJDYXJkIiwiaW1hZ2UiLCJjYXJkIiwicmVuZGVyQ2FyZHMiLCJjYXJkc0NvbnRhaW5lciIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwiaSIsInJlbmRlciIsImNhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsImdldEF0dHJpYnV0ZSIsInNldFNldHRpbmdzQ29udHJvbFBhbmVsIiwic2V0QXR0cmlidXRlIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5uZXJUZXh0IiwiZXZlbnQiLCJjdXJyZW50TnVtYmVyc09mQ2FyZHMiLCJjdXJyZW50TWF4TnVtYmVyUGFnZSIsInRhcmdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBckI7QUFDQSxJQUFNQyxpQkFBaUIsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGtCQUF2QixDQUExQjtBQUNBLElBQU1FLFVBQVUsR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsSUFBTUcsT0FBTyxHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQSxJQUFNSSxnQkFBZ0IsR0FBR0wsUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUVBRixZQUFZLENBQUNPLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDM0NQLGNBQVksQ0FBQ1EsU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsZ0JBQTlCO0FBQ0FKLFNBQU8sQ0FBQ0csU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsa0JBQXpCO0FBQ0FILGtCQUFnQixDQUFDRSxTQUFqQixDQUEyQkMsTUFBM0IsQ0FBa0MsMEJBQWxDOztBQUVBLE1BQUlULFlBQVksQ0FBQ1EsU0FBYixDQUF1QkUsUUFBdkIsQ0FBZ0MsZ0JBQWhDLENBQUosRUFBdUQ7QUFDckROLGNBQVUsQ0FBQ08sS0FBWCxDQUFpQkMsU0FBakIsR0FBNkIsaUJBQTdCO0FBQ0FYLFlBQVEsQ0FBQ1ksSUFBVCxDQUFjRixLQUFkLENBQW9CRyxTQUFwQixHQUFnQyxRQUFoQztBQUNBWCxxQkFBaUIsQ0FBQ1ksR0FBbEIsR0FBd0IseUJBQXhCO0FBQ0QsR0FKRCxNQUlPO0FBQ0xkLFlBQVEsQ0FBQ1ksSUFBVCxDQUFjRixLQUFkLENBQW9CRyxTQUFwQixHQUFnQyxTQUFoQztBQUNBVixjQUFVLENBQUNPLEtBQVgsQ0FBaUJDLFNBQWpCLEdBQTZCLG1CQUE3QjtBQUNBSSxjQUFVLENBQUMsWUFBTTtBQUNmYix1QkFBaUIsQ0FBQ1ksR0FBbEIsR0FBd0IsK0JBQXhCO0FBQ0QsS0FGUyxFQUVQLEdBRk8sQ0FBVjtBQUdEO0FBQ0YsQ0FoQkQ7QUFrQkFULGdCQUFnQixDQUFDQyxnQkFBakIsQ0FBa0MsT0FBbEMsRUFBMkMsWUFBTTtBQUMvQ1AsY0FBWSxDQUFDaUIsS0FBYjtBQUNELENBRkQsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDREEsSUFBTUMsb0JBQW9CLEdBQUdqQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsZUFBdkIsQ0FBN0I7QUFDQSxJQUFNaUIsZ0JBQWdCLEdBQUdsQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBekI7QUFDQSxJQUFNa0IsZUFBZSxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLG1CQUF2QixDQUF4QjtBQUNBLElBQUltQixJQUFKOztBQUVBLElBQU1DLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2xDLFNBQU9MLG9CQUFvQixDQUFDTSxVQUE1QixFQUF3QztBQUN0Q04sd0JBQW9CLENBQUNPLFdBQXJCLENBQWlDUCxvQkFBb0IsQ0FBQ00sVUFBdEQ7QUFDRDs7QUFFRCxNQUFJRSxHQUFKO0FBQ0FMLE1BQUksQ0FBQ00sT0FBTCxDQUFhLFVBQUNDLElBQUQsRUFBVTtBQUNyQixRQUFJQSxJQUFJLENBQUNMLElBQUwsS0FBY0EsSUFBbEIsRUFBd0I7QUFDdEJHLFNBQUcsR0FBR0UsSUFBTjtBQUNEO0FBQ0YsR0FKRDtBQU1BVixzQkFBb0IsQ0FBQ1csU0FBckIsaUVBQ2NILEdBQUcsQ0FBQ0ksR0FEbEIsNkdBSW1DSixHQUFHLENBQUNILElBSnZDLCtEQUt3Q0csR0FBRyxDQUFDSyxJQUw1QyxnQkFLc0RMLEdBQUcsQ0FBQ00sS0FMMUQsaUVBTTBDTixHQUFHLENBQUNPLFdBTjlDLDBIQVE0RFAsR0FBRyxDQUFDUSxHQVJoRSxrR0FTcUVSLEdBQUcsQ0FBQ1MsWUFUekUsOEZBVWlFVCxHQUFHLENBQUNVLFFBVnJFLCtGQVdrRVYsR0FBRyxDQUFDVyxTQVh0RTtBQWNBbkIsc0JBQW9CLENBQUNWLFNBQXJCLENBQStCOEIsTUFBL0IsQ0FBc0MscUJBQXRDO0FBQ0FuQixrQkFBZ0IsQ0FBQ1gsU0FBakIsQ0FBMkI4QixNQUEzQixDQUFrQyxxQkFBbEM7QUFDQWxCLGlCQUFlLENBQUNaLFNBQWhCLENBQTBCOEIsTUFBMUIsQ0FBaUMscUJBQWpDO0FBQ0FyQyxVQUFRLENBQUNZLElBQVQsQ0FBY0YsS0FBZCxDQUFvQkcsU0FBcEIsR0FBZ0MsUUFBaEM7QUFDRCxDQTlCRDs7QUFnQ0F5QixLQUFLLENBQUMseUJBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsTUFBRDtBQUFBLFNBQVlBLE1BQU0sQ0FBQ0MsSUFBUCxFQUFaO0FBQUEsQ0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCcEIsTUFBSSxHQUFHb0IsTUFBUDtBQUNELENBSkg7O0FBTUEsSUFBTUUsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQzVCekIsc0JBQW9CLENBQUNWLFNBQXJCLENBQStCb0MsR0FBL0IsQ0FBbUMscUJBQW5DO0FBQ0F6QixrQkFBZ0IsQ0FBQ1gsU0FBakIsQ0FBMkJvQyxHQUEzQixDQUErQixxQkFBL0I7QUFDQXhCLGlCQUFlLENBQUNaLFNBQWhCLENBQTBCb0MsR0FBMUIsQ0FBOEIscUJBQTlCO0FBQ0EzQyxVQUFRLENBQUNZLElBQVQsQ0FBY0YsS0FBZCxDQUFvQkcsU0FBcEIsR0FBZ0MsRUFBaEM7QUFDRCxDQUxEOztBQU9BSyxnQkFBZ0IsQ0FBQ1osZ0JBQWpCLENBQWtDLE9BQWxDLEVBQTJDb0MsZUFBM0M7QUFDQXZCLGVBQWUsQ0FBQ2IsZ0JBQWhCLENBQWlDLE9BQWpDLEVBQTBDb0MsZUFBMUM7QUFFQSxpRUFBZXJCLGlCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyREE7QUFFQSxJQUFNdUIsV0FBVyxHQUFHNUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0EsSUFBTTRDLEtBQUssR0FBRzdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFkO0FBQ0EsSUFBTTZDLFNBQVMsR0FBRzlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFsQjtBQUNBLElBQU04QyxVQUFVLEdBQUcvQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQSxJQUFNK0MsSUFBSSxHQUFHaEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLHVCQUF2QixDQUFiO0FBRUEsSUFBSW1CLElBQUo7QUFDQSxJQUFJNkIsY0FBSjtBQUNBLElBQUlDLFdBQVcsR0FBRyxDQUFsQjtBQUNBLElBQUlDLGFBQUo7O0FBRUEsSUFBSUMsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLElBQXhCLEVBQThCO0FBQzVCSixnQkFBYyxHQUFHLENBQWpCO0FBQ0FFLGVBQWEsR0FBRyxDQUFoQjtBQUNELENBSEQsTUFHTyxJQUFJQyxNQUFNLENBQUNDLFVBQVAsR0FBb0IsR0FBeEIsRUFBNkI7QUFDbENKLGdCQUFjLEdBQUcsQ0FBakI7QUFDQUUsZUFBYSxHQUFHLENBQWhCO0FBQ0QsQ0FITSxNQUdBO0FBQ0xGLGdCQUFjLEdBQUcsQ0FBakI7QUFDQUUsZUFBYSxHQUFHLEVBQWhCO0FBQ0Q7O0lBRUtHLEk7QUFDSixnQkFBWWhDLElBQVosRUFBa0JpQyxLQUFsQixFQUF5QjtBQUFBOztBQUN2QixTQUFLakMsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS2lDLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzZCQUVRO0FBQ1AsVUFBTUMsSUFBSSx5RkFFTSxLQUFLRCxLQUZYLDZFQUlrQixLQUFLakMsSUFKdkIscUVBS2lDLEtBQUtBLElBTHRDLHVDQUFWO0FBUUEsYUFBT2tDLElBQVA7QUFDRDs7Ozs7O0FBR0gsSUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixNQUFNQyxjQUFjLEdBQUcxRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsUUFBdkIsQ0FBdkI7O0FBQ0EsU0FBT3lELGNBQWMsQ0FBQ25DLFVBQXRCLEVBQWtDO0FBQ2hDbUMsa0JBQWMsQ0FBQ2xDLFdBQWYsQ0FBMkJrQyxjQUFjLENBQUNuQyxVQUExQztBQUNEOztBQUNESCxNQUFJLENBQUN1QyxJQUFMLENBQVU7QUFBQSxXQUFNQyxJQUFJLENBQUNDLE1BQUwsS0FBZ0IsR0FBdEI7QUFBQSxHQUFWOztBQUVBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2IsY0FBcEIsRUFBb0NhLENBQUMsSUFBSSxDQUF6QyxFQUE0QztBQUMxQyxRQUFNTixJQUFJLEdBQUcsSUFBSUYsSUFBSixDQUFTbEMsSUFBSSxDQUFDMEMsQ0FBRCxDQUFKLENBQVF4QyxJQUFqQixFQUF1QkYsSUFBSSxDQUFDMEMsQ0FBRCxDQUFKLENBQVFqQyxHQUEvQixDQUFiO0FBQ0E2QixrQkFBYyxDQUFDOUIsU0FBZixJQUE0QjRCLElBQUksQ0FBQ08sTUFBTCxFQUE1QjtBQUNEOztBQUVELE1BQU1DLEtBQUssR0FBR2hFLFFBQVEsQ0FBQ2lFLGdCQUFULENBQTBCLGNBQTFCLENBQWQ7QUFDQUQsT0FBSyxDQUFDdEMsT0FBTixDQUFjLFVBQUM4QixJQUFELEVBQVU7QUFDdEJBLFFBQUksQ0FBQ2xELGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLFlBQU07QUFDbkNlLDREQUFpQixDQUFDbUMsSUFBSSxDQUFDVSxZQUFMLENBQWtCLFdBQWxCLENBQUQsQ0FBakI7QUFDRCxLQUZEO0FBR0QsR0FKRDtBQUtELENBbEJEOztBQW9CQSxJQUFNQyx1QkFBdUIsR0FBRyxTQUExQkEsdUJBQTBCLEdBQU07QUFDcEMsTUFBSWpCLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUNyQk4sZUFBVyxDQUFDckMsU0FBWixDQUFzQm9DLEdBQXRCLENBQTBCLGlCQUExQjtBQUNBQyxlQUFXLENBQUN3QixZQUFaLENBQXlCLFVBQXpCLEVBQXFDLElBQXJDO0FBQ0F0QixhQUFTLENBQUN2QyxTQUFWLENBQW9Cb0MsR0FBcEIsQ0FBd0IsaUJBQXhCO0FBQ0FHLGFBQVMsQ0FBQ3NCLFlBQVYsQ0FBdUIsVUFBdkIsRUFBbUMsSUFBbkM7QUFFQXZCLFNBQUssQ0FBQ3RDLFNBQU4sQ0FBZ0I4QixNQUFoQixDQUF1QixpQkFBdkI7QUFDQVEsU0FBSyxDQUFDd0IsZUFBTixDQUFzQixVQUF0QjtBQUNBdEIsY0FBVSxDQUFDeEMsU0FBWCxDQUFxQjhCLE1BQXJCLENBQTRCLGlCQUE1QjtBQUNBVSxjQUFVLENBQUNzQixlQUFYLENBQTJCLFVBQTNCO0FBQ0QsR0FWRCxNQVVPLElBQUluQixXQUFXLEtBQUtDLGFBQXBCLEVBQW1DO0FBQ3hDUCxlQUFXLENBQUNyQyxTQUFaLENBQXNCOEIsTUFBdEIsQ0FBNkIsaUJBQTdCO0FBQ0FPLGVBQVcsQ0FBQ3lCLGVBQVosQ0FBNEIsVUFBNUI7QUFDQXZCLGFBQVMsQ0FBQ3ZDLFNBQVYsQ0FBb0I4QixNQUFwQixDQUEyQixpQkFBM0I7QUFDQVMsYUFBUyxDQUFDdUIsZUFBVixDQUEwQixVQUExQjtBQUVBeEIsU0FBSyxDQUFDdEMsU0FBTixDQUFnQm9DLEdBQWhCLENBQW9CLGlCQUFwQjtBQUNBRSxTQUFLLENBQUN1QixZQUFOLENBQW1CLFVBQW5CLEVBQStCLElBQS9CO0FBQ0FyQixjQUFVLENBQUN4QyxTQUFYLENBQXFCb0MsR0FBckIsQ0FBeUIsaUJBQXpCO0FBQ0FJLGNBQVUsQ0FBQ3FCLFlBQVgsQ0FBd0IsVUFBeEIsRUFBb0MsSUFBcEM7QUFDRCxHQVZNLE1BVUE7QUFDTHhCLGVBQVcsQ0FBQ3JDLFNBQVosQ0FBc0I4QixNQUF0QixDQUE2QixpQkFBN0I7QUFDQU8sZUFBVyxDQUFDeUIsZUFBWixDQUE0QixVQUE1QjtBQUNBdkIsYUFBUyxDQUFDdkMsU0FBVixDQUFvQjhCLE1BQXBCLENBQTJCLGlCQUEzQjtBQUNBUyxhQUFTLENBQUN1QixlQUFWLENBQTBCLFVBQTFCO0FBRUF4QixTQUFLLENBQUN0QyxTQUFOLENBQWdCOEIsTUFBaEIsQ0FBdUIsaUJBQXZCO0FBQ0FRLFNBQUssQ0FBQ3dCLGVBQU4sQ0FBc0IsVUFBdEI7QUFDQXRCLGNBQVUsQ0FBQ3hDLFNBQVgsQ0FBcUI4QixNQUFyQixDQUE0QixpQkFBNUI7QUFDQVUsY0FBVSxDQUFDc0IsZUFBWCxDQUEyQixVQUEzQjtBQUNEO0FBQ0YsQ0FoQ0Q7O0FBa0NBdEIsVUFBVSxDQUFDekMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtBQUN6QyxNQUFJNEMsV0FBVyxHQUFHQyxhQUFsQixFQUFpQztBQUMvQkQsZUFBVyxJQUFJLENBQWY7QUFDQUYsUUFBSSxDQUFDc0IsU0FBTCxHQUFpQnBCLFdBQWpCO0FBQ0FPLGVBQVc7QUFDWjs7QUFFRFUseUJBQXVCO0FBQ3hCLENBUkQ7QUFVQXJCLFNBQVMsQ0FBQ3hDLGdCQUFWLENBQTJCLE9BQTNCLEVBQW9DLFlBQU07QUFDeEMsTUFBSTRDLFdBQVcsR0FBRyxDQUFsQixFQUFxQjtBQUNuQkEsZUFBVyxJQUFJLENBQWY7QUFDQUYsUUFBSSxDQUFDc0IsU0FBTCxHQUFpQnBCLFdBQWpCO0FBQ0FPLGVBQVc7QUFDWjs7QUFFRFUseUJBQXVCO0FBQ3hCLENBUkQ7QUFVQXZCLFdBQVcsQ0FBQ3RDLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLFlBQU07QUFDMUM0QyxhQUFXLEdBQUcsQ0FBZDtBQUNBRixNQUFJLENBQUNzQixTQUFMLEdBQWlCLENBQWpCO0FBQ0FiLGFBQVc7QUFDWFUseUJBQXVCO0FBQ3hCLENBTEQ7QUFPQXRCLEtBQUssQ0FBQ3ZDLGdCQUFOLENBQXVCLE9BQXZCLEVBQWdDLFlBQU07QUFDcEM0QyxhQUFXLEdBQUdDLGFBQWQ7QUFDQUgsTUFBSSxDQUFDc0IsU0FBTCxHQUFpQm5CLGFBQWpCO0FBQ0FNLGFBQVc7QUFDWFUseUJBQXVCO0FBQ3hCLENBTEQ7QUFPQTdCLEtBQUssQ0FBQyx5QkFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxNQUFEO0FBQUEsU0FBWUEsTUFBTSxDQUFDQyxJQUFQLEVBQVo7QUFBQSxDQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDQyxNQUFELEVBQVk7QUFDaEJwQixNQUFJLEdBQUdvQixNQUFQO0FBQ0FpQixhQUFXO0FBQ1osQ0FMSDtBQU9BTCxNQUFNLENBQUM5QyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFDaUUsS0FBRCxFQUFXO0FBQzNDLE1BQUlDLHFCQUFKO0FBQ0EsTUFBSUMsb0JBQUo7O0FBRUEsTUFBSUYsS0FBSyxDQUFDRyxNQUFOLENBQWFyQixVQUFiLEdBQTBCLElBQTlCLEVBQW9DO0FBQ2xDbUIseUJBQXFCLEdBQUcsQ0FBeEI7QUFDQUMsd0JBQW9CLEdBQUcsQ0FBdkI7QUFDRCxHQUhELE1BR08sSUFBSUYsS0FBSyxDQUFDRyxNQUFOLENBQWFyQixVQUFiLEdBQTBCLEdBQTlCLEVBQW1DO0FBQ3hDbUIseUJBQXFCLEdBQUcsQ0FBeEI7QUFDQUMsd0JBQW9CLEdBQUcsQ0FBdkI7QUFDRCxHQUhNLE1BR0E7QUFDTEQseUJBQXFCLEdBQUcsQ0FBeEI7QUFDQUMsd0JBQW9CLEdBQUcsRUFBdkI7QUFDRDs7QUFFRCxNQUFJRCxxQkFBcUIsS0FBS3ZCLGNBQTlCLEVBQThDO0FBQzVDQSxrQkFBYyxHQUFHdUIscUJBQWpCO0FBQ0FyQixpQkFBYSxHQUFHc0Isb0JBQWhCO0FBQ0F2QixlQUFXLEdBQUcsQ0FBZDtBQUNBRixRQUFJLENBQUNzQixTQUFMLEdBQWlCLENBQWpCO0FBQ0FILDJCQUF1QjtBQUN2QlYsZUFBVztBQUNaO0FBQ0YsQ0F2QkQsRTs7Ozs7Ozs7Ozs7O0FDMUlBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJwZXRzL3BldHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXJnZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJyk7XG5jb25zdCBidXJnZXJCdXR0b25JbWFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24gPiBpbWcnKTtcbmNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLW1lbnUnKTtcbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZycpO1xuY29uc3QgYnVyZ2VyQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItYmFja2dyb3VuZCcpO1xuXG5idXJnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGJ1cmdlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWljb25fb3BlbicpO1xuICBoZWFkaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRpbmdfZGlzYWJsZWQnKTtcbiAgYnVyZ2VyQmFja2dyb3VuZC5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItYmFja2dyb3VuZF9jbG9zZWQnKTtcblxuICBpZiAoYnVyZ2VyQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pY29uX29wZW4nKSkge1xuICAgIGJ1cmdlck1lbnUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHB4KSc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICBidXJnZXJCdXR0b25JbWFnZS5zcmMgPSAnYXNzZXRzL2ljb25zL2J1cmdlci5wbmcnO1xuICB9IGVsc2Uge1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ3Zpc2libGUnO1xuICAgIGJ1cmdlck1lbnUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMzIwcHgpJztcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGJ1cmdlckJ1dHRvbkltYWdlLnNyYyA9ICdhc3NldHMvaWNvbnMvYnVyZ2VyLWJsYWNrLnBuZyc7XG4gICAgfSwgNDAwKTtcbiAgfVxufSk7XG5cbmJ1cmdlckJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGJ1cmdlckJ1dHRvbi5jbGljaygpO1xufSk7XG4iLCJpbXBvcnQgYnVyZ2VyTWVudSBmcm9tICcuL2J1cmdlci1tZW51JztcbmltcG9ydCBtb2RhbFdpbmRvdyBmcm9tICcuL21vZGFsLXdpbmRvdyc7XG5pbXBvcnQgc2xpZGVyIGZyb20gJy4vc2xpZGVyJztcbiIsImNvbnN0IG1vZGFsV2luZG93Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdpbmRvdycpO1xuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpO1xuY29uc3QgYmFja2dyb3VuZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJhY2tncm91bmQnKTtcbmxldCBwZXRzO1xuXG5jb25zdCByZW5kZXJNb2RhbFdpbmRvdyA9IChuYW1lKSA9PiB7XG4gIHdoaWxlIChtb2RhbFdpbmRvd0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgbW9kYWxXaW5kb3dDb250YWluZXIucmVtb3ZlQ2hpbGQobW9kYWxXaW5kb3dDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBsZXQgcGV0O1xuICBwZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5uYW1lID09PSBuYW1lKSB7XG4gICAgICBwZXQgPSBpdGVtO1xuICAgIH1cbiAgfSk7XG5cbiAgbW9kYWxXaW5kb3dDb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb2RhbC13aW5kb3dfX2ltYWdlXCI+XG4gICAgPGltZyBzcmM9XCIke3BldC5pbWd9XCIgYWx0PVwiUGV0c1wiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uX19uYW1lXCI+JHtwZXQubmFtZX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX3R5cGUtcGV0c1wiPiR7cGV0LnR5cGV9IC0gJHtwZXQuYnJlZWR9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uX19kZXNjcmlwdGlvblwiPiR7cGV0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDx1bCBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYVwiPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5BZ2U6PC9iPiA8c3Bhbj4ke3BldC5hZ2V9PC9zcGFuPjwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPklub2N1bGF0aW9uczo8L2I+IDxzcGFuPiR7cGV0Lmlub2N1bGF0aW9uc308L3NwYW4+PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+RGlzZWFzZXM6PC9iPiA8c3Bhbj4ke3BldC5kaXNlYXNlc308L3NwYW4+PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+UGFyYXNpdGVzOjwvYj4gPHNwYW4+JHtwZXQucGFyYXNpdGVzfTwvc3Bhbj48L2xpPlxuICAgIDwvdWw+YDtcblxuICBtb2RhbFdpbmRvd0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGNsb3NlTW9kYWxCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBiYWNrZ3JvdW5kTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xufTtcblxuZmV0Y2goJy4vYXNzZXRzL2pzb24vcGV0cy5qc29uJylcbiAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcbiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIHBldHMgPSByZXN1bHQ7XG4gIH0pO1xuXG5jb25zdCBoaWRlTW9kYWxXaW5kb3cgPSAoKSA9PiB7XG4gIG1vZGFsV2luZG93Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgY2xvc2VNb2RhbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGJhY2tncm91bmRNb2RhbC5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJyc7XG59O1xuXG5jbG9zZU1vZGFsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlkZU1vZGFsV2luZG93KTtcbmJhY2tncm91bmRNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVNb2RhbFdpbmRvdyk7XG5cbmV4cG9ydCBkZWZhdWx0IHJlbmRlck1vZGFsV2luZG93O1xuIiwiaW1wb3J0IHJlbmRlck1vZGFsV2luZG93IGZyb20gJy4vbW9kYWwtd2luZG93JztcblxuY29uc3QgdG9CZWdpbm5pbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tYmVnaW5uaW5nJyk7XG5jb25zdCB0b0VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50by1lbmQnKTtcbmNvbnN0IHNsaWRlTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1sZWZ0Jyk7XG5jb25zdCBzbGlkZVJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLXJpZ2h0Jyk7XG5jb25zdCBwYWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQtcGFnZV9fbnVtYmVyJyk7XG5cbmxldCBwZXRzO1xubGV0IG51bWJlcnNPZkNhcmRzO1xubGV0IGN1cnJlbnRQYWdlID0gMTtcbmxldCBtYXhOdW1iZXJQYWdlO1xuXG5pZiAod2luZG93LmlubmVyV2lkdGggPiAxMjc5KSB7XG4gIG51bWJlcnNPZkNhcmRzID0gODtcbiAgbWF4TnVtYmVyUGFnZSA9IDY7XG59IGVsc2UgaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gNzY3KSB7XG4gIG51bWJlcnNPZkNhcmRzID0gNjtcbiAgbWF4TnVtYmVyUGFnZSA9IDg7XG59IGVsc2Uge1xuICBudW1iZXJzT2ZDYXJkcyA9IDM7XG4gIG1heE51bWJlclBhZ2UgPSAxNjtcbn1cblxuY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2FyZCA9IGA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2ltYWdlXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHt0aGlzLmltYWdlfVwiIGFsdD1cIlBldHNcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX25hbWVcIj4ke3RoaXMubmFtZX08L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJjYXJkX2J1dHRvblwiIGRhdGEtbmFtZT1cIiR7dGhpcy5uYW1lfVwiPkxlYXJuIG1vcmU8L2J1dHRvbj5cbiAgICA8L2Rpdj5gO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyQ2FyZHMgPSAoKSA9PiB7XG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcmRzJyk7XG4gIHdoaWxlIChjYXJkc0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgY2FyZHNDb250YWluZXIucmVtb3ZlQ2hpbGQoY2FyZHNDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cbiAgcGV0cy5zb3J0KCgpID0+IE1hdGgucmFuZG9tKCkgLSAwLjUpO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyc09mQ2FyZHM7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChwZXRzW2ldLm5hbWUsIHBldHNbaV0uaW1nKTtcbiAgICBjYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gY2FyZC5yZW5kZXIoKTtcbiAgfVxuXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfYnV0dG9uJyk7XG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVuZGVyTW9kYWxXaW5kb3coY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG5jb25zdCBzZXRTZXR0aW5nc0NvbnRyb2xQYW5lbCA9ICgpID0+IHtcbiAgaWYgKGN1cnJlbnRQYWdlID09PSAxKSB7XG4gICAgdG9CZWdpbm5pbmcuY2xhc3NMaXN0LmFkZCgnYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgdG9CZWdpbm5pbmcuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIHNsaWRlTGVmdC5jbGFzc0xpc3QuYWRkKCdidXR0b25fZGlzYWJsZWQnKTtcbiAgICBzbGlkZUxlZnQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuXG4gICAgdG9FbmQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgdG9FbmQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIHNsaWRlUmlnaHQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgc2xpZGVSaWdodC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFBhZ2UgPT09IG1heE51bWJlclBhZ2UpIHtcbiAgICB0b0JlZ2lubmluZy5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fZGlzYWJsZWQnKTtcbiAgICB0b0JlZ2lubmluZy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgc2xpZGVMZWZ0LmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbl9kaXNhYmxlZCcpO1xuICAgIHNsaWRlTGVmdC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICB0b0VuZC5jbGFzc0xpc3QuYWRkKCdidXR0b25fZGlzYWJsZWQnKTtcbiAgICB0b0VuZC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgc2xpZGVSaWdodC5jbGFzc0xpc3QuYWRkKCdidXR0b25fZGlzYWJsZWQnKTtcbiAgICBzbGlkZVJpZ2h0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICB0b0JlZ2lubmluZy5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fZGlzYWJsZWQnKTtcbiAgICB0b0JlZ2lubmluZy5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgc2xpZGVMZWZ0LmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbl9kaXNhYmxlZCcpO1xuICAgIHNsaWRlTGVmdC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG5cbiAgICB0b0VuZC5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fZGlzYWJsZWQnKTtcbiAgICB0b0VuZC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gICAgc2xpZGVSaWdodC5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fZGlzYWJsZWQnKTtcbiAgICBzbGlkZVJpZ2h0LnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgfVxufTtcblxuc2xpZGVSaWdodC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgaWYgKGN1cnJlbnRQYWdlIDwgbWF4TnVtYmVyUGFnZSkge1xuICAgIGN1cnJlbnRQYWdlICs9IDE7XG4gICAgcGFnZS5pbm5lclRleHQgPSBjdXJyZW50UGFnZTtcbiAgICByZW5kZXJDYXJkcygpO1xuICB9XG5cbiAgc2V0U2V0dGluZ3NDb250cm9sUGFuZWwoKTtcbn0pO1xuXG5zbGlkZUxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChjdXJyZW50UGFnZSA+IDEpIHtcbiAgICBjdXJyZW50UGFnZSAtPSAxO1xuICAgIHBhZ2UuaW5uZXJUZXh0ID0gY3VycmVudFBhZ2U7XG4gICAgcmVuZGVyQ2FyZHMoKTtcbiAgfVxuXG4gIHNldFNldHRpbmdzQ29udHJvbFBhbmVsKCk7XG59KTtcblxudG9CZWdpbm5pbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGN1cnJlbnRQYWdlID0gMTtcbiAgcGFnZS5pbm5lclRleHQgPSAxO1xuICByZW5kZXJDYXJkcygpO1xuICBzZXRTZXR0aW5nc0NvbnRyb2xQYW5lbCgpO1xufSk7XG5cbnRvRW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjdXJyZW50UGFnZSA9IG1heE51bWJlclBhZ2U7XG4gIHBhZ2UuaW5uZXJUZXh0ID0gbWF4TnVtYmVyUGFnZTtcbiAgcmVuZGVyQ2FyZHMoKTtcbiAgc2V0U2V0dGluZ3NDb250cm9sUGFuZWwoKTtcbn0pO1xuXG5mZXRjaCgnLi9hc3NldHMvanNvbi9wZXRzLmpzb24nKVxuICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQuanNvbigpKVxuICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgcGV0cyA9IHJlc3VsdDtcbiAgICByZW5kZXJDYXJkcygpO1xuICB9KTtcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIChldmVudCkgPT4ge1xuICBsZXQgY3VycmVudE51bWJlcnNPZkNhcmRzO1xuICBsZXQgY3VycmVudE1heE51bWJlclBhZ2U7XG5cbiAgaWYgKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoID4gMTI3OSkge1xuICAgIGN1cnJlbnROdW1iZXJzT2ZDYXJkcyA9IDg7XG4gICAgY3VycmVudE1heE51bWJlclBhZ2UgPSA2O1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pbm5lcldpZHRoID4gNzY3KSB7XG4gICAgY3VycmVudE51bWJlcnNPZkNhcmRzID0gNjtcbiAgICBjdXJyZW50TWF4TnVtYmVyUGFnZSA9IDg7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudE51bWJlcnNPZkNhcmRzID0gMztcbiAgICBjdXJyZW50TWF4TnVtYmVyUGFnZSA9IDE2O1xuICB9XG5cbiAgaWYgKGN1cnJlbnROdW1iZXJzT2ZDYXJkcyAhPT0gbnVtYmVyc09mQ2FyZHMpIHtcbiAgICBudW1iZXJzT2ZDYXJkcyA9IGN1cnJlbnROdW1iZXJzT2ZDYXJkcztcbiAgICBtYXhOdW1iZXJQYWdlID0gY3VycmVudE1heE51bWJlclBhZ2U7XG4gICAgY3VycmVudFBhZ2UgPSAxO1xuICAgIHBhZ2UuaW5uZXJUZXh0ID0gMTtcbiAgICBzZXRTZXR0aW5nc0NvbnRyb2xQYW5lbCgpO1xuICAgIHJlbmRlckNhcmRzKCk7XG4gIH1cbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BldHMvanMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGV0cy9zYXNzL3N0eWxlcy5zY3NzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==