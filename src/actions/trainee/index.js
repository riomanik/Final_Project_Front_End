export const doDetailClassTrainee = (doDetail) => {
    return {
        type: 'CLASS_TRAINEE_ID',
        payload: doDetail
    };
};

export const doGetPdfDetail = (pdf) => {
    return {
        type: 'PDF_TRAINEE_FILE',
        payload: pdf
    };
};

export const doGetVideoDetail = (video) => {
    return {
        type: 'VIDEO_TRAINEE_FILE',
        payload: video
    };
};

export const doGetTugasDetail = (tugas) => {
    return {
        type: 'TUGAS_TRAINEE_FILE',
        payload: tugas
    };
};

export const doGetTraineeId = (trId) => {
    return {
        type: 'TRAINEE_ID',
        payload: trId
    };
};

export const selectTraineeAction = (trainee) => {
    return {
        type: 'SELECT_TRAINEE',
        payload: trainee
    };
};

export const selectTaskAction = (task) => {
    return {
        type: 'SELECT_TASK',
        payload: task
    };
};

export const selectPdfAction = (pdf) => {
    return {
        type: 'SELECT_PDF',
        payload: pdf
    };
};