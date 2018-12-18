import Selector from "../../helpers/selectors";

class ManageAppMenu {
    Orders = "//*[@data-selenium='manage-menu-Orders']";
    Homes = "//*[@data-selenium='manage-menu-Homes']";
    Dashboard = "//*[@data-selenium='manage-menu-Dashboard']";
    Subscriptions = "//*[@data-selenium='manage-menu-Subscription Codes']";
    Organizations = "//*[@data-selenium='manage-menu-Organizations']";
    People = Selector.linkText('People');
    Logout = Selector.linkText('Logout');
}
export default ManageAppMenu;

