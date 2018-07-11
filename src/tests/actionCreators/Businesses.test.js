import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import expect from 'expect';
import * as actions from '../../redux/actions/business';
import {instance} from '../../apiRequests'
import * as types from '../../types'



const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('Async actions', ()=> {
    beforeEach(()=> {
        moxios.install(instance);
    });
    afterEach(()=> {
        moxios.uninstall(instance);
    });

    describe('get business', ()=> {
        it('should fetch businesses', ()=> {
            const businesses ={results : [{businessname: 'andela'}]}
            moxios.wait(()=> {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status : 200,
                    response : businesses
                });
            });
            const expectedAction =  [{"payload": [{"businessname": "andela"}], "type": "GET_BUSINESS"}];
            const store = mockStore({ businesses: [] });
            return store.dispatch(actions.getBusinesses()).then(()=> {
                expect(store.getActions()).toEqual(expectedAction);
            })
        });
    });
    describe('business created', ()=> {
        it('should dispatch ADD_NEW_BUSINESs ', ()=> {
            const business ={businessname: 'andela'}
            moxios.wait(()=> {
                const request = moxios.requests.mostRecent();
                request.respondWith({
                    status : 201,
                    response : business
                });
            });
            const expectedAction = [{"business": {"businessname": "andela"}, "type": "ADD_NEW_BUSINESS"}];
            const store = mockStore({ businesses: [] });
            return store.dispatch(actions.create()).then(()=> {
                expect(store.getActions()).toEqual(expectedAction);
            })
        });
    });


})
