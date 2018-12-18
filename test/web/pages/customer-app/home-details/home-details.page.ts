import Selector from "../../../helpers/selectors";
import constants from "../../../helpers/constants";

class HomeDetailsPage {
    EditDetails = constants.EditClick;
    EditPhone = Selector.name('phoneNumber');
    EditAddress = Selector.name('address');
    SaveButton = constants.ButtonSuccess;
    RoomCards = Selector.tag('ts-room-card');
    DeviceCards = Selector.tag('ts-new-device-card');
}
const HomeDetails = new HomeDetailsPage;
export default HomeDetails;

