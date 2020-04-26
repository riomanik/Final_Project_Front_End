import { navbarClass } from "../../../../actions/navbar/index"

describe('actions', () => {
    it('should create an action for Navbar class', () => {
        const payload = 'navbar'
        const expectedAction = {
            type: 'NAVBAR_CLASS',
            payload: payload
        }
        expect(navbarClass(payload)).toEqual(expectedAction)
    })
});