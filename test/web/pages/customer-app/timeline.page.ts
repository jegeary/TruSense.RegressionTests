import Selector from "../../helpers/selectors";

class TimelinePage {

    TimelineDate = Selector.class('timeline-date');
    FilterGps = "//*[@data-selenium='timeline-filter-gps']";
    BackToTop = "//*[@data-selenium='timeline-backToTop']";
    EventCards = Selector.tag('ts-event-card');
        
}
const Timeline = new TimelinePage;
export default Timeline;

