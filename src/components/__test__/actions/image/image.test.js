import { imageLessonsTrainee, imageProfile } from "../../../../actions/image/index"

describe('actions', () => {
    it('should create an action for Image Action', () => {
        const payload = 'imageLessonsTrainee'
        const expectedAction = {
            type: 'IMAGE_LESSON_TRAINEE',
            payload: payload
        }
        expect(imageLessonsTrainee(payload)).toEqual(expectedAction)
    })

});



describe('actions', () => {
    it('should create an action for Image Action', () => {
        const payload = 'imageProfile'
        const expectedAction = {
            type: 'IMAGE_PROFILE',
            payload: payload
        }
        expect(imageProfile(payload)).toEqual(expectedAction)
    })

});