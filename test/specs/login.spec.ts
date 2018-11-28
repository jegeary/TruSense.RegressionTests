import Intro from '../pages/intro.page';
import Login from '../pages/login.page';
import action from '../helpers/actions';
import {expect} from 'chai';
import help from '../helpers/helpers';

describe('Login Screen', () => {
    it('should log me in', () => {
        help.waitForSplashScreen();
        help.getThroughIntroScreens();
        Login.FillOutLoginForm('jarrodgeary@gmail.com', 'Trusense#1234');
        let password = browser.getText(Login.Password);
        expect(password).to.equal('Trusense#1234');
        Login.TapLoginButton();
        browser.pause(5000);
        expect(browser.element(help.FabSelector).isVisibleWithinViewport()).to.be.true;

    });

});