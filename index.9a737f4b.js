var e,t,n,r,o,a,u,i,c,l,d,s,f,m;t={},n={},null==(r=(e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire8bbc)&&((r=function(e){if(e in t)return t[e].exports;if(e in n){var r=n[e];delete n[e];var o={id:e,exports:{}};return t[e]=o,r.call(o.exports,o,o.exports),o.exports}var a=Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){n[e]=t},e.parcelRequire8bbc=r),r.register,o=r("lWEnm"),a=r("5nzgT"),u=document.querySelector(".chat-list"),i=document.querySelector(".new-chat"),c=document.querySelector(".new-name"),l=document.querySelector(".update-mssg"),d=document.querySelector(".chat-rooms"),i.addEventListener("submit",function(e){e.preventDefault();var t=i.message.value.trim();m.addChat(t).then(function(){i.reset()}).catch(function(e){console.log(e)})}),c.addEventListener("submit",function(e){e.preventDefault();var t=c.name.value.trim();m.updateName(t),c.reset(),l.innerText="Your name was updated to ".concat(t),setTimeout(function(){l.innerText=""},3e3)}),d.addEventListener("click",function(e){"BUTTON"===e.target.tagName&&(f.clear(),m.updateRoom(e.target.getAttribute("id")),m.getChats(function(e){f.render(e)}))}),s=localStorage.username?localStorage.username:"Anonimus",f=new o.ChatUI(u),(m=new a.Chatroom("general",s)).getChats(function(e){f.render(e)});
//# sourceMappingURL=index.9a737f4b.js.map
