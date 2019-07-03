
class PopUpInfo extends HTMLElement {
    constructor() {
        super();
        let template = document.getElementById("my-template").content;
        const shadow = this.attachShadow({ mode: 'open' })
            .appendChild(template.cloneNode(true));
        
    }

}

//Registering the element
customElements.define('nico-popup', PopUpInfo);
