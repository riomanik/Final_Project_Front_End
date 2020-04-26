import { combineReducers, createStore } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import createEncryptor from "redux-persist-transform-encrypt";
import { userActiveReducer } from "reducers/user";
import { changeSessionReducer } from "reducers/user";
import { idClass } from "reducers/user/class";
import { selectedClass } from "reducers/user/class";
import { selectedClassDetail } from "reducers/payment";
import { viewSaldoReducer } from "reducers/saldo";
import { navbarClassReducer } from "reducers/navbar";
import { selectSubjectReducer } from "reducers/subject";
import { classTrainerReducer } from "reducers/trainer";
import { classTraineeReducer } from "reducers/trainee";
import { imageLessonTraineeReducer } from "reducers/image";
import { pdfFilesTraineeReducer } from "reducers/trainee";
import { pdfFilesTrainerReducer } from "reducers/trainer";
import { videoFilesTraineeReducer } from "reducers/trainee";
import { videoFilesTrainerReducer } from "reducers/trainer";
import { tugasFilesTraineeReducer } from "reducers/trainee";
import { classIdTrainerReducer } from "reducers/trainer";
import { taskTraineeReducer } from "reducers/trainer";
import { classNameTrainerReducer } from "reducers/trainer";
import { nameTraineeReducer } from "reducers/trainer";
import { tugasFilesTrainerReducer } from "reducers/trainer";
import { getTraineeId } from "reducers/trainee";
import { imageProfileReducer } from "reducers/image";
import { selectTraineeReducer } from "reducers/trainee";
import { selectTaskReducer } from "reducers/trainee";
import { selectPdfReducer } from "reducers/trainee";
import { tokenReducer } from "reducers/token";

const encryptor = createEncryptor({
    secretKey: 'my-super-secret-key'
})

const config = {
    key: 'primary',
    storage,
    transforms: [encryptor],
    blacklist: [''],
    debug: true
}

const appReducer = combineReducers({
    userActive: userActiveReducer,
    changeSession: changeSessionReducer,
    idClass: idClass,
    selectedClass: selectedClass,
    selectedClassDetail: selectedClassDetail,
    viewSaldo: viewSaldoReducer,
    navbarClassReducer: navbarClassReducer,
    selectSubjectReducer: selectSubjectReducer,
    classTrainerReducer: classTrainerReducer,
    classTraineeReducer: classTraineeReducer,
    imageLessonTraineeReducer: imageLessonTraineeReducer,
    pdfFilesTraineeReducer: pdfFilesTraineeReducer,
    videoFilesTraineeReducer: videoFilesTraineeReducer,
    pdfFilesTrainerReducer: pdfFilesTrainerReducer,
    videoFilesTrainerReducer: videoFilesTrainerReducer,
    tugasFilesTraineeReducer: tugasFilesTraineeReducer,
    tugasFilesTrainerReducer: tugasFilesTrainerReducer,
    viewSaldoReducer: viewSaldoReducer,
    classIdTrainerReducer: classIdTrainerReducer,
    taskTraineeReducer: taskTraineeReducer,
    classNameTrainerReducer: classNameTrainerReducer,
    nameTraineeReducer: nameTraineeReducer,
    getTraineeId: getTraineeId,
    imageProfileReducer: imageProfileReducer,
    selectTraineeReducer: selectTraineeReducer,
    selectTaskReducer: selectTaskReducer,
    selectPdfReducer: selectPdfReducer,
    tokenReducer: tokenReducer
});

const rootReducer = (state, action) => {
    if (action.type === "LOGOUT") {
        state = undefined;
    }
    return appReducer(state, action);
};

const persistedReducer = persistReducer(config, rootReducer);

export default () => {
    let appStore = createStore(persistedReducer);
    let appPersistor = persistStore(appStore);
    return {
        appStore, appPersistor
    }
}