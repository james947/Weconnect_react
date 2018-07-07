import * as types from '../../types';
import * as actions from '../../redux/actions/user_auth';


describe('actions', () => {
    it('should create an action user loggedin', () => {
      const text = 'token'
      const expectedAction = {
        type: types.USER_LOGGED_IN,
        text
      }
      expect(actions.userLoggedIn(text)).toEqual(expectedAction)
    })
  })