import Selector from "../../helpers/selectors";

class MembersPage {
    PageTitle = Selector.class('page-title');
    InviteMemebersLink = Selector.partialLinkText('Invite Members');
    
}
const Members = new MembersPage();
export default Members;

