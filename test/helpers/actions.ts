import key from './android-keys';
import {MetaState} from './helpers';
class Actions {
    getElementLocation(element: string) {
        let x = browser.getLocation(element, 'x');
        let y = browser.getLocation(element, 'y');

        return {x: x, y: y};
    }

    swipeLeft() {
        browser.touchPerform([
            { action: 'press', options: {x: 917, y: 1247} },
            { action: 'moveTo', options: {x: 202, y: 1247} },
            { action: 'release' }
        ]);
        console.log('Swiped Left')
    }

    swipeRight() {
        browser.touchPerform([
            { action: 'press', options: {x: 202, y: 1247 } },
            { action: 'moveTo', options: { x: 917, y: 1247 } },
            { action: 'release' }
        ]);
        console.log('Swiped Right')
    }

    ScrollDown(element: string, yOffSet: number) {
        let location = this.getElementLocation(element);
        browser.touchPerform([
            { action: 'press', options: {x: location.x, y: location.y}},
            { action: 'moveTo', options: { x: location.x, y: location.y - yOffSet}},
            { action: 'release'}
        ]);
        console.log('Scrolled Down')

    }
    
    ScrollDownThenTap(element: string, yOffSet: number) {
        let location = this.getElementLocation(element);
        this.ScrollDown(element, yOffSet);
        this.tapLocation(location.x, location.y)
    }

    sendKeys(keysToSend: string): void {
        console.log('Keys to Send: ' + keysToSend);
        var stringLength = keysToSend.length;
        for(var i = 0; i < stringLength; i++){
            var keyChar = keysToSend.charAt(i);
            var keyCodeToSend = key.getKey(keyChar);
            if(keyChar == keyChar.toUpperCase() && (keyCodeToSend > key.Pound && keyCodeToSend < key.Period)) {
                var metaState = MetaState.shift.toString();
            }
            else{
                var metaState = MetaState.noShift.toString();
            }
            console.log("Key To Send: " + keyChar + ', Key Code: ' + keyCodeToSend.toString() + ', Meta State: ' + metaState);
            browser.pressKeycode(keyCodeToSend.toString(), metaState);
        }
        browser.hideDeviceKeyboard('tapOutside');
        browser.pause(2000);
    }

    tap(selector: string): void {
        //let location = this.getElementLocation(selector);
        //this.tapLocation(location.x, location.y);
        browser.touchAction(selector, 'tap');
        console.log("Tapped");
        browser.pause(2000);
    }

    tapLocation(x: number, y: number){
        browser.touchPerform([
            { action: 'tap', options: {x: x, y: y} }
        ]);
    }

    press(selector: string): void {
        browser.touchAction(selector, 'press');
        console.log('Pressed');
    }

    

}
const Action = new Actions();
export default Action;
