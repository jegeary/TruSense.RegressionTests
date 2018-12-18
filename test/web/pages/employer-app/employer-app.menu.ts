import Selector from "../../helpers/selectors";

class EmployerAppMenu {
    Dashboard = "//*[@data-selenium='manage-menu-Dashboard']";
    Account = "//*[@data-selenium='manage-menu-Account']";
    Members = "//*[@data-selenium='manage-menu-Members']";
    Goals = "//*[@data-selenium='manage-menu-Goals']";
    Logout = Selector.linkText('Logout');
}
export default EmployerAppMenu;

