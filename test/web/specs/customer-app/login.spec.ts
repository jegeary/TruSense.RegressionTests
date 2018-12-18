import Login from '../../pages/shared/login.page';
import {expect} from 'chai';
import Pulse from '../../pages/customer-app/pulse.page';
import constants from '../../helpers/constants';

describe('Login Screen', () => {
    context('when using valid passive monitoring credentials', () => {
        it('should not allow me to log in', () => {
            browser.url(constants.LoginUrl);
            Login.ExistingPassiveMonitoringUserLogin();
            expect(browser.isExisting(Pulse.LocalWeather)).to.eq(true);
        });
    });
    
});
