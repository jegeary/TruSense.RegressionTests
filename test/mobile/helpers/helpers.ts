import Intro from '../pages/intro.page';
import action from '../helpers/actions';
import selector from './android-selectors';
import classTypes from './class-types';
class Helpers {


    // tslint:disable-next-line:max-line-length
    FabSelector = selector.customLocator(selector.className(classTypes.WebView) + selector.child(selector.className(classTypes.View) + selector.child(selector.className(classTypes.View) + selector.child(selector.className(classTypes.View) + selector.clickable))));
    // tslint:disable-next-line:max-line-length
    LoaderLogo = '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.webkit.WebView/android.webkit.WebView/android.view.View/android.view.View/android.view.View[1]/android.view.View[2]/android.widget.Image';
    emailNumber = this.randomNumber(1, 999);

    randomNumber(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
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
        // tslint:disable-next-line:max-line-length
        browser.waitUntil(() => browser.isExisting('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ImageView') === false);
    }
    verifyUsersEmail(username: string): void {

    }
}
export enum MetaState {
    noShift,
    shift
}
const help = new Helpers();
export default help;
