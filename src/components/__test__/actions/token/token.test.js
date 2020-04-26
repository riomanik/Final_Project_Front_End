import { tokenAction } from "../../../../actions/token/index"

describe('actions', () => {
    it('should create an action for token action', () => {
        const payload = 'token'
        const expectedAction = {
            type: 'TOKEN_ACTION',
            payload: payload
        }
        expect(tokenAction(payload)).toEqual(expectedAction)
    })
});

