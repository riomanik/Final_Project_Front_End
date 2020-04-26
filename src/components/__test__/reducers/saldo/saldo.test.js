import { viewSaldoReducer } from '../../../../reducers/saldo/index'

describe('view saldo reducer', () => {
    it('should handle VIEW_SALDO ', () => {
        expect(viewSaldoReducer({}, {
            type: 'VIEW_SALDO',
            payload: test = 0
        })).toEqual(
            test = 0
        )
        expect(viewSaldoReducer({},
            {
                test: {}
            }
            , {
                type: "VIEW_SALDO",
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