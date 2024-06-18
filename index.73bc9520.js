var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequire8bbc;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var o=r[e];delete r[e];var t={id:e,exports:{}};return n[e]=t,o.call(t.exports,t,t.exports),t.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){r[e]=n},e.parcelRequire8bbc=o);var t=o("l2tq5"),l=o("XBdqf");
//! DOM queries:
const i=document.querySelector(".chat-list"),a=new(0,t.ChatUI)(i);
//! class instances:
//! get the chats and render:
new(0,l.Chatroom)("general","shaun").getChats((e=>{a.render(e)}));
//# sourceMappingURL=index.73bc9520.js.map
