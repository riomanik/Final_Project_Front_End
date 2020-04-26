export function getListSubject(token) {
    return fetch(process.env.REACT_APP_WS_URL + '/subject', {
        method: "GET",
        headers: { 'Authorization': `Bearer ${token}` }
    });
}