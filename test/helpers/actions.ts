import key from './android-keys';
import {MetaState} from './helpers';
class Actions {
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

    sendKeys(keysToSend: string): void {
        console.log('Keys to Send: ' + keysToSend);
        var stringLength = keysToSend.length;
        console.log('String length: ' + stringLength)
        for(var i = 0; i < stringLength; i++){
            var keyChar = keysToSend.charAt(i);
            console.log(keyChar);
            var keyCodeToSend = key.getKey(keyChar);
            console.log("Key To Send: " + keyCodeToSend.toString())
            if(keyChar == keyChar.toUpperCase() && (keyCodeToSend > key.Pound && keyCodeToSend < key.Period)) {
                var metaState = MetaState.shift.toString();
            }
            else{
                var metaState = MetaState.noShift.toString();
            }
            console.log('meta state: ' + metaState);
            browser.pressKeycode(keyCodeToSend.toString(), metaState);
            console.log('Sent Key: ' + keyCodeToSend);
        }
    }

    tap(selector: string): void {
        browser.touchAction(selector, 'tap');
        console.log("Tapped")
    }

    press(selector: string): void {
        browser.touchAction(selector, 'press');
        console.log('Pressed');
    }

}
const Action = new Actions();
export default Action;
