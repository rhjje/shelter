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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL3BldHMvanMvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9wZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvcGV0cy9qcy9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9wZXRzL2pzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL3BldHMvc2Fzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJidXJnZXJCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJCdXR0b25JbWFnZSIsImJ1cmdlck1lbnUiLCJoZWFkaW5nIiwiYnVyZ2VyQmFja2dyb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInN0eWxlIiwidHJhbnNmb3JtIiwiYm9keSIsIm92ZXJmbG93WSIsInNyYyIsInNldFRpbWVvdXQiLCJjbGljayIsIm1vZGFsV2luZG93Q29udGFpbmVyIiwiY2xvc2VNb2RhbEJ1dHRvbiIsImJhY2tncm91bmRNb2RhbCIsInBldHMiLCJyZW5kZXJNb2RhbFdpbmRvdyIsIm5hbWUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJwZXQiLCJmb3JFYWNoIiwiaXRlbSIsImlubmVySFRNTCIsImltZyIsInR5cGUiLCJicmVlZCIsImRlc2NyaXB0aW9uIiwiYWdlIiwiaW5vY3VsYXRpb25zIiwiZGlzZWFzZXMiLCJwYXJhc2l0ZXMiLCJyZW1vdmUiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiaGlkZU1vZGFsV2luZG93IiwiYWRkIiwidG9CZWdpbm5pbmciLCJ0b0VuZCIsInNsaWRlTGVmdCIsInNsaWRlUmlnaHQiLCJwYWdlIiwibnVtYmVyc09mQ2FyZHMiLCJjdXJyZW50UGFnZSIsIm1heE51bWJlclBhZ2UiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiQ2FyZCIsImltYWdlIiwiY2FyZCIsInJlbmRlckNhcmRzIiwiY2FyZHNDb250YWluZXIiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsImkiLCJyZW5kZXIiLCJjYXJkcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJnZXRBdHRyaWJ1dGUiLCJzZXRTZXR0aW5nc0NvbnRyb2xQYW5lbCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSIsImlubmVyVGV4dCIsImV2ZW50IiwiY3VycmVudE51bWJlcnNPZkNhcmRzIiwiY3VycmVudE1heE51bWJlclBhZ2UiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXJCO0FBQ0EsSUFBTUMsaUJBQWlCLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixrQkFBdkIsQ0FBMUI7QUFDQSxJQUFNRSxVQUFVLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBLElBQU1HLE9BQU8sR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0EsSUFBTUksZ0JBQWdCLEdBQUdMLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBekI7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QixHQUFHLENBQXZCO0FBQ0QsR0FITSxNQUdBO0FBQ0xELHlCQUFxQixHQUFHLENBQXhCO0FBQ0FDLHdCQUFvQixHQUFHLEVBQXZCO0FBQ0Q7O0FBRUQsTUFBSUQscUJBQXFCLEtBQUt2QixjQUE5QixFQUE4QztBQUM1Q0Esa0JBQWMsR0FBR3VCLHFCQUFqQjtBQUNBckIsaUJBQWEsR0FBR3NCLG9CQUFoQjtBQUNBdkIsZUFBVyxHQUFHLENBQWQ7QUFDQUYsUUFBSSxDQUFDc0IsU0FBTCxHQUFpQixDQUFqQjtBQUNBSCwyQkFBdUI7QUFDdkJWLGVBQVc7QUFDWjtBQUNGLENBdkJELEU7Ozs7Ozs7Ozs7OztBQzFJQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoicGV0cy9wZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbicpO1xuY29uc3QgYnVyZ2VyQnV0dG9uSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uID4gaW1nJyk7XG5jb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1tZW51Jyk7XG5jb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRpbmcnKTtcbmNvbnN0IGJ1cmdlckJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLWJhY2tncm91bmQnKTtcblxuYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBidXJnZXJCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pY29uX29wZW4nKTtcbiAgaGVhZGluZy5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkaW5nX2Rpc2FibGVkJyk7XG4gIGJ1cmdlckJhY2tncm91bmQuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLWJhY2tncm91bmRfY2xvc2VkJyk7XG5cbiAgaWYgKGJ1cmdlckJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaWNvbl9vcGVuJykpIHtcbiAgICBidXJnZXJNZW51LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgYnVyZ2VyQnV0dG9uSW1hZ2Uuc3JjID0gJ2Fzc2V0cy9pY29ucy9idXJnZXIucG5nJztcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICd2aXNpYmxlJztcbiAgICBidXJnZXJNZW51LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDMyMHB4KSc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBidXJnZXJCdXR0b25JbWFnZS5zcmMgPSAnYXNzZXRzL2ljb25zL2J1cmdlci1ibGFjay5wbmcnO1xuICAgIH0sIDQwMCk7XG4gIH1cbn0pO1xuXG5idXJnZXJCYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBidXJnZXJCdXR0b24uY2xpY2soKTtcbn0pO1xuIiwiaW1wb3J0IGJ1cmdlck1lbnUgZnJvbSAnLi9idXJnZXItbWVudSc7XG5pbXBvcnQgbW9kYWxXaW5kb3cgZnJvbSAnLi9tb2RhbC13aW5kb3cnO1xuaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcic7XG4iLCJjb25zdCBtb2RhbFdpbmRvd0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3cnKTtcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGJhY2tncm91bmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1iYWNrZ3JvdW5kJyk7XG5sZXQgcGV0cztcblxuY29uc3QgcmVuZGVyTW9kYWxXaW5kb3cgPSAobmFtZSkgPT4ge1xuICB3aGlsZSAobW9kYWxXaW5kb3dDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIG1vZGFsV2luZG93Q29udGFpbmVyLnJlbW92ZUNoaWxkKG1vZGFsV2luZG93Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgbGV0IHBldDtcbiAgcGV0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcGV0ID0gaXRlbTtcbiAgICB9XG4gIH0pO1xuXG4gIG1vZGFsV2luZG93Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibW9kYWwtd2luZG93X19pbWFnZVwiPlxuICAgIDxpbWcgc3JjPVwiJHtwZXQuaW1nfVwiIGFsdD1cIlBldHNcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fbmFtZVwiPiR7cGV0Lm5hbWV9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uX190eXBlLXBldHNcIj4ke3BldC50eXBlfSAtICR7cGV0LmJyZWVkfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZGVzY3JpcHRpb25cIj4ke3BldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmFcIj5cbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+QWdlOjwvYj4gPHNwYW4+JHtwZXQuYWdlfTwvc3Bhbj48L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5Jbm9jdWxhdGlvbnM6PC9iPiA8c3Bhbj4ke3BldC5pbm9jdWxhdGlvbnN9PC9zcGFuPjwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPkRpc2Vhc2VzOjwvYj4gPHNwYW4+JHtwZXQuZGlzZWFzZXN9PC9zcGFuPjwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPlBhcmFzaXRlczo8L2I+IDxzcGFuPiR7cGV0LnBhcmFzaXRlc308L3NwYW4+PC9saT5cbiAgICA8L3VsPmA7XG5cbiAgbW9kYWxXaW5kb3dDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBjbG9zZU1vZGFsQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgYmFja2dyb3VuZE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbn07XG5cbmZldGNoKCcuL2Fzc2V0cy9qc29uL3BldHMuanNvbicpXG4gIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5qc29uKCkpXG4gIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICBwZXRzID0gcmVzdWx0O1xuICB9KTtcblxuY29uc3QgaGlkZU1vZGFsV2luZG93ID0gKCkgPT4ge1xuICBtb2RhbFdpbmRvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGNsb3NlTW9kYWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBiYWNrZ3JvdW5kTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xufTtcblxuY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVNb2RhbFdpbmRvdyk7XG5iYWNrZ3JvdW5kTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTW9kYWxXaW5kb3cpO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNb2RhbFdpbmRvdztcbiIsImltcG9ydCByZW5kZXJNb2RhbFdpbmRvdyBmcm9tICcuL21vZGFsLXdpbmRvdyc7XG5cbmNvbnN0IHRvQmVnaW5uaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWJlZ2lubmluZycpO1xuY29uc3QgdG9FbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZW5kJyk7XG5jb25zdCBzbGlkZUxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtbGVmdCcpO1xuY29uc3Qgc2xpZGVSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1yaWdodCcpO1xuY29uc3QgcGFnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jdXJyZW50LXBhZ2VfX251bWJlcicpO1xuXG5sZXQgcGV0cztcbmxldCBudW1iZXJzT2ZDYXJkcztcbmxldCBjdXJyZW50UGFnZSA9IDE7XG5sZXQgbWF4TnVtYmVyUGFnZTtcblxuaWYgKHdpbmRvdy5pbm5lcldpZHRoID4gMTI3OSkge1xuICBudW1iZXJzT2ZDYXJkcyA9IDg7XG4gIG1heE51bWJlclBhZ2UgPSA2O1xufSBlbHNlIGlmICh3aW5kb3cuaW5uZXJXaWR0aCA+IDc2Nykge1xuICBudW1iZXJzT2ZDYXJkcyA9IDY7XG4gIG1heE51bWJlclBhZ2UgPSA4O1xufSBlbHNlIHtcbiAgbnVtYmVyc09mQ2FyZHMgPSAzO1xuICBtYXhOdW1iZXJQYWdlID0gMTY7XG59XG5cbmNsYXNzIENhcmQge1xuICBjb25zdHJ1Y3RvcihuYW1lLCBpbWFnZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5pbWFnZSA9IGltYWdlO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IGNhcmQgPSBgPGRpdiBjbGFzcz1cImNhcmRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19pbWFnZVwiPlxuICAgICAgICA8aW1nIHNyYz1cIiR7dGhpcy5pbWFnZX1cIiBhbHQ9XCJQZXRzXCI+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkX19uYW1lXCI+JHt0aGlzLm5hbWV9PC9kaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY2FyZF9idXR0b25cIiBkYXRhLW5hbWU9XCIke3RoaXMubmFtZX1cIj5MZWFybiBtb3JlPC9idXR0b24+XG4gICAgPC9kaXY+YDtcblxuICAgIHJldHVybiBjYXJkO1xuICB9XG59XG5cbmNvbnN0IHJlbmRlckNhcmRzID0gKCkgPT4ge1xuICBjb25zdCBjYXJkc0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJkcycpO1xuICB3aGlsZSAoY2FyZHNDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGNhcmRzQ29udGFpbmVyLnJlbW92ZUNoaWxkKGNhcmRzQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG4gIHBldHMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlcnNPZkNhcmRzOyBpICs9IDEpIHtcbiAgICBjb25zdCBjYXJkID0gbmV3IENhcmQocGV0c1tpXS5uYW1lLCBwZXRzW2ldLmltZyk7XG4gICAgY2FyZHNDb250YWluZXIuaW5uZXJIVE1MICs9IGNhcmQucmVuZGVyKCk7XG4gIH1cblxuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX2J1dHRvbicpO1xuICBjYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gICAgY2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbmRlck1vZGFsV2luZG93KGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0U2V0dGluZ3NDb250cm9sUGFuZWwgPSAoKSA9PiB7XG4gIGlmIChjdXJyZW50UGFnZSA9PT0gMSkge1xuICAgIHRvQmVnaW5uaW5nLmNsYXNzTGlzdC5hZGQoJ2J1dHRvbl9kaXNhYmxlZCcpO1xuICAgIHRvQmVnaW5uaW5nLnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICBzbGlkZUxlZnQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgc2xpZGVMZWZ0LnNldEF0dHJpYnV0ZSgnZGlzYWJsZWQnLCB0cnVlKTtcblxuICAgIHRvRW5kLmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbl9kaXNhYmxlZCcpO1xuICAgIHRvRW5kLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBzbGlkZVJpZ2h0LmNsYXNzTGlzdC5yZW1vdmUoJ2J1dHRvbl9kaXNhYmxlZCcpO1xuICAgIHNsaWRlUmlnaHQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRQYWdlID09PSBtYXhOdW1iZXJQYWdlKSB7XG4gICAgdG9CZWdpbm5pbmcuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgdG9CZWdpbm5pbmcucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIHNsaWRlTGVmdC5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fZGlzYWJsZWQnKTtcbiAgICBzbGlkZUxlZnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXG4gICAgdG9FbmQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgdG9FbmQuc2V0QXR0cmlidXRlKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgIHNsaWRlUmlnaHQuY2xhc3NMaXN0LmFkZCgnYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgc2xpZGVSaWdodC5zZXRBdHRyaWJ1dGUoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgdG9CZWdpbm5pbmcuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgdG9CZWdpbm5pbmcucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIHNsaWRlTGVmdC5jbGFzc0xpc3QucmVtb3ZlKCdidXR0b25fZGlzYWJsZWQnKTtcbiAgICBzbGlkZUxlZnQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuXG4gICAgdG9FbmQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgdG9FbmQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIHNsaWRlUmlnaHQuY2xhc3NMaXN0LnJlbW92ZSgnYnV0dG9uX2Rpc2FibGVkJyk7XG4gICAgc2xpZGVSaWdodC5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGVkJyk7XG4gIH1cbn07XG5cbnNsaWRlUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGlmIChjdXJyZW50UGFnZSA8IG1heE51bWJlclBhZ2UpIHtcbiAgICBjdXJyZW50UGFnZSArPSAxO1xuICAgIHBhZ2UuaW5uZXJUZXh0ID0gY3VycmVudFBhZ2U7XG4gICAgcmVuZGVyQ2FyZHMoKTtcbiAgfVxuXG4gIHNldFNldHRpbmdzQ29udHJvbFBhbmVsKCk7XG59KTtcblxuc2xpZGVMZWZ0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoY3VycmVudFBhZ2UgPiAxKSB7XG4gICAgY3VycmVudFBhZ2UgLT0gMTtcbiAgICBwYWdlLmlubmVyVGV4dCA9IGN1cnJlbnRQYWdlO1xuICAgIHJlbmRlckNhcmRzKCk7XG4gIH1cblxuICBzZXRTZXR0aW5nc0NvbnRyb2xQYW5lbCgpO1xufSk7XG5cbnRvQmVnaW5uaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjdXJyZW50UGFnZSA9IDE7XG4gIHBhZ2UuaW5uZXJUZXh0ID0gMTtcbiAgcmVuZGVyQ2FyZHMoKTtcbiAgc2V0U2V0dGluZ3NDb250cm9sUGFuZWwoKTtcbn0pO1xuXG50b0VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY3VycmVudFBhZ2UgPSBtYXhOdW1iZXJQYWdlO1xuICBwYWdlLmlubmVyVGV4dCA9IG1heE51bWJlclBhZ2U7XG4gIHJlbmRlckNhcmRzKCk7XG4gIHNldFNldHRpbmdzQ29udHJvbFBhbmVsKCk7XG59KTtcblxuZmV0Y2goJy4vYXNzZXRzL2pzb24vcGV0cy5qc29uJylcbiAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcbiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIHBldHMgPSByZXN1bHQ7XG4gICAgcmVuZGVyQ2FyZHMoKTtcbiAgfSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXZlbnQpID0+IHtcbiAgbGV0IGN1cnJlbnROdW1iZXJzT2ZDYXJkcztcbiAgbGV0IGN1cnJlbnRNYXhOdW1iZXJQYWdlO1xuXG4gIGlmIChldmVudC50YXJnZXQuaW5uZXJXaWR0aCA+IDEyNzkpIHtcbiAgICBjdXJyZW50TnVtYmVyc09mQ2FyZHMgPSA4O1xuICAgIGN1cnJlbnRNYXhOdW1iZXJQYWdlID0gNjtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaW5uZXJXaWR0aCA+IDc2Nykge1xuICAgIGN1cnJlbnROdW1iZXJzT2ZDYXJkcyA9IDY7XG4gICAgY3VycmVudE1heE51bWJlclBhZ2UgPSA4O1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnROdW1iZXJzT2ZDYXJkcyA9IDM7XG4gICAgY3VycmVudE1heE51bWJlclBhZ2UgPSAxNjtcbiAgfVxuXG4gIGlmIChjdXJyZW50TnVtYmVyc09mQ2FyZHMgIT09IG51bWJlcnNPZkNhcmRzKSB7XG4gICAgbnVtYmVyc09mQ2FyZHMgPSBjdXJyZW50TnVtYmVyc09mQ2FyZHM7XG4gICAgbWF4TnVtYmVyUGFnZSA9IGN1cnJlbnRNYXhOdW1iZXJQYWdlO1xuICAgIGN1cnJlbnRQYWdlID0gMTtcbiAgICBwYWdlLmlubmVyVGV4dCA9IDE7XG4gICAgc2V0U2V0dGluZ3NDb250cm9sUGFuZWwoKTtcbiAgICByZW5kZXJDYXJkcygpO1xuICB9XG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9wZXRzL2pzL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BldHMvc2Fzcy9zdHlsZXMuc2Nzc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=