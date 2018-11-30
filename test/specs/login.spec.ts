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
        let username = browser.getText(Login.UserName);
        let password = browser.getText(Login.Password);
        if(username != 'jarrodgeary@gmail.com' || password != 'Trusense#1234'){
            browser.saveScreenshot('./../../errorShots/login-error');
        }
        
        Login.TapLoginButton();
        browser.pause(5000);
        browser.waitUntil(() => browser.isExisting('//android.webkit.WebView[@content-desc="TruSense"]/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.Image') === false)
        expect(browser.isVisibleWithinViewport(help.FabSelector)).to.be.true;

    });

});