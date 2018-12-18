import Selector from "../../../../helpers/selectors";

class SafetZonesSettingsPage {
    ShowHideAllMaps = "//*[@data-selenium='settings-locations-showHideAllMaps']";
    ShowHideMap = "//*[@data-selenium='settings-locations-showHideMap']";
    NewLocation = "//*[@data-selenium='settings-locations-newLocation']";
    LocationsSearch = "//*[@data-selenium='locations-search']";
    MapCards = Selector.class('locations-card');
}
const SafetZonesSettings = new SafetZonesSettingsPage;
export default SafetZonesSettings;

