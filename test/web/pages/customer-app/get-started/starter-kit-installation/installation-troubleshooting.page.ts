import Selector from "../../../../helpers/selectors";

class InstallationTroubleshoootingPage {

    QuickStartContent = Selector.tag('ts-quick-start');
    ContinueButton = Selector.class('next');
    BackButton = Selector.class('back');

}
const InstallationTroubleshoooting = new InstallationTroubleshoootingPage;
export default InstallationTroubleshoooting;

