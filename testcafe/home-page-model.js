import { Selector } from 'testcafe';

class Project {
    constructor(id) {
        this.id = id;
        this.linkTitle = Selector('a.project-item-title[data-project-id=' + id + ']');
        this.linkReadMore = Selector('a.project-item-read-more[data-project-id=' + id + ']');
        this.linkGotoSource = Selector('a.project-item-goto-source[data-project-id=' + id + ']');
    }
}

export default class Page {
    constructor() {
        this.title = Selector('title');
        this.menuItemHome = Selector('a[data-menu-item=home]');
        this.menuItemAbout = Selector('a[data-menu-item=about]');
        this.menuItemProjects = Selector('a[data-menu-item=projects]');
        this.sectionAbout = Selector('#about');
        this.sectionProjects = Selector('#projects');
        this.projectList = [
            new Project('learnerbot_github_io'),
            new Project('angular'),
            new Project('spring_boot'),
            new Project('spring_boot_security'),
            new Project('spring_boot_mongodb'),
            new Project('spring_dynamic_language_support'),
            new Project('selenium'),
            new Project('d3js'),
            new Project('nodejs'),
            new Project('nodejs_handlebars'),
            new Project('nodejs_in_docker'),
            new Project('wordpress_on_heroku'),
            new Project('laravel_on_heroku'),
            new Project('php_in_docker'),
            new Project('java_in_docker')
        ];
    }
}