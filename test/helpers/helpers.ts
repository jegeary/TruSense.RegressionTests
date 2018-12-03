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
    LoaderLogo = '//android.webkit.WebView[@content-desc="TruSense"]/android.view.View/android.view.View/android.view.View[1]/android.view.View/android.widget.Image';
    randomNumber(min: number, max: number): number {
        return Math.floor(Math.random()*(max - min + 1) + min)
    }
    emailNumber = this.randomNumber(1, 999);

    verifyUsersEmail(username: string): void {
        
    }
}
export enum MetaState {
    noShift,
    shift
}
const help = new Helpers();
export default help;
