import { selectedClassDetail } from "../../../../actions/payment/index"

describe('actions', () => {
    it('should create an action for selected class ', () => {
        const payload = 'selectedClass'
        const expectedAction = {
            type: 'SELECTED_CLASS_DETAIL',
            payload: payload
        }
        expect(selectedClassDetail(payload)).toEqual(expectedAction)
    })
});