import Selector from "../../../helpers/selectors";

class WhoPage {
    FirstName = Selector.name('firstName');
    LastName = Selector.name('lastName');
    Gender = Selector.name('genderId');
    PhoneNumber = Selector.name('phoneNumber');
}
const Who = new WhoPage;
export default Who;

