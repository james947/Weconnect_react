import * as actions from '../../redux/actions/user_auth';
import * as types from '../../types'


describe('userLoggedIn', () => {
    it('should create an userLoggedin', () => {
      const user = 'token'
      const expectedAction = {
        type: types.USER_LOGGED_IN,
        user
      }
      expect(actions.userLoggedIn(user)).toEqual(expectedAction)
    })
  })