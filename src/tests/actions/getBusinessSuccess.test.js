import * as actions from '../../redux/actions/business';
import * as types from '../../types'


describe('getBusinessSucces', () => {
    it('should return a list business', () => {
      const business = 'a{results[{Businessname: mama mboga}]}'
      const expectedAction = {
        type: types.GET_BUSINESS,
        payload : business.results
        
      }
      expect(actions.getBusinessesSuccess(business)).toEqual(expectedAction)
    })
  })