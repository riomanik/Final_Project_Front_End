import {
    classTrainerReducer, pdfFilesTrainerReducer,
    tugasFilesTrainerReducer, videoFilesTrainerReducer,
    classIdTrainerReducer, classNameTrainerReducer,
    nameTraineeReducer, taskTraineeReducer
} from '../../../../reducers/trainer/index'

describe('TRAINER class reducer', () => {
    it('should handle CLASS_TRAINER_ID ', () => {
        expect(classTrainerReducer({}, {
            type: 'CLASS_TRAINER_ID',
            payload: test = 0
        })).toEqual(
            test = 0
        )
        expect(classTrainerReducer({},
            {
                test: 0
            }
            , {
                type: "CLASS_TRAINER_ID",
                payload: test = 0
            }
        )).toEqual(
            {

            }
        )
    })
});



describe('TRAINER class reducer', () => {
    it('should handle CLASS_TRAINER_NAME ', () => {
        expect(classNameTrainerReducer({}, {
            type: 'CLASS_TRAINER_NAME',
            payload: test = []
        })).toEqual(
            test = []
        )
        expect(classNameTrainerReducer({},
            {
                test: []
            }
            , {
                type: "CLASS_TRAINER_NAME",
                payload: test = []
            }
        )).toEqual(
            {

            }
        )
    })
});


describe('view pdf  reducer', () => {
    it('should handle PDF_TRAINER_FILE ', () => {
        expect(pdfFilesTrainerReducer({}, {
            type: 'PDF_TRAINER_FILE',
            payload: test = 0
        })).toEqual(
            test = 0
        )
        expect(pdfFilesTrainerReducer({},
            {
                test: 0
            }
            , {
                type: "PDF_TRAINER_FILE",
                payload: test = 0
            }
        )).toEqual(
            {

            }
        )
    })
});

describe('view video reducer', () => {
    it('should handle VIDEO_TRAINER_FILE ', () => {
        expect(videoFilesTrainerReducer({}, {
            type: 'VIDEO_TRAINER_FILE',
            payload: test = 0
        })).toEqual(
            test = 0
        )
        expect(videoFilesTrainerReducer({},
            {
                test: 0
            }
            , {
                type: "VIDEO_TRAINER_FILE",
                payload: test = 0
            }
        )).toEqual(
            {

            }
        )
    })
});

describe('view tugas reducer', () => {
    it('should handle TUGAS_TRAINER_FILE ', () => {
        expect(tugasFilesTrainerReducer({}, {
            type: 'TUGAS_TRAINER_FILE',
            payload: test = {}
        })).toEqual(
            test = {}
        )
        expect(tugasFilesTrainerReducer({},
            {
                test: {}
            }
            , {
                type: "TUGAS_TRAINER_FILE",
                payload: test = {}
            }
        )).toEqual(
            {

            }
        )
    })
});


describe('view video reducer', () => {
    it('should handle CLASS_ID_TRAINER ', () => {
        expect(classIdTrainerReducer({}, {
            type: 'CLASS_ID_TRAINER',
            payload: test = 0
        })).toEqual(
            test = 0
        )
        expect(classIdTrainerReducer({},
            {
                test: 0
            }
            , {
                type: "VIDEO_TRAINER_FILE",
                payload: test = 0
            }
        )).toEqual(
            {

            }
        )
    })
});

describe('TRAINER class reducer', () => {
    it('should handle NAME_TRAINEE ', () => {
        expect(nameTraineeReducer({}, {
            type: 'NAME_TRAINEE',
            payload: test = []
        })).toEqual(
            test = []
        )
        expect(nameTraineeReducer({},
            {
                test: []
            }
            , {
                type: "NAME_TRAINEE",
                payload: test = []
            }
        )).toEqual(
            {

            }
        )
    })
});

describe('TRAINER class reducer', () => {
    it('should handle TASK_SUBMITED_TRAINEE ', () => {
        expect(taskTraineeReducer({}, {
            type: 'TASK_SUBMITED_TRAINEE',
            payload: test = []
        })).toEqual(
            test = []
        )
        expect(taskTraineeReducer({},
            {
                test: []
            }
            , {
                type: "TASK_SUBMITED_TRAINEE",
                payload: test = []
            }
        )).toEqual(
            {

            }
        )
    })
});