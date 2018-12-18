import Login from '../../pages/shared/login.page';
import {expect} from 'chai';
import Pulse from '../../pages/customer-app/pulse.page';
import constants from '../../helpers/constants';
import help from '../../helpers/helpers';

describe('Login Screen', () => {
    context('when using valid passive monitoring credentials', () => {
        it('should allow me to log in', () => {
            help.SetupEnvironment(constants.LoginUrl);
            Login.ExistingPassiveMonitoringUserLogin();
            expect(browser.isExisting(Pulse.LocalWeather)).to.eq(true);
        });
    });
    context('when using valid health credentials', () => {
        it('should allow me to log in', () => {
            help.SetupEnvironment(constants.LogoutUrl);
            Login.ExistingHealthUserLogin();
            expect(browser.isExisting(Pulse.LocalWeather)).to.eq(true);
        });
    });
});
