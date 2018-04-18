import { Selector } from 'testcafe';

export default class ProjectPage {
    constructor() {
        this.title = Selector('title');
        this.readmeContent = Selector('.readme-content.readme-content-loaded');
        this.error = Selector('.project-error');
    }
}