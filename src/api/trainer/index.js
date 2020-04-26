export function validateTrainer(email, password) {
  return fetch(process.env.REACT_APP_WS_URL + "/auth/trainer", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: email,
      password: password
    })
  });
}

export function createClass(trainerId, subjectId, topic, price, ide, duration, description, token) {
  return fetch(process.env.REACT_APP_WS_URL + "/trainer/openclass", {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({
      trainerId: trainerId,
      subjectId: subjectId,
      topic: topic,
      price: price,
      ide: ide,
      duration: duration,
      description: description
    })
  });
}

export function getClassTrainer(trainerId, token) {
  return fetch(process.env.REACT_APP_WS_URL + "/trainer/yourclass", {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({
      trainerId: trainerId
    })
  });
}


export function uploadFiles(files, token) {
  return fetch(process.env.REACT_APP_WS_URL + "/file/upload", {
    method: "POST",
    headers: { 'Authorization': `Bearer ${token}` },
    body: files
  });
}

export function doGetMateriFile(idClass, token) {
  return fetch(process.env.REACT_APP_WS_URL + "/", {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({
      idClass: idClass
    })
  })
}

export function doPostSubjectMatter(idClass, title, description, id, token) {
  return fetch(process.env.REACT_APP_WS_URL + "/subjectmatter", {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({
      classId: idClass,
      title: title,
      description: description,
      masterFilesId: id
    })
  })
}

export function doGetListTraineeByClass(idClass, token) {
  return fetch(process.env.REACT_APP_WS_URL + "/trainer/yourtrainee", {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({
      classId: idClass
    })
  })
}

export function doPostSubjectTask(idClass, tittle, description, idFiles, token) {
  return fetch(process.env.REACT_APP_WS_URL + "/subjecttask", {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({
      classId: idClass,
      title: tittle,
      description: description,
      masterFilesId: idFiles
    })
  })
}

export function doPostSubmitScore(traineeId, idClass, idSubject, score, token) {
  return fetch(process.env.REACT_APP_WS_URL + "/score", {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
    body: JSON.stringify(
      {
        traineeId: traineeId,
        classId: idClass,
        subjectTaskId: idSubject,
        score: score
      }
    )
  })
}


export function doGetListTaskTrainer(classId, traineeId, token) {
  return fetch(process.env.REACT_APP_WS_URL + `/subjecttask/submitted?classId=${classId}&traineeId=${traineeId}`, {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` },
  })
}

export function GetListTraineeScore(token) {
  return fetch(process.env.REACT_APP_WS_URL + "/score", {
    method: 'GET',
    headers: { 'Authorization': `Bearer ${token}` },
  })
}




