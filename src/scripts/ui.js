// TODO render new chat templates to the DOM
// TODO clear the list of chats (when the room changes)

export class ChatUI {
  constructor(list) {
    this.list = list;
  }

  //! metoda clear messages list:
  clear() {
    this.list.innerHTML = '';
  }

  //! metoda render:
  render(data) {
    const when = dateFns.distanceInWordsToNow(data.created_at.toDate(), {
      addSuffix: true,
    });
    const html = `
    <li class="list-group-item">
      <span class="username">${data.username}:</span>
      <span class="message">${data.message}</span>
      <div class="time">${when}</div>
    </li>
    `;

    this.list.innerHTML += html;
  }
}
