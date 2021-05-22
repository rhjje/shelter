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

function slide() {
  var items = document.querySelector('.slider__visible-area');
  var prev = document.querySelector('.slide-left');
  var next = document.querySelector('.slide-right');
  var posInitial;
  var slides = items.getElementsByClassName('cards');
  var slidesLength = slides.length;
  var slideSize = items.getElementsByClassName('cards')[0].offsetWidth;
  var firstSlide = slides[0];
  var lastSlide = slides[slidesLength - 1];
  var cloneFirst = firstSlide.cloneNode(true);
  var cloneLast = lastSlide.cloneNode(true);
  var index = 0;
  var allowShift = true;
  items.appendChild(cloneFirst);
  items.insertBefore(cloneLast, firstSlide);

  function shiftSlide(dir, action) {
    items.classList.add('shifting');

    if (allowShift) {
      if (!action) {
        posInitial = items.offsetLeft;
      }

      if (dir === 1) {
        items.style.left = "".concat(posInitial - slideSize, "px");
        index += 1;
      } else if (dir === -1) {
        items.style.left = "".concat(posInitial + slideSize, "px");
        index -= 1;
      }
    }

    allowShift = false;
  }

  function checkIndex() {
    items.classList.remove('shifting');

    if (index === -1) {
      items.style.left = "".concat(-(slidesLength * slideSize), "px");
      index = slidesLength - 1;
    }

    if (index === slidesLength) {
      items.style.left = "".concat(-(1 * slideSize), "px");
      index = 0;
    }

    allowShift = true;
  }

  prev.addEventListener('click', function () {
    return shiftSlide(-1);
  });
  next.addEventListener('click', function () {
    return shiftSlide(1);
  });
  items.addEventListener('transitionend', checkIndex);
}

