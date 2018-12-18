import Selector from "../../helpers/selectors";

class DashboardPage {
    RegistrationCard = Selector.partialClassName('registration-stats')[0];
    ParticipationCard = Selector.partialClassName('participation-stats');
    OverallAdherenceCard = Selector.partialClassName('registration-stats')[1];
    BloodPressure = Selector.partialClassName('blood-pressure-stats')[0];
    Weight = Selector.partialClassName('blood-pressure-stats')[1];
}
const Dashboard = new DashboardPage();
export default Dashboard;

