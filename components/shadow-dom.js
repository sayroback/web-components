export class myElementTemplate extends HTMLElement {
  constructor() {
    super();
    console.log("Soy un componente Template");
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>Hola mundo!!</h2>
        <div>
          <p>Soy un template</p>
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
          color: pink;
        }
        p {
          color: black;
        }
      </style>
    `;
  }
  render() {
    this.appendChild(this.getTemplate().content.cloneNode(true));
  }
  connectedCallback() {
    this.render();
  }
}
customElements.define("my-element-template", myElementTemplate);
