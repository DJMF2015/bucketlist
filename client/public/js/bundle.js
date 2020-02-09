/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./client/src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./client/src/app.js":
/*!***************************!*\
  !*** ./client/src/app.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const BucketItem = __webpack_require__(/*! ./models/bucket_item.js */ \"./client/src/models/bucket_item.js\");\nconst ActivityGridView = __webpack_require__(/*! ./views/activity_grid_view.js */ \"./client/src/views/activity_grid_view.js\");\nconst ActivityFormView = __webpack_require__(/*! ./views/activity_form_view.js */ \"./client/src/views/activity_form_view.js\");\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  console.log(\"Script loaded\");\n  const activityForm = document.querySelector('form#activities-form');\n  const activityFormView = new ActivityFormView(activityForm);\n  activityFormView.bindEvents();\n\n  const gridView = document.querySelector('#grid-view')\n  const activityGridView = new ActivityGridView(gridView)\n  activityGridView.bindEvents();\n\n  const bucketItem = new BucketItem();\n  bucketItem.bindEvents();\n  bucketItem.getData();//fetch data from api\n});\n\n\n//# sourceURL=webpack:///./client/src/app.js?");

/***/ }),

/***/ "./client/src/helpers/pub_sub.js":
/*!***************************************!*\
  !*** ./client/src/helpers/pub_sub.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const PubSub = {\n publish: function (channel, payload) {\n   const event = new CustomEvent(channel, {\n     detail: payload\n   });\n   document.dispatchEvent(event);\n },\n\n subscribe: function (channel, callback) {\n   document.addEventListener(channel, callback);\n }\n};\n\nmodule.exports = PubSub;\n\n\n//# sourceURL=webpack:///./client/src/helpers/pub_sub.js?");

/***/ }),

/***/ "./client/src/helpers/request_helper.js":
/*!**********************************************!*\
  !*** ./client/src/helpers/request_helper.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const RequestHelper = function (url) {\n this.url = url;\n};\n//fetch response (all data) from server\nRequestHelper.prototype.get = function () {\n return fetch(this.url)\n   .then((response) => response.json());\n};\n\n//POST payload from formview, parse and add to db\nRequestHelper.prototype.post = function (payload) {\n return fetch(this.url, {\n   method: 'POST',\n   body: JSON.stringify(payload),\n   headers: { 'Content-Type': 'application/json' }\n })\n   .then((response) => response.json());\n};\n\n//FETCH\n//update request by id by assoiate with given url\nRequestHelper.prototype.put = function (payload) {\n  return fetch(this.url, {\n    method: 'PUT',\n    body: JSON.stringify(payload),\n    headers: {'content-type': 'application/json'}\n  })\n    .then((response) => response.json());\n};\n\n//destroy request by id by assoiate with given url\nRequestHelper.prototype.delete = function (id) {\n  return fetch(`${this.url}/${id}`, {\n    method: 'DELETE'\n  })\n    .then((response) => response.json());\n};\nmodule.exports = RequestHelper;\n\n\n//# sourceURL=webpack:///./client/src/helpers/request_helper.js?");

/***/ }),

/***/ "./client/src/models/bucket_item.js":
/*!******************************************!*\
  !*** ./client/src/models/bucket_item.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\")\nconst RequestHelper = __webpack_require__(/*! ../helpers/request_helper.js */ \"./client/src/helpers/request_helper.js\")\n\nconst BucketItem = function (url) {\n  this.url = 'http://localhost:3000/api/activities';\n  this.request = new RequestHelper(this.url);\n};\n\nBucketItem.prototype.bindEvents = function () {\n  PubSub.subscribe('ActivityFormView:form-submitted', (event) => {\n    console.log(\"sdssddsdsd\", event.detail);\n    this.postActivity(event.detail);\n  });\n  //pubsub PUT update ->completed to-do...\n  PubSub.subscribe('ActivityGridView:activity-completed-update-id', (event) => {\n    this.putActivity(event.detail);\n      console.log(\"here for PUT...\", event.detail);\n    // request.put({ id: event.detail })//payload\n    // .then((Showdata) => {\n    //   console.log(Showdata)\n    //   PubSub.publish('BucketItem:data-loaded', Showdata)\n    // });\n  })\n\n  PubSub.subscribe('ActivityGridView:activity-destroy-by-id', (event) => {\n    this.request.delete(event.detail)\n    .then((activities) => {\n      PubSub.publish('BucketItem:data-loaded', activities);\n    })\n    .catch(console.error);\n  });\n};\n\nBucketItem.prototype.getData = function () {\n  this.request.get()\n  .then((activities) => {\n    PubSub.publish('BucketItem:data-loaded', activities);\n  })\n  .catch(console.error);\n};\n\n//post request received and publish response on channel to BucketFormView\nBucketItem.prototype.postActivity = function (activity) {\n  this.request.post(activity)\n  .then((activities) => {\n    PubSub.publish('BucketItem:data-loaded', activities);\n  })\n  .catch(console.error);\n};\n\nBucketItem.prototype.putActivity = function (Activity){\n  this.request.put( event.detail )//payload\n  .then((Showdata) => {\n    console.log(Showdata)\n    PubSub.publish('BucketItem:data-loaded', Showdata)\n  })\n}\n\n\nmodule.exports = BucketItem;\n\n\n//# sourceURL=webpack:///./client/src/models/bucket_item.js?");

