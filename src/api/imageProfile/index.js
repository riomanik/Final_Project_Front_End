export function doUploadImageProfile(traineeId, imageFile, token) {
    return fetch(process.env.REACT_APP_WS_URL + `/trainee/picture?traineeId=${traineeId}&imageFileId=${imageFile}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
    })
}