export const doDetailClassTrainer = (doDetail) => {
    return {
        type: 'CLASS_TRAINER_ID',
        payload: doDetail
    };
};

export const doDetailNameClassTrainer = (doDetail) => {
    return {
        type: 'CLASS_TRAINER_NAME',
        payload: doDetail
    };
};

export const doGetPdfDetailTrainer = (pdf) => {
    return {
        type: 'PDF_TRAINER_FILE',
        payload: pdf
    };
};

export const doGetVideoDetailTrainer = (video) => {
    return {
        type: 'VIDEO_TRAINER_FILE',
        payload: video
    };
};

export const doGetTugasDetailTrainer = (tugas) => {
    return {
        type: 'TUGAS_TRAINER_FILE',
        payload: tugas
    };
};

export const taskClassIdTrainer = (classId) => {
    return {
        type: 'CLASS_ID_TRAINER',
        payload: classId
    };
};

export const taskNameTraineeTrainer = (classId) => {
    return {
        type: 'NAME_TRAINEE',
        payload: classId
    };
};

export const fileTaskSubmitTrainee = (taskTrainee) => {
    return {
        type: 'TASK_SUBMITED_TRAINEE',
        payload: taskTrainee
    };
};