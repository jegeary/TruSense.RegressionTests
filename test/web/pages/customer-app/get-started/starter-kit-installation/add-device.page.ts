import Selector from "../../../../helpers/selectors";

class AddDevicePage {

    BeginPairingButton = Selector.class('filled');
    GoBackButton = Selector.class('back');
    MotionSensorTroubleShooting = Selector.tag('ts-motion-sensor-troubleshooting');
    ContactSensorTroubleShooting = Selector.tag('ts-contact-sensor-troubleshooting');
    LeakDetectorTroubleShooting = Selector.tag('ts-leak-detector-troubleshooting');
    SmartOutletTroubleShooting = Selector.tag('ts-smart-outlet-troubleshooting');
    ProgressBar = Selector.class('progress');
}
const AddDevice = new AddDevicePage;
export default AddDevice;

