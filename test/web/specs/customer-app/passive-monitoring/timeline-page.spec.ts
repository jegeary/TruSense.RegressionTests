import Login from '../../../pages/shared/login.page';
import {expect} from 'chai';
import Pulse from '../../../pages/customer-app/pulse.page';
import constants from '../../../helpers/constants';
import help from '../../../helpers/helpers';
import RoomDetails from '../../../pages/customer-app/home-details/room-details.page';
import UserAppMenu from '../../../pages/customer-app/user-app.menu';
import DeviceDetails from '../../../pages/customer-app/home-details/device-details.page';
import Timeline from '../../../pages/customer-app/timeline.page';

describe('Timeline Page', () => {
    it('should allow me to Scroll timeline', () => {
        help.SetupEnvironment(constants.LoginUrl);
        help.LoginPassiveMonitoring();
        browser.click(UserAppMenu.MenuTimelineElementXPath);
        const eventCard = browser.elements(Timeline.EventCards);
        browser.click(eventCard[3]).scroll(eventCard[10]);
        expect(browser.isVisible(Timeline.BackToTop)).to.be.true;
    });
    context('when I click on the Back to Top link', () => {
        it('should scroll the timeline back to the top', () => {
            browser.click(Timeline.BackToTop);
            expect(browser.isVisible(Timeline.BackToTop)).to.be.false;
        });
    });
    context('when I click the GPS filter', () => {
        it('should only display GPS timeline entries', () => {
            browser.click(Timeline.FilterGps);
            expect(browser.getText(Timeline.EventCards)).to.contain('Gps');
        });
    });
        
});
