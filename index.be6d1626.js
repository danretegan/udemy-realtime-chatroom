var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},r=e.parcelRequire8bbc;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var s={id:e,exports:{}};return t[e]=s,r.call(s.exports,s,s.exports),s.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire8bbc=r),(0,r.register)("l2tq5",function(e,t){Object.defineProperty(e.exports,"ChatUI",{get:function(){return n},set:void 0,enumerable:!0,configurable:!0});class n{constructor(e){this.list=e}clear(){this.list.innerHTML=""}render(e){let t=dateFns.distanceInWordsToNow(e.created_at.toDate(),{addSuffix:!0}),n=`
    <li class="list-group-item">
      <span class="username">${e.username}:</span>
      <span class="message">${e.message}</span>
      <div class="time">${t}</div>
    </li>
    `;this.list.innerHTML+=n}}}),r("l2tq5");
//# sourceMappingURL=index.be6d1626.js.map
