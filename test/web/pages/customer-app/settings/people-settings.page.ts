import Selector from "../../../helpers/selectors";

class PeopleSettingsPage {
    InviteSomeoneElement = "//*[@data-selenium='settings-people-invite']";
    EditPrimaryPerson = "//*[@data-selenium='settings-people-edit-Primary Resident']";
    EditAdmin = "//*[@data-selenium='settings-people-edit-Administrators']";
    EditUser = "//*[@data-selenium='settings-people-edit-Users']";
    EditNoAccess = "//*[@data-selenium='settings-people-edit-People Without Access']";
    EmContactLink = "//*[@data-selenium='settings-people-emContactLink']";
    PeopleLink = "//*[@data-selenium='settings-people-peopleLink']";
    PeopleCard = "//*[@data-selenium='settings-people-peopleCards']";
    EditPersonUpdate = "//*[@data-selenium='settings-people-editPersonUpdate']";
    SendInvite = "//*[@data-selenium='settings-people-sendInvite']";
    SearchBar = Selector.name('search');
    PeopleGroups = Selector.class('people-group');
    FirstName = Selector.name('firstName0');
    LastName = Selector.name('lastName0');
    MobileNumber = Selector.name('mobileNumber');
    AllowSiteAccess = Selector.name('allowSiteAccess0');
    SelectRole = Selector.name('roles0');
    EmailAddress = Selector.name('emailAddress0');
    InviteNewUserFirstName = Selector.name('firstName-1');
    InviteNewUserLastName = Selector.name('lastName-1');
    InviteNewUserMobileNumber = Selector.name('mobileNumber');
    InviteNewUserAllowSiteAccess = Selector.name('allowSiteAccess-1');
    InviteNewUserSelectRole = Selector.name('roles-1');
    InviteNewUserEmailAddress = Selector.name('emailAddress-1');
}
const PeopleSettings = new PeopleSettingsPage;
export default PeopleSettings;

