import { Component, State, h } from "@stencil/core";

@Component({
  tag: "custom-clock"
})
export class CustomClock {
  @State() time: number = 1;

  connectedCallback(){
    console.log("connectedCallback")
  }

  componentDidLoad() {
    console.log("componentDidLoad");
  }

  componentWillLoad() {
    console.log("componentWillLoad");
  }

  componentDidUnload() {
    // window.clearInterval(this.timer);
    console.log("componentDidUnload");
  }

  componentWillRender() {
    console.log("componentWillRender");
  }

  componentDidRender() {
    console.log("componentDidRender");
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  handleClick = () => {
    this.time = this.time + 1;
  };

  render() {
    console.log("render");
    // const time = new Date(this.time).toLocaleTimeString();

    return <span onClick={this.handleClick}>{this.time}</span>;
  }
}
