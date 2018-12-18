import Selector from "../../../helpers/selectors";

class AccountSettingsPage {
    // Name
    NameEdit = "//*[@data-selenium='account-name-edit']";
    NameClose = "//*[@data-selenium='account-name-close']";
    NameSave = "//*[@data-selenium='account-name-save']";
    NameCancel = "//*[@data-selenium='account-name-cancel']";
    FirstName = Selector.id('firstName');
    LastName = Selector.id('lastName');
    // Username
    UsernameEdit = "//*[@data-selenium='account-username-edit']";
    UsernameClose = "//*[@data-selenium='account-username-close']";
    UsernameSave = "//*[@data-selenium='account-username-save']";
    UsernameCancel = "//*[@data-selenium='account-username-cancel']";
    Username = Selector.id('username');
    Password = Selector.id('password');

    // Password
    PasswordEdit = "//*[@data-selenium='account-password-edit']";
    PasswordClose = "//*[@data-selenium='account-password-close']";
    PasswordSave = "//*[@data-selenium='account-password-save']";
    PasswordCancel = "//*[@data-selenium='account-password-cancel']";
    NewPassword = Selector.id('newPassword');
    ConfirmNewPassword = Selector.id('confirmNewPassword');
    ConfirmPassword = Selector.id('confirmPassword');

    // Mobile
    MobileEdit = "//*[@data-selenium='account-mobile-edit']";
    MobileClose = "//*[@data-selenium='account-mobile-close']";
    MobileSave = "//*[@data-selenium='account-mobile-save']";
    MobileCancel = "//*[@data-selenium='account-mobile-cancel']";
    MobileNumber = Selector.name('mobileNumber');

    // Landline
    PhoneEdit = "//*[@data-selenium='account-phone-edit']";
    PhoneClose = "//*[@data-selenium='account-phone-close']";
    PhoneSave = "//*[@data-selenium='account-phone-save']";
    PhoneCancel = "//*[@data-selenium='account-phone-cancel']";
    Landline = Selector.name('phoneNumber');

    // Address
    AddressEdit = "//*[@data-selenium='account-address-edit']";
    AddressClose = "//*[@data-selenium='account-address-close']";
    AddressSave = "//*[@data-selenium='account-address-save']";
    AddressCancel = "//*[@data-selenium='account-address-cancel']";
    HomeAddress = Selector.name('address');
    GoogleAddress = Selector.class('pac-item');

}
const AccountSettings = new AccountSettingsPage;
export default AccountSettings;

