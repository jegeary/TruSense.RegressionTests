import Selector from "./selectors";

class Constants {
    EditClick = Selector.class('edit-click');  
    ButtonSuccess = Selector.class('btn-success');
    BaseUrl = 'http://app-staging.mytrusense.com';
    LoginUrl = this.BaseUrl + '/login';
    LogoutUrl = this.BaseUrl + '/logout';
    GetStartedUrl = this.BaseUrl + '/get-started';
    PageTitle = Selector.class('page-title');
}
const constants = new Constants();
export default constants;
