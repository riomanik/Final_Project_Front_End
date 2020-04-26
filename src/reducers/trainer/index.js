export const classTrainerReducer = (classTrainer = 0, action) => {
    if (action.type === 'CLASS_TRAINER_ID') {
        return action.payload;
    }
    return classTrainer;
};

export const classNameTrainerReducer = (classTrainer = [], action) => {
    if (action.type === 'CLASS_TRAINER_NAME') {
        return action.payload;
    }
    return classTrainer;
};


export const pdfFilesTrainerReducer = (pdfTrainer = 0, action) => {
    if (action.type === 'PDF_TRAINER_FILE') {
        return action.payload;
    }
    return pdfTrainer;
};

export const videoFilesTrainerReducer = (videoTrainer = 0, action) => {
    if (action.type === 'VIDEO_TRAINER_FILE') {
        return action.payload;
    }
    return videoTrainer;
};

export const tugasFilesTrainerReducer = (tugasTrainer = "", action) => {
    if (action.type === 'TUGAS_TRAINER_FILE') {
        return action.payload;
    }
    return tugasTrainer;
};

export const classIdTrainerReducer = (classTrainer = 0, action) => {
    if (action.type === 'CLASS_ID_TRAINER') {
        return action.payload;
    }
    return classTrainer;
};

export const nameTraineeReducer = (classTrainer = [], action) => {
    if (action.type === 'NAME_TRAINEE') {
        return action.payload;
    }
    return classTrainer;
};

export const taskTraineeReducer = (taskTrainee = [], action) => {
    if (action.type === 'TASK_SUBMITED_TRAINEE') {
        return action.payload;
    }
    return taskTrainee;
};


