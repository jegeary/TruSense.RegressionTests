import Login from '../../pages/shared/login.page';
import {expect} from 'chai';
import Pulse from '../../pages/customer-app/pulse.page';
import constants from '../../helpers/constants';
import help from '../../helpers/helpers';

describe('Login Screen', () => {
    context('when using valid employer credentials', () => {
        it('should allow me to log in', () => {
            help.SetupEnvironment(constants.LoginUrl);
            Login.EmployerLogin();
            expect(browser.getText(constants.PageTitle)).to.eq('Dashboard');
        });
    });
    
});
