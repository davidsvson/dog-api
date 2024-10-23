const { sendResponse } = require('./responses/index');
const { postDog } = require('./functions/postDog');
const { getDogById } = require('./functions/getDogById');

var dogs = [
    {
        id : 2387546,
        breed : "Golden Retriver",
        age : 3,
        color: "Golden",
        weight_kg: 30
    },
    {
        id : 233245,
        breed : "Siberian Husky",
        age : 4,
        color: "Black and White",
        weight_kg: 25
    },
    {
        id : 238723,
        breed : "Labrador Retriver",
        age : 2,
        color: "white",
        weight_kg: 20
    },
]

exports.handler = async (event, context) => {

    const { method, path } = event.requestContext.http;
    
    if ( method === 'GET' && path === '/dog' ) {
        return sendResponse(200, {dogs});
    } else if (method === 'POST' && path === '/dog') {
       const body = JSON.parse(event.body); // should check if  event.body not empty
      
       return postDog(dogs, body);
    } else if (method === 'GET' && path.startsWith('/dog/')) {
        const dogId = path.split('/dog/')[1];

        return getDogById(dogs , dogId );
    }

    return sendResponse(405, {message : 'error' });
}