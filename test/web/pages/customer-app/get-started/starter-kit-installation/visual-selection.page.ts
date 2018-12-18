import Selector from "../../../../helpers/selectors";

class VisualSelectionPage {
    AddDeviceTab = Selector.linkText('Add Device');
    MyDevicesTab = Selector.linkText('My Devices');
    MyHomeTab = Selector.linkText('My Home');
    MotionSensorCardXPath = "//*[@data-selenium='device-selection-Motion Sensor']";
    ContactSensorCardXPath = "//*[@data-selenium='device-selection-Contact Sensor']";
    SmartOutletCardXPath = "//*[@data-selenium='device-selection-Smart Outlet']";
    EchoDotCardXPath = "//*[@data-selenium='device-selection-Echo Dot']";
    LeakDetectorCardXPath = "//*[@data-selenium='device-selection-Leak Detector']";
    
}
const VisualSelection = new VisualSelectionPage;
export default VisualSelection;

