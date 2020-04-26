import { authUser, changeUserSession, logout } from "../../../../actions/user/index"

describe('actions', () => {
    it('should create an action for authentication user', () => {
        const payload = 'user'
        const expectedAction = {
            type: 'AUTH_USER',
            payload: payload
        }
        expect(authUser(payload)).toEqual(expectedAction)
    })
});


describe('actions', () => {
    it('should create an action for Change user session', () => {
        const payload = 'isAuthenticated'
        const expectedAction = {
            type: 'IS_AUTHENTICATED',
            payload: payload
        }
        expect(changeUserSession(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action to Logout', () => {
        const expectedAction = {
            type: 'LOGOUT'
        }
        expect(logout()).toEqual(expectedAction)
    })
});