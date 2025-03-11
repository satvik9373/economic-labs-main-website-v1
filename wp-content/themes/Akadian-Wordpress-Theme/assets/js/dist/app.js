/******/
(() => { // webpackBootstrap
    /******/
    var __webpack_modules__ = ({

        /***/
        "./assets/js/src/app.js":
            /*!******************************!*\
              !*** ./assets/js/src/app.js ***!
              \******************************/
            /***/
            (() => {

                // Src JS for application can go here
                // Src JS is compiled with Mix into the dist folder

                // Initialize Alpine if needed
                // import Alpine from "alpinejs";

                // window.Alpine = Alpine;

                // Alpine.start();

                //Accordion

                document.addEventListener("DOMContentLoaded", function() {
                    function initAcc(elem, option) {
                        //addEventListener on mouse click
                        document.addEventListener("click", function(e) {
                            //check is the right element clicked
                            if (!e.target.matches(elem + " .accordion-toggle")) return;
                            else {
                                //check if element contains active class
                                if (!e.target.parentElement.parentElement.classList.contains("active")) {
                                    if (option == true) {
                                        //if option true remove active class from all other accordions
                                        var elementList = document.querySelectorAll(elem + " .accordion-container");
                                        Array.prototype.forEach.call(elementList, function(e) {
                                            e.classList.remove("active");
                                        });
                                        var toggleList = document.querySelectorAll(".accordion-toggle");
                                        toggleList.forEach(function(toggle) {
                                            toggle.setAttribute("aria-expanded", false);
                                        });
                                    }
                                    //add active class on clicked accordion
                                    e.target.parentElement.parentElement.classList.add("active");
                                    e.target.classList.add("active");
                                    e.target.setAttribute("aria-expanded", true);
                                } else {
                                    //remove active class on clicked accordion
                                    e.target.parentElement.parentElement.classList.remove("active");
                                    e.target.setAttribute("aria-expanded", false);
                                }
                            }
                        });
                    }

                    //activate accordion function
                    initAcc(".accordion", true);

                    //Interactive Tabs

                    var tabs = document.querySelectorAll(".tabs-wrapper");
                    if (tabs !== "null") {
                        tabs.forEach(function(tab) {
                            var toggles = tab.querySelectorAll(".tab");
                            var tabCards = tab.querySelectorAll(".tab-card");
                            toggles.forEach(function(toggle) {
                                toggle.addEventListener("click", function(event) {
                                    var tabTarget = event.target.dataset.target;
                                    var $target = document.getElementById(tabTarget);
                                    toggles.forEach(function(toggle) {
                                        toggle.classList.remove("is-active");
                                    });
                                    tabCards.forEach(function(tabCard) {
                                        tabCard.classList.remove("is-visible");
                                        tabCard.setAttribute("aria-expanded", false);
                                    });
                                    event.target.classList.add("is-active");
                                    $target.classList.add("is-visible");
                                    $target.setAttribute("aria-expanded", true);
                                });
                            });
                        });
                    }

                    //Info Modal
                    var infoModals = document.querySelectorAll(".info-modal");
                    var singlePageModals = document.querySelectorAll(".single-page-modal");
                    if (singlePageModals.length > 0) {
                        singlePageModals.forEach(function(infoModal) {
                            var closeModal = infoModal.querySelector(".close-modal");
                            var modalID = infoModal.dataset.name;
                            if (sessionStorage.getItem(modalID) !== "closed") {
                                infoModal.classList.add("modal-visible");
                            }
                            closeModal.addEventListener("click", function(e) {
                                infoModal.classList.remove("modal-visible");
                                sessionStorage.setItem(modalID, "closed");
                            });
                        });
                    } else {
                        if (infoModals !== null) {
                            infoModals.forEach(function(infoModal) {
                                var closeModal = infoModal.querySelector(".close-modal");
                                var modalID = infoModal.dataset.name;
                                if (sessionStorage.getItem(modalID) !== "closed") {
                                    infoModal.classList.add("modal-visible");
                                }
                                closeModal.addEventListener("click", function(e) {
                                    infoModal.classList.remove("modal-visible");
                                    sessionStorage.setItem(modalID, "closed");
                                });
                            });
                        }
                    }

                    //Anchor links active state

                    var anchorLinks = document.querySelectorAll(".anchor-links");
                    if (anchorLinks !== null) {
                        anchorLinks.forEach(function(anchor) {
                            var links = anchor.querySelectorAll("a");
                            links.forEach(function(link) {
                                link.addEventListener("click", function(e) {
                                    links.forEach(function(link) {
                                        link.classList.remove("is-active");
                                    });
                                    e.target.classList.add("is-active");
                                });
                            });
                        });
                    }
                });

                /***/
            }),

        /***/
        "./assets/scss/styles.scss":
            /*!*********************************!*\
              !*** ./assets/scss/styles.scss ***!
              \*********************************/
            /***/
            ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

                "use strict";
                __webpack_require__.r(__webpack_exports__);
                // extracted by mini-css-extract-plugin


                /***/
            })

        /******/
    });
    /************************************************************************/
    /******/ // The module cache
    /******/
    var __webpack_module_cache__ = {};
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/ // Check if module is in cache
        /******/
        var cachedModule = __webpack_module_cache__[moduleId];
        /******/
        if (cachedModule !== undefined) {
            /******/
            return cachedModule.exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = __webpack_module_cache__[moduleId] = {
            /******/ // no module.id needed
            /******/ // no module.loaded needed
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = __webpack_modules__;
    /******/
    /************************************************************************/
    /******/
    /* webpack/runtime/chunk loaded */
    /******/
    (() => {
        /******/
        var deferred = [];
        /******/
        __webpack_require__.O = (result, chunkIds, fn, priority) => {
            /******/
            if (chunkIds) {
                /******/
                priority = priority || 0;
                /******/
                for (var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
                /******/
                deferred[i] = [chunkIds, fn, priority];
                /******/
                return;
                /******/
            }
            /******/
            var notFulfilled = Infinity;
            /******/
            for (var i = 0; i < deferred.length; i++) {
                /******/
                var [chunkIds, fn, priority] = deferred[i];
                /******/
                var fulfilled = true;
                /******/
                for (var j = 0; j < chunkIds.length; j++) {
                    /******/
                    if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
                        /******/
                        chunkIds.splice(j--, 1);
                        /******/
                    } else {
                        /******/
                        fulfilled = false;
                        /******/
                        if (priority < notFulfilled) notFulfilled = priority;
                        /******/
                    }
                    /******/
                }
                /******/
                if (fulfilled) {
                    /******/
                    deferred.splice(i--, 1)
                    /******/
                    var r = fn();
                    /******/
                    if (r !== undefined) result = r;
                    /******/
                }
                /******/
            }
            /******/
            return result;
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/hasOwnProperty shorthand */
    /******/
    (() => {
        /******/
        __webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/make namespace object */
    /******/
    (() => {
        /******/ // define __esModule on exports
        /******/
        __webpack_require__.r = (exports) => {
            /******/
            if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
                /******/
                Object.defineProperty(exports, Symbol.toStringTag, {
                    value: 'Module'
                });
                /******/
            }
            /******/
            Object.defineProperty(exports, '__esModule', {
                value: true
            });
            /******/
        };
        /******/
    })();
    /******/
    /******/
    /* webpack/runtime/jsonp chunk loading */
    /******/
    (() => {
        /******/ // no baseURI
        /******/
        /******/ // object to store loaded and loading chunks
        /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
        /******/ // [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
        /******/
        var installedChunks = {
            /******/
            "/assets/js/dist/app": 0,
            /******/
            "assets/css/styles": 0
            /******/
        };
        /******/
        /******/ // no chunk on demand loading
        /******/
        /******/ // no prefetching
        /******/
        /******/ // no preloaded
        /******/
        /******/ // no HMR
        /******/
        /******/ // no HMR manifest
        /******/
        /******/
        __webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
        /******/
        /******/ // install a JSONP callback for chunk loading
        /******/
        var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
            /******/
            var [chunkIds, moreModules, runtime] = data;
            /******/ // add "moreModules" to the modules object,
            /******/ // then flag all "chunkIds" as loaded and fire callback
            /******/
            var moduleId, chunkId, i = 0;
            /******/
            if (chunkIds.some((id) => (installedChunks[id] !== 0))) {
                /******/
                for (moduleId in moreModules) {
                    /******/
                    if (__webpack_require__.o(moreModules, moduleId)) {
                        /******/
                        __webpack_require__.m[moduleId] = moreModules[moduleId];
                        /******/
                    }
                    /******/
                }
                /******/
                if (runtime) var result = runtime(__webpack_require__);
                /******/
            }
            /******/
            if (parentChunkLoadingFunction) parentChunkLoadingFunction(data);
            /******/
            for (; i < chunkIds.length; i++) {
                /******/
                chunkId = chunkIds[i];
                /******/
                if (__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
                    /******/
                    installedChunks[chunkId][0]();
                    /******/
                }
                /******/
                installedChunks[chunkId] = 0;
                /******/
            }
            /******/
            return __webpack_require__.O(result);
            /******/
        }
        /******/
        /******/
        var chunkLoadingGlobal = self["webpackChunkakdaian_wordpress_theme"] = self["webpackChunkakdaian_wordpress_theme"] || [];
        /******/
        chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
        /******/
        chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
        /******/
    })();
    /******/
    /************************************************************************/
    /******/
    /******/ // startup
    /******/ // Load entry module and return exports
    /******/ // This entry module depends on other loaded chunks and execution need to be delayed
    /******/
    __webpack_require__.O(undefined, ["assets/css/styles"], () => (__webpack_require__("./assets/js/src/app.js")))
    /******/
    var __webpack_exports__ = __webpack_require__.O(undefined, ["assets/css/styles"], () => (__webpack_require__("./assets/scss/styles.scss")))
    /******/
    __webpack_exports__ = __webpack_require__.O(__webpack_exports__);
    /******/
    /******/
})();