import Intro from '../pages/intro.page';
import action from '../helpers/actions';
import selector from '../helpers/selectors';
import classTypes from '../helpers/class-types';
class Data {

    putData(url: string, data: {}) {
        return fetch(url, {
            method: 'PUT',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
        })
    }
}
export enum MetaState {
    noShift,
    shift
}
export default Data;
