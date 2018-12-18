import Login from '../../../pages/shared/login.page';
import {expect} from 'chai';
import Pulse from '../../../pages/customer-app/pulse.page';
import constants from '../../../helpers/constants';
import help from '../../../helpers/helpers';
import RoomDetails from '../../../pages/customer-app/home-details/room-details.page';
import UserAppMenu from '../../../pages/customer-app/user-app.menu';
import DeviceDetails from '../../../pages/customer-app/home-details/device-details.page';

describe('Pulse Page', () => {
    it('should allow me to Scroll timeline', () => {
        help.SetupEnvironment(constants.LoginUrl);
        help.LoginPassiveMonitoring();
        const eventCard = browser.elements(Pulse.EventCards);
        browser.click(eventCard[3]).scroll(eventCard[10]);
        expect(browser.isVisible(Pulse.TimelinePulseBackToTop)).to.be.true;
    });
    context('when I click on the Back to Top link', () => {
        it('should scroll the timeline back to the top', () => {
            browser.click(Pulse.TimelinePulseBackToTop);
            expect(browser.isVisible(Pulse.TimelinePulseBackToTop)).to.be.false;
        });
    });
    context('when I click into the current room card', () => {
        it('should take me to the current room', () => {
            if(browser.getText(Pulse.CurrentRoom).includes('Outside')){
                console.log('Primary Person is outside of the home')
            }
            else {
                browser.click(Pulse.CurrentRoom);
                expect(browser.isExisting(RoomDetails.EditDetails)).to.be.true;
                browser.click(UserAppMenu.MenuPulseElementXPath);
            }
        });
    });
    context('when I click into the current room device card', () => {
        it('should take me to the current room', () => {
            browser.click(Pulse.CurrentRoomDevices);
            expect(browser.isExisting(DeviceDetails.EditDetails)).to.be.true;
            browser.click(UserAppMenu.MenuPulseElementXPath);
        });
    });
    
});
