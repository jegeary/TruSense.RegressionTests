import Selector from "../../../../helpers/selectors";

class DeviceInstallPage {

    MotionSensorDeviceCard = "//*[@data-selenium='device-card-Motion Sensor']";
    ContactSensorDeviceCard = "//*[@data-selenium='device-card-Contact Sensor']";
    ExistingRoomSelect = Selector.name('roomId');
    DevicePurposeSelect = Selector.name('devicePurposeId');
    AddNewRoomLink = Selector.linkText('Add New Room');
    AddNewFloorLink = Selector.linkText('Add New Floor');
    ExistingFloorSelect = Selector.name('floorName');
    RoomNameInput = Selector.name('roomName');
    RoomTypeSelect = Selector.name('roomTypeId');
    FloorNameInput = Selector.name('floorName');
    ContinueButton = Selector.class('next');
    BackButton = Selector.class('back');

}
const DeviceInstall = new DeviceInstallPage;
export default DeviceInstall;

