import { selectedClassDetail } from '../../../../reducers/payment/index'

describe('selected class reducer', () => {
    it('should handle SELECTED_CLASS_DETAIL ', () => {
        expect(selectedClassDetail({}, {
            type: 'SELECTED_CLASS_DETAIL',
            payload: test = {}
        })).toEqual(
            test = {}
        )
        expect(selectedClassDetail({},
            {
                test: {}
            }
            , {
                type: "SELECTED_CLASS_DETAIL",
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