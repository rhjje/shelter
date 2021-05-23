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
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/modals */ "./src/main/js/modules/modals.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slider */ "./src/main/js/slider.js");
/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_slider__WEBPACK_IMPORTED_MODULE_2__);



document.addEventListener('DOMContentLoaded', function () {
  (0,_modules_modals__WEBPACK_IMPORTED_MODULE_1__.default)('.card_button', '.modal-window', '.modal-window__dialog', '.close-modal');
});

/***/ }),

/***/ "./src/main/js/modules/modals.js":
/*!***************************************!*
  !*** ./src/main/js/modules/modals.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL21haW4vanMvYnVyZ2VyLW1lbnUuanMiLCJ3ZWJwYWNrOi8vc2hlbHRlci8uL3NyYy9tYWluL2pzL2luZGV4LmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvbWFpbi9qcy9tb2R1bGVzL21vZGFscy5qcyIsIndlYnBhY2s6Ly9zaGVsdGVyLy4vc3JjL21haW4vanMvc2xpZGVyLmpzIiwid2VicGFjazovL3NoZWx0ZXIvLi9zcmMvbWFpbi9zYXNzL3N0eWxlcy5zY3NzIiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zaGVsdGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc2hlbHRlci93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3NoZWx0ZXIvd2VicGFjay9zdGFydHVwIl0sIm5hbWVzIjpbImJ1cmdlckJ1dHRvbiIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImJ1cmdlck1lbnUiLCJoZWFkaW5nIiwiYnVyZ2VyQmFja2dyb3VuZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjbGFzc0xpc3QiLCJ0b2dnbGUiLCJjb250YWlucyIsInN0eWxlIiwidHJhbnNmb3JtIiwiYm9keSIsIm92ZXJmbG93WSIsImNsaWNrIiwibW9kYWxzIiwiY2FsY1Njcm9sbCIsImRpdiIsImNyZWF0ZUVsZW1lbnQiLCJ2aXNpYmlsaXR5IiwiYXBwZW5kIiwic2Nyb2xsV2lkdGgiLCJvZmZzZXRXaWR0aCIsImNsaWVudFdpZHRoIiwicmVtb3ZlIiwidHJpZ2dlcnMiLCJtb2RhbENvbnRhaW5lciIsIm1vZGFsV2luZG93IiwiY2xvc2VUcmlnZ2VyIiwiYnV0dG9ucyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250YWluZXIiLCJtb2RhbCIsImNsb3NlTW9kYWxCdXR0b24iLCJwZXRzIiwiZmV0Y2giLCJ0aGVuIiwicmVzdWx0IiwianNvbiIsInJlbmRlck1vZGFsV2luZG93IiwibmFtZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInBldCIsImZvckVhY2giLCJpdGVtIiwiaW5uZXJIVE1MIiwiaW1nIiwidHlwZSIsImJyZWVkIiwiZGVzY3JpcHRpb24iLCJhZ2UiLCJpbm9jdWxhdGlvbnMiLCJkaXNlYXNlcyIsInBhcmFzaXRlcyIsIm1hcmdpblJpZ2h0IiwiYnV0dG9uIiwiZ2V0QXR0cmlidXRlIiwiaGlkZU1vZGFsV2luZG93IiwiYWRkIiwiZXZlbnQiLCJ0YXJnZXQiLCJzbGlkZSIsIml0ZW1zIiwicHJldiIsIm5leHQiLCJwb3NJbml0aWFsIiwic2xpZGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInNsaWRlc0xlbmd0aCIsImxlbmd0aCIsInNsaWRlU2l6ZSIsImZpcnN0U2xpZGUiLCJsYXN0U2xpZGUiLCJjbG9uZUZpcnN0IiwiY2xvbmVOb2RlIiwiY2xvbmVMYXN0IiwiaW5kZXgiLCJhbGxvd1NoaWZ0IiwiYXBwZW5kQ2hpbGQiLCJpbnNlcnRCZWZvcmUiLCJzaGlmdFNsaWRlIiwiZGlyIiwiYWN0aW9uIiwib2Zmc2V0TGVmdCIsImxlZnQiLCJjaGVja0luZGV4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxJQUFNQSxZQUFZLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixZQUF2QixDQUFyQjtBQUNBLElBQU1DLFVBQVUsR0FBR0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLGNBQXZCLENBQW5CO0FBQ0EsSUFBTUUsT0FBTyxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsVUFBdkIsQ0FBaEI7QUFDQSxJQUFNRyxnQkFBZ0IsR0FBR0osUUFBUSxDQUFDQyxhQUFULENBQXVCLG9CQUF2QixDQUF6QjtBQUVBRixZQUFZLENBQUNNLGdCQUFiLENBQThCLE9BQTlCLEVBQXVDLFlBQU07QUFDM0NOLGNBQVksQ0FBQ08sU0FBYixDQUF1QkMsTUFBdkIsQ0FBOEIsZ0JBQTlCO0FBQ0FKLFNBQU8sQ0FBQ0csU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsa0JBQXpCO0FBQ0FILGtCQUFnQixDQUFDRSxTQUFqQixDQUEyQkMsTUFBM0IsQ0FBa0MsMEJBQWxDOztBQUVBLE1BQUlSLFlBQVksQ0FBQ08sU0FBYixDQUF1QkUsUUFBdkIsQ0FBZ0MsZ0JBQWhDLENBQUosRUFBdUQ7QUFDckROLGNBQVUsQ0FBQ08sS0FBWCxDQUFpQkMsU0FBakIsR0FBNkIsaUJBQTdCO0FBQ0FWLFlBQVEsQ0FBQ1csSUFBVCxDQUFjRixLQUFkLENBQW9CRyxTQUFwQixHQUFnQyxRQUFoQztBQUNELEdBSEQsTUFHTztBQUNMWixZQUFRLENBQUNXLElBQVQsQ0FBY0YsS0FBZCxDQUFvQkcsU0FBcEIsR0FBZ0MsU0FBaEM7QUFDQVYsY0FBVSxDQUFDTyxLQUFYLENBQWlCQyxTQUFqQixHQUE2QixtQkFBN0I7QUFDRDtBQUNGLENBWkQ7QUFjQU4sZ0JBQWdCLENBQUNDLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQyxZQUFNO0FBQy9DTixjQUFZLENBQUNjLEtBQWI7QUFDRCxDQUZELEU7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkJBO0FBQ0E7QUFDQTtBQUVBYixRQUFRLENBQUNLLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0FBQ2xEUywwREFBTSxDQUFDLGNBQUQsRUFBaUIsZUFBakIsRUFBa0MsdUJBQWxDLEVBQTJELGNBQTNELENBQU47QUFDRCxDQUZELEU7Ozs7Ozs7Ozs7Ozs7OztBQ0pBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLEdBQU07QUFDdkIsTUFBTUMsR0FBRyxHQUFHaEIsUUFBUSxDQUFDaUIsYUFBVCxDQUF1QixLQUF2QixDQUFaO0FBQ0FELEtBQUcsQ0FBQ1AsS0FBSixDQUFVRyxTQUFWLEdBQXNCLFFBQXRCO0FBQ0FJLEtBQUcsQ0FBQ1AsS0FBSixDQUFVUyxVQUFWLEdBQXVCLFFBQXZCO0FBQ0FsQixVQUFRLENBQUNXLElBQVQsQ0FBY1EsTUFBZCxDQUFxQkgsR0FBckI7QUFFQSxNQUFNSSxXQUFXLEdBQUdKLEdBQUcsQ0FBQ0ssV0FBSixHQUFrQkwsR0FBRyxDQUFDTSxXQUExQztBQUNBTixLQUFHLENBQUNPLE1BQUo7QUFFQSxTQUFPSCxXQUFQO0FBQ0QsQ0FWRDs7QUFZQSxJQUFNTixNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDVSxRQUFELEVBQVdDLGNBQVgsRUFBMkJDLFdBQTNCLEVBQXdDQyxZQUF4QyxFQUF5RDtBQUN0RSxNQUFNQyxPQUFPLEdBQUc1QixRQUFRLENBQUM2QixnQkFBVCxDQUEwQkwsUUFBMUIsQ0FBaEI7QUFDQSxNQUFNTSxTQUFTLEdBQUc5QixRQUFRLENBQUNDLGFBQVQsQ0FBdUJ3QixjQUF2QixDQUFsQjtBQUNBLE1BQU1NLEtBQUssR0FBRy9CLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QnlCLFdBQXZCLENBQWQ7QUFDQSxNQUFNTSxnQkFBZ0IsR0FBR2hDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QjBCLFlBQXZCLENBQXpCO0FBQ0EsTUFBTVAsV0FBVyxHQUFHTCxVQUFVLEVBQTlCO0FBQ0EsTUFBSWtCLElBQUo7QUFFQUMsT0FBSyxDQUFDLHlCQUFELENBQUwsQ0FDR0MsSUFESCxDQUNRLFVBQUNDLE1BQUQ7QUFBQSxXQUFZQSxNQUFNLENBQUNDLElBQVAsRUFBWjtBQUFBLEdBRFIsRUFFR0YsSUFGSCxDQUVRLFVBQUNDLE1BQUQsRUFBWTtBQUNoQkgsUUFBSSxHQUFHRyxNQUFQO0FBQ0QsR0FKSDs7QUFNQSxNQUFNRSxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLElBQUQsRUFBVTtBQUNsQyxXQUFPUixLQUFLLENBQUNTLFVBQWIsRUFBeUI7QUFDdkJULFdBQUssQ0FBQ1UsV0FBTixDQUFrQlYsS0FBSyxDQUFDUyxVQUF4QjtBQUNEOztBQUVELFFBQUlFLEdBQUo7QUFDQVQsUUFBSSxDQUFDVSxPQUFMLENBQWEsVUFBQ0MsSUFBRCxFQUFVO0FBQ3JCLFVBQUlBLElBQUksQ0FBQ0wsSUFBTCxLQUFjQSxJQUFsQixFQUF3QjtBQUN0QkcsV0FBRyxHQUFHRSxJQUFOO0FBQ0Q7QUFDRixLQUpEO0FBTUFiLFNBQUssQ0FBQ2MsU0FBTix5RUFFY0gsR0FBRyxDQUFDSSxHQUZsQixtSEFLbUNKLEdBQUcsQ0FBQ0gsSUFMdkMsaUVBTXdDRyxHQUFHLENBQUNLLElBTjVDLGdCQU1zREwsR0FBRyxDQUFDTSxLQU4xRCxtRUFPMENOLEdBQUcsQ0FBQ08sV0FQOUMsOEhBUzREUCxHQUFHLENBQUNRLEdBVGhFLG9HQVVxRVIsR0FBRyxDQUFDUyxZQVZ6RSxnR0FXaUVULEdBQUcsQ0FBQ1UsUUFYckUsaUdBWWtFVixHQUFHLENBQUNXLFNBWnRFO0FBZ0JBdkIsYUFBUyxDQUFDeEIsU0FBVixDQUFvQmlCLE1BQXBCLENBQTJCLHFCQUEzQjtBQUNBdkIsWUFBUSxDQUFDVyxJQUFULENBQWNGLEtBQWQsQ0FBb0JHLFNBQXBCLEdBQWdDLFFBQWhDO0FBQ0FaLFlBQVEsQ0FBQ1csSUFBVCxDQUFjRixLQUFkLENBQW9CNkMsV0FBcEIsYUFBcUNsQyxXQUFyQztBQUNELEdBL0JEOztBQWlDQVEsU0FBTyxDQUFDZSxPQUFSLENBQWdCLFVBQUNZLE1BQUQsRUFBWTtBQUMxQkEsVUFBTSxDQUFDbEQsZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsWUFBTTtBQUNyQ2lDLHVCQUFpQixDQUFDaUIsTUFBTSxDQUFDQyxZQUFQLENBQW9CLFdBQXBCLENBQUQsQ0FBakI7QUFDRCxLQUZEO0FBR0QsR0FKRDs7QUFNQSxNQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFDNUIzQixhQUFTLENBQUN4QixTQUFWLENBQW9Cb0QsR0FBcEIsQ0FBd0IscUJBQXhCO0FBQ0ExRCxZQUFRLENBQUNXLElBQVQsQ0FBY0YsS0FBZCxDQUFvQkcsU0FBcEIsR0FBZ0MsRUFBaEM7QUFDQVosWUFBUSxDQUFDVyxJQUFULENBQWNGLEtBQWQsQ0FBb0I2QyxXQUFwQixHQUFrQyxLQUFsQztBQUNELEdBSkQ7O0FBTUF4QixXQUFTLENBQUN6QixnQkFBVixDQUEyQixPQUEzQixFQUFvQyxVQUFDc0QsS0FBRCxFQUFXO0FBQzdDLFFBQUlBLEtBQUssQ0FBQ0MsTUFBTixLQUFpQjlCLFNBQXJCLEVBQWdDO0FBQzlCMkIscUJBQWU7QUFDaEI7QUFDRixHQUpEO0FBTUF6QixrQkFBZ0IsQ0FBQzNCLGdCQUFqQixDQUFrQyxPQUFsQyxFQUEyQ29ELGVBQTNDO0FBQ0QsQ0FsRUQ7O0FBb0VBLGlFQUFlM0MsTUFBZixFOzs7Ozs7Ozs7O0FDaEZBLFNBQVMrQyxLQUFULEdBQWlCO0FBQ2YsTUFBTUMsS0FBSyxHQUFHOUQsUUFBUSxDQUFDQyxhQUFULENBQXVCLHVCQUF2QixDQUFkO0FBQ0EsTUFBTThELElBQUksR0FBRy9ELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixhQUF2QixDQUFiO0FBQ0EsTUFBTStELElBQUksR0FBR2hFLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixjQUF2QixDQUFiO0FBQ0EsTUFBSWdFLFVBQUo7QUFDQSxNQUFNQyxNQUFNLEdBQUdKLEtBQUssQ0FBQ0ssc0JBQU4sQ0FBNkIsT0FBN0IsQ0FBZjtBQUNBLE1BQU1DLFlBQVksR0FBR0YsTUFBTSxDQUFDRyxNQUE1QjtBQUNBLE1BQU1DLFNBQVMsR0FBR1IsS0FBSyxDQUFDSyxzQkFBTixDQUE2QixPQUE3QixFQUFzQyxDQUF0QyxFQUF5QzlDLFdBQTNEO0FBQ0EsTUFBTWtELFVBQVUsR0FBR0wsTUFBTSxDQUFDLENBQUQsQ0FBekI7QUFDQSxNQUFNTSxTQUFTLEdBQUdOLE1BQU0sQ0FBQ0UsWUFBWSxHQUFHLENBQWhCLENBQXhCO0FBQ0EsTUFBTUssVUFBVSxHQUFHRixVQUFVLENBQUNHLFNBQVgsQ0FBcUIsSUFBckIsQ0FBbkI7QUFDQSxNQUFNQyxTQUFTLEdBQUdILFNBQVMsQ0FBQ0UsU0FBVixDQUFvQixJQUFwQixDQUFsQjtBQUNBLE1BQUlFLEtBQUssR0FBRyxDQUFaO0FBQ0EsTUFBSUMsVUFBVSxHQUFHLElBQWpCO0FBRUFmLE9BQUssQ0FBQ2dCLFdBQU4sQ0FBa0JMLFVBQWxCO0FBQ0FYLE9BQUssQ0FBQ2lCLFlBQU4sQ0FBbUJKLFNBQW5CLEVBQThCSixVQUE5Qjs7QUFFQSxXQUFTUyxVQUFULENBQW9CQyxHQUFwQixFQUF5QkMsTUFBekIsRUFBaUM7QUFDL0JwQixTQUFLLENBQUN4RCxTQUFOLENBQWdCb0QsR0FBaEIsQ0FBb0IsVUFBcEI7O0FBRUEsUUFBSW1CLFVBQUosRUFBZ0I7QUFDZCxVQUFJLENBQUNLLE1BQUwsRUFBYTtBQUFFakIsa0JBQVUsR0FBR0gsS0FBSyxDQUFDcUIsVUFBbkI7QUFBZ0M7O0FBQy9DLFVBQUlGLEdBQUcsS0FBSyxDQUFaLEVBQWU7QUFDYm5CLGFBQUssQ0FBQ3JELEtBQU4sQ0FBWTJFLElBQVosYUFBc0JuQixVQUFVLEdBQUdLLFNBQW5DO0FBQ0FNLGFBQUssSUFBSSxDQUFUO0FBQ0QsT0FIRCxNQUdPLElBQUlLLEdBQUcsS0FBSyxDQUFDLENBQWIsRUFBZ0I7QUFDckJuQixhQUFLLENBQUNyRCxLQUFOLENBQVkyRSxJQUFaLGFBQXNCbkIsVUFBVSxHQUFHSyxTQUFuQztBQUNBTSxhQUFLLElBQUksQ0FBVDtBQUNEO0FBQ0Y7O0FBRURDLGNBQVUsR0FBRyxLQUFiO0FBQ0Q7O0FBRUQsV0FBU1EsVUFBVCxHQUFzQjtBQUNwQnZCLFNBQUssQ0FBQ3hELFNBQU4sQ0FBZ0JpQixNQUFoQixDQUF1QixVQUF2Qjs7QUFDQSxRQUFJcUQsS0FBSyxLQUFLLENBQUMsQ0FBZixFQUFrQjtBQUNoQmQsV0FBSyxDQUFDckQsS0FBTixDQUFZMkUsSUFBWixhQUFzQixFQUFFaEIsWUFBWSxHQUFHRSxTQUFqQixDQUF0QjtBQUNBTSxXQUFLLEdBQUdSLFlBQVksR0FBRyxDQUF2QjtBQUNEOztBQUVELFFBQUlRLEtBQUssS0FBS1IsWUFBZCxFQUE0QjtBQUMxQk4sV0FBSyxDQUFDckQsS0FBTixDQUFZMkUsSUFBWixhQUFzQixFQUFFLElBQUlkLFNBQU4sQ0FBdEI7QUFDQU0sV0FBSyxHQUFHLENBQVI7QUFDRDs7QUFFREMsY0FBVSxHQUFHLElBQWI7QUFDRDs7QUFFRGQsTUFBSSxDQUFDMUQsZ0JBQUwsQ0FBc0IsT0FBdEIsRUFBK0I7QUFBQSxXQUFNMkUsVUFBVSxDQUFDLENBQUMsQ0FBRixDQUFoQjtBQUFBLEdBQS9CO0FBQ0FoQixNQUFJLENBQUMzRCxnQkFBTCxDQUFzQixPQUF0QixFQUErQjtBQUFBLFdBQU0yRSxVQUFVLENBQUMsQ0FBRCxDQUFoQjtBQUFBLEdBQS9CO0FBQ0FsQixPQUFLLENBQUN6RCxnQkFBTixDQUF1QixlQUF2QixFQUF3Q2dGLFVBQXhDO0FBQ0Q7O0FBRUR4QixLQUFLLEc7Ozs7Ozs7Ozs7OztBQ3ZETDs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3JCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSxzRjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7OztVQ05BO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJmaWxlIjoibWFpbi9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgYnVyZ2VyQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtaWNvbicpO1xyXG5jb25zdCBidXJnZXJNZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1tZW51Jyk7XHJcbmNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVhZGluZycpO1xyXG5jb25zdCBidXJnZXJCYWNrZ3JvdW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1cmdlci1iYWNrZ3JvdW5kJyk7XHJcblxyXG5idXJnZXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgYnVyZ2VyQnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ21lbnUtaWNvbl9vcGVuJyk7XHJcbiAgaGVhZGluZy5jbGFzc0xpc3QudG9nZ2xlKCdoZWFkaW5nX2Rpc2FibGVkJyk7XHJcbiAgYnVyZ2VyQmFja2dyb3VuZC5jbGFzc0xpc3QudG9nZ2xlKCdidXJnZXItYmFja2dyb3VuZF9jbG9zZWQnKTtcclxuXHJcbiAgaWYgKGJ1cmdlckJ1dHRvbi5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaWNvbl9vcGVuJykpIHtcclxuICAgIGJ1cmdlck1lbnUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMHB4KSc7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICdoaWRkZW4nO1xyXG4gIH0gZWxzZSB7XHJcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93WSA9ICd2aXNpYmxlJztcclxuICAgIGJ1cmdlck1lbnUuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoMzIwcHgpJztcclxuICB9XHJcbn0pO1xyXG5cclxuYnVyZ2VyQmFja2dyb3VuZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICBidXJnZXJCdXR0b24uY2xpY2soKTtcclxufSk7XHJcbiIsImltcG9ydCBidXJnZXJNZW51IGZyb20gJy4vYnVyZ2VyLW1lbnUnO1xuaW1wb3J0IG1vZGFscyBmcm9tICcuL21vZHVsZXMvbW9kYWxzJztcbmltcG9ydCBzbGlkZXIgZnJvbSAnLi9zbGlkZXInO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBtb2RhbHMoJy5jYXJkX2J1dHRvbicsICcubW9kYWwtd2luZG93JywgJy5tb2RhbC13aW5kb3dfX2RpYWxvZycsICcuY2xvc2UtbW9kYWwnKTtcbn0pO1xuIiwiY29uc3QgY2FsY1Njcm9sbCA9ICgpID0+IHtcbiAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGRpdi5zdHlsZS5vdmVyZmxvd1kgPSAnc2Nyb2xsJztcbiAgZGl2LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmQoZGl2KTtcblxuICBjb25zdCBzY3JvbGxXaWR0aCA9IGRpdi5vZmZzZXRXaWR0aCAtIGRpdi5jbGllbnRXaWR0aDtcbiAgZGl2LnJlbW92ZSgpO1xuXG4gIHJldHVybiBzY3JvbGxXaWR0aDtcbn07XG5cbmNvbnN0IG1vZGFscyA9ICh0cmlnZ2VycywgbW9kYWxDb250YWluZXIsIG1vZGFsV2luZG93LCBjbG9zZVRyaWdnZXIpID0+IHtcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodHJpZ2dlcnMpO1xuICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1vZGFsQ29udGFpbmVyKTtcbiAgY29uc3QgbW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKG1vZGFsV2luZG93KTtcbiAgY29uc3QgY2xvc2VNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoY2xvc2VUcmlnZ2VyKTtcbiAgY29uc3Qgc2Nyb2xsV2lkdGggPSBjYWxjU2Nyb2xsKCk7XG4gIGxldCBwZXRzO1xuXG4gIGZldGNoKCcuL2Fzc2V0cy9qc29uL3BldHMuanNvbicpXG4gICAgLnRoZW4oKHJlc3VsdCkgPT4gcmVzdWx0Lmpzb24oKSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICBwZXRzID0gcmVzdWx0O1xuICAgIH0pO1xuXG4gIGNvbnN0IHJlbmRlck1vZGFsV2luZG93ID0gKG5hbWUpID0+IHtcbiAgICB3aGlsZSAobW9kYWwuZmlyc3RDaGlsZCkge1xuICAgICAgbW9kYWwucmVtb3ZlQ2hpbGQobW9kYWwuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgbGV0IHBldDtcbiAgICBwZXRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChpdGVtLm5hbWUgPT09IG5hbWUpIHtcbiAgICAgICAgcGV0ID0gaXRlbTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIG1vZGFsLmlubmVySFRNTCA9IGBcbiAgICA8ZGl2IGNsYXNzPVwibW9kYWwtd2luZG93X19pbWFnZVwiPlxuICAgICAgPGltZyBzcmM9XCIke3BldC5pbWd9XCIgYWx0PVwiUGV0c1wiPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvblwiPlxuICAgICAgPGRpdiBjbGFzcz1cImluZm9ybWF0aW9uX19uYW1lXCI+JHtwZXQubmFtZX08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fdHlwZS1wZXRzXCI+JHtwZXQudHlwZX0gLSAke3BldC5icmVlZH08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZGVzY3JpcHRpb25cIj4ke3BldC5kZXNjcmlwdGlvbn08L2Rpdj5cbiAgICAgIDx1bCBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYVwiPlxuICAgICAgICA8bGkgY2xhc3M9XCJpbmZvcm1hdGlvbl9fZXh0cmEtaXRlbVwiPjxiPkFnZTo8L2I+IDxzcGFuPiR7cGV0LmFnZX08L3NwYW4+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5Jbm9jdWxhdGlvbnM6PC9iPiA8c3Bhbj4ke3BldC5pbm9jdWxhdGlvbnN9PC9zcGFuPjwvbGk+XG4gICAgICAgIDxsaSBjbGFzcz1cImluZm9ybWF0aW9uX19leHRyYS1pdGVtXCI+PGI+RGlzZWFzZXM6PC9iPiA8c3Bhbj4ke3BldC5kaXNlYXNlc308L3NwYW4+PC9saT5cbiAgICAgICAgPGxpIGNsYXNzPVwiaW5mb3JtYXRpb25fX2V4dHJhLWl0ZW1cIj48Yj5QYXJhc2l0ZXM6PC9iPiA8c3Bhbj4ke3BldC5wYXJhc2l0ZXN9PC9zcGFuPjwvbGk+XG4gICAgICA8L3VsPlxuICAgIDwvZGl2PmA7XG5cbiAgICBjb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnbW9kYWwtd2luZG93X2Nsb3NlZCcpO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3dZID0gJ2hpZGRlbic7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5tYXJnaW5SaWdodCA9IGAke3Njcm9sbFdpZHRofXB4YDtcbiAgfTtcblxuICBidXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgIHJlbmRlck1vZGFsV2luZG93KGJ1dHRvbi5nZXRBdHRyaWJ1dGUoJ2RhdGEtbmFtZScpKTtcbiAgICB9KTtcbiAgfSk7XG5cbiAgY29uc3QgaGlkZU1vZGFsV2luZG93ID0gKCkgPT4ge1xuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdtb2RhbC13aW5kb3dfY2xvc2VkJyk7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5vdmVyZmxvd1kgPSAnJztcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm1hcmdpblJpZ2h0ID0gJzBweCc7XG4gIH07XG5cbiAgY29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gY29udGFpbmVyKSB7XG4gICAgICBoaWRlTW9kYWxXaW5kb3coKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNsb3NlTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWRlTW9kYWxXaW5kb3cpO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgbW9kYWxzO1xuIiwiZnVuY3Rpb24gc2xpZGUoKSB7XHJcbiAgY29uc3QgaXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2xpZGVyX192aXNpYmxlLWFyZWEnKTtcclxuICBjb25zdCBwcmV2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLWxlZnQnKTtcclxuICBjb25zdCBuZXh0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLXJpZ2h0Jyk7XHJcbiAgbGV0IHBvc0luaXRpYWw7XHJcbiAgY29uc3Qgc2xpZGVzID0gaXRlbXMuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnY2FyZHMnKTtcclxuICBjb25zdCBzbGlkZXNMZW5ndGggPSBzbGlkZXMubGVuZ3RoO1xyXG4gIGNvbnN0IHNsaWRlU2l6ZSA9IGl0ZW1zLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2NhcmRzJylbMF0ub2Zmc2V0V2lkdGg7XHJcbiAgY29uc3QgZmlyc3RTbGlkZSA9IHNsaWRlc1swXTtcclxuICBjb25zdCBsYXN0U2xpZGUgPSBzbGlkZXNbc2xpZGVzTGVuZ3RoIC0gMV07XHJcbiAgY29uc3QgY2xvbmVGaXJzdCA9IGZpcnN0U2xpZGUuY2xvbmVOb2RlKHRydWUpO1xyXG4gIGNvbnN0IGNsb25lTGFzdCA9IGxhc3RTbGlkZS5jbG9uZU5vZGUodHJ1ZSk7XHJcbiAgbGV0IGluZGV4ID0gMDtcclxuICBsZXQgYWxsb3dTaGlmdCA9IHRydWU7XHJcblxyXG4gIGl0ZW1zLmFwcGVuZENoaWxkKGNsb25lRmlyc3QpO1xyXG4gIGl0ZW1zLmluc2VydEJlZm9yZShjbG9uZUxhc3QsIGZpcnN0U2xpZGUpO1xyXG5cclxuICBmdW5jdGlvbiBzaGlmdFNsaWRlKGRpciwgYWN0aW9uKSB7XHJcbiAgICBpdGVtcy5jbGFzc0xpc3QuYWRkKCdzaGlmdGluZycpO1xyXG5cclxuICAgIGlmIChhbGxvd1NoaWZ0KSB7XHJcbiAgICAgIGlmICghYWN0aW9uKSB7IHBvc0luaXRpYWwgPSBpdGVtcy5vZmZzZXRMZWZ0OyB9XHJcbiAgICAgIGlmIChkaXIgPT09IDEpIHtcclxuICAgICAgICBpdGVtcy5zdHlsZS5sZWZ0ID0gYCR7cG9zSW5pdGlhbCAtIHNsaWRlU2l6ZX1weGA7XHJcbiAgICAgICAgaW5kZXggKz0gMTtcclxuICAgICAgfSBlbHNlIGlmIChkaXIgPT09IC0xKSB7XHJcbiAgICAgICAgaXRlbXMuc3R5bGUubGVmdCA9IGAke3Bvc0luaXRpYWwgKyBzbGlkZVNpemV9cHhgO1xyXG4gICAgICAgIGluZGV4IC09IDE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhbGxvd1NoaWZ0ID0gZmFsc2U7XHJcbiAgfVxyXG5cclxuICBmdW5jdGlvbiBjaGVja0luZGV4KCkge1xyXG4gICAgaXRlbXMuY2xhc3NMaXN0LnJlbW92ZSgnc2hpZnRpbmcnKTtcclxuICAgIGlmIChpbmRleCA9PT0gLTEpIHtcclxuICAgICAgaXRlbXMuc3R5bGUubGVmdCA9IGAkey0oc2xpZGVzTGVuZ3RoICogc2xpZGVTaXplKX1weGA7XHJcbiAgICAgIGluZGV4ID0gc2xpZGVzTGVuZ3RoIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoaW5kZXggPT09IHNsaWRlc0xlbmd0aCkge1xyXG4gICAgICBpdGVtcy5zdHlsZS5sZWZ0ID0gYCR7LSgxICogc2xpZGVTaXplKX1weGA7XHJcbiAgICAgIGluZGV4ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICBhbGxvd1NoaWZ0ID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHByZXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaGlmdFNsaWRlKC0xKSk7XHJcbiAgbmV4dC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHNoaWZ0U2xpZGUoMSkpO1xyXG4gIGl0ZW1zLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjaGVja0luZGV4KTtcclxufVxyXG5cclxuc2xpZGUoKTtcclxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiBtb2R1bGVbJ2RlZmF1bHQnXSA6XG5cdFx0KCkgPT4gbW9kdWxlO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZVxuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL21haW4vanMvaW5kZXguanNcIik7XG4vLyBUaGlzIGVudHJ5IG1vZHVsZSB1c2VkICdleHBvcnRzJyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvbWFpbi9zYXNzL3N0eWxlcy5zY3NzXCIpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==