/***/ }),

/***/ "./client/src/views/activity_form_view.js":
/*!************************************************!*\
  !*** ./client/src/views/activity_form_view.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst ActivityFormView = function (form) {\n  this.form = form;\n\n};\n\nActivityFormView.prototype.bindEvents = function () {\n  this.form.addEventListener('submit', (event) => {\n    this.submitForm(event);\n  })\n}\n\nActivityFormView.prototype.submitForm = function(event) {\n  event.preventDefault();\n  const newActivity = this.createActivity(event.target);//dom elemnt\n  PubSub.publish(\"ActivityFormView:form-submitted\", newActivity);\n  console.log('got here now...', newActivity);\n  event.target.reset();\n};\n\n\nActivityFormView.prototype.createActivity = function(form) {\n  const newActivity = {\n    description: form.description.value,\n    location: form.location.value,\n    type: form.type.value,\n    isDone: false\n\n  };\n  return newActivity;\n};\n\n\n\n\n\nmodule.exports = ActivityFormView;\n\n\n//# sourceURL=webpack:///./client/src/views/activity_form_view.js?");

/***/ }),

/***/ "./client/src/views/activity_grid_view.js":
/*!************************************************!*\
  !*** ./client/src/views/activity_grid_view.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\nconst ActivityView = __webpack_require__(/*! ./activity_view.js */ \"./client/src/views/activity_view.js\");\n\nconst ActivityGridView = function(container){\n  this.container = container;\n}\n\nActivityGridView.prototype.bindEvents = function () {\n  PubSub.subscribe('BucketItem:data-loaded', (event) => {\n    this.render(event.detail);\n  })\n  this.container.addEventListener('click', (event) => {\n    event.preventDefault()\n    console.log(event.target);\n    const id = event.target.value;\n    console.log(id);\n    PubSub.publish('ActivityGridView:activity-destroy-by-id', id);\n  })\n  this.container.addEventListener('click', (event)=>{\n   console.log(event.target)\n    const id = event.target.value;\n    console.log(id)\n    console.log(event.target)\n    PubSub.publish('ActivityGridView:activity-completed-update-id', id);\n  })\n};\n\nActivityGridView.prototype.render = function (activities) {\n  this.container.innerHTML = '';\n  const activityView = new ActivityView(this.container); //->activityView\n  activities.forEach((activity) => activityView.render(activity));\n};\n\nmodule.exports = ActivityGridView;\n\n\n//# sourceURL=webpack:///./client/src/views/activity_grid_view.js?");

/***/ }),

/***/ "./client/src/views/activity_view.js":
/*!*******************************************!*\
  !*** ./client/src/views/activity_view.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const PubSub = __webpack_require__(/*! ../helpers/pub_sub.js */ \"./client/src/helpers/pub_sub.js\");\n\nconst ActivityView = function (container) {\n  this.container = container;\n};\n\nActivityView.prototype.render = function (activity) {\n  const tile = document.createElement('div');\n\n  const description = document.createElement('h1');\n  description.textContent = `Activity: ${activity.description}`;\n  tile.appendChild(description);\n\n  const location = document.createElement('p');\n  location.textContent = `Location: ${activity.location}`;\n  tile.appendChild(location);\n\n  const type = document.createElement('p');\n  type.textContent = `Type: ${activity.type}`;\n  tile.appendChild(type);\n\n  const deleteButton = document.createElement('button');\n  deleteButton.textContent = `Delete this activity`;\n  deleteButton.value = activity._id;\n  tile.appendChild(deleteButton);\n\n  const completedBtn = document.createElement('button')\n  completedBtn.innerText ='Done: '//html\n  completedBtn.value = activity._id;\n  tile.appendChild(completedBtn);\n\n\n  this.container.appendChild(tile);\n\n};\n\nmodule.exports = ActivityView;\n\n\n//# sourceURL=webpack:///./client/src/views/activity_view.js?");

/***/ })

/******/ });