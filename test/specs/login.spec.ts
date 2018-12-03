import Intro from '../pages/intro.page';
import Login from '../pages/login.page';
import action from '../helpers/actions';
import AccountType from '../pages/type-of-account.page';
import {expect} from 'chai';
import help from '../helpers/helpers';
import TellUsAboutYourself from '../pages/tell-us-about-yourself.page';

describe('Login Screen', () => {
    it('should log me in', () => {
        help.waitForSplashScreen();
        help.getThroughIntroScreens();
        Login.FillOutLoginForm('jarrodgeary@gmail.com', 'Trusense#1234');
        let username = browser.getText(Login.UserName);
        let password = browser.getText(Login.Password);
        if(username != 'jarrodgeary@gmail.com' || password != 'Trusense#1234'){
            browser.saveScreenshot('./../../errorShots/login-error');
        }
        
        Login.TapLoginButton();
        browser.pause(5000);
        browser.waitUntil(() => browser.isExisting(help.LoaderLogo) === false)
        expect(browser.isEnabled(help.FabSelector)).to.be.true;

    });

});

describe('Create New Account', () => {
    it('should let me create a new account', () => {
        help.waitForSplashScreen();
        help.getThroughIntroScreens();
        Login.TapCreateNewAccountButton();
        action.tap(AccountType.HealthAccount);
        action.tap(AccountType.ContinueButton);
        TellUsAboutYourself.fillOutRegistrationForm();
        
    })
})