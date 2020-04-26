import { idClass, selectedClass, traineeActiveClass } from "../../../../actions/class/index"

describe('actions', () => {
    it('should create an action for id class', () => {
        const payload = 'idClass'
        const expectedAction = {
            type: 'ID_CLASS',
            payload: payload
        }
        expect(idClass(payload)).toEqual(expectedAction)
    })
});


describe('actions', () => {
    it('should create an action for selectd class', () => {
        const payload = 'selectedClass'
        const expectedAction = {
            type: 'SELECTED_CLASS',
            payload: payload
        }
        expect(selectedClass(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action to see trainee active class', () => {
        const payload = 'traineeActiveClass'
        const expectedAction = {
            type: 'TRAINEE_ACTIVE_CLASS',
            payload: payload
        }
        expect(traineeActiveClass(payload)).toEqual(expectedAction)
    })
});