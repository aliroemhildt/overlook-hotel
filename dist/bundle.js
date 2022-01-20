/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "validateLogin": () => (/* binding */ validateLogin),
/* harmony export */   "hotel": () => (/* binding */ hotel),
/* harmony export */   "updateBookings": () => (/* binding */ updateBookings)
/* harmony export */ });
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _classes_Hotel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8);
/* harmony import */ var _classes_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);
/* harmony import */ var _classes_Booking__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _domUpdates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(13);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(12);







let hotel;

const fetchData = (customer) => {
  return Promise.all([(0,_apiCalls__WEBPACK_IMPORTED_MODULE_5__.fetchCustomers)(), (0,_apiCalls__WEBPACK_IMPORTED_MODULE_5__.fetchRooms)(), (0,_apiCalls__WEBPACK_IMPORTED_MODULE_5__.fetchBookings)()])
    .then(data => {
      setHotel(data);
      setCurrentCustomer(customer);
      _domUpdates__WEBPACK_IMPORTED_MODULE_4__.domUpdates.hideLoginPage();
      _domUpdates__WEBPACK_IMPORTED_MODULE_4__.domUpdates.displayCustomerDashboard();
    })
    .catch(error => _domUpdates__WEBPACK_IMPORTED_MODULE_4__.domUpdates.displayFetchError(error))
}

const setHotel = (data) => {
  hotel = new _classes_Hotel__WEBPACK_IMPORTED_MODULE_1__.default(data[0].customers, data[1].rooms, data[2].bookings);
}

const setCurrentCustomer = (customer) => {
  hotel.currentCustomer = customer;
  hotel.currentCustomer.getAllBookings(hotel.bookings);
}

const validateLogin = (username, password) => {
  let customer;
  const id = getID(username.slice(8, 10));
  if ((username.length === 10) && (username.slice(0, 8) === 'customer') && (password === 'overlook2021') && (0 < id && id < 51)) {
    (0,_apiCalls__WEBPACK_IMPORTED_MODULE_5__.fetchSingleCustomer)(id)
      .then(data => {
        customer = new _classes_Customer__WEBPACK_IMPORTED_MODULE_2__.default(data);
        fetchData(customer)
      })
      .catch(error => _domUpdates__WEBPACK_IMPORTED_MODULE_4__.domUpdates.displayFetchError(error))
  } else {
    _domUpdates__WEBPACK_IMPORTED_MODULE_4__.domUpdates.displayLoginUserError();
  }
}

const getID = (digits) => {
  if ((digits < 10) && (digits.slice(0, 1) === '0')) {
    return parseInt(digits.slice(1, 2));
  }  else if (digits > 9) {
    return parseInt(digits);
  }
}

const updateBookings = (data) => {
  hotel.bookings = data.map(booking => new _classes_Booking__WEBPACK_IMPORTED_MODULE_3__.default(booking));
  hotel.currentCustomer.getAllBookings(hotel.bookings);
}




/***/ }),
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_base_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : 0;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_hotel_close_up_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7);
// Imports




