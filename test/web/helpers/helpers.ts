import Selector from "./selectors";
import Login from "../pages/shared/login.page";
import Pulse from "../pages/customer-app/pulse.page";

class Helpers {
    SetupEnvironment(url: string): void {
        browser.windowHandleMaximize();
        browser.url(url);
    }
    LoginPassiveMonitoring(): void {
        Login.ExistingPassiveMonitoringUserLogin();
        browser.waitForExist(Pulse.LocalWeather);
    }
    
}
const help = new Helpers();
export default help;
