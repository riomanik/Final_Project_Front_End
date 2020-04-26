export const classTraineeReducer = (classTrainee = null, action) => {
    if (action.type === 'CLASS_TRAINEE_ID') {
        return action.payload;
    }
    return classTrainee;
};


export const pdfFilesTraineeReducer = (pdfTrainee = 0, action) => {
    if (action.type === 'PDF_TRAINEE_FILE') {
        return action.payload;
    }
    return pdfTrainee;
};

export const videoFilesTraineeReducer = (videoTrainee = 0, action) => {
    if (action.type === 'VIDEO_TRAINEE_FILE') {
        return action.payload;
    }
    return videoTrainee;
};

export const tugasFilesTraineeReducer = (tugasTrainee = {}, action) => {
    if (action.type === 'TUGAS_TRAINEE_FILE') {
        return action.payload;
    }
    return tugasTrainee;
};

export const getTraineeId = (traineId = 0, action) => {
    if (action.type === 'TRAINEE_ID') {
        return action.payload;
    }
    return traineId;
};

export const selectTraineeReducer = (selectTrainee = {}, action) => {
    if (action.type === 'SELECT_TRAINEE') {
        return action.payload;
    }
    return selectTrainee;
};

export const selectTaskReducer = (selectTask = {}, action) => {
    if (action.type === 'SELECT_TASK') {
        return action.payload;
    }
    return selectTask;
};

export const selectPdfReducer = (selectPdf = [], action) => {
    if (action.type === 'SELECT_PDF') {
        return action.payload;
    }
    return selectPdf;
};
