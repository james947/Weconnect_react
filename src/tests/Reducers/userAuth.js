import * as types from '../../types';
import * as actions from '../../redux/actions/user_auth';


describe('actions', () => {
    it('should render a business profile page', () => {
      const text = 'token'
      const expectedAction = {
        type: types.USER_LOGGED_IN,
        text
      }
      expect(actions.userLoggedIn(text)).toEqual(expectedAction)
    })
  })