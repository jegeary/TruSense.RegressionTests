import Selector from "../../../helpers/selectors";

class AssociateSubscriptionCodePage {

    EnterCodesInput = "//*[@data-selenium='subscription-code-text']";
    SubscriptionProductSelect = "//*[@data-selenium='subscription-code-product']";
    SubscriptionCodePhoneNumber = "//*[@data-selenium='subscription-code-phoneNumber']";
    SubscriptionCodeSim = "//*[@data-selenium='subscription-code-sim']";
    SubscriptionCodeImei = "//*[@data-selenium='subscription-code-imei']";
    //SubscriptionLengthSelect
}
const AssociateSubscriptionCode = new AssociateSubscriptionCodePage;
export default AssociateSubscriptionCode;