var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(_images_hotel_close_up_png__WEBPACK_IMPORTED_MODULE_3__.default);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block;\n}\n\nbody {\n  line-height: 1;\n}\n\nol, ul {\n  list-style: none;\n}\n\nblockquote, q {\n  quotes: none;\n}\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: \"\";\n  content: none;\n}\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0;\n}\n\nnav {\n  height: 25%;\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\nnav button {\n  background-color: transparent;\n  border: none;\n  color: #29646a;\n  font-size: 24px;\n  margin: 20px;\n  font-weight: 700;\n}\nnav button:hover {\n  color: #12383c;\n  cursor: pointer;\n}\n\n.welcome {\n  font-weight: 400;\n  font-size: 36px;\n  margin: 20px 0 18px 60px;\n  color: #29646a;\n}\n\n.overlook-title {\n  font-weight: 700;\n  font-size: 60px;\n  margin-left: 60px;\n  color: #29646a;\n}\n\n.menu {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.clicked {\n  color: #d7472d;\n  pointer-events: none;\n  border-bottom: 1px solid #d7472d;\n}\n\n.login {\n  height: 375px;\n  width: 375px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 2px 4px 4px rgba(41, 100, 106, 0.2);\n  border-radius: 30px;\n  background-color: rgba(198, 224, 225, 0.8);\n  margin-left: 60px;\n}\n.login input {\n  margin: 12px 0 12px 0;\n  font-size: 18px;\n}\n.login h2 {\n  margin-bottom: 40px;\n}\n.login button {\n  margin-top: 40px;\n}\n\n.input-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n}\n.input-wrapper label {\n  color: #29646a;\n  font-size: 18px;\n}\n\n.login-error {\n  height: 14px;\n  margin: 15px;\n  font-size: 14px;\n  color: #d7472d;\n}\n\n.customer-dashboard-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100%;\n  width: 100%;\n}\n\n.customer-section-left {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  width: 38%;\n}\n\n.customer-section-right {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  width: 60%;\n}\n\n.total-spent-wrapper {\n  height: 380px;\n  width: 90%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.total-spent-wrapper h4 {\n  color: #29646a;\n  font-size: 60px;\n}\n\n.booking-cards-wrapper {\n  height: 380px;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: auto;\n}\n\n.booking-dashboard-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n  height: 100%;\n  width: 100%;\n}\n\n.left-booking-section {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  width: 28%;\n}\n\n.filter-wrapper {\n  height: 380px;\n  width: 90%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n}\n.filter-wrapper input:hover {\n  cursor: pointer;\n}\n\n.room-filters {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: center;\n  margin: 20px;\n}\n\n.single-filter {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  flex-direction: row-reverse;\n}\n\n.date-wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: flex-start;\n  margin: 20px;\n}\n.date-wrapper label {\n  margin-bottom: 12px;\n}\n\n.filter-button-wrapper {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: \"\";\n  width: 100%;\n}\n\n.available-rooms-section {\n  height: 100%;\n  width: 68%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n}\n.available-rooms-section button {\n  background-color: rgba(198, 224, 225, 0.8);\n  color: #d7472d;\n}\n.available-rooms-section button:hover {\n  background-color: white;\n}\n\n.available-rooms-wrapper {\n  height: 380px;\n  width: 94%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  overflow: auto;\n}\n\n.booking-dashboard-section {\n  border-radius: 20px;\n  box-shadow: 2px 4px 4px rgba(41, 100, 106, 0.2);\n  background-color: white;\n}\n\n.booking-error {\n  font-size: 18px;\n  font-weight: 400;\n  color: #d7472d;\n  margin: 25px;\n}\n\n.date-error {\n  height: 14px;\n  margin: 3px;\n  font-size: 14px;\n  color: #d7472d;\n}\n\nhtml {\n  height: 100%;\n  width: 100%;\n}\n\nbody {\n  height: 100%;\n  width: 100%;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  background-size: cover;\n  background-repeat: no-repeat;\n  font-family: \"Noto Sans\", sans-serif;\n}\n\nmain {\n  height: 75%;\n  width: 100%;\n}\n\nh2 {\n  font-size: 24px;\n  font-weight: 700;\n  color: #29646a;\n  margin-top: 20px;\n}\n\nh3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: #29646a;\n  margin: 20px;\n}\n\n.standard-button {\n  height: 30px;\n  width: 80px;\n  border-radius: 15px;\n  border: none;\n  margin: 10px;\n  width: 100px;\n  background-color: #29646a;\n  color: white;\n}\n\n.standard-button:hover {\n  background-color: #12383c;\n  cursor: pointer;\n}\n\n.dashboard {\n  height: 525px;\n  width: 93%;\n  border-radius: 30px;\n  box-shadow: 2px 4px 4px rgba(41, 100, 106, 0.2);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: flex-start;\n  background-color: rgba(198, 224, 225, 0.8);\n}\n\n.dashboard-section {\n  border-radius: 20px;\n  box-shadow: 2px 4px 4px rgba(41, 100, 106, 0.2);\n  background-color: white;\n}\n\n.card {\n  box-shadow: 2px 4px 4px rgba(41, 100, 106, 0.2);\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  min-height: 250px;\n  width: 95%;\n  margin: 10px;\n  background-color: #29646a;\n  border-radius: 10px;\n  color: white;\n}\n.card .info {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  justify-content: space-around;\n  margin: 5px;\n}\n.card p {\n  font-size: 16px;\n  margin: 8px;\n}\n.card img {\n  height: 178px;\n  width: 267px;\n  margin: 10px;\n}\n\n.booked {\n  background-color: rgba(198, 224, 225, 0.8);\n}\n.booked p {\n  margin: 12px;\n  color: #29646a;\n}\n\n.align-left {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n}\n\n.align-center {\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.hidden {\n  display: none;\n}", "",{"version":3,"sources":["webpack://./src/css/_reset.scss","webpack://./src/css/base.scss","webpack://./src/css/_nav.scss","webpack://./src/css/_mixins.scss","webpack://./src/css/_variables.scss","webpack://./src/css/_login.scss","webpack://./src/css/_customer-dashboard.scss","webpack://./src/css/_booking-dashboard.scss"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;EAaC,SAAA;EACA,UAAA;EACA,SAAA;EACA,eAAA;EACA,aAAA;EACA,wBAAA;ACCD;;ADCA,gDAAA;AACA;;EAEC,cAAA;ACED;;ADAA;EACC,cAAA;ACGD;;ADDA;EACC,gBAAA;ACID;;ADFA;EACC,YAAA;ACKD;;ADHA;;EAEC,WAAA;EACA,aAAA;ACMD;;ADJA;EACC,yBAAA;EACA,iBAAA;ACOD;;AChDA;ECCE,WAAA;EACA,WDDiB;ECKjB,aAAA;EACA,8BDLgB;ECMhB,uBDN+B;ADsDjC;ACpDE;EACE,6BAAA;EACA,YAAA;EACA,cEDG;EFEH,eAAA;EACA,YAAA;EACA,gBAAA;ADsDJ;ACnDE;EACE,cENS;EFOT,eAAA;ADqDJ;;ACjDA;EACE,gBAAA;EACA,eAAA;EACA,wBAAA;EACA,cEjBK;AHqEP;;ACjDA;EACE,gBAAA;EACA,eAAA;EACA,iBAAA;EACA,cExBK;AH4EP;;ACjDA;EC3BE,aAAA;EACA,2BD2BkB;EC1BlB,mBD0B8B;ADsDhC;;ACnDA;EACE,cE5BI;EF6BJ,oBAAA;EACA,gCAAA;ADsDF;;AI9FA;EFCE,aAAA;EACA,YEDqB;EFWrB,aAAA;EACA,sBAAA;EACA,mBEZqB;EFarB,uBEb6B;EFiB7B,+CAAA;EAIA,mBAAA;EElBA,0CDHW;ECIX,iBAAA;AJqGF;AInGE;EACE,qBAAA;EACA,eAAA;AJqGJ;AIlGE;EACE,mBAAA;AJoGJ;AIjGE;EACE,gBAAA;AJmGJ;;AI/FA;EFVE,aAAA;EACA,sBAAA;EACA,uBESqB;EFRrB,uBEQiC;AJqGnC;AInGE;EACE,cDpBG;ECqBH,eAAA;AJqGJ;;AIjGA;EACE,YAAA;EACA,YAAA;EACA,eAAA;EACA,cDzBI;AH6HN;;AKvIA;EHME,aAAA;EACA,uBGNkB;EHOlB,uBGP0B;EHA1B,YGCc;EHAd,WAAA;AF6IF;;AK1IA;EHOE,aAAA;EACA,sBAAA;EACA,mBGRqB;EHSrB,2BGT6B;EHL7B,YGMc;EHLd,UGKoB;ALiJtB;;AK9IA;EHEE,aAAA;EACA,sBAAA;EACA,mBGHqB;EHIrB,2BGJ6B;EHV7B,YGWc;EHVd,UGUoB;ALqJtB;;AKlJA;EHdE,aGec;EHdd,UGcqB;EHVrB,aAAA;EACA,uBGUkB;EHTlB,mBGS0B;ALwJ5B;AKtJE;EACE,cFdG;EEeH,eAAA;ALwJJ;;AKpJA;EHxBE,aGyBc;EHxBd,UGwBqB;EHdrB,aAAA;EACA,sBAAA;EACA,mBGaqB;EHZrB,2BGY6B;EAC7B,cAAA;AL2JF;;AMvLA;EJME,aAAA;EACA,uBINkB;EJOlB,uBIP0B;EJA1B,YICc;EJAd,WAAA;AF6LF;;AM1LA;EJOE,aAAA;EACA,sBAAA;EACA,mBIRqB;EJSrB,2BIT6B;EJL7B,YIMc;EJLd,UIKoB;ANiMtB;;AM9LA;EJTE,aIUc;EJTd,UISqB;EJCrB,aAAA;EACA,sBAAA;EACA,uBIFqB;EJGrB,6BIHiC;ANqMnC;AMnME;EACE,eAAA;ANqMJ;;AMjMA;EJPE,aAAA;EACA,sBAAA;EACA,uBIMqB;EJLrB,uBIKiC;EACjC,YAAA;ANuMF;;AMpMA;EJlBE,aAAA;EACA,2BIkBkB;EJjBlB,mBIiB8B;EAC9B,2BAAA;ANyMF;;AMtMA;EJjBE,aAAA;EACA,sBAAA;EACA,uBIgBqB;EJfrB,2BIeiC;EACjC,YAAA;AN4MF;AM1ME;EACE,mBAAA;AN4MJ;;AMxMA;EJhCE,aAAA;EACA,uBIgCkB;EJ/BlB,mBI+ByB;EJtCzB,UIuCc;EJtCd,WIsCiB;AN8MnB;;AM3MA;EJ1CE,YI2Cc;EJ1Cd,UI0CoB;EJhCpB,aAAA;EACA,sBAAA;EACA,mBI+BqB;EJ9BrB,2BI8B6B;ANkN/B;AMhNE;EACE,0CH9CS;EG+CT,cHvCE;AHyPN;AM/ME;EACE,uBHjDI;AHkQR;;AM7MA;EJxDE,aIyDc;EJxDd,UIwDqB;EJ9CrB,aAAA;EACA,sBAAA;EACA,mBI6CqB;EJ5CrB,2BI4C6B;EAC7B,cAAA;ANoNF;;AMjNA;EJpCE,mBAAA;EARA,+CAAA;EI+CA,uBH9DM;AHkRR;;AMjNA;EACE,eAAA;EACA,gBAAA;EACA,cH9DI;EG+DJ,YAAA;ANoNF;;AMjNA;EACE,YAAA;EACA,WAAA;EACA,eAAA;EACA,cHtEI;AH0RN;;AA5RA;EEPE,YFQc;EEPd,WFOoB;AAgStB;;AA7RA;EEXE,YFYc;EEXd,WFWoB;EACpB,yDGdiB;EHejB,sBAAA;EACA,4BAAA;EACA,oCAAA;AAiSF;;AA9RA;EEnBE,WFoBc;EEnBd,WFmBmB;AAkSrB;;AA/RA;EACE,eAAA;EACA,gBAAA;EACA,cGrBK;EHsBL,gBAAA;AAkSF;;AA/RA;EACE,eAAA;EACA,gBAAA;EACA,cG5BK;EH6BL,YAAA;AAkSF;;AA/RA;EErCE,YFsCc;EErCd,WFqCoB;EACpB,mBAAA;EACA,YAAA;EACA,YAAA;EACA,YAAA;EACA,yBGtCK;EHuCL,YGzCM;AH4UR;;AAhSA;EACE,yBGzCW;EH0CX,eAAA;AAmSF;;AAhSA;EEpDE,aFqDc;EEpDd,UFoDqB;EE/BrB,mBAAA;EAJA,+CAAA;EAPA,aAAA;EACA,sBAAA;EACA,mBF2CqB;EE1CrB,2BF0C6B;EAC7B,0CGxDW;AH+Vb;;AApSA;EElCE,mBAAA;EARA,+CAAA;EF6CA,uBG5DM;AHmWR;;AApSA;EEhDE,+CAAA;EAbA,aAAA;EACA,6BF8DkB;EE7DlB,mBF6DgC;EAChC,iBAAA;EACA,UAAA;EACA,YAAA;EACA,yBGnEK;EHoEL,mBAAA;EACA,YGvEM;AHgXR;AAvSE;EEjEA,aAAA;EACA,sBAAA;EACA,uBFgEuB;EE/DvB,6BF+DmC;EACjC,WAAA;AA4SJ;AAzSE;EACE,eAAA;EACA,WAAA;AA2SJ;AAxSE;EEtFA,aFuFgB;EEtFhB,YFsFuB;EACrB,YAAA;AA2SJ;;AAvSA;EACE,0CG5FW;AHsYb;AAxSE;EACE,YAAA;EACA,cG5FG;AHsYP;;AAtSA;EEhGE,aAAA;EACA,2BFgGkB;EE/FlB,mBF+F8B;AA2ShC;;AAxSA;EEpGE,aAAA;EACA,uBFoGkB;EEnGlB,uBFmG0B;AA6S5B;;AA1SA;EACE,aAAA;AA6SF","sourcesContent":["html, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n\tmargin: 0;\n\tpadding: 0;\n\tborder: 0;\n\tfont-size: 100%;\n\tfont: inherit;\n\tvertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n\tdisplay: block;\n}\nbody {\n\tline-height: 1;\n}\nol, ul {\n\tlist-style: none;\n}\nblockquote, q {\n\tquotes: none;\n}\nblockquote:before, blockquote:after,\nq:before, q:after {\n\tcontent: '';\n\tcontent: none;\n}\ntable {\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n}\n","@import 'variables';\n@import 'mixins';\n@import 'reset';\n@import 'nav';\n@import 'login';\n@import 'customer-dashboard';\n@import 'booking-dashboard';\n\nhtml {\n  @include size(100%, 100%);\n}\n\nbody {\n  @include size(100%, 100%);\n  background-image: $background-image;\n  background-size: cover;\n  background-repeat: no-repeat;\n  font-family: 'Noto Sans', sans-serif;\n}\n\nmain {\n  @include size(75%, 100%);\n}\n\nh2 {\n  font-size: 24px;\n  font-weight: 700;\n  color: $teal;\n  margin-top: 20px;\n}\n\nh3 {\n  font-size: 20px;\n  font-weight: 700;\n  color: $teal;\n  margin: 20px;\n}\n\n.standard-button {\n  @include size(30px, 80px);\n  border-radius: 15px;\n  border: none;\n  margin: 10px;\n  width: 100px;\n  background-color: $teal;\n  color: $white;\n}\n\n.standard-button:hover {\n  background-color: $teal-hover;\n  cursor: pointer;\n}\n\n.dashboard {\n  @include size(525px, 93%);\n  @include section-border();\n  @include box-shadow();\n  @include flex-column(center, flex-start);\n  background-color: $light-blue;\n}\n\n.dashboard-section {\n  @include sub-section-border();\n  @include box-shadow();\n  background-color: $white;\n}\n\n.card {\n  @include box-shadow();\n  @include flex-row(space-around, center);\n  min-height: 250px;\n  width: 95%;\n  margin: 10px;\n  background-color: $teal;\n  border-radius: 10px;\n  color: $white;\n\n  .info {\n    @include flex-column(flex-start, space-around);\n    margin:5px;\n  }\n\n  p {\n    font-size: 16px;\n    margin: 8px;\n  }\n\n  img {\n    @include size(178px, 267px);\n    margin: 10px;\n  }\n}\n\n.booked {\n  background-color: $light-blue;\n\n  p {\n    margin: 12px;\n    color: $teal;\n  }\n}\n\n.align-left {\n  @include flex-row(flex-start, center);\n}\n\n.align-center {\n  @include flex-row(center, flex-start);\n}\n\n.hidden {\n  display: none;\n}\n","nav {\n@include size(25%, 100%);\n@include flex-row(space-between, flex-start);\n\n  button {\n    background-color: transparent;\n    border: none;\n    color: $teal;\n    font-size: 24px;\n    margin: 20px;\n    font-weight: 700;\n  }\n\n  button:hover {\n    color: $teal-hover;\n    cursor: pointer;\n  }\n}\n\n.welcome {\n  font-weight: 400;\n  font-size: 36px;\n  margin: 20px 0 18px 60px;\n  color: $teal;\n}\n\n.overlook-title{\n  font-weight: 700;\n  font-size: 60px;\n  margin-left: 60px;\n  color: $teal;\n}\n\n.menu {\n  @include flex-row(flex-start, center);\n}\n\n.clicked {\n  color: $red;\n  pointer-events: none;\n  border-bottom: 1px solid $red;\n}\n","@mixin size($x:'', $y) {\n  height: $x;\n  width: $y;\n}\n\n@mixin flex-row($x, $y) {\n  display: flex;\n  justify-content: $x;\n  align-items: $y;\n}\n\n@mixin flex-column($x, $y) {\n  display: flex;\n  flex-direction: column;\n  align-items: $x;\n  justify-content: $y;\n}\n\n@mixin box-shadow() {\n  box-shadow: 2px 4px 4px rgba(41, 100, 106, .2);\n}\n\n@mixin section-border() {\n  border-radius: 30px;\n}\n\n@mixin sub-section-border() {\n  border-radius: 20px;\n}\n","$background-image: url('../images/hotel-close-up.png');\n\n$light-blue: rgba(198, 224, 225, 0.8);\n\n$white: rgba(255, 255, 255, 1);\n\n$teal: rgba(41, 100, 106, 1);\n\n$teal-hover: rgba(18, 56, 60, 1);\n\n$red: rgba(215, 71, 45, 1);\n",".login {\n  @include size(375px, 375px);\n  @include flex-column(center, center);\n  @include box-shadow();\n  @include section-border();\n  background-color: $light-blue;\n  margin-left: 60px;\n\n  input {\n    margin: 12px 0 12px 0;\n    font-size: 18px;\n  }\n\n  h2 {\n    margin-bottom: 40px;\n  }\n\n  button {\n    margin-top: 40px\n  }\n}\n\n.input-wrapper {\n  @include flex-column(flex-start, center);\n\n  label {\n    color: $teal;\n    font-size: 18px;\n  }\n}\n\n.login-error {\n  height: 14px;\n  margin: 15px;\n  font-size: 14px;\n  color: $red;\n}\n",".customer-dashboard-wrapper {\n  @include flex-row(center, flex-start);\n  @include size(100%, 100%);\n}\n\n.customer-section-left {\n  @include flex-column(center, flex-start);\n  @include size(100%, 38%);\n}\n\n.customer-section-right {\n  @include flex-column(center, flex-start);\n  @include size(100%, 60%);\n}\n\n.total-spent-wrapper {\n  @include size(380px, 90%);\n  @include flex-row(center, center);\n\n  h4 {\n    color: $teal;\n    font-size: 60px;\n  }\n}\n\n.booking-cards-wrapper {\n  @include size(380px, 90%);\n  @include flex-column(center, flex-start);\n  overflow: auto;\n}\n",".booking-dashboard-wrapper {\n  @include flex-row(center, flex-start);\n  @include size(100%, 100%);\n}\n\n.left-booking-section {\n  @include flex-column(center, flex-start);\n  @include size(100%, 28%);\n}\n\n.filter-wrapper {\n  @include size(380px, 90%);\n  @include flex-column(flex-start, space-around);\n\n  input:hover {\n    cursor: pointer;\n  }\n}\n\n.room-filters {\n  @include flex-column(flex-start, center);\n  margin: 20px;\n}\n\n.single-filter {\n  @include flex-row(flex-start, center);\n  flex-direction: row-reverse;\n}\n\n.date-wrapper {\n  @include flex-column(flex-start, flex-start);\n  margin: 20px;\n\n  label {\n    margin-bottom: 12px;\n  }\n}\n\n.filter-button-wrapper {\n  @include flex-row(center,center);\n  @include size('',100%);\n}\n\n.available-rooms-section {\n  @include size(100%, 68%);\n  @include flex-column(center, flex-start);\n\n  button {\n    background-color: $light-blue;\n    color: $red;\n  }\n\n  button:hover {\n    background-color: $white;\n  }\n}\n\n.available-rooms-wrapper {\n  @include size(380px, 94%);\n  @include flex-column(center, flex-start);\n  overflow: auto;\n}\n\n.booking-dashboard-section {\n  @include sub-section-border();\n  @include box-shadow();\n  background-color: $white;\n}\n\n.booking-error {\n  font-size: 18px;\n  font-weight:400;\n  color:$red;\n  margin: 25px;\n}\n\n.date-error {\n  height: 14px;\n  margin: 3px;\n  font-size: 14px;\n  color: $red;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 4 */
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),
/* 5 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),
/* 6 */
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== "string") {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),
/* 7 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/hotel-close-up.png");

/***/ }),
/* 8 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Room__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _Booking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(11);




class Hotel {
  constructor( customers, rooms, bookings) {
    this.rooms = this.setRooms(rooms);
    this.bookings = this.setBookings(bookings);
    this.customers = this.setCustomers(customers);
    this.availableRooms = [];
    this.currentCustomer = null;
  }

  setRooms(rooms) {
    return rooms.map(room => new _Room__WEBPACK_IMPORTED_MODULE_0__.default(room));
  }

  setBookings(bookings) {
    return bookings.map(booking => new _Booking__WEBPACK_IMPORTED_MODULE_1__.default(booking));
  }

  setCustomers(customers) {
    return customers.map(customer => new _Customer__WEBPACK_IMPORTED_MODULE_2__.default(customer));
  }

  getAvailableRooms(date) {
    date = date.replaceAll('-', '/');
    const bookedRooms = this.bookings.reduce((acc, booking) => {
      if (booking.date === date) {
        acc.push(booking.roomNumber);
      }
      return acc;
    }, []);
    this.availableRooms = this.rooms.filter(room => {
      return !bookedRooms.includes(room.number);
    });
  }

  filterRooms(types) {
    this.availableRooms = this.availableRooms.reduce((acc, room) => {
      types.forEach(type => {
        if (room.roomType === type) {
          acc.push(room);
        }
      });
      return acc;
    }, []);
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hotel);


/***/ }),
/* 9 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Room {
  constructor(room) {
    this.number = room.number;
    this.roomType = room.roomType;
    this.bidet = room.bidet;
    this.bedSize = room.bedSize;
    this.numBeds = room.numBeds;
    this.costPerNight = room.costPerNight;
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Room);


/***/ }),
/* 10 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Booking {
  constructor(booking) {
    this.id = booking.id;
    this.userID = booking.userID;
    this.date = booking.date;
    this.roomNumber = booking.roomNumber
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Booking);


/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);


class Customer {
  constructor(customer) {
    this.id = customer.id;
    this.name = customer.name;
    this.bookings = [];
  }

  getAllBookings(bookings) {
    this.bookings = bookings.filter(booking => {
      return booking.userID === this.id;
    });
  }

  calculateTotalSpent(rooms) {
    const totalSpent = this.bookings.reduce((total, booking) => {
      rooms.forEach(room => {
        if (room.number === booking.roomNumber) {
          total += room.costPerNight;
        }
      });
      return total;
    }, 0);
    return parseFloat(totalSpent.toFixed(2));
  }

  createNewBooking(date, roomNumber) {
    const booking = {
      userID: this.id,
      date: date,
      roomNumber: roomNumber
    }
    return (0,_apiCalls__WEBPACK_IMPORTED_MODULE_0__.postBooking)(booking)
  }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Customer);


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchCustomers": () => (/* binding */ fetchCustomers),
/* harmony export */   "fetchRooms": () => (/* binding */ fetchRooms),
/* harmony export */   "fetchBookings": () => (/* binding */ fetchBookings),
/* harmony export */   "fetchSingleCustomer": () => (/* binding */ fetchSingleCustomer),
/* harmony export */   "postBooking": () => (/* binding */ postBooking)
/* harmony export */ });
const fetchCustomers = () => {
  return fetch('http://localhost:3001/api/v1/customers')
    .then(response => handleError(response))
}

