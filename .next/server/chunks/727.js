exports.id = 727;
exports.ids = [727];
exports.modules = {

/***/ 1250:
/***/ ((module) => {

// Exports
module.exports = {
	"main": "Home_main__EtNt2",
	"main_details": "Home_main_details__nEtIV",
	"innerContent": "Home_innerContent__Porv7",
	"item": "Home_item__5SR1J",
	"rightItem": "Home_rightItem__vDfki",
	"img_details": "Home_img_details__qoJE0",
	"img": "Home_img__2cJNc",
	"imgContainer": "Home_imgContainer__FSxEe",
	"thankyou": "Home_thankyou__VlDBB",
	"message": "Home_message__WpIhK",
	"wrapper": "Home_wrapper__M2hGM"
};


/***/ }),

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const myLoader = ({ src , width , quality  })=>{
    return `https://res.cloudinary.com/test-cm-company/image/upload/w_${width},q_${quality || 75}/${src}`;
};
const MyImage = (props)=>{
    // eslint-disable-next-line jsx-a11y/alt-text
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
        loader: myLoader,
        ...props
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyImage);


/***/ }),

/***/ 6129:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fw": () => (/* binding */ server)
/* harmony export */ });
/* unused harmony exports localhost, api, endpoint, productsListUrl */
// export const localhost = "http://127.0.0.1:8000/";
const localhost = "https://herokugit-auto-deploy.herokuapp.com/";
const api = "api/";
const endpoint = `${localhost}${api}`;
const productsListUrl = `${endpoint}products-list`;
const server =  false ? 0 : "https://odoo-erp-demo-ali.herokuapp.com/api";


/***/ })

};
;