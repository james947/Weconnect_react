import * as actions from '../../redux/actions/business';
import * as types from '../../types'


describe('deletedBsuiness', () => {
    it('should return an id of the deleted business', () => {
      const id = '1'
      const expectedAction = {
        type: types.DELETE_BUSINESS,
        id

      }
      expect(actions.deletedBusiness(id)).toEqual(expectedAction)
    })
  })