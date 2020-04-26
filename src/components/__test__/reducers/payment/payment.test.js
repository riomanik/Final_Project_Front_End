import { selectSubjectReducer } from '../../../../reducers/subject/index'

describe('view saldo reducer', () => {
    it('should handle SELECT_SUBJECT ', () => {
        expect(selectSubjectReducer({}, {
            type: 'SELECT_SUBJECT',
            payload: test = {}
        })).toEqual(
            test = {}
        )
        expect(selectSubjectReducer({},
            {
                test: {}
            }
            , {
                type: "SELECT_SUBJECT",
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