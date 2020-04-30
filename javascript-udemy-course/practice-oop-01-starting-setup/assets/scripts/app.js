import { ProjectList } from './App/ProjectList.js';

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

    const analyticsTimeout = setTimeout(this.startAnalytics, 3000);
    document
      .getElementById('stop-analytics-btn')
      .addEventListener('click', () => {
        clearTimeout(analyticsTimeout);
      });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement('script');
    analyticsScript.src = 'assets/scripts/Utility/Analytics.js';
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
