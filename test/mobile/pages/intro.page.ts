import selector from '../helpers/android-selectors';
import help from '../helpers/helpers';
class IntroScreens {
    // tslint:disable-next-line:max-line-length
    MainTextFirstScreen = selector.byText('More Information');
    // MainTextFirstScreen = 'new UiSelector().textContains("More Information")'; 'new UiSelector().textContains("More Information")'
    MainTextSecondScreen = selector.byText('Connect Once');
    MainTextThirdScreen = selector.byText('View Charts');
    TakeTheFirstStepButton = selector.byClassName('android.widget.Button');
    FirstScreenText = browser.getText(this.MainTextFirstScreen);
    SecondScreenText = browser.getText(this.MainTextSecondScreen);
    ThirdScreenText = browser.getText(this.MainTextThirdScreen);
}
const Intro = new IntroScreens;
export default Intro;

