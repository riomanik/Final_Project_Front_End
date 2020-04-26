import { idClass, selectedClass, traineeActiveClass } from '../../../../../reducers/user/class/index'

describe('view Id class reducer', () => {
    it('should handle ID_CLASS ', () => {
        expect(idClass({}, {
            type: 'ID_CLASS',
            payload: test = {}
        })).toEqual(
            test = {}
        )
        expect(idClass({},
            {
                test: {}
            }
            , {
                type: "ID_CLASS",
                payload: test = {}
            }
        )).toEqual(
            {
                //     payload: "test",
                //     type: "IMAGE_LESSON_TRAINEE",
                // },
                // {
                //     test: "test"
            }
        )
    })
});

describe('view selected class reducer', () => {
    it('should handle SELECTED_CLASS ', () => {
        expect(selectedClass({}, {
            type: 'SELECTED_CLASS',
            payload: test = {}
        })).toEqual(
            test = {}
        )
        expect(selectedClass({},
            {
                test: {}
            }
            , {
                type: "SELECTED_CLASS",
                payload: test = {}
            }
        )).toEqual(
            {
                //     payload: "test",
                //     type: "IMAGE_LESSON_TRAINEE",
                // },
                // {
                //     test: "test"
            }
        )
    })
});

describe('view traibee active reducer', () => {
    it('should handle TRAINEE_ACTIVE_CLASS ', () => {
        expect(traineeActiveClass({}, {
            type: 'TRAINEE_ACTIVE_CLASS',
            payload: test = {}
        })).toEqual(
            test = {}
        )
        expect(traineeActiveClass({},
            {
                test: {}
            }
            , {
                type: "TRAINEE_ACTIVE_CLASS",
                payload: test = {}
            }
        )).toEqual(
            {
                //     payload: "test",
                //     type: "IMAGE_LESSON_TRAINEE",
                // },
                // {
                //     test: "test"
            }
        )
    })
});