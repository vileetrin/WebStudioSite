(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=i(e);fetch(e.href,o)}})();const d=document.querySelector(".modal-close-btn"),l=document.querySelector(".backdrop"),u=document.querySelector(".mobile-menu-close-btn"),s=document.querySelector(".mobile-menu-wrapper"),a=document.querySelector(".mobile-open-btn"),p=document.querySelector(".order-button");function f(){console.log("closeModal called"),l.classList.remove("is-open")}function m(){console.log("closeMobileMenu called"),s.classList.remove("is-open")}function b(){console.log("openMobileMenu called"),s.classList.add("is-open")}function y(){console.log("openModal called"),l.classList.add("is-open")}d.addEventListener("click",f);u.addEventListener("click",m);a.addEventListener("click",b);p.addEventListener("click",function(r){r.preventDefault(),y()});
//# sourceMappingURL=commonHelpers.js.map