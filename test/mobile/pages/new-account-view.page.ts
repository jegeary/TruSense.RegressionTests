import selector from '../helpers/android-selectors';
import help from '../helpers/helpers';
class NewAccountView {
    welcomeText = selector.byText('Welcome to TruSense');
    addNewMedication = selector.byText('Add New Medication');
    addNewDevice = selector.byText('Add New Device');

    verifyWelcomeText(): void {

    }
}
export default NewAccountView;

