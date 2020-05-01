import {ProjectItem} from './ProjectItem';
import {DOMHelper} from '../Utility/DOMHelper';
export class ProjectList {
  constructor(type) {
    this.projects = [];
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const item of prjItems) {
      this.projects.push(
        new ProjectItem(item.id, this.switchProject.bind(this), this.type)
      );
    }
    this.connectDroppable();
  }

  connectDroppable() {
    const list = document.querySelector(`#${this.type}-projects ul`);
    list.addEventListener('dragenter', event => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
        list.parentElement.classList.add('droppable');
      }
    });
    list.addEventListener('dragover', event => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        event.preventDefault();
      }
    });
    list.addEventListener('dragleave', event => {
      if (
        event.relatedTarget.closest &&
        event.relatedTarget.closest(`#${this.type}-projects ul`) !== list
      ) {
        list.parentElement.classList.remove('droppable');
      }
    });
    list.addEventListener('drop', event => {
      event.preventDefault();
      const prjId = event.dataTransfer.getData('text/plain');
      list.parentElement.classList.remove('droppable');
      if (this.projects.find(p => p.id === prjId)) {
        return;
      }
      document
        .getElementById(prjId)
        .querySelector('button:last-of-type')
        .click();
      //event.preventDefault();
    });
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
