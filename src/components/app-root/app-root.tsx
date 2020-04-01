import { Component, h, State, Watch } from "@stencil/core";
import operations from "../../operations/operations";

@Component({
  tag: "app-root",
  styleUrl: "app-root.css",
  shadow: true
})
export class AppRoot {
  @State() contacts: { name: string; number: string; id: string }[] = [];

  @Watch() contacts;

  componentDidLoad = async () => {
    const response = await operations.getAllItems();

    const post = Object.keys(response.data)
      .map(post => ({
        ...response.data[post],
        id: post
      }))
      .reverse();
    // console.log(post);
    this.contacts = post[1];
  };

  fetchAddItem = async data => {
    const res: object = await operations.addItem(data);
    console.log(res);
  };
  render() {
    console.log(this.contacts);
    return (
      <div>
        <header>
          <h1>Phone Book</h1>
        </header>
        <main>
          <form-add-contact
            fetchAddItem={{ AddItem: this.fetchAddItem }}
          ></form-add-contact>
        </main>
      </div>
    );
  }
}
