/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/main/js/index.js":
/*!******************************!*
  !*** ./src/main/js/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/burger-menu */ "./src/main/js/modules/burger-menu.js");
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals */ "./src/main/js/modules/modals.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ "./src/main/js/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);



document.addEventListener('DOMContentLoaded', function () {
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_1__.default)('.card_button', '.modal-window', '.modal-window__dialog', '.close-modal');
  (0,_modules_burger_menu__WEBPACK_IMPORTED_MODULE_0__.default)('.menu-icon', '.burger-menu', '.burger-background');
});

/***/ }),

/***/ "./src/main/js/modules/burger-menu.js":
/*!********************************************!*
  !*** ./src/main/js/modules/burger-menu.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var hamburger = function hamburger(trigger, burger, bg) {
  var button = document.querySelector(trigger);
  var menu = document.querySelector(burger);
  var background = document.querySelector(bg);
  button.addEventListener('click', function () {
    button.classList.toggle('menu-icon_open');
    background.classList.toggle('burger-background_closed');
    document.querySelector('.heading').classList.toggle('heading_disabled');

    if (button.classList.contains('menu-icon_open')) {
      menu.style.transform = 'translateX(0px)';
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = '';
      menu.style.transform = 'translateX(320px)';
    }
  });
  background.addEventListener('click', function () {
    return button.click();
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (hamburger);

/***/ }),

/***/ "./src/main/js/modules/modals.js":
/*!***************************************!*
  !*** ./src/main/js/modules/modals.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "calcScroll": () => /* binding */ calcScroll,
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
var calcScroll = function calcScroll() {
  var div = document.createElement('div');
  div.style.overflowY = 'scroll';
  div.style.visibility = 'hidden';
  document.body.append(div);
  var scrollWidth = div.offsetWidth - div.clientWidth;
  div.remove();
  return scrollWidth;
};

