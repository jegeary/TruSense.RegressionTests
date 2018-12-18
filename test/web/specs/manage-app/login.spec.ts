import Login from '../../pages/shared/login.page';
import {expect} from 'chai';
import Pulse from '../../pages/customer-app/pulse.page';
import constants from '../../helpers/constants';
import help from '../../helpers/helpers';

describe('Login Screen', () => {
    context('when using valid internal user credentials', () => {
        it('should allow me to log in', () => {
            help.SetupEnvironment(constants.LoginUrl);
            Login.ManageAppLogin();
            expect(browser.getText(constants.PageTitle)).to.eq('Dashboard');
        });
    });
    
});
