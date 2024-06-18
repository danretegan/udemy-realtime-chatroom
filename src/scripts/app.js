import { ChatUI } from './ui.js';
import { Chatroom } from './chat.js';

//! DOM queries:
const chatList = document.querySelector('.chat-list');

//! class instances:
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', 'shaun');

//! get the chats and render:
chatroom.getChats(data => {
  // console.log(data);
  chatUI.render(data);
});
