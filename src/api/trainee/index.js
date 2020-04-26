export function validateTrainee(email, password) {
    return fetch(process.env.REACT_APP_WS_URL + "/auth/trainee", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            email: email,
            password: password
        })
    });
}

export function createTrainee(email, password, fullName, phoneNumber, address) {
    return fetch(process.env.REACT_APP_WS_URL + '/register/trainee', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            password: password,
            fullName: fullName,
            phoneNumber: phoneNumber,
            address: address
        })
    })
}

export function doSubmitTask(idTask, traineeId, id, token) {
    return fetch(process.env.REACT_APP_WS_URL + '/tasksubmitted', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
        body: JSON.stringify({
            subjectTaskId: idTask,
            traineeId: traineeId,
            masterFilesId: id
        })
    })
}

export function uploadPhoto(files, token) {
    return fetch(process.env.REACT_APP_WS_URL + "/file/stringbase64", {
        method: "POST",
        headers: { 'Authorization': `Bearer ${token}` },
        body: files
    });
}

export function doGetListPdf(id, token) {
    return fetch(process.env.REACT_APP_WS_URL + `/subjectmatter/pdf?classId=${id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
    })
}

export function doGetListVideo(id, token) {
    return fetch(process.env.REACT_APP_WS_URL + `/subjectmatter/video?classId=${id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
    })
}

export function doGetListTask(id, token) {
    return fetch(process.env.REACT_APP_WS_URL + `/subjecttask/byclassid?classId=${id}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
    })
}

export function doGetScoreTask(idTrainee, token) {
    return fetch(process.env.REACT_APP_WS_URL + `/score/traineeid?traineeId=${idTrainee}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
    })
}

export function doReportScore(traineeId, classId, token) {
    return fetch(process.env.REACT_APP_WS_URL + `/report?traineeId=${traineeId}&classId=${classId}`, {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
    })
}