import Selector from "../../helpers/selectors";

class TripDetailsPage {

    TripCoordinates = Selector.class('trip-tr');
    MapMarkers = Selector.tag('agm-marker');
    LocationRowBorder = Selector.class('location-row-border');
    ClearMarkersButton = Selector.class('fa-map-marker');
}
const TripDetails = new TripDetailsPage;
export default TripDetails;

