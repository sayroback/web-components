export class atributosElementos extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.title = this.getAttribute("title");
    this.parrafo = this.getAttribute("parrafo");
    this.img = this.getAttribute("img");
    console.log("content-slot");
  }
  getTemplate() {
    const template = document.createElement("template");
    template.innerHTML = `
      <section>
        <h2>${this.title}</h2>
        <div>
          <p>${this.parrafo}</p>
          <img src=${this.img} alt="imagen" />
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
customElements.define("atributos-elementos", atributosElementos);
