export const imageLessonTraineeReducer = (image = "", action) => {
    if (action.type === 'IMAGE_LESSON_TRAINEE') {
        return action.payload;
    }
    return image;
};

export const imageProfileReducer = (image = "https://cdn3.iconfinder.com/data/icons/user-icon-3-1/100/user_3_Artboard_1-512.png", action) => {
    if (action.type === 'IMAGE_PROFILE') {
        return action.payload;
    }
    return image;
};