slide();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL21haW4vanMvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL2pzL2luZGV4LmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvbWFpbi9qcy9tb2RhbC13aW5kb3cuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL2pzL3NsaWRlci5qcyIsIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL21haW4vc2Fzcy9zdHlsZXMuc2NzcyIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJidXJnZXJCdXR0b24iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJidXJnZXJNZW51IiwiaGVhZGluZyIsImJ1cmdlckJhY2tncm91bmQiLCJhZGRFdmVudExpc3RlbmVyIiwiY2xhc3NMaXN0IiwidG9nZ2xlIiwiY29udGFpbnMiLCJzdHlsZSIsInRyYW5zZm9ybSIsImJvZHkiLCJvdmVyZmxvd1kiLCJjbGljayIsImNhcmRzIiwicXVlcnlTZWxlY3RvckFsbCIsIm1vZGFsV2luZG93Q29udGFpbmVyIiwibW9kYWxXaW5kb3ciLCJjbG9zZU1vZGFsQnV0dG9uIiwicGV0cyIsInJlbmRlck1vZGFsV2luZG93IiwibmFtZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInBldCIsImZvckVhY2giLCJpdGVtIiwiaW5uZXJIVE1MIiwiaW1nIiwidHlwZSIsImJyZWVkIiwiZGVzY3JpcHRpb24iLCJhZ2UiLCJpbm9jdWxhdGlvbnMiLCJkaXNlYXNlcyIsInBhcmFzaXRlcyIsInJlbW92ZSIsImZldGNoIiwidGhlbiIsInJlc3VsdCIsImpzb24iLCJjYXJkIiwiZ2V0QXR0cmlidXRlIiwiaGlkZU1vZGFsV2luZG93IiwiYWRkIiwiZXZlbnQiLCJ0YXJnZXQiLCJzbGlkZSIsIml0ZW1zIiwicHJldiIsIm5leHQiLCJwb3NJbml0aWFsIiwic2xpZGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNsaWRlc0xlbmd0aCIsImxlbmd0aCIsInNsaWRlU2l6ZSIsIm9mZnNldFdpZHRoIiwiZmlyc3RTbGlkZSIsImxhc3RTbGlkZSIsImNsb25lRmlyc3QiLCJjbG9uZU5vZGUiLCJjbG9uZUxhc3QiLCJpbmRleCIsImFsbG93U2hpZnQiLCJhcHBlbmRDaGlsZCIsImluc2VydEJlZm9yZSIsInNoaWZ0U2xpZGUiLCJkaXIiLCJhY3Rpb24iLCJvZmZzZXRMZWZ0IiwibGVmdCIsImNoZWNrSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLElBQU1BLFlBQVksR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLFlBQXZCLENBQXJCO0FBQ0EsSUFBTUMsVUFBVSxHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsY0FBdkIsQ0FBbkI7QUFDQSxJQUFNRSxPQUFPLEdBQUdILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixVQUF2QixDQUFoQjtBQUNBLElBQU1HLGdCQUFnQixHQUFHSixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsb0JBQXZCLENBQXpCO0FBRUFGLFlBQVksQ0FBQ00sZ0JBQWIsQ0FBOEIsT0FBOUIsRUFBdUMsWUFBTTtBQUMzQ04sY0FBWSxDQUFDTyxTQUFiLENBQXVCQyxNQUF2QixDQUE4QixnQkFBOUI7QUFDQUosU0FBTyxDQUFDRyxTQUFSLENBQWtCQyxN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ZmlsZSI6Im1haW4vbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJ1cmdlckJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LWljb24nKTtcbmNvbnN0IGJ1cmdlck1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYnVyZ2VyLW1lbnUnKTtcbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZycpO1xuY29uc3QgYnVyZ2VyQmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXJnZXItYmFja2dyb3VuZCcpO1xuXG5idXJnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGJ1cmdlckJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdtZW51LWljb25fb3BlbicpO1xuICBoZWFkaW5nLmNsYXNzTGlzdC50b2dnbGUoJ2hlYWRpbmdfZGlzYWJsZWQnKTtcbiAgYnVyZ2VyQmFja2dyb3VuZC5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItYmFja2dyb3VuZF9jbG9zZWQnKTtcblxuICBpZiAoYnVyZ2VyQnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1pY29uX29wZW4nKSkge1xuICAgIGJ1cmdlck1lbnUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHB4KSc7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgfSBlbHNlIHtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICd2aXNpYmxlJztcbiAgICBidXJnZXJNZW51LnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKDMyMHB4KSc7XG4gIH1cbn0pO1xuXG5idXJnZXJCYWNrZ3JvdW5kLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBidXJnZXJCdXR0b24uY2xpY2soKTtcbn0pO1xuIiwiaW1wb3J0IGJ1cmdlck1lbnUgZnJvbSAnLi9idXJnZXItbWVudSc7XG5pbXBvcnQgbW9kYWxXaW5kb3cgZnJvbSAnLi9tb2RhbC13aW5kb3cnO1xuaW1wb3J0IHNsaWRlciBmcm9tICcuL3NsaWRlcic7XG4iLCJjb25zdCBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jYXJkX2J1dHRvbicpO1xuY29uc3QgbW9kYWxXaW5kb3dDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtd2luZG93Jyk7XG5jb25zdCBtb2RhbFdpbmRvdyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC13aW5kb3dfX2RpYWxvZycpO1xuY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbG9zZS1tb2RhbCcpO1xubGV0IHBldHM7XG5cbmNvbnN0IHJlbmRlck1vZGFsV2luZG93ID0gKG5hbWUpID0+IHtcbiAgd2hpbGUgKG1vZGFsV2luZG93LmZpcnN0Q2hpbGQpIHtcbiAgICBtb2RhbFdpbmRvdy5yZW1vdmVDaGlsZChtb2RhbFdpbmRvdy5maXJzdENoaWxkKTtcbiAgfVxuXG4gIGxldCBwZXQ7XG4gIHBldHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgIHBldCA9IGl0ZW07XG4gICAgfVxuICB9KTtcblxuICBtb2RhbFdpbmRvdy5pbm5lckhUTUwgPSBgPGRpdiBjbGFzcz1cIm1vZGFsLXdpbmRvd19faW1hZ2VcIj5cbiAgICA8aW1nIHNyYz1cIiR7cGV0LmltZ31cIiBhbHQ9XCJQZXRzXCI+XG4gIDwvZGl2PlxuICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25cIj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX25hbWVcIj4ke3BldC5uYW1lfTwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fdHlwZS1wZXRzXCI+JHtwZXQudHlwZX0gLSAke3BldC5icmVlZH08L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX2Rlc2NyaXB0aW9uXCI+JHtwZXQuZGVzY3JpcHRpb259PC9kaXY+XG4gICAgPHVsIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhXCI+XG4gICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPkFnZTo8L2I+IDxzcGFuPiR7cGV0LmFnZX08L3NwYW4+PC9saT5cbiAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+SW5vY3VsYXRpb25zOjwvYj4gPHNwYW4+JHtwZXQuaW5vY3VsYXRpb25zfTwvc3Bhbj48L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5EaXNlYXNlczo8L2I+IDxzcGFuPiR7cGV0LmRpc2Vhc2VzfTwvc3Bhbj48L2xpPlxuICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5QYXJhc2l0ZXM6PC9iPiA8c3Bhbj4ke3BldC5wYXJhc2l0ZXN9PC9zcGFuPjwvbGk+XG4gICAgPC91bD5gO1xuXG4gIG1vZGFsV2luZG93Q29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgY2xvc2VNb2RhbEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIG1vZGFsV2luZG93LmNsYXNzTGlzdC5yZW1vdmUoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbn07XG5cbmZldGNoKCcuL2Fzc2V0cy9qc29uL3BldHMuanNvbicpXG4gIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5qc29uKCkpXG4gIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICBwZXRzID0gcmVzdWx0O1xuICB9KTtcblxuY2FyZHMuZm9yRWFjaCgoY2FyZCkgPT4ge1xuICBjYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHJlbmRlck1vZGFsV2luZG93KGNhcmQuZ2V0QXR0cmlidXRlKCdkYXRhLW5hbWUnKSk7XG4gIH0pO1xufSk7XG5cbmNvbnN0IGhpZGVNb2RhbFdpbmRvdyA9ICgpID0+IHtcbiAgbW9kYWxXaW5kb3dDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBtb2RhbFdpbmRvdy5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gIGNsb3NlTW9kYWxCdXR0b24uY2xhc3NMaXN0LmFkZCgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xufTtcblxubW9kYWxXaW5kb3dDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gbW9kYWxXaW5kb3dDb250YWluZXIpIHtcbiAgICBoaWRlTW9kYWxXaW5kb3coKTtcbiAgfVxufSk7XG5cbmNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTW9kYWxXaW5kb3cpO1xuIiwiZnVuY3Rpb24gc2xpZGUoKSB7XG4gIGNvbnN0IGl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlcl9fdmlzaWJsZS1hcmVhJyk7XG4gIGNvbnN0IHByZXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtbGVmdCcpO1xuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLXJpZ2h0Jyk7XG4gIGxldCBwb3NJbml0aWFsO1xuICBjb25zdCBzbGlkZXMgPSBpdGVtcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkcycpO1xuICBjb25zdCBzbGlkZXNMZW5ndGggPSBzbGlkZXMubGVuZ3RoO1xuICBjb25zdCBzbGlkZVNpemUgPSBpdGVtcy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdjYXJkcycpWzBdLm9mZnNldFdpZHRoO1xuICBjb25zdCBmaXJzdFNsaWRlID0gc2xpZGVzWzBdO1xuICBjb25zdCBsYXN0U2xpZGUgPSBzbGlkZXNbc2xpZGVzTGVuZ3RoIC0gMV07XG4gIGNvbnN0IGNsb25lRmlyc3QgPSBmaXJzdFNsaWRlLmNsb25lTm9kZSh0cnVlKTtcbiAgY29uc3QgY2xvbmVMYXN0ID0gbGFzdFNsaWRlLmNsb25lTm9kZSh0cnVlKTtcbiAgbGV0IGluZGV4ID0gMDtcbiAgbGV0IGFsbG93U2hpZnQgPSB0cnVlO1xuXG4gIGl0ZW1zLmFwcGVuZENoaWxkKGNsb25lRmlyc3QpO1xuICBpdGVtcy5pbnNlcnRCZWZvcmUoY2xvbmVMYXN0LCBmaXJzdFNsaWRlKTtcblxuICBmdW5jdGlvbiBzaGlmdFNsaWRlKGRpciwgYWN0aW9uKSB7XG4gICAgaXRlbXMuY2xhc3NMaXN0LmFkZCgnc2hpZnRpbmcnKTtcblxuICAgIGlmIChhbGxvd1NoaWZ0KSB7XG4gICAgICBpZiAoIWFjdGlvbikgeyBwb3NJbml0aWFsID0gaXRlbXMub2Zmc2V0TGVmdDsgfVxuICAgICAgaWYgKGRpciA9PT0gMSkge1xuICAgICAgICBpdGVtcy5zdHlsZS5sZWZ0ID0gYCR7cG9zSW5pdGlhbCAtIHNsaWRlU2l6ZX1weGA7XG4gICAgICAgIGluZGV4ICs9IDE7XG4gICAgICB9IGVsc2UgaWYgKGRpciA9PT0gLTEpIHtcbiAgICAgICAgaXRlbXMuc3R5bGUubGVmdCA9IGAke3Bvc0luaXRpYWwgKyBzbGlkZVNpemV9cHhgO1xuICAgICAgICBpbmRleCAtPSAxO1xuICAgICAgfVxuICAgIH1cblxuICAgIGFsbG93U2hpZnQgPSBmYWxzZTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNoZWNrSW5kZXgoKSB7XG4gICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hpZnRpbmcnKTtcbiAgICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgICBpdGVtcy5zdHlsZS5sZWZ0ID0gYCR7LShzbGlkZXNMZW5ndGggKiBzbGlkZVNpemUpfXB4YDtcbiAgICAgIGluZGV4ID0gc2xpZGVzTGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICBpZiAoaW5kZXggPT09IHNsaWRlc0xlbmd0aCkge1xuICAgICAgaXRlbXMuc3R5bGUubGVmdCA9IGAkey0oMSAqIHNsaWRlU2l6ZSl9cHhgO1xuICAgICAgaW5kZXggPSAwO1xuICAgIH1cblxuICAgIGFsbG93U2hpZnQgPSB0cnVlO1xuICB9XG5cbiAgcHJldi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNoaWZ0U2xpZGUoLTEpKTtcbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNoaWZ0U2xpZGUoMSkpO1xuICBpdGVtcy5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgY2hlY2tJbmRleCk7XG59XG5cbnNsaWRlKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IG1vZHVsZVsnZGVmYXVsdCddIDpcblx0XHQoKSA9PiBtb2R1bGU7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi9qcy9pbmRleC5qc1wiKTtcbi8vIFRoaXMgZW50cnkgbW9kdWxlIHVzZWQgJ2V4cG9ydHMnIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluL3Nhc3Mvc3R5bGVzLnNjc3NcIik7XG4iXSwic291cmNlUm9vdCI6IiJ9