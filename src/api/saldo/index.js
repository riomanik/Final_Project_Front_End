export function ViewSaldoTrainee(traineeId, token) {
  return fetch(process.env.REACT_APP_WS_URL + "/trainee/yourbalance", {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({
      traineeId: traineeId
    })
  });
}

export function TopUpSaldo(acountNumber, traineeId, totalBalance, token) {
  return fetch(process.env.REACT_APP_WS_URL + "/trainee/topup", {
    method: "POST",
    headers: { "Content-Type": "application/json", 'Authorization': `Bearer ${token}` },
    body: JSON.stringify({
      accountNumber: acountNumber,
      traineeId: traineeId,
      totalBalance: totalBalance
    })
  });
}