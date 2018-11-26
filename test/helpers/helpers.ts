import Intro from '../pages/intro.page';
import action from '../helpers/actions';
import selector from '../helpers/selectors';
import classTypes from '../helpers/class-types';
class Helpers {
    getThroughIntroScreens(): void {
        this.waitForSplashScreen();
        browser.waitForExist(Intro.MainTextFirstScreen, 30000);
        action.swipeLeft();
        browser.waitForExist(Intro.MainTextSecondScreen, 30000);
        action.swipeLeft();
        browser.waitForExist(Intro.MainTextThirdScreen, 30000);
        browser.click(Intro.TakeTheFirstStepButton);
    }

    waitForSplashScreen(): void {
        browser.waitUntil(() => browser.isExisting('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageView') === false);
    }

    FabSelector = selector.customLocator(selector.className(classTypes.WebView) + selector.child(selector.className(classTypes.View) + selector.child(selector.className(classTypes.View) + selector.child(selector.className(classTypes.View)+ selector.clickable))));

    
}
export enum MetaState {
    noShift,
    shift
}
const help = new Helpers();
export default help;
