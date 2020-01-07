
class PopUpInfo extends HTMLElement {
    constructor() {
        super();
        let template = document.getElementById("my-template").content;
        const shadow = this.attachShadow({ mode: 'open' })
            .appendChild(template.cloneNode(true));
        
    }

    connectedCallback(){
        const graph = this.getAttribute('graph');
    }

}

//Registering the element
customElements.define('nico-popup', PopUpInfo);
