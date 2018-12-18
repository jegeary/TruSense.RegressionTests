import Login from '../pages/login.page';
import {expect} from 'chai';
import help from '../helpers/helpers';

describe('Login Screen', () => {
    context('when using invalid credentials', () => {
        it('should not allow me to log in', () => {
            help.getThroughIntroScreens();
            Login.FillOutLoginForm('jarrod@geary.gov', 'Trusense#1234');
            const username = browser.getText(Login.UserName);
            const password = browser.getText(Login.Password);
            if (username !== 'jarrod@geary.gov' || password !== 'Trusense#1234') {
                browser.saveScreenshot('./../../errorShots/login-error');
            }
            Login.TapLoginButton();
            // browser.pause(5000);
            // browser.waitUntil(() => browser.isExisting(help.LoaderLogo) === false);
            // tslint:disable-next-line:no-unused-expression
            expect(browser.isExisting(Login.InvalidCredentials)).to.be.true;
        });
    });
    context('when using valid credentials', () => {
        it('should log me in', () => {
            Login.UpdateCredentials('jarrodgeary@gmail.com', 'Trusense#1234');
            const username = browser.getText(Login.UserName);
            const password = browser.getText(Login.Password);
            if (username !== 'jarrodgeary@gmail.com' || password !== 'Trusense#1234') {
                browser.saveScreenshot('./../../errorShots/login-error');
            }
            Login.TapLoginButton();
            browser.waitUntil(() => browser.isExisting(help.LoaderLogo) === false);
            // tslint:disable-next-line:no-unused-expression
            expect(browser.isEnabled(help.FabSelector)).to.be.true;
        });
    });
});
