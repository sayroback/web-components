const template = document.createElement("div");
template.innerHTML = `
  <style>
    .texto {
      color: red;
    }
    p {
      color: blue;
    }
  </style>
  <p class="texto">Hola mundo DOS!!!</p>
  <p>texto ejemplo para la clase!</p>
`;

export class myElement extends HTMLElement {
  constructor() {
    super();
    console.log("Soy un componente");

    this.p = document.createElement("p");
  }
  connectedCallback() {
    this.p.textContent = "Hola mundo";
    this.appendChild(this.p);
    this.appendChild(template);
  }
}
customElements.define("my-element", myElement);
