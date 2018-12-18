import Selector from "../../helpers/selectors";

class PeoplePage {

    Search = Selector.tag('input');
    PageButton
    GoToNextPage
    GotToLastPage
    GoToFirstPage
    GoToPreviousPage
    TableRows = Selector.class('datatable-row-wrapper');
}
const People = new PeoplePage;
export default People;

