const API_KEY = `?api_key=${process.env.API_KEY}`;
const URL = `https://api.thedogapi.com/v1/breeds`;


const getObjData = (dogs) => {
    const dogObj = {
        id: dogs.id,
        imagen: dogs.imagen,
        name: dogs.name,
        height: dogs.height,
        weight: dogs.weight,
        yearsLife: dogs.life_span,
        temperaments: dogs.temperament?.split(",")
    }
    return dogObj;
}

module.exports = {
    getObjData,
    API_KEY,
    URL
}