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
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ "./src/main/js/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);




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
cards.forEach(function (card) {
  card.addEventListener('click', function () {
    renderModalWindow(card.getAttribute('data-name'));
  });
});

var hideModalWindow = function hideModalWindow() {
  modalWindowContainer.classList.add('modal-window_closed');
  closeModalButton.classList.add('modal-window_closed');
  backgroundModal.classList.add('modal-window_closed');
  document.body.style.overflowY = '';
};

closeModalButton.addEventListener('click', hideModalWindow);
backgroundModal.addEventListener('click', hideModalWindow);

/***/ }),

/***/ "./src/main/js/slider.js":
/*!*******************************!*
  !*** ./src/main/js/slider.js ***!
  \*******************************/
/***/ (() => {

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable arrow-body-style */
var cardsContainer = document.querySelector('.cards');
var slideLeft = document.querySelector('.slide-left');
var slideRight = document.querySelector('.slide-right');
var pets;
var offset = -1080;
slideLeft.addEventListener('click', function () {
  offset += -1080;
  var cards = document.querySelectorAll('.card');

  for (var i = 0; i < cards.length; i += 1) {
    cards[i].style.transform = "translateX(".concat(offset, "px)");
  }
});
slideRight.addEventListener('click', function () {
  offset += 1080;
  var cards = document.querySelectorAll('.card');

  for (var i = 0; i < cards.length; i += 1) {
    cards[i].style.transform = "translateX(".concat(offset, "px)");
  }
});

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
  pets.sort(function () {
    return Math.random() - 0.5;
  });

  for (var i = 0; i < 3; i += 1) {
    var card = new Card(pets[i].name, pets[i].img);
    cardsContainer.innerHTML += card.render();
  }

  var cards = document.querySelectorAll('.card_button');
  cards.forEach(function (card) {
    card.addEventListener('click', function () {
      renderModalWindow(card.getAttribute('data-name'));
    });
  });
}; // const createCard = (image, name) => {
//   return `<div class="card">
//   <div class="card__image">
//     <img src="${image}" alt="Pets">
//   </div>
//   <div class="card__name">${name}</div>
//   <button class="card_button" data-value="${name}">Learn more</button>
// </div>`;
// };
// const createCards = (cards) => {
//   for (let i = 0; i < 3; i += 1) {
//     cardsContainer.innerHTML += createCard(cards[i].img, cards[i].name);
//   }
// };


fetch('./assets/json/pets.json').then(function (result) {
  return result.json();
}).then(function (result) {
  pets = result;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL21haW4vanMvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL2pzL2luZGV4LmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvbWFpbi9qcy9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL2pzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL21haW4vc2Fzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJidXJnZXJCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJNZW51IiwiaGVhZGluZyIsImJ1cmdlckJhY2tncm91bmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY29udGFpbnMiLCJzdHlsZSIsInRyYW5zZm9ybSIsImJvZHkiLCJvdmVyZmxvd1kiLCJjbGljayIsImNhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZGFsV2luZG93Q29udGFpbmVyIiwiY2xvc2VNb2RhbEJ1dHRvbiIsImJhY2tncm91bmRNb2RhbCIsInBldHMiLCJyZW5kZXJNb2RhbFdpbmRvdyIsIm5hbWUiLCJmaXJzdENoaWxkIiwicmVtb3ZlQ2hpbGQiLCJwZXQiLCJmb3JFYWNoIiwiaXRlbSIsImlubmVySFRNTCIsImltZyIsInR5cGUiLCJicmVlZCIsImRlc2NyaXB0aW9uIiwiYWdlIiwiaW5vY3VsYXRpb25zIiwiZGlzZWFzZXMiLCJwYXJhc2l0ZXMiLCJyZW1vdmUiLCJmZXRjaCIsInRoZW4iLCJyZXN1bHQiLCJqc29uIiwiY2FyZCIsImdldEF0dHJpYnV0ZSIsImhpZGVNb2RhbFdpbmRvdyIsImFkZCIsImNhcmRzQ29udGFpbmVyIiwic2xpZGVMZWZ0Iiwic2xpZGVSaWdodCIsIm9mZnNldCIsImkiLCJsZW5ndGgiLCJDYXJkIiwiaW1hZ2UiLCJyZW5kZXJDYXJkcyIsInNvcnQiLCJNYXRoIiwicmFuZG9tIiwicmVuZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFyQjtBQUNBLElBQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsSUFBTUUsT0FBTyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQSxJQUFNRyxnQkFBZ0IsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUVBRixZQUFZLENBQUNNLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDM0NOLGNBQVksQ0FBQ08sU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsZ0JBQTlCO0FBQ0FKLFNBQU8sQ0FBQ0csU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsa0JBQXpCO0FBQ0FILGtCQUFnQixDQUFDRSxTQUFqQixDQUEyQkMsTUFBM0IsQ0FBa0MsMEJBQWxDOztBQUVBLE1BQUlSLFlBQVksQ0FBQ08sU0FBYixDQUF1QkUsUUFBdkIsQ0FBZ0MsZ0JBQWhDLENBQUosRUFBdUQ7QUFDckROLGNBQVUsQ0FBQ08sS0FBWCxDQUFpQkMsU0FBakIsR0FBNkIsaUJBQTdCO0FBQ0FW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LENBQWMsVUFBQ2dCLElBQUQsRUFBVTtBQUN0QkEsUUFBSSxDQUFDcEMsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0IsWUFBTTtBQUNuQ2UsdUJBQWlCLENBQUNxQixJQUFJLENBQUNDLFlBQUwsQ0FBa0IsV0FBbEIsQ0FBRCxDQUFqQjtBQUNELEtBRkQ7QUFHRCxHQUpEO0FBS0QsQ0FkRCxDLENBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBTCxLQUFLLENBQUMseUJBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsTUFBRDtBQUFBLFNBQVlBLE1BQU0sQ0FBQ0MsSUFBUCxFQUFaO0FBQUEsQ0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCcEIsTUFBSSxHQUFHb0IsTUFBUDtBQUNELENBSkgsRTs7Ozs7Ozs7Ozs7O0FDM0VBOzs7Ozs7O1VDQUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDckJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHNGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7O1VDTkE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsImZpbGUiOiJtYWluL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBidXJnZXJCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1pY29uJyk7XG5jb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1tZW51Jyk7XG5jb25zdCBoZWFkaW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlYWRpbmcnKTtcbmNvbnN0IGJ1cmdlckJhY2tncm91bmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLWJhY2tncm91bmQnKTtcblxuYnVyZ2VyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBidXJnZXJCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pY29uX29wZW4nKTtcbiAgaGVhZGluZy5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkaW5nX2Rpc2FibGVkJyk7XG4gIGJ1cmdlckJhY2tncm91bmQuY2xhc3NMaXN0LnRvZ2dsZSgnYnVyZ2VyLWJhY2tncm91bmRfY2xvc2VkJyk7XG5cbiAgaWYgKGJ1cmdlckJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaWNvbl9vcGVuJykpIHtcbiAgICBidXJnZXJNZW51LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDBweCknO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAndmlzaWJsZSc7XG4gICAgYnVyZ2VyTWVudS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgzMjBweCknO1xuICB9XG59KTtcblxuYnVyZ2VyQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgYnVyZ2VyQnV0dG9uLmNsaWNrKCk7XG59KTtcbiIsImltcG9ydCBidXJnZXJNZW51IGZyb20gJy4vYnVyZ2VyLW1lbnUnO1xuaW1wb3J0IG1vZGFsV2luZG93IGZyb20gJy4vbW9kYWwtd2luZG93JztcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuIiwiY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZF9idXR0b24nKTtcbmNvbnN0IG1vZGFsV2luZG93Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLXdpbmRvdycpO1xuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpO1xuY29uc3QgYmFja2dyb3VuZE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWJhY2tncm91bmQnKTtcbmxldCBwZXRzO1xuXG5jb25zdCByZW5kZXJNb2RhbFdpbmRvdyA9IChuYW1lKSA9PiB7XG4gIHdoaWxlIChtb2RhbFdpbmRvd0NvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgbW9kYWxXaW5kb3dDb250YWluZXIucmVtb3ZlQ2hpbGQobW9kYWxXaW5kb3dDb250YWluZXIuZmlyc3RDaGlsZCk7XG4gIH1cblxuICBsZXQgcGV0O1xuICBwZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5uYW1lID09PSBuYW1lKSB7XG4gICAgICBwZXQgPSBpdGVtO1xuICAgIH1cbiAgfSk7XG5cbiAgbW9kYWxXaW5kb3dDb250YWluZXIuaW5uZXJIVE1MID0gYDxkaXYgY2xhc3M9XCJtb2RhbC13aW5kb3dfX2ltYWdlXCI+XG4gICAgPGltZyBzcmM9XCIke3BldC5pbWd9XCIgYWx0PVwiUGV0c1wiPlxuICA8L2Rpdj5cbiAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uXCI+XG4gICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uX19uYW1lXCI+JHtwZXQubmFtZX08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX3R5cGUtcGV0c1wiPiR7cGV0LnR5cGV9IC0gJHtwZXQuYnJlZWR9PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uX19kZXNjcmlwdGlvblwiPiR7cGV0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgIDx1bCBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYVwiPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5BZ2U6PC9iPiA8c3Bhbj4ke3BldC5hZ2V9PC9zcGFuPjwvbGk+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPklub2N1bGF0aW9uczo8L2I+IDxzcGFuPiR7cGV0Lmlub2N1bGF0aW9uc308L3NwYW4+PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+RGlzZWFzZXM6PC9iPiA8c3Bhbj4ke3BldC5kaXNlYXNlc308L3NwYW4+PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+UGFyYXNpdGVzOjwvYj4gPHNwYW4+JHtwZXQucGFyYXNpdGVzfTwvc3Bhbj48L2xpPlxuICAgIDwvdWw+YDtcblxuICBtb2RhbFdpbmRvd0NvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGNsb3NlTW9kYWxCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBiYWNrZ3JvdW5kTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xufTtcblxuZmV0Y2goJy4vYXNzZXRzL2pzb24vcGV0cy5qc29uJylcbiAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcbiAgLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgIHBldHMgPSByZXN1bHQ7XG4gIH0pO1xuXG5jYXJkcy5mb3JFYWNoKChjYXJkKSA9PiB7XG4gIGNhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgcmVuZGVyTW9kYWxXaW5kb3coY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcbiAgfSk7XG59KTtcblxuY29uc3QgaGlkZU1vZGFsV2luZG93ID0gKCkgPT4ge1xuICBtb2RhbFdpbmRvd0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGNsb3NlTW9kYWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBiYWNrZ3JvdW5kTW9kYWwuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xufTtcblxuY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVNb2RhbFdpbmRvdyk7XG5iYWNrZ3JvdW5kTW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTW9kYWxXaW5kb3cpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgYXJyb3ctYm9keS1zdHlsZSAqL1xuY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcbmNvbnN0IHNsaWRlTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1sZWZ0Jyk7XG5jb25zdCBzbGlkZVJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLXJpZ2h0Jyk7XG5cbmxldCBwZXRzO1xubGV0IG9mZnNldCA9IC0xMDgwO1xuXG5zbGlkZUxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG9mZnNldCArPSAtMTA4MDtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY2FyZHNbaV0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtvZmZzZXR9cHgpYDtcbiAgfVxufSk7XG5cbnNsaWRlUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG9mZnNldCArPSAxMDgwO1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjYXJkc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke29mZnNldH1weClgO1xuICB9XG59KTtcblxuY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2FyZCA9IGA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2ltYWdlXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHt0aGlzLmltYWdlfVwiIGFsdD1cIlBldHNcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX25hbWVcIj4ke3RoaXMubmFtZX08L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJjYXJkX2J1dHRvblwiIGRhdGEtbmFtZT1cIiR7dGhpcy5uYW1lfVwiPkxlYXJuIG1vcmU8L2J1dHRvbj5cbiAgICA8L2Rpdj5gO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyQ2FyZHMgPSAoKSA9PiB7XG4gIHBldHMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChwZXRzW2ldLm5hbWUsIHBldHNbaV0uaW1nKTtcbiAgICBjYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gY2FyZC5yZW5kZXIoKTtcbiAgfVxuXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfYnV0dG9uJyk7XG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVuZGVyTW9kYWxXaW5kb3coY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBjb25zdCBjcmVhdGVDYXJkID0gKGltYWdlLCBuYW1lKSA9PiB7XG4vLyAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNhcmRcIj5cbi8vICAgPGRpdiBjbGFzcz1cImNhcmRfX2ltYWdlXCI+XG4vLyAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIGFsdD1cIlBldHNcIj5cbi8vICAgPC9kaXY+XG4vLyAgIDxkaXYgY2xhc3M9XCJjYXJkX19uYW1lXCI+JHtuYW1lfTwvZGl2PlxuLy8gICA8YnV0dG9uIGNsYXNzPVwiY2FyZF9idXR0b25cIiBkYXRhLXZhbHVlPVwiJHtuYW1lfVwiPkxlYXJuIG1vcmU8L2J1dHRvbj5cbi8vIDwvZGl2PmA7XG4vLyB9O1xuXG4vLyBjb25zdCBjcmVhdGVDYXJkcyA9IChjYXJkcykgPT4ge1xuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuLy8gICAgIGNhcmRzQ29udGFpbmVyLmlubmVySFRNTCArPSBjcmVhdGVDYXJkKGNhcmRzW2ldLmltZywgY2FyZHNbaV0ubmFtZSk7XG4vLyAgIH1cbi8vIH07XG5cbmZldGNoKCcuL2Fzc2V0cy9qc29uL3BldHMuanNvbicpXG4gIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5qc29uKCkpXG4gIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICBwZXRzID0gcmVzdWx0O1xuICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluL2pzL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4vc2Fzcy9zdHlsZXMuc2Nzc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=