const fetchRooms = () => {
  return fetch('http://localhost:3001/api/v1/rooms')
    .then(response => handleError(response))
}

const fetchBookings = () => {
  return fetch('http://localhost:3001/api/v1/bookings')
    .then(response => handleError(response))
}

const fetchSingleCustomer = (id) => {
  return fetch(`http://localhost:3001/api/v1/customers/${id}`)
    .then(response => handleError(response))
}

const postBooking = (booking) => {
  return fetch('http://localhost:3001/api/v1/bookings', {
    method: 'POST',
    body: JSON.stringify(booking),
    headers: {'Content-Type': 'application/json'}
  })
    .then(response => handleError(response))
}

const handleError = (response) => {
  if (!response.ok) {
    throw new Error('Something went wrong. Please reload the page and try again.');
  } else {
    return response.json();
  }
}




/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "domUpdates": () => (/* binding */ domUpdates)
/* harmony export */ });
/* harmony import */ var _scripts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(12);
/* harmony import */ var _roomImages__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _images_junior_suite_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15);
/* harmony import */ var _images_residential_suite_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(16);
/* harmony import */ var _images_single_room_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(17);
/* harmony import */ var _images_suite_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(18);








const main = document.querySelector('main');
const menu = document.getElementById('menu');
const loginPage = document.getElementById('loginPage')
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginButton = document.getElementById('loginButton');
const customerDashboard = document.getElementById('customerDashboard');
const cardsSection = document.getElementById('cardsSection');
const totalSpentSection = document.getElementById('totalSpentSection');
const bookingDashboard = document.getElementById('booking-dashboard');
const bookMenuButton = document.getElementById('bookMenuButton');
const dashboardMenuButton = document.getElementById('dashboardMenuButton');
const dateInput = document.getElementById('dateInput');
const availableRoomsSection = document.getElementById('availableRooms');
const filterButton = document.getElementById('filterButton');
const typeFilters = document.querySelectorAll('.checkbox-js');
const loginError = document.getElementById('loginError');
const dateError = document.getElementById('dateError');

