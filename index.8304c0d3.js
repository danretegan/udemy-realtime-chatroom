var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequire8bbc;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var s={id:e,exports:{}};return n[e]=s,r.call(s.exports,s,s.exports),s.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},e.parcelRequire8bbc=r),r.register("l2tq5",(function(e,n){var t,r,s,i;t=e.exports,r="ChatUI",s=function(){return a},Object.defineProperty(t,r,{get:s,set:i,enumerable:!0,configurable:!0});class a{constructor(e){this.list=e}render(e){const n=`\n    <li class="list-group-item">\n      <span class="username">${e.username}:</span>\n      <span class="message">${e.message}</span>\n      <div class="time">${e.created_at.toDate()}</div>\n    </li>\n    `;this.list.innerHTML+=n}}})),r("l2tq5");
//# sourceMappingURL=index.8304c0d3.js.map
