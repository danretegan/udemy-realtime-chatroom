var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},o=e.parcelRequire8bbc;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in r){var o=r[e];delete r[e];var s={id:e,exports:{}};return t[e]=s,o.call(s.exports,s,s.exports),s.exports}var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(e,t){r[e]=t},e.parcelRequire8bbc=o),o.register("XBdqf",(function(e,t){var r,o,s,a;r=e.exports,o="Chatroom",s=function(){return n},Object.defineProperty(r,o,{get:s,set:a,enumerable:!0,configurable:!0});class n{constructor(e,t){this.room=e,this.username=t,this.chats=db.collection("chats"),this.unsubscribe}async addChat(e){const t=new Date,r={message:e,username:this.username,room:this.room,created_at:firebase.firestore.Timestamp.fromDate(t)};return await this.chats.add(r)}getChats(e){this.unsubscribe=this.chats.where("room","==",this.room).orderBy("created_at").onSnapshot((t=>{t.docChanges().forEach((t=>{"added"===t.type&&e(t.doc.data())}))}))}updateName(e){this.username=e}updateRoom(e){this.room=e,console.log("room updated!"),this.unsubscribe&&this.unsubscribe()}}})),o("XBdqf");
//# sourceMappingURL=index.4d898432.js.map
