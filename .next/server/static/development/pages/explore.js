module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./actions/index.js":
/*!**************************!*\
  !*** ./actions/index.js ***!
  \**************************/
/*! exports provided: updateKeywords, updateFilter, fetchCourseBatch, addCourse, addCourseBatch, incrementBatchNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateKeywords", function() { return updateKeywords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFilter", function() { return updateFilter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCourseBatch", function() { return fetchCourseBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCourse", function() { return addCourse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addCourseBatch", function() { return addCourseBatch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "incrementBatchNumber", function() { return incrementBatchNumber; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/ActionTypes */ "./constants/ActionTypes.js");


var updateKeywords = function updateKeywords(keywords) {
  return function (dispatch) {
    dispatch(fetchCourseBatch(0, keywords));
    dispatch({
      type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE_KEYWORDS"],
      keywords: keywords
    });
  };
};
var updateFilter = function updateFilter(filter, value) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["UPDATE_FILTER"],
    filter: filter,
    value: value
  };
};

var fetchCourseBatchRequest = function fetchCourseBatchRequest() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_COURSE_BATCH"].REQUEST
  };
};

var fetchCourseBatchSuccess = function fetchCourseBatchSuccess() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_COURSE_BATCH"].SUCCESS
  };
};

var fetchCourseBatchFailure = function fetchCourseBatchFailure(err) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["FETCH_COURSE_BATCH"].FAILURE,
    err: err
  };
};

var fetchCourseBatch = function fetchCourseBatch(batch, keywords) {
  return function (dispatch) {
    dispatch(fetchCourseBatchRequest());
    return axios__WEBPACK_IMPORTED_MODULE_0___default()({
      url: '/api/courses/batch/' + batch,
      params: {
        keywords: keywords
      }
    }).then(function (res) {
      dispatch(fetchCourseBatchSuccess());
      dispatch(addCourseBatch(res.data));
    }).catch(function (err) {
      dispatch(fetchCourseBatchFailure(err.data));
    });
  };
};
var addCourse = function addCourse(course) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_COURSE"],
    course: course
  };
};
var addCourseBatch = function addCourseBatch(batch) {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["ADD_COURSE_BATCH"],
    batch: batch
  };
};
var incrementBatchNumber = function incrementBatchNumber() {
  return {
    type: _constants_ActionTypes__WEBPACK_IMPORTED_MODULE_1__["INCREMENT_BATCH_NUMBER"]
  };
};

/***/ }),

/***/ "./components/CourseCard.js":
/*!**********************************!*\
  !*** ./components/CourseCard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_hash_code__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-hash-code */ "js-hash-code");
/* harmony import */ var js_hash_code__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_hash_code__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }



var cardStyles = {
  marginBottom: "20px",
  borderRadius: "0",
  border: "none",
  backgroundColor: "rgb(255, 255, 255)"
};
var colors = ["#52A6FF", "#E87F3B", "#8FDE82", "#E5615B", "#E597D6", "#E5DB9F", "#9194E5", "#735A54"];

var assignColor = function assignColor(course) {
  var code = js_hash_code__WEBPACK_IMPORTED_MODULE_1___default()(course.department_code + course.course_number);
  var color = colors[Math.abs(parseInt(code)) % colors.length];
  return color;
};

var courseLabelStyle = function courseLabelStyle(color) {
  return {
    backgroundColor: color,
    display: "inline-block",
    padding: "5px",
    fontWeight: "200"
  };
};

var courseNameStyle = {
  fontWeight: "600"
};
var courseDescriptionStyle = {
  fontWeight: "300"
};

var overlay = function overlay(isVisible, color) {
  if (isVisible) {
    return {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%",
      opacity: 1,
      transition: ".5s ease",
      backgroundColor: color,
      padding: -10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
  } else {
    return {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      height: "100%",
      width: "100%",
      opacity: 0,
      transition: ".5s ease",
      backgroundColor: color,
      padding: -10,
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    };
  }
};

var overlaycontainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center"
};
var overlayText = {
  fontWeight: "200",
  fontSize: "1.75em"
};

