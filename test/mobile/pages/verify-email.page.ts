import selector from '../helpers/android-selectors';
import help from '../helpers/helpers';
import ClassType from '../helpers/class-types';
class VerifyEmailScreens {

    email = selector.byText('.com');
    noEmailButton = selector.byText('I Didn\'t Get The Email');
    verified = selector.byText('Verified');
    continue = selector.byText('CONTINUE');

    doubleCheckYourEmail = selector.byText('Double Check Your Email');
    correctedEmail = selector.byClassName(ClassType.Textbox);
    resendEmail = selector.byText('Resend Email');



    verifyAndContinue(): void {
        if (browser.isExisting(this.verified)) {
            browser.click(this.continue);
        }
    }
}
const VerifyEmail = new VerifyEmailScreens;
export default VerifyEmail;

