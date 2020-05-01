import Component from './Component';

export class ToolTip extends Component {
  constructor(closeNotifierHandler, toolTipText, hostElementId) {
    super(hostElementId);
    this.toolTipText = toolTipText;
    this.closeNotifierHandler = closeNotifierHandler;
    this.createToolTip();
  }

  closeToolTip() {
    this.detach();
    this.closeNotifierHandler();
  }

  createToolTip() {
    const toolTipElement = document.createElement('div');
    toolTipElement.classList.add('card');
    const tooltipTemplate = document.getElementById('tooltip');
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector('p').textContent = this.toolTipText;
    toolTipElement.append(tooltipBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - 10 - parentElementScrolling;

    toolTipElement.style.position = 'absolute';
    toolTipElement.style.left = x + 'px';
    toolTipElement.style.top = y + 'px';

    toolTipElement.addEventListener('click', this.closeToolTip.bind(this));
    this.element = toolTipElement;
    this.attach();
  }
}
