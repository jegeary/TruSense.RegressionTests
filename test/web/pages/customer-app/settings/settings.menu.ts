import Selector from "../../../helpers/selectors";
import { DH_CHECK_P_NOT_PRIME } from "constants";

class SettingsMenu {
    AccountSetting = "//*[@data-selenium='settings-menu-Account']";
    BillingSetting = "//*[@data-selenium='settings-menu-Billing']";
    PeopleSetting = "//*[@data-selenium='settings-menu-People']";
    NotificationsSetting = "//*[@data-selenium='settings-menu-Notifications']";
    SafetyZonesSetting = "//*[@data-selenium='settings-menu-Safety Zones']";
    Logout = "//*[@data-selenium='settings-menu-Logout']";
    SettingsName = "//*[@data-selenium='settings-name']";
    SettingsUsername = "//*[@data-selenium='settings-username']";
}
export default new SettingsMenu();

