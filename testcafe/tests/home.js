import { Selector } from 'testcafe';
import config from '../config';
import HomePage from '../home-page-model';

fixture `Home Page`
    .page `${config.env.baseUrl}/`;

const page = new HomePage();

test('Visit Home page', async t => {
    await t
        .expect(page.title.innerText).eql('LearnerBot - Home');
});

test('Clickable home menu', async t => {
    await t
        .click(page.menuItemHome)
        .expect(page.title.innerText).eql('LearnerBot - Home');
});

test('Clickable about menu', async t => {
    await t
        .click(page.menuItemAbout)
        .expect(page.title.innerText).eql('LearnerBot - Home');
});

test('Clickable projects menu', async t => {
    await t
        .click(page.menuItemProjects)
        .expect(page.title.innerText).eql('LearnerBot - Home');
});