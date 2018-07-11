import * as actions from '../../redux/actions/business';
import * as types from '../../types'
import expect from "expect"

describe('editedBusiness', () => {
    it('should return the business edited', () => {
      const business = '{results[{Businessname: mama mboga}]}'
      const expectedAction = {
        type: types.EDIT_BUSINESS,
        business
        
      }
      expect(actions.editedBusiness(business)).toEqual(expectedAction)
    })
  })