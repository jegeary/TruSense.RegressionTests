import Selector from "../../../../helpers/selectors";

class HubUpdatingPage {
    HubUpdatingText = Selector.class('intro');
    HubUpdatedText = Selector.class('step-title');
    ContinueButton = Selector.tag('button');
}
const HubUpdating = new HubUpdatingPage;
export default HubUpdating;

