const axios = require("axios");
const { Dog, Temperament } = require("../db");
const {API_KEY, URL, getObjData} = require("./utils");



const getDogById = async (req,res)=> {
    try {
        const {id} = req.params;
        const response = await axios(`${URL}${API_KEY}`); 
        const dogsData = response.data;
        const dogs = dogsData.map( dogs => getObjData(dogs));
        const dogsIdApi = dogs.find( dog => dog.id === Number(id));
        let dogsIdDB;
        if(!dogsIdApi) {
            dogsIdDB = await Dog.findByPk(id, {
                include: [{
                    model: Temperament,
                    attributes: ['name'],
                    through: {
                        attributes: [],
                    }
                }]
            });
        }
        res.status(200).json(dogsIdApi || dogsIdDB);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getDogById;