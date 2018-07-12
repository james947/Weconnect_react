import * as actions from '../../redux/actions/business';
import * as types from '../../types'
import expect from "expect"

describe('filteredBusinessSuccess', () => {
    it('should return an a list of filtered businesses', () => {
      const businesses = 'results[{ bsuinessname: Andela}]'
      const expectedAction = {
        type: types.FILTER_BUSINESS,
        businesses

      }
      expect(actions.filteredBusinessesSuccess(businesses)).toEqual(expectedAction)
    })
  })