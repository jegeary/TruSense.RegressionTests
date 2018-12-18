import Selector from "../../../helpers/selectors";

class WherePage {
    Address = Selector.name('autocomplete');
    GoogleAddress = Selector.class('pac-item');
}
const Where = new WherePage;
export default Where;

