const { sendResponse } = require('../responses/index');

function checkDogFormat(body) {
    const keys = Object.keys(body);

    if( body?.breed && body?.age && body?.color && body?.id && body?.weight_kg && keys.length == 5 ) {
        return true
    } else {
        return false
    }

}

//ToDo: generate id
function postDog(dogs, body) {
    if(checkDogFormat(body)) {
        dogs.push(body);
        
        return sendResponse(200, { sucess: true });
    } else {

        return sendResponse(400, { message: "Wrong data in body" });
    }
}

module.exports = { postDog }