const domUpdates = {
  populateBookings() {
    cardsSection.innerHTML = '';
    domUpdates.createBookingCards();
  },

  formatDate(date) {
    const mm = date.slice(5, 7)
    const dd = date.slice(8, 10)
    const yyyy = date.slice(0, 4)
    return mm + '/' + dd + '/' + yyyy;
  },

  createBookingCards() {
    if (!_scripts__WEBPACK_IMPORTED_MODULE_0__.hotel.currentCustomer.bookings) {
      cardsSection.innerHTML = `
        <p>You don't have any bookings yet. Visit the 'Book Now' page to create a new booking!</p>
      `;
    } else {
      const cards = _scripts__WEBPACK_IMPORTED_MODULE_0__.hotel.currentCustomer.bookings.sort((a, b) => {
        return new Date(a.date) - new Date(b.date);
      });
      cards.forEach(booking => {
        const room = _scripts__WEBPACK_IMPORTED_MODULE_0__.hotel.rooms.find(room => {
          return room.number === booking.roomNumber
        });
        cardsSection.innerHTML += `
        <section class="card" tabindex="0">
        <div class="info">
          <p>Date: ${domUpdates.formatDate(booking.date)}</p>
          <p>Room Number: ${booking.roomNumber}</p>
          <p>Room Type: ${room.roomType}</p>
          <p>Cost: $${room.costPerNight}</p>
        </div>
        <img src='${_roomImages__WEBPACK_IMPORTED_MODULE_2__.roomImages[room.roomType]}' alt='${room.roomType} image'>
        </section>
        `;
      });
    }
  },

  populateAvailableRooms() {
    const today = domUpdates.formatDate(domUpdates.getTodaysDate());
    const input  = domUpdates.formatDate(dateInput.value);
    availableRoomsSection.innerHTML = '';
    if (input >= today) {
      _scripts__WEBPACK_IMPORTED_MODULE_0__.hotel.getAvailableRooms(dateInput.value);
      domUpdates.checkFilters();
      domUpdates.createRoomCards();
    } else {
      domUpdates.displayDateError()
    }
  },

  displayDateError() {
    dateError.innerText = 'Please choose a current or future date';
    setTimeout(() => {
      dateError.innerText = ''
    }, 2000);
  },

  createRoomCards() {
    if (!_scripts__WEBPACK_IMPORTED_MODULE_0__.hotel.availableRooms.length) {
      availableRoomsSection.innerHTML =
        '<p class="booking-error">Unfortunately, there are no rooms that match this search. Please try another date or room type!</p>';
    } else {
      _scripts__WEBPACK_IMPORTED_MODULE_0__.hotel.availableRooms.forEach(room => {
        const bidet = room.bidet ? 'yes' : 'no';
        availableRoomsSection.innerHTML += `
          <section class="card" tabindex="0">
            <div class="info">
              <p>Room Number: ${room.number}</p>
              <p>Cost: $${room.costPerNight}</p>
              <p>Room Type: ${room.roomType}</p>
              <p>Number of Beds: ${room.numBeds}</p>
              <p>Bed Size: ${room.bedSize}</p>
              <p>Bidet: ${bidet}</p>
              <button class="standard-button book-button-js" id="${room.number}">Book Room</button>
            </div>
            <img src='${_roomImages__WEBPACK_IMPORTED_MODULE_2__.roomImages[room.roomType]}' alt='${room.roomType} image'>
          </section>
        `;
      })
    }
  },

  populateTotalSpent() {
    const total = _scripts__WEBPACK_IMPORTED_MODULE_0__.hotel.currentCustomer.calculateTotalSpent(_scripts__WEBPACK_IMPORTED_MODULE_0__.hotel.rooms);
    totalSpentSection.innerHTML = '';
    totalSpentSection.innerHTML += `
      <h4 class="total-spent">$${domUpdates.addSeparator(total)}</h4>
    `;
  },

  addSeparator(num) {
    let str = num.toString().split(".");
    str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return str.join('.');
  },

  hideLoginPage() {
    domUpdates.hide([loginPage]);
    main.classList.remove('align-left');
    main.classList.add('align-center');
  },

  displayCustomerDashboard() {
    domUpdates.show([customerDashboard, menu]);
    domUpdates.hide([bookingDashboard]);
    dashboardMenuButton.classList.add('clicked');
    dashboardMenuButton.disabled = true;
    bookMenuButton.classList.remove('clicked');
    bookMenuButton.disabled = false;
    domUpdates.populateBookings();
    domUpdates.populateTotalSpent();
  },

  displayBookingDashboard() {
    domUpdates.show([bookingDashboard]);
    domUpdates.hide([customerDashboard]);
    bookMenuButton.classList.add('clicked');
    bookMenuButton.disabled = true;
    dashboardMenuButton.classList.remove('clicked');
    dashboardMenuButton.disabled = false;
    domUpdates.setMinDate();
    domUpdates.populateAvailableRooms();
  },

  checkFilters() {
    const types = [];
    typeFilters.forEach(checkbox => {
      if (checkbox.checked) {
        types.push(checkbox.value.replace('-', ' '));
      }
    });
    if (types.length > 0) {
      _scripts__WEBPACK_IMPORTED_MODULE_0__.hotel.filterRooms(types);
    }
  },

  bookRoom(e) {
    const date = dateInput.value.replaceAll('-', '/')
    const roomNumber = parseInt(e.target.id)
    _scripts__WEBPACK_IMPORTED_MODULE_0__.hotel.currentCustomer.createNewBooking(date, roomNumber)
      .then(response => {
        domUpdates.displaySuccessfulBooking(e, date)
        ;(0,_apiCalls__WEBPACK_IMPORTED_MODULE_1__.fetchBookings)()
          .then(data => {
            ;(0,_scripts__WEBPACK_IMPORTED_MODULE_0__.updateBookings)(data.bookings);
            setTimeout(() => {
              domUpdates.populateAvailableRooms();
            }, 2500);
          })
          .catch(error => {
            console.log(error.message)
            domUpdates.displayBookingError()
          })
      })
      .catch(error => {
        console.log(error.message)
        domUpdates.displayBookingError()
      })
  },

  displaySuccessfulBooking(e, date) {
    const card = e.target.parentElement.parentElement;
    console.log(card)
    card.innerHTML = `
      <p>You have booked room ${e.target.id} for ${domUpdates.formatDate(date)}!
    `;
    card.classList.add('booked');
  },

  displayBookingError() {
    availableRoomsSection.innerHTML = '<p class="booking-error">Something went wrong. Reload the page and try again.</p>';
  },

  displayLoginUserError() {
    loginError.innerText = 'Username or Password is incorrect. Please try again.';
    setTimeout(() => {
      loginError.innerText = '';
    }, 3000);
  },

  displayFetchError(error) {
    loginError.innerText = error.message;
    setTimeout(() => {
      loginError.innerText = '';
    }, 3000);
  },

  getTodaysDate() {
    const today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0');
    let yyyy = today.getFullYear();
    return yyyy + '/' + mm + '/' + dd;
  },

  setMinDate() {
    const today = domUpdates.getTodaysDate().replaceAll('/', '-');
    dateInput.min = today;
    dateInput.value = today;
  },

  show(elements) {
    elements.forEach(element => {
      element.classList.remove('hidden');
    });
  },

  hide(elements) {
    elements.forEach(element => {
      element.classList.add('hidden');
    });
  }
}

