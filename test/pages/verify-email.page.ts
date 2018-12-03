import selector from '../helpers/selectors';
import help from '../helpers/helpers';
import ClassType from '../helpers/class-types';
class VerifyEmailScreens {
    email = selector.byText('.com')
    noEmailButton = selector.byClassName(ClassType.Button)
    verified = selector.byText('Verified')
    continue = selector.byText('CONTINUE');

    verifyAndContinue(): void {
        if(browser.isExisting(this.verified)){
            browser.click(this.continue)
        }
    }
}
const VerifyEmail = new VerifyEmailScreens;
export default VerifyEmail;

