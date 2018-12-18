import Selector from "../../../../helpers/selectors";

class NewLocationPage {
    SaveGeofence = "//*[@data-selenium='settings-locationDetail-saveGeofence']";
    MapAlert = "//*[@data-selenium='settings-locationDetailMap-alert']";
    MapAlertCloseLink = Selector.class('fa-times');
    SearchAddressInput = Selector.name('search');
    MapToolBoxCircle = "//*[@data-selenium='settings-locationDetailMapToolBox-circle']";
    MapToolBoxPolygon = "//*[@data-selenium='settings-locationDetailMapToolBox-polygon']";
    MapToolBoxCenter = "//*[@data-selenium='settings-locationDetailMapToolBox-centerMap']";
    MapToolBoxClear = "//*[@data-selenium='settings-locationDetailMapToolBox-clearMap']";
    MapToolBoxReset = "//*[@data-selenium='settings-locationDetailMapToolBox-reset']";
    Pendant = "//*[@data-selenium='settings-locationDetailMapDevicePicker-GPS Pendant']";
    Vehicle = "//*[@data-selenium='settings-locationDetailMapDevicePicker-Vehicle Tracker']";
    BackToLocations = "//*[@data-selenium='settings-locationDetail-backToLocations']";
    GoogleMapContent = Selector.class('agm-map-content');
    GoogleMapCircle = Selector.tag('agm-circle');
    GoogleMapPolygon = Selector.tag('ts-map-polygon');
    LocationNameInput = Selector.name('title');
    
}
const NewLocation = new NewLocationPage;
export default NewLocation;

