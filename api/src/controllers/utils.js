const API_KEY = `?api_key=${process.env.API_KEY}`;
const URL = `https://api.thedogapi.com/v1/breeds`;


const getObjData = (dogs) => {
    let temperamentArray;
    if(typeof dogs.id === "string") {
        temperamentArray = dogs.Temperaments.map( el => el.name );
    }
    if(dogs.reference_image_id) {
        dogs.image = `https://cdn2.thedogapi.com/images/${dogs.reference_image_id}.jpg`;
    }
    const dogObj = {
        id: dogs.id,
        imagen: (typeof dogs.id === "number") ? dogs.image : dogs.image,
        name: dogs.name,
        height: (typeof dogs.id === "number") ? dogs.height.metric: dogs.height,
        weight: (typeof dogs.id === "number") ? dogs.weight.metric: dogs.weight,
        yearsLife: (typeof dogs.id === "number") ? dogs.life_span: dogs.yearsLife,
        temperaments: (typeof dogs.id === "number") ? dogs.temperament?.split(","): temperamentArray,
    }
    return dogObj;
}

//! Aquí logre convertir mi JSON y para quitarle el error "error": "Converting circular structure to JSON\n que llega
//! por que hay una relación de tablas, no puedo modificar mi objeto, para eso me toco crear temperamentArray 
// !y un nuevo obj asignandole los valores de mi json
/* const dogsDBConvert = (dogs) => {
    const temperamentArray = dogs.Temperaments.map( el => el.name );
    const updateDogs = { 
        id: dogs.id,
        imagen: dogs.imagen,
        name: dogs.name,
        height: dogs.height,
        weight: dogs.weight,
        yearsLife: dogs.yearsLife,
        temperaments: temperamentArray
    };
    return updateDogs;
}  */

module.exports = {
    API_KEY,
    URL,
    getObjData
}