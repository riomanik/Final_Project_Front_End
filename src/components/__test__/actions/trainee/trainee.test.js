import {
    doDetailClassTrainer, doGetPdfDetailTrainer,
    doGetTugasDetailTrainer, doGetVideoDetailTrainer,
    doDetailNameClassTrainer, fileTaskSubmitTrainee,
    taskClassIdTrainer, taskNameTraineeTrainer
} from "../../../../actions/trainer/index"

describe('actions', () => {
    it('should create an action for detail class trainer', () => {
        const payload = 'doDetail'
        const expectedAction = {
            type: 'CLASS_TRAINER_ID',
            payload: payload
        }
        expect(doDetailClassTrainer(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for detail class trainer', () => {
        const payload = 'doDetail'
        const expectedAction = {
            type: 'CLASS_TRAINER_NAME',
            payload: payload
        }
        expect(doDetailNameClassTrainer(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for get video detail', () => {
        const payload = 'video'
        const expectedAction = {
            type: 'VIDEO_TRAINER_FILE',
            payload: payload
        }
        expect(doGetVideoDetailTrainer(payload)).toEqual(expectedAction)
    })
});


describe('actions', () => {
    it('should create an action for get pdf detail', () => {
        const payload = 'pdf'
        const expectedAction = {
            type: 'PDF_TRAINER_FILE',
            payload: payload
        }
        expect(doGetPdfDetailTrainer(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for get tugas detail', () => {
        const payload = 'file'
        const expectedAction = {
            type: 'TUGAS_TRAINER_FILE',
            payload: payload
        }
        expect(doGetTugasDetailTrainer(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for get tugas detail', () => {
        const payload = 'classId'
        const expectedAction = {
            type: 'CLASS_ID_TRAINER',
            payload: payload
        }
        expect(taskClassIdTrainer(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for get tugas detail', () => {
        const payload = 'classId'
        const expectedAction = {
            type: 'NAME_TRAINEE',
            payload: payload
        }
        expect(taskNameTraineeTrainer(payload)).toEqual(expectedAction)
    })
});

describe('actions', () => {
    it('should create an action for get tugas detail', () => {
        const payload = 'taskTrainee'
        const expectedAction = {
            type: 'TASK_SUBMITED_TRAINEE',
            payload: payload
        }
        expect(fileTaskSubmitTrainee(payload)).toEqual(expectedAction)
    })
});