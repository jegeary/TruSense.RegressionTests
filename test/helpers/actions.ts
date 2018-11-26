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
            console.log(keysToSend.charAt(i));
            var keyToSend = key.getKey(keysToSend.charAt(i)).toString();
            if(keyToSend == keyToSend.toUpperCase()){
                var metaState = MetaState.noShift.toString();
            }
            else{
                var metaState = MetaState.noShift.toString();
            }
            console.log('meta state: ' + metaState);
            browser.pressKeycode(keyToSend, metaState);
            console.log('Sent Key: ' + keyToSend);
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
