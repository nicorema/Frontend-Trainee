import { DOMHelper } from '../Utility/DOMHelper';
export class ProjectItem {
  
  constructor(id, updateProjectListHandler, type) {
    this.hasActiveToolTip = false;
    this.id = id;
    this.updateProjectListHandler = updateProjectListHandler;
    this.connectSwitchButton(type);
    this.connectMoreInfoButton();
    this.connectDrag();
  }

  connectDrag() {
    const item = document.getElementById(this.id);
    item.addEventListener('dragstart', event => {
      event.dataTransfer.setData('text/plain', this.id);
      event.dataTransfer.effectAllowed = 'move';
    });
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener(
      'click',
      this.updateProjectListHandler.bind(null, this.id)
    );
  }

  showMoreInfoHandler() {
    if (this.hasActiveToolTip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const toolTipText = projectElement.dataset.extraInfo;
    import('./ToolTip').then(module => {
      const tooltip = new module.ToolTip(
        () => (this.hasActiveToolTip = false),
        toolTipText,
        this.id
      );
      tooltip.attach();
      this.hasActiveToolTip = true;
    });
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      'button:first-of-type'
    );
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
  }

  update(updateProjectListHandler, type) {
    this.updateProjectListHandler = updateProjectListHandler;
    this.connectSwitchButton(type);
  }
}
