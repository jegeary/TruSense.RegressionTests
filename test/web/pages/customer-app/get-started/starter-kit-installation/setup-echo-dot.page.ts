import Selector from "../../../../helpers/selectors";

class SetupEchoDotPage {
    ContinueButton = Selector.class('next');
    BackButton = Selector.class('back');
    TextDownloadLinkButton = Selector.class('ok');
    AlexaStepContentText = Selector.tag('h3');
    AlexaSkillCards = Selector.class('alexa-skill');
    TruSenseSkillCard;
    TruSenseSmartHomeSkillCard;
    AddTruSenseSkillButton;
    AddTruSenseSmartHomeSkillButton;
}
const SetupEchoDot = new SetupEchoDotPage;
export default SetupEchoDot;

