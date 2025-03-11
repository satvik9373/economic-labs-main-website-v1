/******/
(() => { // webpackBootstrap
    /*!******************************!*\
      !*** ./assets/js/src/nav.js ***!
      \******************************/
    //Navbar

    document.addEventListener("DOMContentLoaded", function() {
        var html = document.querySelector("html");
        var navbar = document.getElementById("site-navigation");

        // Get all "navbar-burger" elements
        var navbarBurgers = Array.prototype.slice.call(document.querySelectorAll(".navbar-burger"), 0);

        // Check if there are any navbar burgers
        if (navbarBurgers.length > 0) {
            // Add a click event on each of them
            navbarBurgers.forEach(function(el) {
                el.addEventListener("click", function() {
                    // Get the target from the "data-target" attribute
                    var target = el.dataset.target;
                    var $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle("is-active");
                    $target.classList.toggle("is-active");
                    navbar.classList.toggle("is-open");
                    html.classList.toggle("is-clipped-overflow");
                });
            });
        }

        //Mobile Nav Dropdowns
        var dropdowns = document.querySelectorAll(".dropdown-menu");
        if (dropdowns !== "null") {
            dropdowns.forEach(function(dropdown) {
                dropdownToggle = dropdown.querySelector(".dropdown-toggle");
                dropdowns.forEach(function(dropdown) {
                    dropdown.setAttribute("aria-expanded", false);
                });
                dropdownToggle.addEventListener("click", function() {
                    dropdown.classList.toggle("is-open");
                    if (dropdown.getAttribute("aria-expanded") == "true") {
                        dropdown.setAttribute("aria-expanded", false);
                    } else {
                        dropdown.setAttribute("aria-expanded", true);
                    }
                });
            });
        }

        //Submenu Tabs
        var tabs = document.querySelectorAll(".submenu-tabs");
        if (tabs !== "null") {
            tabs.forEach(function(tab) {
                var toggles = tab.querySelectorAll("button");
                var tabCards = tab.querySelectorAll(".submenu-tab");
                toggles.forEach(function(toggle) {
                    toggle.addEventListener("click", function() {
                        var tabTarget = toggle.dataset.target;
                        var $target = document.getElementById(tabTarget);
                        toggles.forEach(function(toggle) {
                            toggle.classList.remove("is-active");
                        });
                        tabCards.forEach(function(tabCard) {
                            tabCard.classList.remove("is-visible");
                        });
                        toggle.classList.add("is-active");
                        $target.classList.add("is-visible");
                        toggle.parentElement.classList.toggle("is-open");
                    });
                });
            });
        }

        //Scroll Trigger for Menu
        var headerStyle = document.querySelector(".header-style");
        var wrapper = document.getElementById("nav-wrapper");
        if (headerStyle !== null) {
            window.addEventListener("scroll", function() {
                if (window.scrollY > 100) {
                    wrapper.classList.remove("light-nav");
                } else {
                    wrapper.classList.add("light-nav");
                }
            });
        }
    });
    /******/
})();