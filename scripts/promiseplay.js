function successCallBack(result) {
    console.log("successful callback" + result);
}
function failureCallBack (error){
    console.error('error generating callback' + error);
}
const promise = createAudioFileAsync (audioSettings);
promise.then(successCallBack, failureCallBack);