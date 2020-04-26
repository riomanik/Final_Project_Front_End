import {
    classTraineeReducer, pdfFilesTraineeReducer,
    tugasFilesTraineeReducer, videoFilesTraineeReducer,
    getTraineeId, selectPdfReducer, selectTaskReducer, selectTraineeReducer
} from '../../../../reducers/trainee/index'

describe('trainee class reducer', () => {
    it('should handle CLASS_TRAINEE_ID ', () => {
        expect(classTraineeReducer({}, {
            type: 'CLASS_TRAINEE_ID',
            payload: test = 0
        })).toEqual(
            test = 0
        )
        expect(classTraineeReducer({},
            {
                test: 0
            }
            , {
                type: "CLASS_TRAINEE_ID",
                payload: test = 0
            }
        )).toEqual(
            {
                //     payload: "test",
                //     type: "IMAGE_LESSON_TRAINEE",
                // },
                // {
                //     test: "test"
            }
        )
    })
});

describe('view pdf  reducer', () => {
    it('should handle PDF_TRAINEE_FILE ', () => {
        expect(pdfFilesTraineeReducer({}, {
            type: 'PDF_TRAINEE_FILE',
            payload: test = 0
        })).toEqual(
            test = 0
        )
        expect(pdfFilesTraineeReducer({},
            {
                test: 0
            }
            , {
                type: "PDF_TRAINEE_FILE",
                payload: test = 0
            }
        )).toEqual(
            {
                //     payload: "test",
                //     type: "IMAGE_LESSON_TRAINEE",
                // },
                // {
                //     test: "test"
            }
        )
    })
});

describe('view video reducer', () => {
    it('should handle VIDEO_TRAINEE_FILE ', () => {
        expect(videoFilesTraineeReducer({}, {
            type: 'VIDEO_TRAINEE_FILE',
            payload: test = 0
        })).toEqual(
            test = 0
        )
        expect(videoFilesTraineeReducer({},
            {
                test: 0
            }
            , {
                type: "VIDEO_TRAINEE_FILE",
                payload: test = 0
            }
        )).toEqual(
            {
                //     payload: "test",
                //     type: "IMAGE_LESSON_TRAINEE",
                // },
                // {
                //     test: "test"
            }
        )
    })
});

describe('view tugas reducer', () => {
    it('should handle TUGAS_TRAINEE_FILE ', () => {
        expect(tugasFilesTraineeReducer({}, {
            type: 'TUGAS_TRAINEE_FILE',
            payload: test = {}
        })).toEqual(
            test = {}
        )
        expect(tugasFilesTraineeReducer({},
            {
                test: {}
            }
            , {
                type: "TUGAS_TRAINEE_FILE",
                payload: test = {}
            }
        )).toEqual(
            {
                //     payload: "test",
                //     type: "IMAGE_LESSON_TRAINEE",
                // },
                // {
                //     test: "test"
            }
        )
    })
});


describe('view video reducer', () => {
    it('should handle TRAINEE_ID ', () => {
        expect(getTraineeId({}, {
            type: 'TRAINEE_ID',
            payload: test = 0
        })).toEqual(
            test = 0
        )
        expect(getTraineeId({},
            {
                test: 0
            }
            , {
                type: "TRAINEE_ID",
                payload: test = 0
            }
        )).toEqual(
            {
                //     payload: "test",
                //     type: "IMAGE_LESSON_TRAINEE",
                // },
                // {
                //     test: "test"
            }
        )
    })
});

describe('view tugas reducer', () => {
    it('should handle SELECT_TRAINEE ', () => {
        expect(selectTraineeReducer({}, {
            type: 'SELECT_TRAINEE',
            payload: test = {}
        })).toEqual(
            test = {}
        )
        expect(selectTraineeReducer({},
            {
                test: {}
            }
            , {
                type: "SELECT_TRAINEE",
                payload: test = {}
            }
        )).toEqual(
            {
                //     payload: "test",
                //     type: "IMAGE_LESSON_TRAINEE",
                // },
                // {
                //     test: "test"
            }
        )
    })
});

describe('view tugas reducer', () => {
    it('should handle SELECT_TASK ', () => {
        expect(selectTaskReducer({}, {
            type: 'SELECT_TASK',
            payload: test = {}
        })).toEqual(
            test = {}
        )
        expect(selectTaskReducer({},
            {
                test: {}
            }
            , {
                type: "SELECT_TASK",
                payload: test = {}
            }
        )).toEqual(
            {
                //     payload: "test",
                //     type: "IMAGE_LESSON_TRAINEE",
                // },
                // {
                //     test: "test"
            }
        )
    })
});

describe('TRAINEE class reducer', () => {
    it('should handle SELECT_PDF ', () => {
        expect(selectPdfReducer({}, {
            type: 'SELECT_PDF',
            payload: test = []
        })).toEqual(
            test = []
        )
        expect(selectPdfReducer({},
            {
                test: []
            }
            , {
                type: "SELECT_PDF",
                payload: test = []
            }
        )).toEqual(
            {

            }
        )
    })
});