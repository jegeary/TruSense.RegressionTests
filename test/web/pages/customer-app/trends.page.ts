import Selector from "../../helpers/selectors";

class TrendsPage {

    BackArrow = "//*[@data-selenium='Trends-chart-back-Active Minutes']";
    ForwardArrow = "//*[@data-selenium='Trends-chart-forward-Active Minutes']";
    SummaryAverage = "//*[@data-selenium='Trends-summary-average']";
    SummaryMost = "//*[@data-selenium='Trends-summary-most']";
    SummaryLeast = "//*[@data-selenium='Trends-summary-least']";
    PieCharts = "//*[@data-selenium='trend-pie-chart-Active Minutes']";
          
}
const Trends = new TrendsPage;
export default Trends;

