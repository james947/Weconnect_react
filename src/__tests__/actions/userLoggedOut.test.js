import * as actions from '../../redux/actions/user_auth';
import * as types from '../../types'
import expect from "expect"

describe('userLoggedOut', () => {
    it('should create an action userLoggeOut', () => {
      const expectedAction = {
        type: types.USER_LOGGED_OUT,
      }
      expect(actions.userLoggedOut()).toEqual(expectedAction)
    })
  })