import * as actions from '../../redux/actions/business';
import * as types from '../../types'
import expect from "expect"

describe('newReviews', () => {
    it('should retrun a posted review', () => {
      const reviews = "{title: your app is awesome}"
      const expectedAction = {
        type: types.NEW_REVIEW,
        reviews

      }
      expect(actions.newReview(reviews)).toEqual(expectedAction)
    })
  })