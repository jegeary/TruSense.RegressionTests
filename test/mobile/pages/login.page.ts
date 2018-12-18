import selector from '../helpers/android-selectors';
import classType from '../helpers/class-types';
import action from '../helpers/actions';
class LoginPage {

    EditTextSelector = selector.byClassName(classType.Textbox);
    ShowPassword = selector.byClassName(classType.Image) + selector.instanceNumber(1);
    Inputs = browser.elements(this.EditTextSelector);
    UserName = this.EditTextSelector + selector.instanceNumber(0);
    Password = this.EditTextSelector + selector.instanceNumber(1);
    LoginButton = selector.byText('LOGIN');
    ForgotPasswordLink = selector.byResourceId('forgotPasswordLink');
    CreateNewAccountButton = selector.byText('CREATE A NEW ACCOUNT') + selector.instanceNumber(0);
    InvalidCredentials = selector.byText('Invalid username or password');
    // ForgotPasswordPage
    Email = selector.byClassName(classType.Textbox);
    ResetPasswordButton = selector.byText('RESET PASSWORD');

    ForgotPassword(email: string): void {
        browser.element(this.ForgotPasswordLink).click();
        action.tap(this.Email);
        action.sendKeys(email);
        browser.element(this.ResetPasswordButton).click();
    }

    TapCreateNewAccountButton(): void {
        browser.click(this.CreateNewAccountButton);
    }

    FillOutLoginForm(username: string, password: string): void {
        action.tap(this.UserName);
        action.sendKeys(username);
        action.tap(this.Password);
        action.sendKeys(password);
        action.tap(this.ShowPassword);
    }

    UpdateCredentials(username: string, password: string): void {
        action.tap(this.ShowPassword);
        browser.clearElement(this.UserName);
        browser.clearElement(this.Password);
        this.FillOutLoginForm(username, password);
    }

    TapLoginButton(): void {
        action.tap(this.LoginButton);
    }

}
const Login = new LoginPage;
export default Login;

