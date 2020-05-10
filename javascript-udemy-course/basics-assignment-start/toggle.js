const template = `
  <style>
    p {
      display: none;
    }
    .show {
      display: block;
    }
  </style>

  <button>Show</button>
  <p id="info-box"><slot>More infos!</slot></p>`;

class Toggle extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
    this._btn = this.shadowRoot.querySelector('button')
    this._paragraph = this.shadowRoot.getElementById('info-box');
    this._btn.addEventListener('click', this.toggleInfoVisibility.bind(this));
  }

  connectedCallback() {
    this._paragraph.className = this.hasAttribute('is-visible') ? 'show' : null;
  }

  toggleInfoVisibility() {
    this._paragraph.classList.toggle('show');
  }
}

customElements.define('uc-toggle', Toggle);
