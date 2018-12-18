import Selector from "../../helpers/selectors";

class TrendsPage {

    TrendsChartBackArrowXPath = "//*[@data-selenium='Trends-chart-back-Active Minutes']";
    TrendsChartForwardArrowXPath = "//*[@data-selenium='Trends-chart-forward-Active Minutes']";
    TrendsSummaryAverageXPath = "//*[@data-selenium='Trends-summary-average']";
    TrendsSummaryMostXPath = "//*[@data-selenium='Trends-summary-most']";
    TrendsSummaryLeastXPath = "//*[@data-selenium='Trends-summary-least']";
    TrendsChartPieChartXPath = "//*[@data-selenium='trend-pie-chart-Active Minutes']";
          
}
const Trends = new TrendsPage;
export default Trends;

