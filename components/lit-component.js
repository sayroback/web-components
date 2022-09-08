import { LitElement, html, css } from "lit";

export class LitComponent extends LitElement {
  static styles = [
    css`
      :host {
        display: block;
      }
    `,
  ];

  render() {
    return html` <div><h1>hola soy un componente Lit</h1></div> `;
  }
}
customElements.define("lit-component", LitComponent);
