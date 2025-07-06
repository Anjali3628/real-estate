

// general js project js
$(function() {
    "use strict";
    const root = document.documentElement;


    // main theme color setting js
    $('.choose-skin li').on('click', function() {
        const $body = $('body');
        const $this = $(this);
        const existTheme = $('.choose-skin li.active').data('theme');
        $('.choose-skin li').removeClass('active');
        $this.addClass('active');
        $body.attr('data-theme', 'theme-' + $this.data('theme'));
    });
  

    // Monochrome Mode
    $('.monochrome-toggle input:checkbox').on('click', function () {
        if($(this).is(":checked")) {
            $('body').addClass("monochrome");
        } else {
            $('body').removeClass("monochrome");
        }
    });


    // Layout section light/dark toggle js
    function toggleTheme(selector) {
        const element = $(selector);
        if (element.attr('data-bs-theme') === 'none') {
            element.attr('data-bs-theme', 'dark');
        } else {
            element.attr('data-bs-theme', 'none');
        }
    } 
    
});

// Light/Dark
/*!
* Color mode toggler for Bootstrap's docs (https://getbootstrap.com/)
* Copyright 2011-2022 The Bootstrap Authors
* Licensed under the Creative Commons Attribution 3.0 Unported License.
*/


// (() => {
//     'use strict'
//     const storedTheme = localStorage.getItem('theme')
//     const getPreferredTheme = () => {
//         if (storedTheme) {
//             return storedTheme
//         }
    
//         return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
//     }
//     const setTheme = function (theme) {
//         if (theme === 'auto' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
//             document.documentElement.setAttribute('data-bs-theme', 'dark')
//         } else {
//             document.documentElement.setAttribute('data-bs-theme', theme)
//         }
//     }
//     setTheme(getPreferredTheme())
//     const showActiveTheme = theme => {
//         const activeThemeIcon = document.querySelector('.theme-icon-active use')
//         const btnToActive = document.querySelector(`[data-bs-theme-value="${theme}"]`)
//         const svgOfActiveBtn = btnToActive.querySelector('svg use').getAttribute('href')
    
//         document.querySelectorAll('[data-bs-theme-value]').forEach(element => {
//             element.classList.remove('active')
//         })
    
//         btnToActive.classList.add('active')
//         activeThemeIcon.setAttribute('href', svgOfActiveBtn)
//     }
//     window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
//         if (storedTheme !== 'light' || storedTheme !== 'dark') {
//             setTheme(getPreferredTheme())
//         }
//     })
//     window.addEventListener('DOMContentLoaded', () => {
//         showActiveTheme(getPreferredTheme())
    
//         document.querySelectorAll('[data-bs-theme-value]')
//         .forEach(toggle => {
//             toggle.addEventListener('click', () => {
//                 const theme = toggle.getAttribute('data-bs-theme-value')
//                 localStorage.setItem('theme', theme)
//                 setTheme(theme)
//                 showActiveTheme(theme)
//             })
//         })
//     })
// })()




