parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";var e=document.querySelector("table"),r=document.querySelector(".append-row"),l=document.querySelector(".remove-row"),t=document.querySelector(".append-column"),n=document.querySelector(".remove-column");r.addEventListener("click",function(){var t=e.rows.length;if(t<10){for(var n=e.insertRow(),o=0;o<e.rows[0].cells.length;o++)n.insertCell();t+1===10&&(r.disabled=!0),2===t&&(l.disabled=!1)}}),l.addEventListener("click",function(){var t=e.rows.length;t>2&&(e.deleteRow(t-1),t-1==2&&(l.disabled=!0),10===t&&(r.disabled=!1))}),t.addEventListener("click",function(){var r=e.rows[0].cells.length;if(r<10){for(var l=0;l<e.rows.length;l++)e.rows[l].insertCell();r+1===10&&(t.disabled=!0),2===r&&(n.disabled=!1)}}),n.addEventListener("click",function(){var r=e.rows[0].cells.length;if(r>2){for(var l=0;l<e.rows.length;l++)e.rows[l].deleteCell(r-1);r-1==2&&(n.disabled=!0),10===r&&(t.disabled=!1)}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.444028f4.js.map