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

describe('Sefty Zones Settings Page', () => {
    before(() => {
        help.SetupEnvironment(constants.LoginUrl);
        help.LoginPassiveMonitoring();
    });
    context('when I click into the settings page', () => {
        before(() => {
            browser.click(UserAppMenu.MenuSettingElementXPath);
        });
        context('and click into the Safety zones settings page', () => {
            before(() => {
                browser.click(SettingsMenu.SafetyZonesSetting);
            });
            it('should allow me to show and hide maps');
            it('should allow me to toggle notifications');
            it('should allow me to add a new safety zone');
            it('should allow me to search the maps');
        });
    });
});
