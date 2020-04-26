import { tokenReducer } from '../../../../reducers/token/index'

describe('view tugas reducer', () => {
    it('should handle TOKEN_ACTION ', () => {
        expect(tokenReducer({}, {
            type: 'TOKEN_ACTION',
            payload: test = {}
        })).toEqual(
            test = {}
        )
        expect(tokenReducer({},
            {
                test: {}
            }
            , {
                type: "TOKEN_ACTION",
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