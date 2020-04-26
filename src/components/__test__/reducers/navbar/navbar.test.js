import { navbarClassReducer } from '../../../../reducers/navbar/index'

describe('navbar class reducer', () => {
    it('should handle NAVBAR_CLASS ', () => {
        expect(navbarClassReducer({}, {
            type: 'NAVBAR_CLASS',
            payload: test = {}
        })).toEqual(
            test = {}
        )
        expect(navbarClassReducer({},
            {
                test: {}
            }
            , {
                type: "NAVBAR_CLASS",
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