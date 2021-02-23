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
var modalWindow = document.querySelector('.modal-window__dialog');
var closeModalButton = document.querySelector('.close-modal');
var pets;

var renderModalWindow = function renderModalWindow(name) {
  while (modalWindow.firstChild) {
    modalWindow.removeChild(modalWindow.firstChild);
  }

  var pet;
  pets.forEach(function (item) {
    if (item.name === name) {
      pet = item;
    }
  });
  modalWindow.innerHTML = "<div class=\"modal-window__image\">\n    <img src=\"".concat(pet.img, "\" alt=\"Pets\">\n  </div>\n  <div class=\"information\">\n    <div class=\"information__name\">").concat(pet.name, "</div>\n    <div class=\"information__type-pets\">").concat(pet.type, " - ").concat(pet.breed, "</div>\n    <div class=\"information__description\">").concat(pet.description, "</div>\n    <ul class=\"information__extra\">\n      <li class=\"information__extra-item\"><b>Age:</b> <span>").concat(pet.age, "</span></li>\n      <li class=\"information__extra-item\"><b>Inoculations:</b> <span>").concat(pet.inoculations, "</span></li>\n      <li class=\"information__extra-item\"><b>Diseases:</b> <span>").concat(pet.diseases, "</span></li>\n      <li class=\"information__extra-item\"><b>Parasites:</b> <span>").concat(pet.parasites, "</span></li>\n    </ul>");
  modalWindowContainer.classList.remove('modal-window_closed');
  closeModalButton.classList.remove('modal-window_closed');
  modalWindow.classList.remove('modal-window_closed');
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
  modalWindow.classList.add('modal-window_closed');
  closeModalButton.classList.add('modal-window_closed');
  document.body.style.overflowY = '';
};

