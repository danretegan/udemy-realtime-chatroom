// TODO adding new chat documents
// TODO setting up a real-time listener to get new chats
// TODO updating the username
// TODO updating the room

class Chatroom {
  constructor(room, username) {
    this.room = room;
    this.username = username;
    this.chats = db.collection('chats');
  }
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
}

const chatroom = new Chatroom('gaming', 'shaun');

chatroom
  .addChat('hello everyone!')
  .then(() => {
    console.log('chat added!');
  })
  .catch(err => {
    console.log(err);
  });
