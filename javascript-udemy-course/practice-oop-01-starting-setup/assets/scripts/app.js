class DOMHelper {
  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);
  }

  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }
}

class Component {
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

class ToolTip extends Component {
  constructor(closeNotifierHandler) {
    super(null,true);
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
    toolTipElement.textContent = 'Dummy';
    toolTipElement.addEventListener('click', this.closeToolTip.bind(this));
    this.element = toolTipElement;
    this.attach();
  }
}

class ProjectItem {
  hasActiveToolTip = false;

  constructor(id, updateProjectListHandler, type) {
    this.id = id;
    this.updateProjectListHandler = updateProjectListHandler;
    this.connectSwitchButton(type);
    this.connectMoreInfoButton();
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
    const tooltip = new ToolTip(() => (this.hasActiveToolTip = false));
    tooltip.attach();
    this.hasActiveToolTip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      'button:first-of-type'
    );
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);
  }

  update(updateProjectListHandler, type) {
    this.updateProjectListHandler = updateProjectListHandler;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];
  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const item of prjItems) {
      this.projects.push(
        new ProjectItem(item.id, this.switchProject.bind(this), this.type)
      );
    }
  }

  setSwitchHandler(switchHandler) {
    this.switchHandler = switchHandler;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    this.switchHandler(this.projects.find(p => p.id === projectId));
    this.projects = this.projects.filter(p => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');

    activeProjectList.setSwitchHandler(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
    finishedProjectList.setSwitchHandler(
      activeProjectList.addProject.bind(activeProjectList)
    );
  }
}

App.init();
