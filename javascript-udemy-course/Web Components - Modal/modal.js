const template = `
  <style>
    :host([opened]) #backdrop, :host([opened]) #modal{
    opacity:1;
    pointer-events:all;
    }

    :host([opened]) #modal{
      top:15vh;
    }
    #backdrop{
      position:fixed;
      top:0;
      left:0;
      width:100vw;
      height:100vh;
      background: rgba(0,0,0,0.75);
      z-index:10;
      opacity:0;
      pointer-events:none;
    }

    #modal{
      position:fixed;
      z-index:100;
      top:10vh;
      left:25%;
      width:50%;
      background:white;
      border-radius:3px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.26);
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      opacity:0;
      pointer-events:none;
      transition: all 0.3s ease-out;

    }

    header{
      padding: 1rem;
      border-bottom: 1px solid #ccc;
    }

    ::slotted(h1){
      font-size:1.25rem
      margin:0;
    }

    main{
      padding:1rem;
    }

    #actions{
      border-top:1px solid #ccc;
      padding:1rem;
      display:flex;
      justify-content:flex-end;
    }

    #actions button{
      margin: 0 0.25rem;
    }
  </style>

  <div id="backdrop"></div>
  <div id="modal">

    <header>
      <slot name="title">Please confirm</slot>
    </header>

    <main>
      <slot></slot>
    </main>

    <section id="actions">
      <button id="cancel-btn">Cancel</button>
      <button id="confirm-btn">Okay</button>
    </section>
  </div>
`;

class Modal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = template;

    const slots = this.shadowRoot.querySelectorAll('slot');
    slots[1].addEventListener('slotchange', event => {
      console.dir(slots[1].assignedNodes());
    });

    this.createListeners();
  }

  createListeners() {
    const cancelBtn = this.shadowRoot.getElementById('cancel-btn');
    const confirmBtn = this.shadowRoot.getElementById('confirm-btn');
    const backdrop = this.shadowRoot.getElementById('backdrop');

    backdrop.addEventListener('click',this.close.bind(this));
    cancelBtn.addEventListener('click', this._cancel.bind(this));
    confirmBtn.addEventListener('click', this._confirm.bind(this));
  }

  open() {
    this.setAttribute('opened', '');
  }

  close() {
    this.removeAttribute('opened');
  }

  _cancel(){
    this.close();
    const cancelEvent = new Event('cancel');
    this.dispatchEvent(cancelEvent);

  }
  _confirm(){
    this.close();
    const confirmEvent = new Event('confirm');
    this.dispatchEvent(confirmEvent);
  }
}

customElements.define('uc-modal', Modal);
