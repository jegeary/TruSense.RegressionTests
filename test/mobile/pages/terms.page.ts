import selector from '../helpers/android-selectors';
import help from '../helpers/helpers';
import ClassType from '../helpers/class-types';
class TermsScreens {

    checkbox = selector.byClassName(ClassType.CheckBox);
    viewButton = selector.byText('ViewButton');
    acceptTermsButton = selector.byText('Accept Terms');

    acceptTerms(): void {
        browser.click(this.checkbox);
        if (browser.isEnabled(this.acceptTermsButton)) {
            browser.click(this.acceptTermsButton);
        }
    }
}
const Terms = new TermsScreens;
export default Terms;

