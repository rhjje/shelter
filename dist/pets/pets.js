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
var currentPage = document.querySelector('.current-page');
var pets;
var numbersOfCards;

if (window.innerWidth > 1279) {
  numbersOfCards = 8;
} else if (window.innerWidth > 767) {
  numbersOfCards = 6;
} else {
  numbersOfCards = 3;
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

slideRight.addEventListener('click', function () {
  renderCards();
});
fetch('./assets/json/pets.json').then(function (result) {
  return result.json();
}).then(function (result) {
  pets = result;
  renderCards();
});
window.addEventListener('resize', function (event) {
  console.log(event.target.innerWidth);
});
console.log(window.innerWidth);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL3BldHMvanMvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9wZXRzL2pzL2luZGV4LmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvcGV0cy9qcy9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9wZXRzL2pzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL3BldHMvc2Fzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJidXJnZXJCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJCdXR0b25JbWFnZSIsImJ1cmdlck1lbnUiLCJoZWFkaW5nIiwiYnVyZ2VyQmFja2dyb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInN0eWxlIiwidHJhbnNmb3JtIiwiYm9keSIsIm92ZXJmbG93WSIsInNyYyIsInNldFRpbWVvdXQiLCJjbGljayIsIm1vZGFsV2luZG93Q29udGFpbmVyIiwiY2xvc2VNb2RhbEJ1dHRvbiIsImJhY2tncm91bmRNb2RhbCIsInBldHMiLCJyZW5kZXJNb2RhbFdpbmRvdyIsIm5hbWUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJwZXQiLCJmb3JFYWNoIiwiaXRlbSIsImlubmVySFRNTCIsImltZyIsInR5cGUiLCJicmVlZCIsImRlc2NyaXB0aW9uIiwiYWdlIiwiaW5vY3VsYXRpb25zIiwiZGlzZWFzZXMiLCJwYXJhc2l0ZXMiLCJyZW1vdmUiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiYWRkIiwidG9CZWdpbm5pbmciLCJ0b0VuZCIsInNsaWRlTGVmdCIsInNsaWRlUmlnaHQiLCJjdXJyZW50UGFnZSIsIm51bWJlcnNPZkNhcmRzIiwid2luZG93IiwiaW5uZXJXaWR0aCIsIkNhcmQiLCJpbWFnZSIsImNhcmQiLCJyZW5kZXJDYXJkcyIsImNhcmRzQ29udGFpbmVyIiwic29ydCIsIk1hdGgiLCJyYW5kb20iLCJpIiwicmVuZGVyIiwiY2FyZHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZ2V0QXR0cmlidXRlIiwiZXZlbnQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFyQjtBQUNBLElBQU1DLGlCQUFpQixHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsa0JBQXZCLENBQTFCO0FBQ0EsSUFBTUUsVUFBVSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQSxJQUFNRyxPQUFPLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUNBLElBQU1JLGdCQUFnQixHQUFHTCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXpCO0FBRUFGLFlBQVksQ0FBQ08sZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBTTtBQUMzQ1AsY0FBWSxDQUFDUSxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixnQkFBOUI7QUFDQUosU0FBTyxDQUFDRyxTQUFSLENBQWtCQyxNQUFsQixDQUF5QixrQkFBekI7QUFDQUgsa0JBQWdCLENBQUNFLFNBQWpCLENBQTJCQyxNQUEzQixDQUFrQywwQkFBbEM7O0FBRUEsTUFBSVQsWUFBWSxDQUFDUSxTQUFiLENBQXVCRSxRQUF2QixDQUFnQyxnQkFBaEMsQ0FBSixFQUF1RDtBQUNyRE4sY0FBVSxDQUFDTyxLQUFYLENBQWlCQyxTQUFqQixHQUE2QixpQkFBN0I7QUFDQVgsWUFBUSxDQUFDWSxJQUFULENBQWNGLEtBQWQsQ0FBb0JHLFNBQXBCLEdBQWdDLFFBQWhDO0FBQ0FYLHFCQUFpQixDQUFDWSxHQUFsQixHQUF3Qix5QkFBeEI7QUFDRCxHQUpELE1BSU87QUFDTGQsWUFBUSxDQUFDWSxJQUFULENBQWNGLEtBQWQsQ0FBb0JHLFNBQXBCLEdBQWdDLFNBQWhDO0FBQ0FWLGNBQVUsQ0FBQ08sS0FBWCxDQUFpQkMsU0FBakIsR0FBNkIsbUJBQTdCO0FBQ0FJLGNBQVUsQ0FBQyxZQUFNO0FBQ2ZiLHVCQUFpQixDQUFDWSxHQUFsQixHQUF3QiwrQkFBeEI7QUFDRCxLQUZTLEVBRVAsR0FGTyxDQUFWO0FBR0Q7QUFDRixDQWhCRDtBQWtCQVQsZ0JBQWdCLENBQUNDLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFNO0FBQy9DUCxjQUFZLENBQUNpQixLQUFiO0FBQ0QsQ0FGRCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQSxJQUFNQyxvQkFBb0IsR0FBR2pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixlQUF2QixDQUE3QjtBQUNBLElBQU1pQixnQkFBZ0IsR0FBR2xCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUF6QjtBQUNBLElBQU1rQixlQUFlLEdBQUduQixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsbUJBQXZCLENBQXhCO0FBQ0EsSUFBSW1CLElBQUo7O0FBRUEsSUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxJQUFELEVBQVU7QUFDbEMsU0FBT0wsb0JBQW9CLENBQUNNLFVBQTVCLEVBQXdDO0FBQ3RDTix3QkFBb0IsQ0FBQ08sV0FBckIsQ0FBaUNQLG9CQUFvQixDQUFDTSxVQUF0RDtBQUNEOztBQUVELE1BQUlFLEdBQUo7QUFDQUwsTUFBSSxDQUFDTSxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JCLFFBQUlBLElBQUksQ0FBQ0wsSUFBTCxLQUFjQSxJQUFsQixFQUF3QjtBQUN0QkcsU0FBRyxHQUFHRSxJQUFOO0FBQ0Q7QUFDRixHQUpEO0FBTUFWLHNCQUFvQixDQUFDVyxTQUFyQixpRUFDY0gsR0FBRyxDQUFDSSxHQURsQiw2R0FJbUNKLEdBQUcsQ0FBQ0gsSUFKdkMsK0RBS3dDRyxHQUFHLENBQUNLLElBTDVDLGdCQUtzREwsR0FBRyxDQUFDTSxLQUwxRCxpRUFNMENOLEdBQUcsQ0FBQ08sV0FOOUMsMEhBUTREUCxHQUFHLENBQUNRLEdBUmhFLGtHQVNxRVIsR0FBRyxDQUFDUyxZQVR6RSw4RkFVaUVULEdBQUcsQ0FBQ1UsUUFWckUsK0ZBV2tFVixHQUFHLENBQUNXLFNBWHRFO0FBY0FuQixzQkFBb0IsQ0FBQ1YsU0FBckIsQ0FBK0I4QixNQUEvQixDQUFzQyxxQkFBdEM7QUFDQW5CLGtCQUFnQixDQUFDWCxTQUFqQixDQUEyQjhCLE1BQTNCLENBQWtDLHFCQUFsQztBQUNBbEIsaUJBQWUsQ0FBQ1osU0FBaEIsQ0FBMEI4QixNQUExQixDQUFpQyxxQkFBakM7QUFDRCxDQTdCRDs7QUErQkFDLEtBQUssQ0FBQyx5QkFBRCxDQUFMLENBQ0dDLElBREgsQ0FDUSxVQUFDQyxNQUFEO0FBQUEsU0FBWUEsTUFBTSxDQUFDQyxJQUFQLEVBQVo7QUFBQSxDQURSLEVBRUdGLElBRkgsQ0FFUSxVQUFDQyxNQUFELEVBQVk7QUFDaEJwQixNQUFJLEdBQUdvQixNQUFQO0FBQ0QsQ0FKSDtBQU1BdEIsZ0JBQWdCLENBQUNaLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFNO0FBQy9DVyxzQkFBb0IsQ0FBQ1YsU0FBckIsQ0FBK0JtQyxHQUEvQixDQUFtQyxxQkFBbkM7QUFDQXhCLGtCQUFnQixDQUFDWCxTQUFqQixDQUEyQm1DLEdBQTNCLENBQStCLHFCQUEvQjtBQUNBdkIsaUJBQWUsQ0FBQ1osU0FBaEIsQ0FBMEJtQyxHQUExQixDQUE4QixxQkFBOUI7QUFDRCxDQUpEO0FBTUF2QixlQUFlLENBQUNiLGdCQUFoQixDQUFpQyxPQUFqQyxFQUEwQyxZQUFNO0FBQzlDWSxrQkFBZ0IsQ0FBQ0YsS0FBakI7QUFDRCxDQUZEO0FBSUEsaUVBQWVLLGlCQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFFQSxJQUFNc0IsV0FBVyxHQUFHM0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBQ0EsSUFBTTJDLEtBQUssR0FBRzVDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixTQUF2QixDQUFkO0FBQ0EsSUFBTTRDLFNBQVMsR0FBRzdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFsQjtBQUNBLElBQU02QyxVQUFVLEdBQUc5QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQSxJQUFNOEMsV0FBVyxHQUFHL0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLGVBQXZCLENBQXBCO0FBRUEsSUFBSW1CLElBQUo7QUFDQSxJQUFJNEIsY0FBSjs7QUFFQSxJQUFJQyxNQUFNLENBQUNDLFVBQVAsR0FBb0IsSUFBeEIsRUFBOEI7QUFDNUJGLGdCQUFjLEdBQUcsQ0FBakI7QUFDRCxDQUZELE1BRU8sSUFBSUMsTUFBTSxDQUFDQyxVQUFQLEdBQW9CLEdBQXhCLEVBQTZCO0FBQ2xDRixnQkFBYyxHQUFHLENBQWpCO0FBQ0QsQ0FGTSxNQUVBO0FBQ0xBLGdCQUFjLEdBQUcsQ0FBakI7QUFDRDs7SUFFS0csSTtBQUNKLGdCQUFZN0IsSUFBWixFQUFrQjhCLEtBQWxCLEVBQXlCO0FBQUE7O0FBQ3ZCLFNBQUs5QixJQUFMLEdBQVlBLElBQVo7QUFDQSxTQUFLOEIsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxVQUFNQyxJQUFJLHlGQUVNLEtBQUtELEtBRlgsNkVBSWtCLEtBQUs5QixJQUp2QixxRUFLaUMsS0FBS0EsSUFMdEMsdUNBQVY7QUFRQSxhQUFPK0IsSUFBUDtBQUNEOzs7Ozs7QUFHSCxJQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLE1BQU1DLGNBQWMsR0FBR3ZELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUF2Qjs7QUFDQSxTQUFPc0QsY0FBYyxDQUFDaEMsVUFBdEIsRUFBa0M7QUFDaENnQyxrQkFBYyxDQUFDL0IsV0FBZixDQUEyQitCLGNBQWMsQ0FBQ2hDLFVBQTFDO0FBQ0Q7O0FBQ0RILE1BQUksQ0FBQ29DLElBQUwsQ0FBVTtBQUFBLFdBQU1DLElBQUksQ0FBQ0MsTUFBTCxLQUFnQixHQUF0QjtBQUFBLEdBQVY7O0FBRUEsT0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHWCxjQUFwQixFQUFvQ1csQ0FBQyxJQUFJLENBQXpDLEVBQTRDO0FBQzFDLFFBQU1OLElBQUksR0FBRyxJQUFJRixJQUFKLENBQVMvQixJQUFJLENBQUN1QyxDQUFELENBQUosQ0FBUXJDLElBQWpCLEVBQXVCRixJQUFJLENBQUN1QyxDQUFELENBQUosQ0FBUTlCLEdBQS9CLENBQWI7QUFDQTBCLGtCQUFjLENBQUMzQixTQUFmLElBQTRCeUIsSUFBSSxDQUFDTyxNQUFMLEVBQTVCO0FBQ0Q7O0FBRUQsTUFBTUMsS0FBSyxHQUFHN0QsUUFBUSxDQUFDOEQsZ0JBQVQsQ0FBMEIsY0FBMUIsQ0FBZDtBQUNBRCxPQUFLLENBQUNuQyxPQUFOLENBQWMsVUFBQzJCLElBQUQsRUFBVTtBQUN0QkEsUUFBSSxDQUFDL0MsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUNuQ2UsNERBQWlCLENBQUNnQyxJQUFJLENBQUNVLFlBQUwsQ0FBa0IsV0FBbEIsQ0FBRCxDQUFqQjtBQUNELEtBRkQ7QUFHRCxHQUpEO0FBS0QsQ0FsQkQ7O0FBb0JBakIsVUFBVSxDQUFDeEMsZ0JBQVgsQ0FBNEIsT0FBNUIsRUFBcUMsWUFBTTtBQUN6Q2dELGFBQVc7QUFDWixDQUZEO0FBSUFoQixLQUFLLENBQUMseUJBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsTUFBRDtBQUFBLFNBQVlBLE1BQU0sQ0FBQ0MsSUFBUCxFQUFaO0FBQUEsQ0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCcEIsTUFBSSxHQUFHb0IsTUFBUDtBQUNBYyxhQUFXO0FBQ1osQ0FMSDtBQU9BTCxNQUFNLENBQUMzQyxnQkFBUCxDQUF3QixRQUF4QixFQUFrQyxVQUFDMEQsS0FBRCxFQUFXO0FBQzNDQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBSyxDQUFDRyxNQUFOLENBQWFqQixVQUF6QjtBQUNELENBRkQ7QUFJQWUsT0FBTyxDQUFDQyxHQUFSLENBQVlqQixNQUFNLENBQUNDLFVBQW5CLEU7Ozs7Ozs7Ozs7OztBQ3pFQTs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoicGV0cy9wZXRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbicpO1xuY29uc3QgYnVyZ2VyQnV0dG9uSW1hZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uID4gaW1nJyk7XG5jb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1tZW51Jyk7XG5jb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRpbmcnKTtcbmNvbnN0IGJ1cmdlckJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLWJhY2tncm91bmQnKTtcblxuYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBidXJnZXJCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pY29uX29wZW4nKTtcbiAgaGVhZGluZy5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkaW5nX2Rpc2FibGVkJyk7XG4gIGJ1cmdlckJhY2tncm91bmQuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLWJhY2tncm91bmRfY2xvc2VkJyk7XG5cbiAgaWYgKGJ1cmdlckJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaWNvbl9vcGVuJykpIHtcbiAgICBidXJnZXJNZW51LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgYnVyZ2VyQnV0dG9uSW1hZ2Uuc3JjID0gJ2Fzc2V0cy9pY29ucy9idXJnZXIucG5nJztcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICd2aXNpYmxlJztcbiAgICBidXJnZXJNZW51LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDMyMHB4KSc7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBidXJnZXJCdXR0b25JbWFnZS5zcmMgPSAnYXNzZXRzL2ljb25zL2J1cmdlci1ibGFjay5wbmcnO1xuICAgIH0sIDQwMCk7XG4gIH1cbn0pO1xuXG5idXJnZXJCYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBidXJnZXJCdXR0b24uY2xpY2soKTtcbn0pO1xuIiwiaW1wb3J0IGJ1cmdlck1lbnUgZnJvbSAnLi9idXJnZXItbWVudSc7XG5pbXBvcnQgbW9kYWxXaW5kb3cgZnJvbSAnLi9tb2RhbC13aW5kb3cnO1xuaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcic7XG4iLCJjb25zdCBtb2RhbFdpbmRvd0NvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3cnKTtcbmNvbnN0IGNsb3NlTW9kYWxCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UtbW9kYWwnKTtcbmNvbnN0IGJhY2tncm91bmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1iYWNrZ3JvdW5kJyk7XG5sZXQgcGV0cztcblxuY29uc3QgcmVuZGVyTW9kYWxXaW5kb3cgPSAobmFtZSkgPT4ge1xuICB3aGlsZSAobW9kYWxXaW5kb3dDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIG1vZGFsV2luZG93Q29udGFpbmVyLnJlbW92ZUNoaWxkKG1vZGFsV2luZG93Q29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG5cbiAgbGV0IHBldDtcbiAgcGV0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgcGV0ID0gaXRlbTtcbiAgICB9XG4gIH0pO1xuXG4gIG1vZGFsV2luZG93Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZGl2IGNsYXNzPVwibW9kYWwtd2luZG93X19pbWFnZVwiPlxuICAgIDxpbWcgc3JjPVwiJHtwZXQuaW1nfVwiIGFsdD1cIlBldHNcIj5cbiAgPC9kaXY+XG4gIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvblwiPlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fbmFtZVwiPiR7cGV0Lm5hbWV9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uX190eXBlLXBldHNcIj4ke3BldC50eXBlfSAtICR7cGV0LmJyZWVkfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZGVzY3JpcHRpb25cIj4ke3BldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICA8dWwgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmFcIj5cbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+QWdlOjwvYj4gPHNwYW4+JHtwZXQuYWdlfTwvc3Bhbj48L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5Jbm9jdWxhdGlvbnM6PC9iPiA8c3Bhbj4ke3BldC5pbm9jdWxhdGlvbnN9PC9zcGFuPjwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPkRpc2Vhc2VzOjwvYj4gPHNwYW4+JHtwZXQuZGlzZWFzZXN9PC9zcGFuPjwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPlBhcmFzaXRlczo8L2I+IDxzcGFuPiR7cGV0LnBhcmFzaXRlc308L3NwYW4+PC9saT5cbiAgICA8L3VsPmA7XG5cbiAgbW9kYWxXaW5kb3dDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBjbG9zZU1vZGFsQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgYmFja2dyb3VuZE1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbn07XG5cbmZldGNoKCcuL2Fzc2V0cy9qc29uL3BldHMuanNvbicpXG4gIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5qc29uKCkpXG4gIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICBwZXRzID0gcmVzdWx0O1xuICB9KTtcblxuY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgbW9kYWxXaW5kb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBjbG9zZU1vZGFsQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgYmFja2dyb3VuZE1vZGFsLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbn0pO1xuXG5iYWNrZ3JvdW5kTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGNsb3NlTW9kYWxCdXR0b24uY2xpY2soKTtcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCByZW5kZXJNb2RhbFdpbmRvdztcbiIsImltcG9ydCByZW5kZXJNb2RhbFdpbmRvdyBmcm9tICcuL21vZGFsLXdpbmRvdyc7XG5cbmNvbnN0IHRvQmVnaW5uaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvLWJlZ2lubmluZycpO1xuY29uc3QgdG9FbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG8tZW5kJyk7XG5jb25zdCBzbGlkZUxlZnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtbGVmdCcpO1xuY29uc3Qgc2xpZGVSaWdodCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1yaWdodCcpO1xuY29uc3QgY3VycmVudFBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY3VycmVudC1wYWdlJyk7XG5cbmxldCBwZXRzO1xubGV0IG51bWJlcnNPZkNhcmRzO1xuXG5pZiAod2luZG93LmlubmVyV2lkdGggPiAxMjc5KSB7XG4gIG51bWJlcnNPZkNhcmRzID0gODtcbn0gZWxzZSBpZiAod2luZG93LmlubmVyV2lkdGggPiA3NjcpIHtcbiAgbnVtYmVyc09mQ2FyZHMgPSA2O1xufSBlbHNlIHtcbiAgbnVtYmVyc09mQ2FyZHMgPSAzO1xufVxuXG5jbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IobmFtZSwgaW1hZ2UpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCBjYXJkID0gYDxkaXYgY2xhc3M9XCJjYXJkXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9faW1hZ2VcIj5cbiAgICAgICAgPGltZyBzcmM9XCIke3RoaXMuaW1hZ2V9XCIgYWx0PVwiUGV0c1wiPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZF9fbmFtZVwiPiR7dGhpcy5uYW1lfTwvZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhcmRfYnV0dG9uXCIgZGF0YS1uYW1lPVwiJHt0aGlzLm5hbWV9XCI+TGVhcm4gbW9yZTwvYnV0dG9uPlxuICAgIDwvZGl2PmA7XG5cbiAgICByZXR1cm4gY2FyZDtcbiAgfVxufVxuXG5jb25zdCByZW5kZXJDYXJkcyA9ICgpID0+IHtcbiAgY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcbiAgd2hpbGUgKGNhcmRzQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBjYXJkc0NvbnRhaW5lci5yZW1vdmVDaGlsZChjYXJkc0NvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuICBwZXRzLnNvcnQoKCkgPT4gTWF0aC5yYW5kb20oKSAtIDAuNSk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJzT2ZDYXJkczsgaSArPSAxKSB7XG4gICAgY29uc3QgY2FyZCA9IG5ldyBDYXJkKHBldHNbaV0ubmFtZSwgcGV0c1tpXS5pbWcpO1xuICAgIGNhcmRzQ29udGFpbmVyLmlubmVySFRNTCArPSBjYXJkLnJlbmRlcigpO1xuICB9XG5cbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9idXR0b24nKTtcbiAgY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICAgIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICByZW5kZXJNb2RhbFdpbmRvdyhjYXJkLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbnNsaWRlUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHJlbmRlckNhcmRzKCk7XG59KTtcblxuZmV0Y2goJy4vYXNzZXRzL2pzb24vcGV0cy5qc29uJylcbiAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcbiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIHBldHMgPSByZXN1bHQ7XG4gICAgcmVuZGVyQ2FyZHMoKTtcbiAgfSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCAoZXZlbnQpID0+IHtcbiAgY29uc29sZS5sb2coZXZlbnQudGFyZ2V0LmlubmVyV2lkdGgpO1xufSk7XG5cbmNvbnNvbGUubG9nKHdpbmRvdy5pbm5lcldpZHRoKTtcblxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL3BldHMvanMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvcGV0cy9zYXNzL3N0eWxlcy5zY3NzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==