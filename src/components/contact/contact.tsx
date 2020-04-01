import { Component, h, Prop } from "@stencil/core";

@Component({
  tag: "list-contact",
  styleUrl: "contact.css",
  shadow: true
})
export class Contact {
  @Prop() contacts: {
    name: string;
    number: string;
    readonly id: string;
  }[];
  @Prop() fetchDeleteItem: { deleteItem: Function };

  onHandleClick = e => {
    this.fetchDeleteItem.deleteItem(e.target.id);
  };

  render() {
    return (
      <ul class="list">
        {this.contacts.map(e => (
          <li class="list__item">
            <p>{e.name}</p>
            <p>{e.number}</p>
            <button class="list__button" onClick={this.onHandleClick} id={e.id}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    );
  }
}
