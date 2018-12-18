import selector from '../helpers/android-selectors';
import help from '../helpers/helpers';
import action from '../helpers/actions';
import classType from '../helpers/class-types';

class TellUsAboutYourselfScreen {

    EditTextSelector = selector.byClassName(classType.Textbox);
    FirstName = this.EditTextSelector + selector.instanceNumber(0);
    LastName = this.EditTextSelector + selector.instanceNumber(1);
    Email = this.EditTextSelector + selector.instanceNumber(2);
    Birthdate = selector.byClassName(classType.Spinner);
    MobileNumber = this.EditTextSelector + selector.instanceNumber(3);
    Password = this.EditTextSelector + selector.instanceNumber(4);
    ConfirmPassword = this.EditTextSelector + selector.instanceNumber(5);
    Address = this.EditTextSelector + selector.instanceNumber(6);
    Address2 = this.EditTextSelector + selector.instanceNumber(7);
    DatePicker = selector.byClassName(classType.Dialog);
    DatePickerCancel = selector.nestedSelector(selector.className(classType.Dialog), selector.text('Cancel'));
    DatePickerDone = selector.nestedSelector(selector.className(classType.Dialog), selector.text('Done'));
    DatePickerMonths = selector.nestedSelector(selector.className(classType.Dialog), selector.text('Jan'));
    DatePickerDate = selector.nestedSelector(selector.className(classType.Dialog), selector.text('1'));
    DatePickerYears = selector.nestedSelector(selector.className(classType.Dialog), selector.text('2018'));
    ContinueButton = selector.byText('CONTINUE');
    BackToLogin = selector.byText('Back to Login');
    // tslint:disable-next-line:max-line-length
    GoogleAddress = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View[2]/android.view.View[1]';



    fillOutRegistrationForm(): void {
        action.tap(this.FirstName);
        action.sendKeys('Testing');
        action.tap(this.LastName);
        action.sendKeys('TruSense');
        action.tap(this.Email);
        action.sendKeys('Testing' + help.emailNumber + '@trusense.com');
        browser.click(this.Birthdate);
        action.ScrollDownThenTap(this.DatePickerMonths, 290);
        action.ScrollDownThenTap(this.DatePickerDate, 550);
        action.ScrollDownThenTap(this.DatePickerYears, 500);
        browser.click(this.DatePickerDone);
        action.ScrollDown(this.MobileNumber, 800);
        action.tap(this.MobileNumber);
        action.sendKeys('5005550006');
        action.tap(this.Password);
        action.sendKeys('Trusense#1234');
        action.tap(this.ConfirmPassword);
        action.sendKeys('Trusense#1234');
        action.tap(this.Address);
        // browser.pause(2000);
        action.sendKeys('5481 Creek');
        action.tap(this.GoogleAddress);
    }
}
const TellUsAboutYourself = new TellUsAboutYourselfScreen;
export default TellUsAboutYourself;

