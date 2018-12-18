import Selector from "../../helpers/selectors";

class AccountPage {
    Map = Selector.class('map-holder');
    OrganizationName = Selector.name('name');
    Address = Selector.name('address');
    SaveChanges = Selector.elementWithCertainTextTag('button', 'Save Changes');
}
const Account = new AccountPage();
export default Account;

