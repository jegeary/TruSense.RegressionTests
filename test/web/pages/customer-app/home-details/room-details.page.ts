import Selector from "../../../helpers/selectors";
import constants from "../../../helpers/constants";

class RoomDetailsPage {
    EditDetails = constants.EditClick;
    EditRoomName = Selector.name('roomName');
    SaveButton = constants.ButtonSuccess;
    RoomType = Selector.name('roomTypeId');
    AddNewFloorLink = Selector.linkText('Add New Floor');
}
const RoomDetails = new RoomDetailsPage;
export default RoomDetails;

