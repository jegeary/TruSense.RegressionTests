import selector from '../../helpers/selectors';
class LoginPage {

    Username = selector.name('username');
    Password = selector.name('password');
    ForgotPassword = selector.linkText('Forgot your password?');
    LoginButton = selector.elementWithCertainTextTag('button', 'Login')
    EmployerLogin(): void {
        browser.click(this.Username).keys('adam.schaible+employer@gmail.com')
        browser.click(this.Password).keys('TruSense#1234')
        browser.click(this.LoginButton)  
    }

    ExistingPassiveMonitoringUserLogin(): void {
        browser.click(this.Username).keys('jgeary@openmotion.com')
        browser.click(this.Password).keys('Trusense#1234')
        browser.click(this.LoginButton)  
    }

    ExistingHealthUserLogin(): void {
        browser.click(this.Username).keys('jarrodgeary@gmail.com')
        browser.click(this.Password).keys('Trusense#1234')
        browser.click(this.LoginButton)  
    }

    ManageAppLogin(): void {
        browser.click(this.Username).keys('jgeary@racoindustries.com')
        browser.click(this.Password).keys('Trusense#1234')
        browser.click(this.LoginButton)  
    }
    
}
const Login = new LoginPage;
export default Login;

