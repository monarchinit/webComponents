import { Component, h, State } from "@stencil/core";
import operations from "../../operations/operations";

interface contact {
  name: string;
  number: string;
  id: string;
}
@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true
})
export class AppRoot {
  @State() contacts: Array<contact> = [];

  componentDidLoad = async () => {
    const response = await operations.getAllItems();
    if (response.data === null) {
      this.contacts = [];
      return;
    }
    const post = Object.keys(response.data)
      .map(post => ({
        ...response.data[post],
        id: post
      }))
      .reverse();
    this.contacts = post;
  };

  fetchAddItem = async (data: { name?: string; number?: string }) => {
    if (!data.name || !data.number) {
      alert("ENTER DATA");
      return;
    }
    const res = await operations.addItem(data);
    const resObj: { name: string; number: string } = JSON.parse(
      res.config.data
    );
    this.contacts = [...this.contacts, { ...resObj, id: res.data.name }];
  };

  fetchDeleteItem = async (id: string) => {
    await operations.deleteItem(id);
    this.contacts = this.contacts.filter(e => e.id !== id);
  };
  render() {
    return (
      <div>
        <header>
          <h1>Phone Book</h1>
        </header>
        <main>
          <form-add-contact
            fetchAddItem={{ AddItem: this.fetchAddItem }}
          ></form-add-contact>
          {this.contacts.length ? (
            <list-contact
              fetchDeleteItem={{ deleteItem: this.fetchDeleteItem }}
              contacts={this.contacts}
            ></list-contact>
          ) : null}
        </main>
      </div>
    );
  }
}
