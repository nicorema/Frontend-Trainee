const template = `
  <style>
    :host{
      background:#ccc;
      position:relative;
    }  
    :host(.important){
      border: solid 1px black;
      padding:5px;
      font-weight:bold;
    }    
    :host-context(p){
      background:#a4fcfa;
    }
    div{
      font-weight:normal;
      background-color:black;
      color:white;
      position:absolute;
      top: 1.5rem;
      left: 0.75rem;
      z-index:10;
      padding:0.15rem;
      border-radius:3px;
      box-shadow: 1px 1px 6px rgba(0,0,0,0.26);
    }

    .icon{
      background:black;
      color:white;
      padding: 0.15rem 0.5rem;
      text-align:center;
      border-radius:50%;
    }
  </style>

  <slot></slot>
  <span class=icon>?</span>
  `;

class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipIcon;
    this._tooltipText = 'Default tooltip text';
    this._tooltipVisible = false;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;
  }
  connectedCallback() {
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }
    this._tooltipIcon = this.shadowRoot.querySelector('span');
    this._tooltipIcon.addEventListener(
      'mouseenter',
      this._showTooltip.bind(this)
    );
    this._tooltipIcon.addEventListener(
      'mouseleave',
      this._hideTooltip.bind(this)
    );
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }
    if (name === 'text') {
      this._tooltipText = newValue;
    }
  }

  static get observedAttributes() {
    return ['text'];
  }

  disconnectedCallback() {
    this._tooltipIcon.removeEventListener(
      'mouseenter',
      this._showTooltip.bind(this)
    );
    this._tooltipIcon.removeEventListener(
      'mouseleave',
      this._hideTooltip.bind(this)
    );
  }

  _render() {
    let tooltipContainer = this.shadowRoot.querySelector('div');
    if (this._tooltipVisible) {
      tooltipContainer = document.createElement('div');
      tooltipContainer.textContent = this._tooltipText;
      this.shadowRoot.appendChild(tooltipContainer);
    } else {
      if(tooltipContainer){
      this.shadowRoot.removeChild(tooltipContainer);
      }
    }
  }

  _showTooltip() {
    this._tooltipVisible = true;
    this._render();
  }
  _hideTooltip() {
    this._tooltipVisible = false;
    this._render();
  }
}

customElements.define('uc-tooltip', Tooltip);
