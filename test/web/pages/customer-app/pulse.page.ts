import Selector from "../../helpers/selectors";

class PulsePage {

    UserImageUpload = "//*[@data-selenium='pulse-user-imageUpload']";
    UserSleepWake = "//*[@data-selenium='pulse-user-sleep-wake']";
    CurrentRoom = "//*[@data-selenium='pulse-currentRoom']";
    EventCards = Selector.tag('ts-event-card');
    TimelinePulseBackToTop = "//*[@data-selenium='pulse-timeline-backToTop']";
    OfflineDevices = "//*[@data-selenium='pulse-offlineDevices']";
    OfflineDevicesViewHome = "//*[@data-selenium='pulse-offlineDevices-viewHome']";
    LocalWeather = "//*[@data-selenium='local-weather']";
    TimelineDate = Selector.class('timeline-date');
    CurrentRoomDevices = Selector.tag('ts-new-device-card');
}
const Pulse = new PulsePage;
export default Pulse;

