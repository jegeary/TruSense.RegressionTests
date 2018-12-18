import Selector from "../../../helpers/selectors";

class CreateAccountPage {
    ImageUploadButton = "//*[@data-selenium='pulse-user-imageUpload']";
    FirstName = Selector.name('firstName');
    LastName = Selector.name('lastName');
    MobileNumber = Selector.name('mobileNumber');
    EmailAddress = Selector.name('emailAddress');
    Password = Selector.name('password');
    ConfirmPassword = Selector.name('confirmPassword');
    
}
const CreateAccount = new CreateAccountPage;
export default CreateAccount;

