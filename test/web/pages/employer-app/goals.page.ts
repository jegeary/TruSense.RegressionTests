import Selector from "../../helpers/selectors";

class GoalsPage {
    BloodPresureGoalSelect = Selector.id('goalPerWeek[1]');
    WeightGoalSelect = Selector.id('goalPerWeek[2]');
}
const Goals = new GoalsPage();
export default Goals;