loginButton.addEventListener('click', () => {
  ;(0,_scripts__WEBPACK_IMPORTED_MODULE_0__.validateLogin)(username.value, password.value)
});

bookMenuButton.addEventListener('click', () => {
  domUpdates.displayBookingDashboard(_scripts__WEBPACK_IMPORTED_MODULE_0__.hotel);
});

dashboardMenuButton.addEventListener('click', () => {
  domUpdates.displayCustomerDashboard(_scripts__WEBPACK_IMPORTED_MODULE_0__.hotel);
});

filterButton.addEventListener('click', domUpdates.populateAvailableRooms);

availableRoomsSection.addEventListener('click', (e) => {
  if (e.target.classList.contains('book-button-js')) {
    domUpdates.bookRoom(e);
  }
});




/***/ }),
/* 14 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "roomImages": () => (/* binding */ roomImages)
/* harmony export */ });
const roomImages = {
  'single room': './images/single-room.png',
  'junior suite': './images/junior-suite.png',
  'residential suite': './images/residential-suite.png',
  'suite': './images/suite.png'
}




/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/junior-suite.png");

/***/ }),
/* 16 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/residential-suite.png");

/***/ }),
/* 17 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/single-room.png");

/***/ }),
/* 18 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("images/suite.png");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 				() => (module['default']) :
/******/ 				() => (module);
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
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ })()
;
//# sourceMappingURL=bundle.js.map