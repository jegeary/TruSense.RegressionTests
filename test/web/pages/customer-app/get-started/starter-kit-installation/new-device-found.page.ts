import Selector from "../../../../helpers/selectors";

class NewDeviceFoundPage {
    MotionSensorDeviceCard = "//*[@data-selenium='device-card-Motion Sensor']";
    ContactSensorDeviceCard = "//*[@data-selenium='device-card-Contact Sensor']";
    ContinueButton = Selector.class('next');
    BackButton = Selector.class('back');
}
const NewDeviceFound = new NewDeviceFoundPage;
export default NewDeviceFound;

