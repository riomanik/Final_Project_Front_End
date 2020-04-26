export function getListClassById(id, page, pageSize, token) {
  return fetch(process.env.REACT_APP_WS_URL + `/class/subjectid?subjectId=${id}&page=${page}&pageSize=${pageSize}`, {
    method: "GET",
    headers: { 'Authorization': `Bearer ${token}` }
  })
}

export function getListClassDetail(id, token) {
  return fetch(process.env.REACT_APP_WS_URL + `/class/detail?classId=${id}`, {
    method: "GET",
    headers: { 'Authorization': `Bearer ${token}` }
  });
}


export function getListClassTrainee(traineeId, token) {
  return fetch(process.env.REACT_APP_WS_URL + "/traineeclass/yourclass", {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({
      traineeId: traineeId
    })
  });
}
