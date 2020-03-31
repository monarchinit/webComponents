import { Component, h, State } from "@stencil/core";

@Component({
  tag: "my-first-component"
})
export class MyComponent {
  @State() flag: boolean = false;

  handleClick=()=> {
    this.flag = !this.flag;
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>timer</button>
        {this.flag && <custom-clock></custom-clock>}
      </div>
    );
  }
}
