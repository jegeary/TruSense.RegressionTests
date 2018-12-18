import Selector from '../../helpers/selectors';
class ErrorMessages {
    ErrorDanger = Selector.class('error-danger');
    ShouldBeMobileValidation = "//*[@data-selenium='phone-not-mobile']";
    ShouldBeLandlineValidation = "//*[@data-selenium='phone-not-landline']";
    GlobalMessageAlert = Selector.class('alert-content');
}
export default ErrorMessages;

