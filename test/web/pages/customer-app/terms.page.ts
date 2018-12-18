import Selector from "../../helpers/selectors";

class TermsPage {

    TermsContainer = Selector.id('license-scrollable');
    AcceptTermsCheckbox = Selector.id('acceptCheckbox');
    SubmitButton = Selector.elementWithPartialTextClass('btn-success', 'Submit');
        
}
const Terms = new TermsPage;
export default Terms;