var modals = function modals(triggers, modalContainer, modalWindow, closeTrigger) {
  var buttons = document.querySelectorAll(triggers);
  var container = document.querySelector(modalContainer);
  var modal = document.querySelector(modalWindow);
  var closeModalButton = document.querySelector(closeTrigger);
  var scrollWidth = calcScroll();
  var pets;
  fetch('./assets/json/pets.json').then(function (result) {
    return result.json();
  }).then(function (result) {
    pets = result;
  });

  var renderModalWindow = function renderModalWindow(name) {
    while (modal.firstChild) {
      modal.removeChild(modal.firstChild);
    }

    var pet;
    pets.forEach(function (item) {
      if (item.name === name) {
        pet = item;
      }
    });
    modal.innerHTML = "\n    <div class=\"modal-window__image\">\n      <img src=\"".concat(pet.img, "\" alt=\"Pets\">\n    </div>\n    <div class=\"information\">\n      <div class=\"information__name\">").concat(pet.name, "</div>\n      <div class=\"information__type-pets\">").concat(pet.type, " - ").concat(pet.breed, "</div>\n      <div class=\"information__description\">").concat(pet.description, "</div>\n      <ul class=\"information__extra\">\n        <li class=\"information__extra-item\"><b>Age:</b> <span>").concat(pet.age, "</span></li>\n        <li class=\"information__extra-item\"><b>Inoculations:</b> <span>").concat(pet.inoculations, "</span></li>\n        <li class=\"information__extra-item\"><b>Diseases:</b> <span>").concat(pet.diseases, "</span></li>\n        <li class=\"information__extra-item\"><b>Parasites:</b> <span>").concat(pet.parasites, "</span></li>\n      </ul>\n    </div>");
    container.classList.remove('modal-window_closed');
    document.body.style.overflowY = 'hidden';
    document.body.style.marginRight = "".concat(scrollWidth, "px");
  };

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      renderModalWindow(button.getAttribute('data-name'));
    });
  });

  var hideModalWindow = function hideModalWindow() {
    container.classList.add('modal-window_closed');
    document.body.style.overflowY = '';
    document.body.style.marginRight = '0px';
  };

  container.addEventListener('click', function (event) {
    if (event.target === container) {
      hideModalWindow();
    }
  });
  closeModalButton.addEventListener('click', hideModalWindow);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (modals);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL21haW4vanMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL2pzL21vZHVsZXMvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL2pzL21vZHVsZXMvbW9kYWxzLmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvbWFpbi9qcy9zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL3Nhc3Mvc3R5bGVzLnNjc3M/YTdlZiIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtb2RhbHMiLCJoYW1idXJnZXIiLCJ0cmlnZ2VyIiwiYnVyZ2VyIiwiYmciLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yIiwibWVudSIsImJhY2tncm91bmQiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInN0eWxlIiwidHJhbnNmb3JtIiwiYm9keSIsIm92ZXJmbG93WSIsImNsaWNrIiwiY2FsY1Njcm9sbCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJ2aXNpYmlsaXR5IiwiYXBwZW5kIiwic2Nyb2xsV2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwicmVtb3ZlIiwidHJpZ2dlcnMiLCJtb2RhbENvbnRhaW5lciIsIm1vZGFsV2luZG93IiwiY2xvc2VUcmlnZ2VyIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250YWluZXIiLCJtb2RhbCIsImNsb3NlTW9kYWxCdXR0b24iLCJwZXRzIiwiZmV0Y2giLCJ0aGVuIiwicmVzdWx0IiwianNvbiIsInJlbmRlck1vZGFsV2luZG93IiwibmFtZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInBldCIsImZvckVhY2giLCJpdGVtIiwiaW5uZXJIVE1MIiwiaW1nIiwidHlwZSIsImJyZWVkIiwiZGVzY3JpcHRpb24iLCJhZ2UiLCJpbm9jdWxhdGlvbnMiLCJkaXNlYXNlcyIsInBhcmFzaXRlcyIsIm1hcmdpblJpZ2h0IiwiZ2V0QXR0cmlidXRlIiwiaGlkZU1vZGFsV2luZG93IiwiYWRkIiwiZXZlbnQiLCJ0YXJnZXQiLCJzbGlkZSIsIml0ZW1zIiwicHJldiIsIm5leHQiLCJwb3NJbml0aWFsIiwic2xpZGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNsaWRlc0xlbmd0aCIsImxlbmd0aCIsInNsaWRlU2l6ZSIsImZpcnN0U2xpZGUiLCJsYXN0U2xpZGUiLCJjbG9uZUZpcnN0IiwiY2xvbmVOb2RlIiwiY2xvbmVMYXN0IiwiaW5kZXgiLCJhbGxvd1NoaWZ0IiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJzaGlmdFNsaWRlIiwiZGlyIiwiYWN0aW9uIiwib2Zmc2V0TGVmdCIsImxlZnQiLCJjaGVja0luZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQUEsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBTTtBQUNsREMsMERBQU0sQ0FBQyxjQUFELEVBQWlCLGVBQWpCLEVBQWtDLHVCQUFsQyxFQUEyRCxjQUEzRCxDQUFOO0FBQ0FDLCtEQUFTLENBQUMsWUFBRCxFQUFlLGNBQWYsRUFBK0Isb0JBQS9CLENBQVQ7QUFDRCxDQUhELEU7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLENBQUNDLE9BQUQsRUFBVUMsTUFBVixFQUFrQkMsRUFBbEIsRUFBeUI7QUFDekMsTUFBTUMsTUFBTSxHQUFHUCxRQUFRLENBQUNRLGFBQVQsQ0FBdUJKLE9BQXZCLENBQWY7QUFDQSxNQUFNSyxJQUFJLEdBQUdULFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QkgsTUFBdkIsQ0FBYjtBQUNBLE1BQU1LLFVBQVUsR0FBR1YsUUFBUSxDQUFDUSxhQUFULENBQXVCRixFQUF2QixDQUFuQjtBQUVBQyxRQUFNLENBQUNOLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFlBQU07QUFDckNNLFVBQU0sQ0FBQ0ksU0FBUCxDQUFpQkMsTUFBakIsQ0FBd0IsZ0JBQXhCO0FBQ0FGLGNBQVUsQ0FBQ0MsU0FBWCxDQUFxQkMsTUFBckIsQ0FBNEIsMEJBQTVCO0FBQ0FaLFlBQVEsQ0FBQ1EsYUFBVCxDQUF1QixVQUF2QixFQUFtQ0csU0FBbkMsQ0FBNkNDLE1BQTdDLENBQW9ELGtCQUFwRDs7QUFFQSxRQUFJTCxNQUFNLENBQUNJLFNBQVAsQ0FBaUJFLFFBQWpCLENBQTBCLGdCQUExQixDQUFKLEVBQWlEO0FBQy9DSixVQUFJLENBQUNLLEtBQUwsQ0FBV0MsU0FBWCxHQUF1QixpQkFBdkI7QUFDQWYsY0FBUSxDQUFDZ0IsSUFBVCxDQUFjRixLQUFkLENBQW9CRyxTQUFwQixHQUFnQyxRQUFoQztBQUNELEtBSEQsTUFHTztBQUNMakIsY0FBUSxDQUFDZ0IsSUFBVCxDQUFjRixLQUFkLENBQW9CRyxTQUFwQixHQUFnQyxFQUFoQztBQUNBUixVQUFJLENBQUNLLEtBQUwsQ0FBV0MsU0FBWCxHQUF1QixtQkFBdkI7QUFDRDtBQUNGLEdBWkQ7QUFjQUwsWUFBVSxDQUFDVCxnQkFBWCxDQUE0QixPQUE1QixFQUFxQztBQUFBLFdBQU1NLE1BQU0sQ0FBQ1csS0FBUCxFQUFOO0FBQUEsR0FBckM7QUFDRCxDQXBCRDs7QUFzQkEsaUVBQWVmLFNBQWYsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ3RCTyxJQUFNZ0IsVUFBVSxHQUFHLFNBQWJBLFVBQWEsR0FBTTtBQUM5QixNQUFNQyxHQUFHLEdBQUdwQixRQUFRLENBQUNxQixhQUFULENBQXVCLEtBQXZCLENBQVo7QUFDQUQsS0FBRyxDQUFDTixLQUFKLENBQVVHLFNBQVYsR0FBc0IsUUFBdEI7QUFDQUcsS0FBRyxDQUFDTixLQUFKLENBQVVRLFVBQVYsR0FBdUIsUUFBdkI7QUFDQXRCLFVBQVEsQ0FBQ2dCLElBQVQsQ0FBY08sTUFBZCxDQUFxQkgsR0FBckI7QUFFQSxNQUFNSSxXQUFXLEdBQUdKLEdBQUcsQ0FBQ0ssV0FBSixHQUFrQkwsR0FBRyxDQUFDTSxXQUExQztBQUNBTixLQUFHLENBQUNPLE1BQUo7QUFFQSxTQUFPSCxXQUFQO0FBQ0QsQ0FWTTs7QUFZUCxJQUFNdEIsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQzBCLFFBQUQsRUFBV0MsY0FBWCxFQUEyQkMsV0FBM0IsRUFBd0NDLFlBQXhDLEVBQXlEO0FBQ3RFLE1BQU1DLE9BQU8sR0FBR2hDLFFBQVEsQ0FBQ2lDLGdCQUFULENBQTBCTCxRQUExQixDQUFoQjtBQUNBLE1BQU1NLFNBQVMsR0FBR2xDLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QnFCLGNBQXZCLENBQWxCO0FBQ0EsTUFBTU0sS0FBSyxHQUFHbkMsUUFBUSxDQUFDUSxhQUFULENBQXVCc0IsV0FBdkIsQ0FBZDtBQUNBLE1BQU1NLGdCQUFnQixHQUFHcEMsUUFBUSxDQUFDUSxhQUFULENBQXVCdUIsWUFBdkIsQ0FBekI7QUFDQSxNQUFNUCxXQUFXLEdBQUdMLFVBQVUsRUFBOUI7QUFDQSxNQUFJa0IsSUFBSjtBQUVBQyxPQUFLLENBQUMseUJBQUQsQ0FBTCxDQUNHQyxJQURILENBQ1EsVUFBQ0MsTUFBRDtBQUFBLFdBQVlBLE1BQU0sQ0FBQ0MsSUFBUCxFQUFaO0FBQUEsR0FEUixFQUVHRixJQUZILENBRVEsVUFBQ0MsTUFBRCxFQUFZO0FBQ2hCSCxRQUFJLEdBQUdHLE1BQVA7QUFDRCxHQUpIOztBQU1BLE1BQU1FLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsQ0FBQ0MsSUFBRCxFQUFVO0FBQ2xDLFdBQU9SLEtBQUssQ0FBQ1MsVUFBYixFQUF5QjtBQUN2QlQsV0FBSyxDQUFDVSxXQUFOLENBQWtCVixLQUFLLENBQUNTLFVBQXhCO0FBQ0Q7O0FBRUQsUUFBSUUsR0FBSjtBQUNBVCxRQUFJLENBQUNVLE9BQUwsQ0FBYSxVQUFDQyxJQUFELEVBQVU7QUFDckIsVUFBSUEsSUFBSSxDQUFDTCxJQUFMLEtBQWNBLElBQWxCLEVBQXdCO0FBQ3RCRyxXQUFHLEdBQUdFLElBQU47QUFDRDtBQUNGLEtBSkQ7QUFNQWIsU0FBSyxDQUFDYyxTQUFOLHlFQUVjSCxHQUFHLENBQUNJLEdBRmxCLG1IQUttQ0osR0FBRyxDQUFDSCxJQUx2QyxpRUFNd0NHLEdBQUcsQ0FBQ0ssSUFONUMsZ0JBTXNETCxHQUFHLENBQUNNLEtBTjFELG1FQU8wQ04sR0FBRyxDQUFDTyxXQVA5Qyw4SEFTNERQLEdBQUcsQ0FBQ1EsR0FUaEUsb0dBVXFFUixHQUFHLENBQUNTLFlBVnpFLGdHQVdpRVQsR0FBRyxDQUFDVSxRQVhyRSxpR0FZa0VWLEdBQUcsQ0FBQ1csU0FadEU7QUFnQkF2QixhQUFTLENBQUN2QixTQUFWLENBQW9CZ0IsTUFBcEIsQ0FBMkIscUJBQTNCO0FBQ0EzQixZQUFRLENBQUNnQixJQUFULENBQWNGLEtBQWQsQ0FBb0JHLFNBQXBCLEdBQWdDLFFBQWhDO0FBQ0FqQixZQUFRLENBQUNnQixJQUFULENBQWNGLEtBQWQsQ0FBb0I0QyxXQUFwQixhQUFxQ2xDLFdBQXJDO0FBQ0QsR0EvQkQ7O0FBaUNBUSxTQUFPLENBQUNlLE9BQVIsQ0FBZ0IsVUFBQ3hDLE1BQUQsRUFBWTtBQUMxQkEsVUFBTSxDQUFDTixnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxZQUFNO0FBQ3JDeUMsdUJBQWlCLENBQUNuQyxNQUFNLENBQUNvRCxZQUFQLENBQW9CLFdBQXBCLENBQUQsQ0FBakI7QUFDRCxLQUZEO0FBR0QsR0FKRDs7QUFNQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIxQixhQUFTLENBQUN2QixTQUFWLENBQW9Ca0QsR0FBcEIsQ0FBd0IscUJBQXhCO0FBQ0E3RCxZQUFRLENBQUNnQixJQUFULENBQWNGLEtBQWQsQ0FBb0JHLFNBQXBCLEdBQWdDLEVBQWhDO0FBQ0FqQixZQUFRLENBQUNnQixJQUFULENBQWNGLEtBQWQsQ0FBb0I0QyxXQUFwQixHQUFrQyxLQUFsQztBQUNELEdBSkQ7O0FBTUF4QixXQUFTLENBQUNqQyxnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDNkQsS0FBRCxFQUFXO0FBQzdDLFFBQUlBLEtBQUssQ0FBQ0MsTUFBTixLQUFpQjdCLFNBQXJCLEVBQWdDO0FBQzlCMEIscUJBQWU7QUFDaEI7QUFDRixHQUpEO0FBTUF4QixrQkFBZ0IsQ0FBQ25DLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQzJELGVBQTNDO0FBQ0QsQ0FsRUQ7O0FBb0VBLGlFQUFlMUQsTUFBZixFOzs7Ozs7Ozs7O0FDaEZBLFNBQVM4RCxLQUFULEdBQWlCO0FBQ2YsTUFBTUMsS0FBSyxHQUFHakUsUUFBUSxDQUFDUSxhQUFULENBQXVCLHVCQUF2QixDQUFkO0FBQ0EsTUFBTTBELElBQUksR0FBR2xFLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixhQUF2QixDQUFiO0FBQ0EsTUFBTTJELElBQUksR0FBR25FLFFBQVEsQ0FBQ1EsYUFBVCxDQUF1QixjQUF2QixDQUFiO0FBQ0EsTUFBSTRELFVBQUo7QUFDQSxNQUFNQyxNQUFNLEdBQUdKLEtBQUssQ0FBQ0ssc0JBQU4sQ0FBNkIsT0FBN0IsQ0FBZjtBQUNBLE1BQU1DLFlBQVksR0FBR0YsTUFBTSxDQUFDRyxNQUE1QjtBQUNBLE1BQU1DLFNBQVMsR0FBR1IsS0FBSyxDQUFDSyxzQkFBTixDQUE2QixPQUE3QixFQUFzQyxDQUF0QyxFQUF5QzdDLFdBQTNEO0FBQ0EsTUFBTWlELFVBQVUsR0FBR0wsTUFBTSxDQUFDLENBQUQsQ0FBekI7QUFDQSxNQUFNTSxTQUFTLEdBQUdOLE1BQU0sQ0FBQ0UsWUFBWSxHQUFHLENBQWhCLENBQXhCO0FBQ0EsTUFBTUssVUFBVSxHQUFHRixVQUFVLENBQUNHLFNBQVgsQ0FBcUIsSUFBckIsQ0FBbkI7QUFDQSxNQUFNQyxTQUFTLEdBQUdILFNBQVMsQ0FBQ0UsU0FBVixDQUFvQixJQUFwQixDQUFsQjtBQUNBLE1BQUlFLEtBQUssR0FBRyxDQUFaO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLElBQWpCO0FBRUFmLE9BQUssQ0FBQ2dCLFdBQU4sQ0FBa0JMLFVBQWxCO0FBQ0FYLE9BQUssQ0FBQ2lCLFlBQU4sQ0FBbUJKLFNBQW5CLEVBQThCSixVQUE5Qjs7QUFFQSxXQUFTUyxVQUFULENBQW9CQyxHQUFwQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDL0JwQixTQUFLLENBQUN0RCxTQUFOLENBQWdCa0QsR0FBaEIsQ0FBb0IsVUFBcEI7O0FBRUEsUUFBSW1CLFVBQUosRUFBZ0I7QUFDZCxVQUFJLENBQUNLLE1BQUwsRUFBYTtBQUFFakIsa0JBQVUsR0FBR0gsS0FBSyxDQUFDcUIsVUFBbkI7QUFBZ0M7O0FBQy9DLFVBQUlGLEdBQUcsS0FBSyxDQUFaLEVBQWU7QUFDYm5CLGFBQUssQ0FBQ25ELEtBQU4sQ0FBWXlFLElBQVosYUFBc0JuQixVQUFVLEdBQUdLLFNBQW5DO0FBQ0FNLGFBQUssSUFBSSxDQUFUO0FBQ0QsT0FIRCxNQUdPLElBQUlLLEdBQUcsS0FBSyxDQUFDLENBQWIsRUFBZ0I7QUFDckJuQixhQUFLLENBQUNuRCxLQUFOLENBQVl5RSxJQUFaLGFBQXNCbkIsVUFBVSxHQUFHSyxTQUFuQztBQUNBTSxhQUFLLElBQUksQ0FBVDtBQUNEO0FBQ0Y7O0FBRURDLGNBQVUsR0FBRyxLQUFiO0FBQ0Q7O0FBRUQsV0FBU1EsVUFBVCxHQUFzQjtBQUNwQnZCLFNBQUssQ0FBQ3RELFNBQU4sQ0FBZ0JnQixNQUFoQixDQUF1QixVQUF2Qjs7QUFDQSxRQUFJb0QsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQmQsV0FBSyxDQUFDbkQsS0FBTixDQUFZeUUsSUFBWixhQUFzQixFQUFFaEIsWUFBWSxHQUFHRSxTQUFqQixDQUF0QjtBQUNBTSxXQUFLLEdBQUdSLFlBQVksR0FBRyxDQUF2QjtBQUNEOztBQUVELFFBQUlRLEtBQUssS0FBS1IsWUFBZCxFQUE0QjtBQUMxQk4sV0FBSyxDQUFDbkQsS0FBTixDQUFZeUUsSUFBWixhQUFzQixFQUFFLElBQUlkLFNBQU4sQ0FBdEI7QUFDQU0sV0FBSyxHQUFHLENBQVI7QUFDRDs7QUFFREMsY0FBVSxHQUFHLElBQWI7QUFDRDs7QUFFRGQsTUFBSSxDQUFDakUsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0I7QUFBQSxXQUFNa0YsVUFBVSxDQUFDLENBQUMsQ0FBRixDQUFoQjtBQUFBLEdBQS9CO0FBQ0FoQixNQUFJLENBQUNsRSxnQkFBTCxDQUFzQixPQUF0QixFQUErQjtBQUFBLFdBQU1rRixVQUFVLENBQUMsQ0FBRCxDQUFoQjtBQUFBLEdBQS9CO0FBQ0FsQixPQUFLLENBQUNoRSxnQkFBTixDQUF1QixlQUF2QixFQUF3Q3VGLFVBQXhDO0FBQ0Q7O0FBRUR4QixLQUFLLEc7Ozs7Ozs7Ozs7OztBQ3ZETDs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGhhbWJ1cmdlciBmcm9tICcuL21vZHVsZXMvYnVyZ2VyLW1lbnUnO1xuaW1wb3J0IG1vZGFscyBmcm9tICcuL21vZHVsZXMvbW9kYWxzJztcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBtb2RhbHMoJy5jYXJkX2J1dHRvbicsICcubW9kYWwtd2luZG93JywgJy5tb2RhbC13aW5kb3dfX2RpYWxvZycsICcuY2xvc2UtbW9kYWwnKTtcbiAgaGFtYnVyZ2VyKCcubWVudS1pY29uJywgJy5idXJnZXItbWVudScsICcuYnVyZ2VyLWJhY2tncm91bmQnKTtcbn0pO1xuIiwiY29uc3QgaGFtYnVyZ2VyID0gKHRyaWdnZXIsIGJ1cmdlciwgYmcpID0+IHtcbiAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0cmlnZ2VyKTtcbiAgY29uc3QgbWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYnVyZ2VyKTtcbiAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYmcpO1xuXG4gIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnbWVudS1pY29uX29wZW4nKTtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC50b2dnbGUoJ2J1cmdlci1iYWNrZ3JvdW5kX2Nsb3NlZCcpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5oZWFkaW5nJykuY2xhc3NMaXN0LnRvZ2dsZSgnaGVhZGluZ19kaXNhYmxlZCcpO1xuXG4gICAgaWYgKGJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaWNvbl9vcGVuJykpIHtcbiAgICAgIG1lbnUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHB4KSc7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xuICAgICAgbWVudS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgzMjBweCknO1xuICAgIH1cbiAgfSk7XG5cbiAgYmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGJ1dHRvbi5jbGljaygpKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGhhbWJ1cmdlcjtcbiIsImV4cG9ydCBjb25zdCBjYWxjU2Nyb2xsID0gKCkgPT4ge1xuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgZGl2LnN0eWxlLm92ZXJmbG93WSA9ICdzY3JvbGwnO1xuICBkaXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuICBkb2N1bWVudC5ib2R5LmFwcGVuZChkaXYpO1xuXG4gIGNvbnN0IHNjcm9sbFdpZHRoID0gZGl2Lm9mZnNldFdpZHRoIC0gZGl2LmNsaWVudFdpZHRoO1xuICBkaXYucmVtb3ZlKCk7XG5cbiAgcmV0dXJuIHNjcm9sbFdpZHRoO1xufTtcblxuY29uc3QgbW9kYWxzID0gKHRyaWdnZXJzLCBtb2RhbENvbnRhaW5lciwgbW9kYWxXaW5kb3csIGNsb3NlVHJpZ2dlcikgPT4ge1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0cmlnZ2Vycyk7XG4gIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxDb250YWluZXIpO1xuICBjb25zdCBtb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IobW9kYWxXaW5kb3cpO1xuICBjb25zdCBjbG9zZU1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihjbG9zZVRyaWdnZXIpO1xuICBjb25zdCBzY3JvbGxXaWR0aCA9IGNhbGNTY3JvbGwoKTtcbiAgbGV0IHBldHM7XG5cbiAgZmV0Y2goJy4vYXNzZXRzL2pzb24vcGV0cy5qc29uJylcbiAgICAudGhlbigocmVzdWx0KSA9PiByZXN1bHQuanNvbigpKVxuICAgIC50aGVuKChyZXN1bHQpID0+IHtcbiAgICAgIHBldHMgPSByZXN1bHQ7XG4gICAgfSk7XG5cbiAgY29uc3QgcmVuZGVyTW9kYWxXaW5kb3cgPSAobmFtZSkgPT4ge1xuICAgIHdoaWxlIChtb2RhbC5maXJzdENoaWxkKSB7XG4gICAgICBtb2RhbC5yZW1vdmVDaGlsZChtb2RhbC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBsZXQgcGV0O1xuICAgIHBldHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gbmFtZSkge1xuICAgICAgICBwZXQgPSBpdGVtO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgbW9kYWwuaW5uZXJIVE1MID0gYFxuICAgIDxkaXYgY2xhc3M9XCJtb2RhbC13aW5kb3dfX2ltYWdlXCI+XG4gICAgICA8aW1nIHNyYz1cIiR7cGV0LmltZ31cIiBhbHQ9XCJQZXRzXCI+XG4gICAgPC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb3JtYXRpb25fX25hbWVcIj4ke3BldC5uYW1lfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uX190eXBlLXBldHNcIj4ke3BldC50eXBlfSAtICR7cGV0LmJyZWVkfTwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uX19kZXNjcmlwdGlvblwiPiR7cGV0LmRlc2NyaXB0aW9ufTwvZGl2PlxuICAgICAgPHVsIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhXCI+XG4gICAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+QWdlOjwvYj4gPHNwYW4+JHtwZXQuYWdlfTwvc3Bhbj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPklub2N1bGF0aW9uczo8L2I+IDxzcGFuPiR7cGV0Lmlub2N1bGF0aW9uc308L3NwYW4+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5EaXNlYXNlczo8L2I+IDxzcGFuPiR7cGV0LmRpc2Vhc2VzfTwvc3Bhbj48L2xpPlxuICAgICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPlBhcmFzaXRlczo8L2I+IDxzcGFuPiR7cGV0LnBhcmFzaXRlc308L3NwYW4+PC9saT5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+YDtcblxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnaGlkZGVuJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblJpZ2h0ID0gYCR7c2Nyb2xsV2lkdGh9cHhgO1xuICB9O1xuXG4gIGJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgcmVuZGVyTW9kYWxXaW5kb3coYnV0dG9uLmdldEF0dHJpYnV0ZSgnZGF0YS1uYW1lJykpO1xuICAgIH0pO1xuICB9KTtcblxuICBjb25zdCBoaWRlTW9kYWxXaW5kb3cgPSAoKSA9PiB7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ21vZGFsLXdpbmRvd19jbG9zZWQnKTtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICcnO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUubWFyZ2luUmlnaHQgPSAnMHB4JztcbiAgfTtcblxuICBjb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBjb250YWluZXIpIHtcbiAgICAgIGhpZGVNb2RhbFdpbmRvdygpO1xuICAgIH1cbiAgfSk7XG5cbiAgY2xvc2VNb2RhbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZGVNb2RhbFdpbmRvdyk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBtb2RhbHM7XG4iLCJmdW5jdGlvbiBzbGlkZSgpIHtcbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX192aXNpYmxlLWFyZWEnKTtcbiAgY29uc3QgcHJldiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1sZWZ0Jyk7XG4gIGNvbnN0IG5leHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGUtcmlnaHQnKTtcbiAgbGV0IHBvc0luaXRpYWw7XG4gIGNvbnN0IHNsaWRlcyA9IGl0ZW1zLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmRzJyk7XG4gIGNvbnN0IHNsaWRlc0xlbmd0aCA9IHNsaWRlcy5sZW5ndGg7XG4gIGNvbnN0IHNsaWRlU2l6ZSA9IGl0ZW1zLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmRzJylbMF0ub2Zmc2V0V2lkdGg7XG4gIGNvbnN0IGZpcnN0U2xpZGUgPSBzbGlkZXNbMF07XG4gIGNvbnN0IGxhc3RTbGlkZSA9IHNsaWRlc1tzbGlkZXNMZW5ndGggLSAxXTtcbiAgY29uc3QgY2xvbmVGaXJzdCA9IGZpcnN0U2xpZGUuY2xvbmVOb2RlKHRydWUpO1xuICBjb25zdCBjbG9uZUxhc3QgPSBsYXN0U2xpZGUuY2xvbmVOb2RlKHRydWUpO1xuICBsZXQgaW5kZXggPSAwO1xuICBsZXQgYWxsb3dTaGlmdCA9IHRydWU7XG5cbiAgaXRlbXMuYXBwZW5kQ2hpbGQoY2xvbmVGaXJzdCk7XG4gIGl0ZW1zLmluc2VydEJlZm9yZShjbG9uZUxhc3QsIGZpcnN0U2xpZGUpO1xuXG4gIGZ1bmN0aW9uIHNoaWZ0U2xpZGUoZGlyLCBhY3Rpb24pIHtcbiAgICBpdGVtcy5jbGFzc0xpc3QuYWRkKCdzaGlmdGluZycpO1xuXG4gICAgaWYgKGFsbG93U2hpZnQpIHtcbiAgICAgIGlmICghYWN0aW9uKSB7IHBvc0luaXRpYWwgPSBpdGVtcy5vZmZzZXRMZWZ0OyB9XG4gICAgICBpZiAoZGlyID09PSAxKSB7XG4gICAgICAgIGl0ZW1zLnN0eWxlLmxlZnQgPSBgJHtwb3NJbml0aWFsIC0gc2xpZGVTaXplfXB4YDtcbiAgICAgICAgaW5kZXggKz0gMTtcbiAgICAgIH0gZWxzZSBpZiAoZGlyID09PSAtMSkge1xuICAgICAgICBpdGVtcy5zdHlsZS5sZWZ0ID0gYCR7cG9zSW5pdGlhbCArIHNsaWRlU2l6ZX1weGA7XG4gICAgICAgIGluZGV4IC09IDE7XG4gICAgICB9XG4gICAgfVxuXG4gICAgYWxsb3dTaGlmdCA9IGZhbHNlO1xuICB9XG5cbiAgZnVuY3Rpb24gY2hlY2tJbmRleCgpIHtcbiAgICBpdGVtcy5jbGFzc0xpc3QucmVtb3ZlKCdzaGlmdGluZycpO1xuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcbiAgICAgIGl0ZW1zLnN0eWxlLmxlZnQgPSBgJHstKHNsaWRlc0xlbmd0aCAqIHNsaWRlU2l6ZSl9cHhgO1xuICAgICAgaW5kZXggPSBzbGlkZXNMZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGlmIChpbmRleCA9PT0gc2xpZGVzTGVuZ3RoKSB7XG4gICAgICBpdGVtcy5zdHlsZS5sZWZ0ID0gYCR7LSgxICogc2xpZGVTaXplKX1weGA7XG4gICAgICBpbmRleCA9IDA7XG4gICAgfVxuXG4gICAgYWxsb3dTaGlmdCA9IHRydWU7XG4gIH1cblxuICBwcmV2LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hpZnRTbGlkZSgtMSkpO1xuICBuZXh0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2hpZnRTbGlkZSgxKSk7XG4gIGl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjaGVja0luZGV4KTtcbn1cblxuc2xpZGUoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gbW9kdWxlWydkZWZhdWx0J10gOlxuXHRcdCgpID0+IG1vZHVsZTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGVcbl9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9tYWluL2pzL2luZGV4LmpzXCIpO1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgdXNlZCAnZXhwb3J0cycgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4vc2Fzcy9zdHlsZXMuc2Nzc1wiKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=