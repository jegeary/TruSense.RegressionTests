import Selector from "../../../helpers/selectors";

class SubscriptionPage {
    SubscriptionCodeInput = Selector.name('subscriptionCode');
    ContinueButton = Selector.class('btn-success');
    DeviceImage = Selector.tag('img');
}
const Subscription = new SubscriptionPage;
export default Subscription;

