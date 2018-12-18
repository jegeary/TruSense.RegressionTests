import Selector from "../../../helpers/selectors";
import constants from "../../../helpers/constants";

class DeviceDetailsPage {
    EditDetails = constants.EditClick;
    EditDeviceName = Selector.name('deviceName');
    SaveButton = constants.ButtonSuccess;
}
const DeviceDetails = new DeviceDetailsPage;
export default DeviceDetails;

