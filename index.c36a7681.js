const e=new class{constructor(e,s){this.room=e,this.username=s,this.chats=db.collection("chats"),this.unsubscribe}async addChat(e){const s=new Date,t={message:e,username:this.username,room:this.room,created_at:firebase.firestore.Timestamp.fromDate(s)};return await this.chats.add(t)}getChats(e){this.unsubscribe=this.chats.where("room","==",this.room).orderBy("created_at").onSnapshot((s=>{s.docChanges().forEach((s=>{"added"===s.type&&e(s.doc.data())}))}))}updateName(e){this.username=e}updateRoom(e){this.room=e,console.log("room updated!"),this.unsubscribe&&this.unsubscribe()}}("general","shaun");e.getChats((e=>{console.log(e)})),setTimeout((()=>{e.updateRoom("gaming"),e.updateName("DAN"),e.getChats((e=>console.log(e))),e.addChat("HELLO FROM NEW CHATROOM!")}),3e3);
//# sourceMappingURL=index.c36a7681.js.map
