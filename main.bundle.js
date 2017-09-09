/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	__webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module \"./javascript/signup.js\""); e.code = 'MODULE_NOT_FOUND'; throw e; }()));

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(5)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!../../node_modules/image-webpack-loader/index.js!./index.scss", function() {
				var newContent = require("!!../../node_modules/css-loader/index.js!../../node_modules/sass-loader/index.js!../../node_modules/image-webpack-loader/index.js!./index.scss");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports
	exports.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto);", ""]);

	// module
	exports.push([module.id, "body {\n  font-family: 'Roboto', sans-serif;\n  font-size: 16px;\n  background-image: url(" + __webpack_require__(4) + ");\n  background-size: 100% 100%;\n  background-repeat: no-repeat;\n  overflow: hidden; }\n\n.content-container {\n  width: 60%;\n  margin: auto;\n  margin-top: 2%;\n  background-color: white;\n  padding-top: 2%;\n  padding-bottom: 2%;\n  opacity: .94; }\n\n#root-jumbo-img-container {\n  float: left; }\n\n#root-jumbo-img {\n  width: 200px; }\n\nnav {\n  padding-top: 1%;\n  display: flex;\n  justify-content: flex-end;\n  height: 40px;\n  padding-right: 21%;\n  padding-bottom: 1%;\n  border-bottom-color: #a8d7ff;\n  border-bottom-style: solid;\n  border-bottom-width: 5px;\n  background-color: white;\n  opacity: .9; }\n\n.app-description-container {\n  margin: auto;\n  width: 94%;\n  padding-top: 15px; }\n\n.app-description {\n  margin: auto;\n  -webkit-column-count: 3;\n  /* Chrome, Safari, Opera */\n  -moz-column-count: 3;\n  /* Firefox */\n  column-count: 3;\n  -webkit-column-gap: 40px;\n  /* Chrome, Safari, Opera */\n  -moz-column-gap: 40px;\n  /* Firefox */\n  column-gap: 40px; }\n\n/* -------------- THE button -------------- */\n.button {\n  /* text */\n  text-decoration: none;\n  font: 16px 'Droid Sans', sans-serif;\n  line-height: .5;\n  font-weight: bold;\n  text-shadow: rgba(255, 255, 255, 0.5) 0 1px 0;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  user-select: none;\n  /* layout */\n  padding: .5em .6em .4em .6em;\n  margin: .5em;\n  display: inline-block;\n  position: relative;\n  -webkit-border-radius: 8px;\n  -moz-border-radius: 8px;\n  border-radius: 8px;\n  /* effects */\n  border-top: 1px solid rgba(255, 255, 255, 0.8);\n  border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n  background-image: -webkit-gradient(radial, 50% 0, 100, 50% 0, 0, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.7)));\n  background-image: -moz-radial-gradient(top, ellipse cover, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0) 100%);\n  background-image: gradient(radial, 50% 0, 100, 50% 0, 0, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0.7)));\n  -webkit-transition: background .2s ease-in-out;\n  -moz-transition: background .2s ease-in-out;\n  transition: background .2s ease-in-out;\n  /* color */\n  color: #666666 !important;\n  background-color: #bfbfbf;\n  -webkit-box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, #999999 0 0.1em 3px, #737373 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;\n  /* drop shadow */\n  -moz-box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, #999999 0 0.1em 3px, #737373 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;\n  /* drop shadow */\n  box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, #999999 0 0.1em 3px, #737373 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;\n  /* drop shadow */ }\n\n/* -------------- button (tag) -------------- */\nbutton.button {\n  border-left: none;\n  border-right: none; }\n\nbutton.button:hover {\n  cursor: pointer; }\n\n.button.blue {\n  color: #336999 !important;\n  background-color: #80c4ff;\n  -webkit-box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, #5390c6 0 0.1em 3px, #336999 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;\n  /* drop shadow */\n  -moz-box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, #5390c6 0 0.1em 3px, #336999 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;\n  /* drop shadow */\n  box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em 0.3em, #5390c6 0 0.1em 3px, #336999 0 0.3em 1px, rgba(0, 0, 0, 0.2) 0 0.5em 5px;\n  /* drop shadow */ }\n\n.button.blue:hover {\n  background-color: #a8d7ff; }\n\n/* -------------- States -------------- */\n.button:hover {\n  background-color: #d4d4d4; }\n\n.button:active {\n  background-image: -webkit-gradient(radial, 50% 0, 100, 50% 0, 0, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0)));\n  background-image: -moz-gradient(radial, 50% 0, 100, 50% 0, 0, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0)));\n  background-image: gradient(radial, 50% 0, 100, 50% 0, 0, from(rgba(255, 255, 255, 0)), to(rgba(255, 255, 255, 0)));\n  -webkit-box-shadow: inset rgba(255, 255, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.2) 0 -0.1em 0.3em, rgba(0, 0, 0, 0.4) 0 0.1em 1px, rgba(0, 0, 0, 0.2) 0 0.2em 6px;\n  /* drop shadow */\n  -moz-box-shadow: inset rgba(255, 255, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.2) 0 -0.1em 0.3em, rgba(0, 0, 0, 0.4) 0 0.1em 1px, rgba(0, 0, 0, 0.2) 0 0.2em 6px;\n  /* drop shadow */\n  box-shadow: inset rgba(255, 255, 255, 0.6) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.2) 0 -0.1em 0.3em, rgba(0, 0, 0, 0.4) 0 0.1em 1px, rgba(0, 0, 0, 0.2) 0 0.2em 6px;\n  /* drop shadow */\n  -webkit-transform: translateY(0.2em);\n  -moz-transform: translateY(0.2em);\n  transform: translateY(0.2em); }\n\n.button:focus {\n  outline: none;\n  text-shadow: rgba(0, 0, 0, 0.2) 0 1px 2px; }\n\n.button[disabled], .button[disabled]:hover, .button.disabled, .button.disabled:hover {\n  opacity: .5;\n  cursor: default;\n  color: rgba(0, 0, 0, 0.2) !important;\n  text-shadow: none !important;\n  background-color: rgba(0, 0, 0, 0.05);\n  background-image: none;\n  border-top: none;\n  -webkit-box-shadow: inset rgba(255, 254, 255, 0.4) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.1) 0 -0.1em 0.3em, rgba(0, 0, 0, 0.3) 0 0.1em 1px, rgba(0, 0, 0, 0.2) 0 0.2em 6px;\n  /* drop shadow */\n  -moz-box-shadow: inset rgba(255, 254, 255, 0.4) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.1) 0 -0.1em 0.3em, rgba(0, 0, 0, 0.3) 0 0.1em 1px, rgba(0, 0, 0, 0.2) 0 0.2em 6px;\n  /* drop shadow */\n  box-shadow: inset rgba(255, 254, 255, 0.4) 0 0.3em 0.3em, inset rgba(0, 0, 0, 0.1) 0 -0.1em 0.3em, rgba(0, 0, 0, 0.3) 0 0.1em 1px, rgba(0, 0, 0, 0.2) 0 0.2em 6px;\n  /* drop shadow */\n  -webkit-transform: translateY(5px);\n  -moz-transform: translateY(5px);\n  transform: translateY(5px); }\n\n/* -------------- Fonts -------------- */\n.serif {\n  font-family: 'Roboto', sans-serif;\n  font-weight: normal; }\n\n/* -------------- Sizes -------------- */\n.xs {\n  font-size: 16px; }\n\n.xl {\n  font-size: 32px; }\n\n/* -------------- Materials -------------- */\n.button.glossy:after, .button.glass:after {\n  content: \"\";\n  position: absolute;\n  width: 90%;\n  height: 60%;\n  top: 0;\n  left: 5%;\n  -webkit-border-radius: .5em .5em 1em 1em / .5em .5em 2em 2em;\n  -moz-border-radius: .5em .5em 1em 1em / .5em .5em 2em 2em;\n  border-radius: .5em .5em 1em 1em / .5em .5em 2em 2em;\n  background-image: -webkit-gradient(linear, 0% 0, 100% 0, from(rgba(255, 255, 255, 0.55)), to(rgba(255, 255, 255, 0.5)), color-stop(0.5, rgba(255, 255, 255, 0)), color-stop(0.8, rgba(255, 255, 255, 0)));\n  background-image: -moz-linear-gradient(left, rgba(255, 255, 255, 0.55), rgba(255, 255, 255, 0) 50%, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 0.5));\n  background-image: gradient(linear, 0% 0, 100% 0, from(rgba(255, 255, 255, 0.55)), to(rgba(255, 255, 255, 0.5)), color-stop(0.5, rgba(255, 255, 255, 0)), color-stop(0.8, rgba(255, 255, 255, 0))); }\n\n.button.glossy:active:after,\n.button.glass:active:after,\n.button.disabled:after,\n.button[disabled]:after {\n  opacity: .6; }\n\n.button.icon.glossy:after,\n.button.icon.glass:after {\n  height: 75%; }\n\n/* -------------- Glass + Transparent -------------- */\n.button.glass {\n  text-shadow: rgba(255, 255, 255, 0.5) 0 -1px 0, rgba(0, 0, 0, 0.18) 0 0.18em 0.15em; }\n\n.button.glass:active {\n  text-shadow: rgba(255, 255, 255, 0.3) 0 1px 0, rgba(0, 0, 0, 0.15) 0 0.18em 0.15em; }\n\n.container {\n  width: 80%;\n  max-width: 1200px;\n  margin: 0 auto; }\n\n.container * {\n  box-sizing: border-box; }\n\n.flex-outer,\n.flex-inner {\n  list-style-type: none;\n  padding: 0; }\n\n.flex-outer {\n  max-width: 800px;\n  margin: 0 auto; }\n\n.flex-outer li,\n.flex-inner {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center; }\n\n.flex-inner {\n  padding: 0 8px;\n  justify-content: space-between; }\n\n.flex-outer > li:not(:last-child) {\n  margin-bottom: 20px; }\n\n.flex-outer li label,\n.flex-outer li p {\n  padding: 8px;\n  font-weight: 300;\n  letter-spacing: .09em;\n  text-transform: uppercase; }\n\n.flex-outer > li > label,\n.flex-outer li p {\n  flex: 1 0 120px;\n  max-width: 220px; }\n\n.flex-outer > li > label + *,\n.flex-inner {\n  flex: 1 0 220px; }\n\n.flex-outer li p {\n  margin: 0; }\n\n.flex-outer li input:not([type='checkbox']),\n.flex-outer li textarea {\n  padding: 15px;\n  border: none; }\n\n.flex-outer li button {\n  margin-left: auto;\n  padding: 8px 16px;\n  border: none;\n  background: #333;\n  color: #f2f2f2;\n  text-transform: uppercase;\n  letter-spacing: .09em;\n  border-radius: 2px; }\n\n.flex-inner li {\n  width: 100px; }\n", ""]);

	// exports


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "f1e8208336b4117e8a672d087aee74f4.png";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ })
/******/ ]);