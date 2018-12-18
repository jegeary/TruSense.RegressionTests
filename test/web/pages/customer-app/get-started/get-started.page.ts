import Selector from "../../../helpers/selectors";

class GetStartedPage {
    CreateAccountButton = Selector.class('btn-success');
    LoginLink = Selector.linkText('Login');
}
const GetStarted = new GetStartedPage;
export default GetStarted;

