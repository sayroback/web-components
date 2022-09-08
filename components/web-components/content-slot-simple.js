export class contentSlotSimple extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    console.log("content-slot");
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2><slot></slot></h2>
        <div>
          <p>content-slot</p>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
      <style>
        h2 {
          color: blue;
        }
        p {
          color: red;
        }
      </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("content-slot-simple", contentSlotSimple);
