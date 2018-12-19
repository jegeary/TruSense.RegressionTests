import Login from '../../../pages/shared/login.page';
import {expect} from 'chai';
import Pulse from '../../../pages/customer-app/pulse.page';
import constants from '../../../helpers/constants';
import help from '../../../helpers/helpers';
import RoomDetails from '../../../pages/customer-app/home-details/room-details.page';
import UserAppMenu from '../../../pages/customer-app/user-app.menu';
import DeviceDetails from '../../../pages/customer-app/home-details/device-details.page';
import Timeline from '../../../pages/customer-app/timeline.page';
import Trends from '../../../pages/customer-app/trends.page';
import HomeDetails from '../../../pages/customer-app/home-details/home-details.page';
import ErrorMessages from '../../../pages/shared/error.messages';

describe('Home Details Page', () => {
    before(() => {
        console.log("Before I click on the edit details icon")
        console.log('****************************************' + '\n')
        help.SetupEnvironment(constants.LoginUrl);
        help.LoginPassiveMonitoring();
        browser.click(UserAppMenu.MenuHomeElementXPath);
    });
    
    context('when I click on the edit details icon', () => {
        context('and clear the inputs', () => {
            beforeEach(() => {
                console.log("Before I clear the inputs")
                console.log('****************************************' + '\n')
                browser.click(HomeDetails.EditDetails);
            });
            it('should not allow the form to submit', () => {
                browser.clearElement(HomeDetails.EditPhone);
                browser.clearElement(HomeDetails.EditAddress);
                browser.click(HomeDetails.SaveButton);
                expect(browser.isVisible(ErrorMessages.ErrorDanger)).to.be.true;
            });
        });
        
    });
    context('when I click on a room card', () => {
        
        context('and I click on the edit details icon', () => {
            beforeEach(() => {
                console.log("Before I click on the edit room details icon")
                console.log('****************************************' + '\n')    
                browser.click(HomeDetails.RoomCards);
            })
            
            context('and clear the inputs', () => {
                beforeEach(()=> {
                    console.log("Before I clear the inputs")
                    console.log('****************************************' + '\n')    
                    browser.click(RoomDetails.EditDetails);            
                });
                it('should not allow the form to submit', () => {
                    browser.clearElement(RoomDetails.EditRoomName);
                    browser.click(RoomDetails.SaveButton);
                    expect(browser.isVisible(ErrorMessages.ErrorDanger)).to.be.true;
                });
            });
            
        });
    });  
});
