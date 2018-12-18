import Selector from "../../../../helpers/selectors";

class HubTroubleshootingPage {
    HubUnlockCodeInput = "//*[@data-selenium='hub-unlock-code']";
    CurrentHubCode = Selector.class('unlock-code');
    RetryActivationButton = Selector.class('next');
}
const HubTroubleshooting = new HubTroubleshootingPage;
export default HubTroubleshooting;

