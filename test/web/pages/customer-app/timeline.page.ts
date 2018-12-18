import Selector from "../../helpers/selectors";

class TimelinePage {

    TimelineDate = Selector.class('timeline-date');
    TimelineFilterGps = "//*[@data-selenium='timeline-filter-gps']";
    TimelineBackToTop = "//*[@data-selenium='timeline-backToTop']";

        
}
const Timeline = new TimelinePage;
export default Timeline;

