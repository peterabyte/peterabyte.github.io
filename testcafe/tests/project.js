import { Selector } from 'testcafe';
import config from '../config';
import HomePage from '../home-page-model';
import ProjectPage from '../project-page-model';

fixture `Project Pages`
    .page `${config.env.baseUrl}/`;

const homePage = new HomePage();
const projectPage = new ProjectPage();

for (const project of homePage.projectList) {
    test('Visit project page via title [' + project.id + ']', async t => {
        await t
            .click(project.linkTitle)
            .expect(projectPage.readmeContent.visible).ok();
    });
}

for (const project of homePage.projectList) {
    test('Visit project page via read more [' + project.id + ']', async t => {
        await t
            .click(project.linkReadMore)
            .expect(projectPage.readmeContent.visible).ok();
    });
}

for (const project of homePage.projectList) {
    test('Visit project source page [' + project.id + ']', async t => {
        await t
            .click(project.linkGotoSource)
            .expect(Selector('title').innerText).notEql('Page not found · GitHub');
    });
}