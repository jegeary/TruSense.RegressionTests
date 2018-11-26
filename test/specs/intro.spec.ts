import Intro from '../pages/intro.page';
import Login from '../pages/login.page';
import action from '../helpers/actions';
import {expect} from 'chai';
import help from '../helpers/helpers';

describe('getting through the Intro screens', () => {
    it('should take user to login screen', () => {
        help.waitForSplashScreen();
        help.getThroughIntroScreens();
        browser.pause(5000);
        expect(browser.getText(Login.CreateNewAccountButton)).to.contain('CREATE A NEW ACCOUNT');
    });

});
