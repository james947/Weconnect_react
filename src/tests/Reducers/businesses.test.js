import * as actions from '../../redux/actions/business';
import eventsReducer from '../../redux/reducers/reducers';
import businesses from '../../redux/reducers/reducers';

describe('businessReducer', ()=> {
    it('should add an business to the businesses array when ADD_NEW_BUSINESS is fired', ()=> {
        const initialState = [];

        const business = {businessname : 'YOYO'};
        const action = actions.newBusiness(business);
        const newState = businesses(initialState, action);
        expect(newState.length).toEqual(1);
    });
    it('should add all events to the store when GET_BUSINESSES is fired', ()=> {
        const initialState = [];
        const data ={results : [{businessname: 'andela'}]};
        const action = actions.getBusinessesSuccess(data);
        const newState = businesses(initialState, action);
        expect(newState.length).toEqual(1);
        expect(newState[0].businessname).toBe('andela');
    });
});