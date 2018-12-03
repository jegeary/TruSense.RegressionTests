import Intro from '../pages/intro.page';
import Login from '../pages/login.page';
import action from '../helpers/actions';
import AccountType from '../pages/type-of-account.page';
import {expect} from 'chai';
import help from '../helpers/helpers';
import TellUsAboutYourself from '../pages/tell-us-about-yourself.page';

describe('Create New Account', () => {
    it('should let me create a new account', () => {
        help.waitForSplashScreen();
        help.getThroughIntroScreens();
        Login.TapCreateNewAccountButton();
        action.tap(AccountType.HealthAccount);
        action.tap(AccountType.ContinueButton);
        TellUsAboutYourself.fillOutRegistrationForm();
        expect(browser.isEnabled(TellUsAboutYourself.ContinueButton)).to.be.true
    });
})