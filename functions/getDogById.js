const { sendResponse } = require("../responses");



function getDogById(dogs, dogId) {
    const dogIdInt = parseInt(dogId); // ToDo: handle error

    const dog = dogs.find(dog => dog.id === dogIdInt);

    if (dog) {
        return sendResponse(200, dog);
    } else {
        return sendResponse(404, { message : 'Dog not found'});
    }
}

module.exports = { getDogById }