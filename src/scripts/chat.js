// TODO adding new chat documents
// TODO setting up a real-time listener to get new chats
// TODO updating the username
// TODO updating the room

export class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
    this.unsubscribe;
  }

  //*   metoda addChat (adauga un mesaj):
  async addChat(message) {
    //* format a chat object:
    const now = new Date();
    const chat = {
      message: message,
      username: this.username,
      room: this.room,
      created_at: firebase.firestore.Timestamp.fromDate(now), // Setăm data curentă.
    };

    //* save the chat document:
    const response = await this.chats.add(chat);
    return response;
  }

  //* metoda getChats (actualizeaza in timp real mesajele):
  getChats(callback) {
    this.unsubscribe = this.chats
      .where('room', '==', this.room)
      .orderBy('created_at')
      .onSnapshot(snapshot => {
        snapshot.docChanges().forEach(elem => {
          if (elem.type === 'added') {
            //* update the UI:
            callback(elem.doc.data());
          }
        });
      });
  }

  //*   metoda update username:
  updateName(username) {
    this.username = username;
    localStorage.setItem('username', username);
  }

  //*   update the chatroom:
  updateRoom(room) {
    this.room = room;
    console.log('room updated!');
    if (this.unsubscribe) {
      this.unsubscribe();
    }
  }
}
