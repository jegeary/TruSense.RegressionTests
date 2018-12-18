import Login from '../pages/login.page';
import action from '../helpers/actions';
import AccountType from '../pages/type-of-account.page';
import {expect} from 'chai';
import help from '../helpers/helpers';
import TellUsAboutYourself from '../pages/tell-us-about-yourself.page';
import VerifyEmail from '../pages/verify-email.page';

describe('Create New Account Flow', () => {
    context('When creating a new account', () => {
        it('should let me fill out registration form and get to point to verify my email', () => {
            help.getThroughIntroScreens();
            Login.TapCreateNewAccountButton();
            action.tap(AccountType.HealthAccount);
            action.tap(AccountType.ContinueButton);
            TellUsAboutYourself.fillOutRegistrationForm();
            browser.pause(3000);
            // tslint:disable-next-line:no-unused-expression
            expect(browser.isEnabled(TellUsAboutYourself.ContinueButton)).to.be.true;
            action.tap(TellUsAboutYourself.ContinueButton);
            // browser.pause(3000);
            browser.waitUntil(() => browser.isExisting(help.LoaderLogo) === false);
            // browser.pause(3000);
            expect(browser.isEnabled(VerifyEmail.noEmailButton)).to.eql([true, true]);

        });
    });
    context('When user accidently enters wrong email at first', () => {
        it('should let user update email', () => {
            action.ScrollDown(VerifyEmail.email, 500);
            browser.waitForVisible(VerifyEmail.noEmailButton);
            action.tap(VerifyEmail.noEmailButton);
            browser.waitUntil(() => browser.isExisting(help.LoaderLogo) === false);
            action.ScrollDown(VerifyEmail.doubleCheckYourEmail, 1000);
            browser.clearElement(VerifyEmail.correctedEmail);
            action.tap(VerifyEmail.correctedEmail);
            action.sendKeys('EmailIsUpdated' + help.emailNumber + '@mytrusense.com');
            browser.waitForEnabled(VerifyEmail.resendEmail);
            browser.click(VerifyEmail.resendEmail);
            browser.waitUntil(() => browser.isExisting(VerifyEmail.resendEmail) === false);
            expect(browser.getText(VerifyEmail.email)).to.contain('EmailIsUpdated');
        });
    });

});