var CourseCard =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CourseCard, _React$Component);

  function CourseCard(props) {
    var _this;

    _classCallCheck(this, CourseCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CourseCard).call(this, props));
    _this.state = {
      isHover: false
    };
    _this.mouseEnter = _this.mouseEnter.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.mouseLeave = _this.mouseLeave.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(CourseCard, [{
    key: "mouseEnter",
    value: function mouseEnter() {
      this.setState({
        isHover: true
      });
    }
  }, {
    key: "mouseLeave",
    value: function mouseLeave() {
      this.setState({
        isHover: false
      });
    }
  }, {
    key: "render",
    value: function render() {
      var course = this.props;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-4"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card",
        "data-aos": "fade-up",
        style: cardStyles,
        onMouseEnter: this.mouseEnter,
        onMouseLeave: this.mouseLeave
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "card-body"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h5", {
        className: "card-title text-center mx-auto text-white",
        style: courseLabelStyle(assignColor(course))
      }, course.department_code, " ", course.course_number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "card-text",
        style: courseNameStyle
      }, course.course_title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: "card-text",
        style: courseDescriptionStyle
      }, course.course_description)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: overlay(this.state.isHover, assignColor(course))
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "text-center text-white",
        style: overlayText
      }, course.department_code, " ", course.course_number), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: overlaycontainer
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn btn-outline-light"
      }, "Show Me Details"))))));
    }
  }]);

  return CourseCard;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CourseCard);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    rel: "stylesheet",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossOrigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Varela+Round",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    href: "/static/css/styles.css",
    rel: "stylesheet"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://unpkg.com/aos@next/dist/aos.css"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "Illini Advisor")), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://code.jquery.com/jquery-3.3.1.min.js",
    integrity: "sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8=",
    crossOrigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js",
    integrity: "sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy",
    crossOrigin: "anonymous"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://unpkg.com/aos@next/dist/aos.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
    src: "https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", null, "AOS.init();"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./constants/ActionTypes.js":
/*!**********************************!*\
  !*** ./constants/ActionTypes.js ***!
  \**********************************/
/*! exports provided: UPDATE_KEYWORDS, INCREMENT_BATCH_NUMBER, UPDATE_FILTER, ADD_COURSE, ADD_COURSE_BATCH, FETCH_COURSE_BATCH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_KEYWORDS", function() { return UPDATE_KEYWORDS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCREMENT_BATCH_NUMBER", function() { return INCREMENT_BATCH_NUMBER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FILTER", function() { return UPDATE_FILTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COURSE", function() { return ADD_COURSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_COURSE_BATCH", function() { return ADD_COURSE_BATCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FETCH_COURSE_BATCH", function() { return FETCH_COURSE_BATCH; });
var createAsyncActionStrings = function createAsyncActionStrings(action) {
  return {
    REQUEST: action + "_REQUEST",
    SUCCESS: action + "_SUCCESS",
    FAILURE: action + "_FAILURE"
  };
};

var UPDATE_KEYWORDS = "UPDATE_KEYWORDS";
var INCREMENT_BATCH_NUMBER = "INCREMENT_BATCH_NUMBER";
var UPDATE_FILTER = "UPDATE_FILTER";
var ADD_COURSE = "ADD_COURSE";
var ADD_COURSE_BATCH = "ADD_COURSE_BATCH";
var FETCH_COURSE_BATCH = createAsyncActionStrings("FETCH_COURSE_BATCH");

/***/ }),

/***/ "./containers/Keyword/Keyword.scss":
/*!*****************************************!*\
  !*** ./containers/Keyword/Keyword.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./containers/Keyword/index.js":
/*!*************************************!*\
  !*** ./containers/Keyword/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _Keyword_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Keyword.scss */ "./containers/Keyword/Keyword.scss");
/* harmony import */ var _Keyword_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Keyword_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Keyword =
/*#__PURE__*/
function (_Component) {
  _inherits(Keyword, _Component);

  function Keyword(props) {
    var _this;

    _classCallCheck(this, Keyword);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Keyword).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function () {
      var _this$props = _this.props,
          keyword = _this$props.keyword,
          keywords = _this$props.keywords,
          updateKeywords = _this$props.updateKeywords;
      var newKeywords = keywords.slice(0);
      var idx = -1;

      for (var i = 0; i < keywords.length; i++) {
        if (newKeywords[i].word == keyword) {
          idx = i;
          break;
        }
      }

      newKeywords.splice(idx, 1);
      updateKeywords(newKeywords);
    });

    return _this;
  }

  _createClass(Keyword, [{
    key: "render",
    value: function render() {
      var keyword = this.props.keyword;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "btn-group keyword"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "btn text-white"
      }, keyword.type == "CUSTOM" ? "\"".concat(keyword.word, "\"") : "#".concat(keyword.word)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "btn text-white",
        onClick: this.handleClick
      }, "X"));
    }
  }]);

  return Keyword;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    updateKeywords: function updateKeywords(keywords) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["updateKeywords"])(keywords));
    }
  };
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    keywords: state.keywords
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Keyword));

/***/ }),

/***/ "./containers/KeywordDisplay/KeywordDisplay.scss":
/*!*******************************************************!*\
  !*** ./containers/KeywordDisplay/KeywordDisplay.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./containers/KeywordDisplay/index.js":
/*!********************************************!*\
  !*** ./containers/KeywordDisplay/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Keyword__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Keyword */ "./containers/Keyword/index.js");
