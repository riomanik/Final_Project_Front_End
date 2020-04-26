import {
    doDetailClassTrainee, doGetPdfDetail,
    doGetTugasDetail, doGetVideoDetail,
    doGetTraineeId, selectPdfAction,
    selectTaskAction, selectTraineeAction
} from "../../../../actions/trainee/index"

describe('actions', () => {
    it('should create an action for detail class trainee', () => {
        const payload = 'doDetail'
        const expectedAction = {
            type: 'CLASS_TRAINEE_ID',
            payload: payload
        }
        expect(doDetailClassTrainee(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for get video detail', () => {
        const payload = 'video'
        const expectedAction = {
            type: 'VIDEO_TRAINEE_FILE',
            payload: payload
        }
        expect(doGetVideoDetail(payload)).toEqual(expectedAction)
    })
});


describe('actions', () => {
    it('should create an action for get pdf detail', () => {
        const payload = 'pdf'
        const expectedAction = {
            type: 'PDF_TRAINEE_FILE',
            payload: payload
        }
        expect(doGetPdfDetail(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for get tugas detail', () => {
        const payload = 'file'
        const expectedAction = {
            type: 'TUGAS_TRAINEE_FILE',
            payload: payload
        }
        expect(doGetTugasDetail(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for get tugas detail', () => {
        const payload = 'trId'
        const expectedAction = {
            type: 'TRAINEE_ID',
            payload: payload
        }
        expect(doGetTraineeId(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for get tugas detail', () => {
        const payload = 'trainee'
        const expectedAction = {
            type: 'SELECT_TRAINEE',
            payload: payload
        }
        expect(selectTraineeAction(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for get tugas detail', () => {
        const payload = 'task'
        const expectedAction = {
            type: 'SELECT_TASK',
            payload: payload
        }
        expect(selectTaskAction(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for get tugas detail', () => {
        const payload = 'pdf'
        const expectedAction = {
            type: 'SELECT_PDF',
            payload: payload
        }
        expect(selectPdfAction(payload)).toEqual(expectedAction)
    })
});