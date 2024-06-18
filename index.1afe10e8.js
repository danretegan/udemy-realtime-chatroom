!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},o=e.parcelRequire8bbc;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in r){var o=r[e];delete r[e];var t={id:e,exports:{}};return n[e]=t,o.call(t.exports,t,t.exports),t.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){r[e]=n},e.parcelRequire8bbc=o);var t=o("lWEnm"),i=o("5nzgT"),l=document.querySelector(".chat-list"),a=new(0,t.ChatUI)(l);
//! get the chats and render:
new(0,i.Chatroom)("general","shaun").getChats((function(e){a.render(e)}))}();
//# sourceMappingURL=index.1afe10e8.js.map