modalWindowContainer.addEventListener('click', function (event) {
  if (event.target === modalWindowContainer) {
    hideModalWindow();
  }
});
closeModalButton.addEventListener('click', hideModalWindow);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL21haW4vanMvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL2pzL2luZGV4LmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvbWFpbi9qcy9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL2pzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL21haW4vc2Fzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJidXJnZXJCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJNZW51IiwiaGVhZGluZyIsImJ1cmdlckJhY2tncm91bmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY29udGFpbnMiLCJzdHlsZSIsInRyYW5zZm9ybSIsImJvZHkiLCJvdmVyZmxvd1kiLCJjbGljayIsImNhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZGFsV2luZG93Q29udGFpbmVyIiwibW9kYWxXaW5kb3ciLCJjbG9zZU1vZGFsQnV0dG9uIiwicGV0cyIsInJlbmRlck1vZGFsV2luZG93IiwibmFtZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInBldCIsImZvckVhY2giLCJpdGVtIiwiaW5uZXJIVE1MIiwiaW1nIiwidHlwZSIsImJyZWVkIiwiZGVzY3JpcHRpb24iLCJhZ2UiLCJpbm9jdWxhdGlvbnMiLCJkaXNlYXNlcyIsInBhcmFzaXRlcyIsInJlbW92ZSIsImZldGNoIiwidGhlbiIsInJlc3VsdCIsImpzb24iLCJjYXJkIiwiZ2V0QXR0cmlidXRlIiwiaGlkZU1vZGFsV2luZG93IiwiYWRkIiwiZXZlbnQiLCJ0YXJnZXQiLCJjYXJkc0NvbnRhaW5lciIsInNsaWRlTGVmdCIsInNsaWRlUmlnaHQiLCJvZmZzZXQiLCJpIiwibGVuZ3RoIiwiQ2FyZCIsImltYWdlIiwicmVuZGVyQ2FyZHMiLCJzb3J0IiwiTWF0aCIsInJhbmRvbSIsInJlbmRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsSUFBTUEsWUFBWSxHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsWUFBdkIsQ0FBckI7QUFDQSxJQUFNQyxVQUFVLEdBQUdGLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFuQjtBQUNBLElBQU1FLE9BQU8sR0FBR0gsUUFBUSxDQUFDQyxhQUFULENBQXVCLFVBQXZCLENBQWhCO0FBQ0EsSUFBTUcsZ0JBQWdCLEdBQUdKLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixvQkFBdkIsQ0FBekI7QUFFQUYsWUFBWSxDQUFDTSxnQkFBYixDQUE4QixPQUE5QixFQUF1QyxZQUFNO0FBQzNDTixjQUFZLENBQUNPLFNBQWIsQ0FBdUJDLE1BQXZCLENBQThCLGdCQUE5QjtBQUNBSixTQUFPLENBQUNHLFNBQVIsQ0FBa0JDLE1BQWxCLENBQXlCLGtCQUF6QjtBQUNBSCxrQkFBZ0IsQ0FBQ0UsU0FBakIsQ0FBMkJDLE1BQTNCLENBQWtDLDBCQUFsQzs7QUFFQSxNQUFJUixZQUFZLENBQUNPLFNBQWIsQ0FBdUJFLFFBQXZCLENBQWdDLGdCQUFoQyxDQUFKLEVBQXVEO0FBQ3JETixjQUFVLENBQUNPLEtBQVgsQ0FBaUJDLFNBQWpCLEdBQTZC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biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcbmNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLW1lbnUnKTtcbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZycpO1xuY29uc3QgYnVyZ2VyQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItYmFja2dyb3VuZCcpO1xuXG5idXJnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGJ1cmdlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWljb25fb3BlbicpO1xuICBoZWFkaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRpbmdfZGlzYWJsZWQnKTtcbiAgYnVyZ2VyQmFja2dyb3VuZC5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItYmFja2dyb3VuZF9jbG9zZWQnKTtcblxuICBpZiAoYnVyZ2VyQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pY29uX29wZW4nKSkge1xuICAgIGJ1cmdlck1lbnUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHB4KSc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICd2aXNpYmxlJztcbiAgICBidXJnZXJNZW51LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDMyMHB4KSc7XG4gIH1cbn0pO1xuXG5idXJnZXJCYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBidXJnZXJCdXR0b24uY2xpY2soKTtcbn0pO1xuIiwiaW1wb3J0IGJ1cmdlck1lbnUgZnJvbSAnLi9idXJnZXItbWVudSc7XG5pbXBvcnQgbW9kYWxXaW5kb3cgZnJvbSAnLi9tb2RhbC13aW5kb3cnO1xuaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcic7XG4iLCJjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX2J1dHRvbicpO1xuY29uc3QgbW9kYWxXaW5kb3dDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93Jyk7XG5jb25zdCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX2RpYWxvZycpO1xuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpO1xubGV0IHBldHM7XG5cbmNvbnN0IHJlbmRlck1vZGFsV2luZG93ID0gKG5hbWUpID0+IHtcbiAgd2hpbGUgKG1vZGFsV2luZG93LmZpcnN0Q2hpbGQpIHtcbiAgICBtb2RhbFdpbmRvdy5yZW1vdmVDaGlsZChtb2RhbFdpbmRvdy5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGxldCBwZXQ7XG4gIHBldHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHBldCA9IGl0ZW07XG4gICAgfVxuICB9KTtcblxuICBtb2RhbFdpbmRvdy5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvd19faW1hZ2VcIj5cbiAgICA8aW1nIHNyYz1cIiR7cGV0LmltZ31cIiBhbHQ9XCJQZXRzXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX25hbWVcIj4ke3BldC5uYW1lfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fdHlwZS1wZXRzXCI+JHtwZXQudHlwZX0gLSAke3BldC5icmVlZH08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX2Rlc2NyaXB0aW9uXCI+JHtwZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPHVsIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhXCI+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPkFnZTo8L2I+IDxzcGFuPiR7cGV0LmFnZX08L3NwYW4+PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+SW5vY3VsYXRpb25zOjwvYj4gPHNwYW4+JHtwZXQuaW5vY3VsYXRpb25zfTwvc3Bhbj48L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5EaXNlYXNlczo8L2I+IDxzcGFuPiR7cGV0LmRpc2Vhc2VzfTwvc3Bhbj48L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5QYXJhc2l0ZXM6PC9iPiA8c3Bhbj4ke3BldC5wYXJhc2l0ZXN9PC9zcGFuPjwvbGk+XG4gICAgPC91bD5gO1xuXG4gIG1vZGFsV2luZG93Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgY2xvc2VNb2RhbEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIG1vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbn07XG5cbmZldGNoKCcuL2Fzc2V0cy9qc29uL3BldHMuanNvbicpXG4gIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5qc29uKCkpXG4gIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICBwZXRzID0gcmVzdWx0O1xuICB9KTtcblxuY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbmRlck1vZGFsV2luZG93KGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IGhpZGVNb2RhbFdpbmRvdyA9ICgpID0+IHtcbiAgbW9kYWxXaW5kb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGNsb3NlTW9kYWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xufTtcblxubW9kYWxXaW5kb3dDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWxXaW5kb3dDb250YWluZXIpIHtcbiAgICBoaWRlTW9kYWxXaW5kb3coKTtcbiAgfVxufSk7XG5cbmNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTW9kYWxXaW5kb3cpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgYXJyb3ctYm9keS1zdHlsZSAqL1xuY29uc3QgY2FyZHNDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FyZHMnKTtcbmNvbnN0IHNsaWRlTGVmdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1sZWZ0Jyk7XG5jb25zdCBzbGlkZVJpZ2h0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLXJpZ2h0Jyk7XG5cbmxldCBwZXRzO1xubGV0IG9mZnNldCA9IC0xMDgwO1xuXG5zbGlkZUxlZnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG9mZnNldCArPSAtMTA4MDtcbiAgY29uc3QgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuY2FyZCcpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGNhcmRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY2FyZHNbaV0uc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtvZmZzZXR9cHgpYDtcbiAgfVxufSk7XG5cbnNsaWRlUmlnaHQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIG9mZnNldCArPSAxMDgwO1xuICBjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgY2FyZHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjYXJkc1tpXS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke29mZnNldH1weClgO1xuICB9XG59KTtcblxuY2xhc3MgQ2FyZCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGltYWdlKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgY29uc3QgY2FyZCA9IGA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX2ltYWdlXCI+XG4gICAgICAgIDxpbWcgc3JjPVwiJHt0aGlzLmltYWdlfVwiIGFsdD1cIlBldHNcIj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNhcmRfX25hbWVcIj4ke3RoaXMubmFtZX08L2Rpdj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJjYXJkX2J1dHRvblwiIGRhdGEtbmFtZT1cIiR7dGhpcy5uYW1lfVwiPkxlYXJuIG1vcmU8L2J1dHRvbj5cbiAgICA8L2Rpdj5gO1xuXG4gICAgcmV0dXJuIGNhcmQ7XG4gIH1cbn1cblxuY29uc3QgcmVuZGVyQ2FyZHMgPSAoKSA9PiB7XG4gIHBldHMuc29ydCgoKSA9PiBNYXRoLnJhbmRvbSgpIC0gMC41KTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuICAgIGNvbnN0IGNhcmQgPSBuZXcgQ2FyZChwZXRzW2ldLm5hbWUsIHBldHNbaV0uaW1nKTtcbiAgICBjYXJkc0NvbnRhaW5lci5pbm5lckhUTUwgKz0gY2FyZC5yZW5kZXIoKTtcbiAgfVxuXG4gIGNvbnN0IGNhcmRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNhcmRfYnV0dG9uJyk7XG4gIGNhcmRzLmZvckVhY2goKGNhcmQpID0+IHtcbiAgICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVuZGVyTW9kYWxXaW5kb3coY2FyZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcbiAgICB9KTtcbiAgfSk7XG59O1xuXG4vLyBjb25zdCBjcmVhdGVDYXJkID0gKGltYWdlLCBuYW1lKSA9PiB7XG4vLyAgIHJldHVybiBgPGRpdiBjbGFzcz1cImNhcmRcIj5cbi8vICAgPGRpdiBjbGFzcz1cImNhcmRfX2ltYWdlXCI+XG4vLyAgICAgPGltZyBzcmM9XCIke2ltYWdlfVwiIGFsdD1cIlBldHNcIj5cbi8vICAgPC9kaXY+XG4vLyAgIDxkaXYgY2xhc3M9XCJjYXJkX19uYW1lXCI+JHtuYW1lfTwvZGl2PlxuLy8gICA8YnV0dG9uIGNsYXNzPVwiY2FyZF9idXR0b25cIiBkYXRhLXZhbHVlPVwiJHtuYW1lfVwiPkxlYXJuIG1vcmU8L2J1dHRvbj5cbi8vIDwvZGl2PmA7XG4vLyB9O1xuXG4vLyBjb25zdCBjcmVhdGVDYXJkcyA9IChjYXJkcykgPT4ge1xuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkgKz0gMSkge1xuLy8gICAgIGNhcmRzQ29udGFpbmVyLmlubmVySFRNTCArPSBjcmVhdGVDYXJkKGNhcmRzW2ldLmltZywgY2FyZHNbaV0ubmFtZSk7XG4vLyAgIH1cbi8vIH07XG5cbmZldGNoKCcuL2Fzc2V0cy9qc29uL3BldHMuanNvbicpXG4gIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5qc29uKCkpXG4gIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICBwZXRzID0gcmVzdWx0O1xuICB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluL2pzL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4vc2Fzcy9zdHlsZXMuc2Nzc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=