/* harmony import */ var _KeywordDisplay_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./KeywordDisplay.scss */ "./containers/KeywordDisplay/KeywordDisplay.scss");
/* harmony import */ var _KeywordDisplay_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_KeywordDisplay_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var KeywordDisplay =
/*#__PURE__*/
function (_Component) {
  _inherits(KeywordDisplay, _Component);

  function KeywordDisplay(props) {
    _classCallCheck(this, KeywordDisplay);

    return _possibleConstructorReturn(this, _getPrototypeOf(KeywordDisplay).call(this, props));
  }

  _createClass(KeywordDisplay, [{
    key: "render",
    value: function render() {
      var keywords = this.props.keywords;
      var keywordsList;

      if (keywords.length == 0) {
        keywordsList = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "text-center text-white"
        }, "add filtering keywords with the searchbar");
      } else {
        keywordsList = keywords.map(function (keyword) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Keyword__WEBPACK_IMPORTED_MODULE_2__["default"], {
            keyword: keyword,
            key: keyword.word
          });
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "keywordDisplay"
      }, keywordsList);
    }
  }]);

  return KeywordDisplay;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    keywords: state.keywords
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, undefined)(KeywordDisplay));

/***/ }),

/***/ "./containers/Searchbar/Searchbar.scss":
/*!*********************************************!*\
  !*** ./containers/Searchbar/Searchbar.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./containers/Searchbar/index.js":
/*!***************************************!*\
  !*** ./containers/Searchbar/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../actions */ "./actions/index.js");
/* harmony import */ var _Searchbar_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Searchbar.scss */ "./containers/Searchbar/Searchbar.scss");
/* harmony import */ var _Searchbar_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Searchbar_scss__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







var Searchbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Searchbar, _Component);

  function Searchbar(_props) {
    var _this;

    _classCallCheck(this, Searchbar);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Searchbar).call(this, _props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyDown", function (e) {
      switch (e.keyCode) {
        case 13:
          //  [Enter]
          _this.setState(function (state, props) {
            var updateKeywords = props.updateKeywords,
                keywords = props.keywords;

            if (state.activeSuggestion == 0) {
              updateKeywords(keywords.concat({
                type: "CUSTOM",
                word: state.currentKeyword
              }));
            } else {
              updateKeywords(keywords.concat({
                type: "SUGGESTED",
                word: state.filteredSuggestions[state.activeSuggestion - 1]
              }));
            }

            return {
              activeSuggestion: 0,
              filteredSuggestions: [],
              showSuggestions: false,
              currentKeyword: ""
            };
          });

          break;

        case 40:
          //  [Down Arrow]
          _this.setState(function (state) {
            return {
              activeSuggestion: Math.min(state.filteredSuggestions.length, state.activeSuggestion + 1)
            };
          });

          break;

        case 38:
          //  [Up Arrow]
          _this.setState(function (state) {
            return {
              activeSuggestion: Math.max(0, state.activeSuggestion - 1)
            };
          });

          break;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (e) {
      var currentKeyword = e.target.value;

      _this.setState(function (state) {
        return {
          currentKeyword: currentKeyword,
          filteredSuggestions: state.suggestions.filter(function (suggestion) {
            return suggestion.toLowerCase().indexOf(currentKeyword.toLowerCase()) != -1;
          }),
          showSuggestions: true,
          activeSuggestion: 0
        };
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleClick", function (keyword) {
      var _this$props = _this.props,
          keywords = _this$props.keywords,
          updateKeywords = _this$props.updateKeywords,
          loadCoursesBatch = _this$props.loadCoursesBatch;

      _this.setState(function (state) {
        updateKeywords(keywords.concat(keyword));
        return {
          activeSuggestion: 0,
          filteredSuggestions: [],
          showSuggestions: false,
          currentKeyword: ""
        };
      });
    });

    _this.state = {
      currentKeyword: "",
      suggestions: [],
      filteredSuggestions: [],
      showSuggestions: false,
      activeSuggestion: 0
    };
    return _this;
  }

  _createClass(Searchbar, [{
    key: "componentWillMount",
    value: function componentWillMount() {
      var _this2 = this;

      axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("/static/data/keywords.json").then(function (res) {
        _this2.setState({
          suggestions: res.data
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var handleKeyDown = this.handleKeyDown,
          handleChange = this.handleChange,
          handleClick = this.handleClick,
          handleSubmit = this.handleSubmit;
      var _this$state = this.state,
          activeSuggestion = _this$state.activeSuggestion,
          filteredSuggestions = _this$state.filteredSuggestions,
          showSuggestions = _this$state.showSuggestions,
          currentKeyword = _this$state.currentKeyword;
      var suggestionsComponent;

      if (showSuggestions && currentKeyword.length != 0) {
        if (filteredSuggestions.length != 0) {
          suggestionsComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
            className: "suggestions"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: "suggestion-custom",
            key: currentKeyword,
            onClick: handleClick
          }, "\"".concat(currentKeyword, "\"")), filteredSuggestions.map(function (suggestion, index) {
            var className = "";
            index += 1;

            if (index > 10) {
              return;
            }

            if (index == activeSuggestion) {
              className = "suggestion-active";
            }

            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
              className: className,
              key: suggestion,
              onClick: function onClick() {
                return handleClick(suggestion);
              }
            }, "#".concat(suggestion));
          }));
        } else {
          suggestionsComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
            className: "suggestions"
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
            className: "suggestion-custom",
            key: currentKeyword,
            onClick: handleClick
          }, "\"".concat(currentKeyword, "\"")));
        }
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12 row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "col-md-8 offset-md-2",
        onSubmit: function onSubmit(e) {
          return e.preventDefault();
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-group"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "form-control",
        type: "text",
        value: currentKeyword,
        onChange: handleChange,
        onKeyDown: handleKeyDown
      })), suggestionsComponent));
    }
  }]);

  return Searchbar;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    updateKeywords: function updateKeywords(keywords) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_3__["updateKeywords"])(keywords));
    }
  };
};

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    keywords: state.keywords
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(Searchbar));

