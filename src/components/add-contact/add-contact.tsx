import { Component, h, State, Prop } from "@stencil/core";

@Component({
  tag: "form-add-contact",
  styleUrl: "add-contact.css",
  shadow: true
})
export class AddContact {
  @State() state: { name: string; number: string } = {
    name: null,
    number: null
  };

  @Prop({ reflect: true }) fetchAddItem: { AddItem: Function };

  handleSubmit = async e => {
    e.preventDefault();
    this.fetchAddItem.AddItem(this.state);
  };

  onHandleChange = e => {
    this.state = { ...this.state, [e.target.name]: e.target.value };
  };

  render() {
    return (
      <div class="wrapper-form">
        <form onSubmit={this.handleSubmit} class="form">
          <input
            onChange={this.onHandleChange}
            name="name"
            class="form__input"
            type="text"
            value={this.state.name}
          />
          <input
            onChange={this.onHandleChange}
            name="number"
            class="form__input"
            type="number"
            value={this.state.number}
          />
          <button type="submit" class="form__button">
            Add contact
          </button>
        </form>
      </div>
    );
  }
}
