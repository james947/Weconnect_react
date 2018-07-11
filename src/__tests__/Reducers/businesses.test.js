import * as actions from '../../redux/actions/business';
import eventsReducer from '../../redux/reducers/reducers';
import businesses from '../../redux/reducers/reducers';

describe('businessReducer', ()=> {
    it('should add all events to the store when GET_BUSINESSES is fired', ()=> {
        const initialState = [{businessname: 'andela'}];
        const data ={results : [{businessname: 'andela'}]};
        const action = actions.getBusinessesSuccess(data);
        const newState = businesses(initialState, action);
        expect(newState.length).toEqual(1);
        expect(newState[0].businessname).toBe('andela');
    });
});