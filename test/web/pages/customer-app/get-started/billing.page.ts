import Selector from "../../../helpers/selectors";

class BillingPage {
  Address = Selector.name('address1');
  City = Selector.name('city');
  State = Selector.name('state');
  PostalCode = Selector.name('postalCode');
  CardName = Selector.name('cardName');
  CardNumber = Selector.name('cardNumber');
  CardCvc = Selector.name('cvc');
  ExpirationMonth = Selector.name('expirationMonth');
  ExpirationYear = Selector.name('expirationYear');

}
const Billing = new BillingPage;
export default Billing;

