export function purchase(classId, traineeId, token) {
  return fetch(process.env.REACT_APP_WS_URL + "/traineeclass/web", {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({
      classId: classId,
      traineeId: traineeId
    })
  });
}