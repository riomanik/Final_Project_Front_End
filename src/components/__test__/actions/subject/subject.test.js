import { selectSubjectAction } from "../../../../actions/subject/index"

describe('actions', () => {
    it('should create an action for choosing Subject ', () => {
        const payload = 'selectSubject'
        const expectedAction = {
            type: 'SELECT_SUBJECT',
            payload: payload
        }
        expect(selectSubjectAction(payload)).toEqual(expectedAction)
    })
});