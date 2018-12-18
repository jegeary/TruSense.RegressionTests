import Login from '../../../../pages/shared/login.page';
import {expect} from 'chai';
import Pulse from '../../../../pages/customer-app/pulse.page';
import constants from '../../../../helpers/constants';
import help from '../../../../helpers/helpers';
import RoomDetails from '../../../../pages/customer-app/home-details/room-details.page';
import UserAppMenu from '../../../../pages/customer-app/user-app.menu';
import DeviceDetails from '../../../../pages/customer-app/home-details/device-details.page';
import SettingsMenu from '../../../../pages/customer-app/settings/settings.menu';
import AccountSettings from '../../../../pages/customer-app/settings/account-settings.page';
import { before } from 'mocha';

describe('Account Settings Page', () => {
    before(() => {
        help.SetupEnvironment(constants.LoginUrl);
        help.LoginPassiveMonitoring();
    });
    context('when I click into the settings page', () => {
        before(() => {
            browser.click(UserAppMenu.MenuSettingElementXPath);
        });
        context('and click into the Account settings page', () => {
            before(() => {
                browser.click(SettingsMenu.AccountSetting);
            });
            it('should allow me to edit my name', () => {
                browser.click(AccountSettings.NameEdit);
                browser.clearElement(AccountSettings.FirstName).keys('Roberta');
                browser.clearElement(AccountSettings.LastName).keys('Chimsman');
                browser.click(AccountSettings.NameSave);
                browser.pause(3000);
                expect(browser.getText(SettingsMenu.SettingsName)).to.equal('Roberta Chimsman');
            });
            it('should allow me to edit my username');
            it('should allow me to edit my password');
            it('should allow me to edit my mobile number');
            it('should allow me to edit my gender');
            it('should allow me to edit my home phone number');
            it('should allow me to edit my address');
        });
    });
    
});
