import { imageLessonTraineeReducer, imageProfileReducer } from '../../../../reducers/image/index'

describe('image lesson reducer', () => {
    it('should handle IMAGE_LESSON_TRAINEE', () => {
        expect(imageLessonTraineeReducer({}, {
            type: 'IMAGE_LESSON_TRAINEE',
            payload: "test"
        })).toEqual(
            "test"
        )
        expect(imageLessonTraineeReducer({},
            {
                test: "test"
            }
            , {
                type: "IMAGE_LESSON_TRAINEE",
                payload: "test"
            }
        )).toEqual(
            {

            }
        )
    })
});

describe('image lesson reducer', () => {
    it('should handle IMAGE_PROFILE', () => {
        expect(imageProfileReducer({}, {
            type: 'IMAGE_PROFILE',
            payload: "test"
        })).toEqual(
            "test"
        )
        expect(imageProfileReducer({},
            {
                test: "test"
            }
            , {
                type: "IMAGE_PROFILE",
                payload: "test"
            }
        )).toEqual(
            {

            }
        )
    })
});