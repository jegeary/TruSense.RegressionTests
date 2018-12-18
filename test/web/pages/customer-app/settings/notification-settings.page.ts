import Selector from "../../../helpers/selectors";

class NotificationSettingsPage {
    Toggles = Selector.class('toggle-table');
    EmergencyCenterToggle = "//*[@data-selenium='settings-notifications-toggle']";
    showThresholds = "//*[@data-selenium='settings-notifications-showThresholds']";
    hideThresholds = "//*[@data-selenium='settings-notifications-hideThresholds']";
    callCenterDetails = "//*[@data-selenium='notifications-callCenterDescription']";
    callCenterDetailsQuestionMark = "//*[@data-selenium='notifications-callCenterDescriptionQuestionMark']";
    profileContactCard = "//*[@data-selenium='settings-notifications-profile-contactCard']";
    clearAllContacts = "//*[@data-selenium='settings-notifications-profile-clear']";
    clearAllContactsConfirm = "//*[@data-selenium='settings-notifications-profile-clearYes']";
    clearAllContactsDeny = "//*[@data-selenium='settings-notifications-profile-clearNo']";
    addNewContact = "//*[@data-selenium='add-new-contact']";
    noUiSlider = "//*[@data-selenium='noUiSlider']";
    ShowAllContacts = Selector.linkText('Show All');
    FirstName = Selector.name('firstName');
    LastName = Selector.name('lastName');
    MobileNumber = Selector.name('mobileNumber');

    // Text Notifications
    TextWaterDetected = "//*[@data-selenium='settings-notifications-contacts-text-Water Leak Detected']";
    TextWaterFixed = "//*[@data-selenium='settings-notifications-contacts-text-Water Leak Fixed']";
    TextLowBatteryDetected = "//*[@data-selenium='settings-notifications-contacts-text-Low Battery Detected']";
    TextLowBatteryReplaced = "//*[@data-selenium='settings-notifications-contacts-text-Low Battery Replaced']";
    TextTemp = "//*[@data-selenium='settings-notifications-contacts-text-Temperature Out Of Range']";
    TextVisitorArrival = "//*[@data-selenium='settings-notifications-contacts-text-Visitor Arrival']";
    TextVisitorDeparture = "//*[@data-selenium='settings-notifications-contacts-text-Visitor Departure']";
    TextDoor = "//*[@data-selenium='settings-notifications-contacts-text-Exterior Door Left Open']";
    TextTooLongInRoom = "//*[@data-selenium='settings-notifications-contacts-text-Too Long In Room']";
    TextOutOfHome = "//*[@data-selenium='settings-notifications-contacts-text-Out Of Home Detected']";
    TextReturnHome = "//*[@data-selenium='settings-notifications-contacts-text-Return Home Detected']";
    TextDayStarted = "//*[@data-selenium='settings-notifications-contacts-text-Day Started']";
    TextDayNotStarted = "//*[@data-selenium='settings-notifications-contacts-text-Day Not Started']";
    TextBedtimeStarted = "//*[@data-selenium='settings-notifications-contacts-text-Bedtime Started']";
    TextBedtimeNotStarted = "//*[@data-selenium='settings-notifications-contacts-text-Bedtime Not Started']";
    TextAssistance = "//*[@data-selenium='settings-notifications-contacts-text-Assistance Request']";
    TextOffline = "//*[@data-selenium='settings-notifications-contacts-text-System Offline']";
    TextBackOnline = "//*[@data-selenium='settings-notifications-contacts-text-System Back Online']";
    TextTrackerRemoved = "//*[@data-selenium='settings-notifications-contacts-text-Vehicle Tracker Removed']";
    TextIgnitionOn = "//*[@data-selenium='settings-notifications-contacts-text-Vehicle Ignition On']";
    TextIgnitionOff = "//*[@data-selenium='settings-notifications-contacts-text-Vehicle Ignition Off']";
    TextCollision = "//*[@data-selenium='settings-notifications-contacts-text-Potential Vehicle Collision']";
    TextGeofence = "//*[@data-selenium='settings-notifications-contacts-text-Geofence']";

    // Phone Notifications
    CallWaterDetected = "//*[@data-selenium='settings-notifications-contacts-call-Water Leak Detected']";
    CallWaterFixed = "//*[@data-selenium='settings-notifications-contacts-call-Water Leak Fixed']";
    CallLowBatteryDetected = "//*[@data-selenium='settings-notifications-contacts-call-Low Battery Detected']";
    CallLowBatteryReplaced = "//*[@data-selenium='settings-notifications-contacts-call-Low Battery Replaced']";
    CallTemp = "//*[@data-selenium='settings-notifications-contacts-call-Temperature Out Of Range']";
    CallVisitorArrival = "//*[@data-selenium='settings-notifications-contacts-call-Visitor Arrival']";
    CallVisitorDeparture = "//*[@data-selenium='settings-notifications-contacts-call-Visitor Departure']";
    CallDoor = "//*[@data-selenium='settings-notifications-contacts-call-Exterior Door Left Open']";
    CallTooLongInRoom = "//*[@data-selenium='settings-notifications-contacts-call-Too Long In Room']";
    CallOutOfHome = "//*[@data-selenium='settings-notifications-contacts-call-Out Of Home Detected']";
    CallReturnHome = "//*[@data-selenium='settings-notifications-contacts-call-Return Home Detected']";
    CallDayStarted = "//*[@data-selenium='settings-notifications-contacts-call-Day Started']";
    CallDayNotStarted = "//*[@data-selenium='settings-notifications-contacts-call-Day Not Started']";
    CallBedtimeStarted = "//*[@data-selenium='settings-notifications-contacts-call-Bedtime Started']";
    CallBedtimeNotStarted = "//*[@data-selenium='settings-notifications-contacts-call-Bedtime Not Started']";
    CallAssistance = "//*[@data-selenium='settings-notifications-contacts-call-Assistance Request']";
    CallOffline = "//*[@data-selenium='settings-notifications-contacts-call-System Offline']";
    CallBackOnline = "//*[@data-selenium='settings-notifications-contacts-call-System Back Online']";
    CallTrackerRemoved = "//*[@data-selenium='settings-notifications-contacts-call-Vehicle Tracker Removed']";
    CallIgnitionOn = "//*[@data-selenium='settings-notifications-contacts-call-Vehicle Ignition On']";
    CallIgnitionOff = "//*[@data-selenium='settings-notifications-contacts-call-Vehicle Ignition Off']";
    CallCollision = "//*[@data-selenium='settings-notifications-contacts-call-Potential Vehicle Collision']";
    CallGeofence = "//*[@data-selenium='settings-notifications-contacts-call-Geofence']";


}
const NotificationSettings = new NotificationSettingsPage;
export default NotificationSettings;

