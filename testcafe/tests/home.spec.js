import { Selector } from 'testcafe';
import config from '../config';

fixture `Home Page`
    .page `${config.env.baseUrl}/`;

test('Check Home page', async t => {
    await t
        .expect(Selector('.navbar-brand').innerText).eql('LearnerBot');
});