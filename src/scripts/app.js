import { ChatUI } from './ui.js';
import { Chatroom } from './chat.js';

//! DOM queries:
const chatList = document.querySelector('.chat-list');
const newChatForm = document.querySelector('.new-chat');
const newNameForm = document.querySelector('.new-name');
const upadateMssg = document.querySelector('.update-mssg');

//! add a new chat:
newChatForm.addEventListener('submit', e => {
  e.preventDefault();

  //! pentru ca id-ul sau numele campului input este message putem folosi metoda .message:
  const message = newChatForm.message.value.trim();
  chatroom
    .addChat(message)
    .then(() => {
      newChatForm.reset();
    })
    .catch(err => {
      console.log(err);
    });
});

//! update username:
newNameForm.addEventListener('submit', e => {
  e.preventDefault();

  //! update name via chatroom (pentru ca id-ul sau numele campului input este name putem folosi metoda .name):
  const newName = newNameForm.name.value.trim();
  chatroom.updateName(newName);

  //! reset the form:
  newNameForm.reset();

  //! show and hide the update message:
  upadateMssg.innerText = `Your name was updated to ${newName}`;
  setTimeout(() => {
    upadateMssg.innerText = '';
  }, 3000);
});

//! check local stoarege for a username:
const username = localStorage.username ? localStorage.username : 'Anonimus';

//! class instances:
const chatUI = new ChatUI(chatList);
const chatroom = new Chatroom('general', username);

//! get the chats and render:
chatroom.getChats(data => {
  // console.log(data);
  chatUI.render(data);
});