/***/ }),

/***/ "./pages/explore.js":
/*!**************************!*\
  !*** ./pages/explore.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./actions/index.js");
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-masonry-component */ "react-masonry-component");
/* harmony import */ var react_masonry_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_masonry_component__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_CourseCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/CourseCard */ "./components/CourseCard.js");
/* harmony import */ var _containers_Searchbar___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../containers/Searchbar/ */ "./containers/Searchbar/index.js");
/* harmony import */ var _containers_KeywordDisplay___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../containers/KeywordDisplay/ */ "./containers/KeywordDisplay/index.js");
/* harmony import */ var _explore_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./explore.scss */ "./pages/explore.scss");
/* harmony import */ var _explore_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_explore_scss__WEBPACK_IMPORTED_MODULE_8__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }











var ExplorePage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ExplorePage, _React$Component);

  function ExplorePage(props) {
    var _this;

    _classCallCheck(this, ExplorePage);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExplorePage).call(this, props));
    _this.onScroll = _this.onScroll.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    return _this;
  }

  _createClass(ExplorePage, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          loadCoursesBatch = _this$props.loadCoursesBatch,
          courses = _this$props.courses,
          keywords = _this$props.keywords;
      loadCoursesBatch(courses.batchNumber, keywords);
      window.addEventListener('scroll', this.onScroll, false);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }
  }, {
    key: "onScroll",
    value: function onScroll() {
      var _this$props2 = this.props,
          loadCoursesBatch = _this$props2.loadCoursesBatch,
          incrementBatchNumber = _this$props2.incrementBatchNumber,
          courses = _this$props2.courses,
          keywords = _this$props2.keywords,
          batchNumber = _this$props2.batchNumber;

      if (false) {}
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row searchbar-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_Searchbar___WEBPACK_IMPORTED_MODULE_6__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "col-md-12"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_containers_KeywordDisplay___WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: "container"
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "row"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_masonry_component__WEBPACK_IMPORTED_MODULE_4___default.a, null, this.props.courseList.map(function (course) {
        if (course.department_code == undefined) {
          console.log(course);
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_CourseCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
          department_code: course.department_code,
          course_number: course.course_number,
          course_title: course.course_title,
          course_description: course.course_description,
          key: course.department_code + course.course_number
        });
      }))))));
    }
  }]);

  return ExplorePage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses,
    courseList: state.courseList,
    keywords: state.keywords,
    batchNumber: state.batchNumber
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    loadCoursesBatch: function loadCoursesBatch(batch, keywords) {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["fetchCourseBatch"])(batch, keywords));
    },
    incrementBatchNumber: function incrementBatchNumber() {
      dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_2__["incrementBatchNumber"])());
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, mapDispatchToProps)(ExplorePage));

/***/ }),

/***/ "./pages/explore.scss":
/*!****************************!*\
  !*** ./pages/explore.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!********************************!*\
  !*** multi ./pages/explore.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/explore.js */"./pages/explore.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-hash-code":
/*!*******************************!*\
  !*** external "js-hash-code" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-hash-code");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-masonry-component":
/*!******************************************!*\
  !*** external "react-masonry-component" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-masonry-component");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=explore.js.map