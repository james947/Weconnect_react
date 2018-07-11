import * as actions from '../../redux/actions/business';
import * as types from '../../types'


describe('newBsuiness', () => {
    it('should return created business', () => {
      const business = 'mama mboga'
      const expectedAction = {
        type: types.ADD_NEW_BUSINESS,
        business
      }
      expect(actions.newBusiness(business)).toEqual(expectedAction)
    })
  })