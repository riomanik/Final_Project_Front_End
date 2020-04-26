import { changeSessionReducer, userActiveReducer } from '../../../../reducers/user/index'

describe('change session reducer', () => {
    it('should handle AUTH_USER ', () => {
        expect(userActiveReducer({}, {
            type: 'AUTH_USER',
            payload: test = {}
        })).toEqual(
            test = {}
        )
        expect(userActiveReducer({},
            {
                test: {}
            }
            , {
                type: "AUTH_USER",
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

describe('user active reducer', () => {
    it('should handle IS_AUTHENTICATED ', () => {
        expect(changeSessionReducer({}, {
            type: 'IS_AUTHENTICATED',
            payload: test = true
        })).toEqual(
            test = true
        )
        expect(changeSessionReducer({},
            {
                test: true
            }
            , {
                type: "IS_AUTHENTICATED",
                payload: test = true
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
