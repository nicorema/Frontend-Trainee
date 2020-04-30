export default class Component {
  constructor(hostElement, insertBefore = false) {
    this.insertBefore = insertBefore;
    if (hostElement) {
      this.hostElement = document.getElementById(hostElement);
    } else {
      this.hostElement = document.body;
    }
  }
  detach() {
    if (this.element) {
      this.element.remove();
    }
  }
  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}
