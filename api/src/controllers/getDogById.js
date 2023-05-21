const axios = require("axios");
const {API_KEY, URL} = require("../utils/globalsVar");
const { Dog } = require("../db");

const getDogById = async (req,res)=> {
    try {
        const {id} = req.params;
        const response = await axios(`${URL}${API_KEY}`); 
        const dogsData = response.data;
        const dogsIdApi = dogsData.find( dog => dog.id === Number(id));
        let dogsIdDB;
        if(!dogsIdApi) {
            dogsIdDB = await Dog.findByPk(id);
        }
        res.status(200).json(dogsIdApi || dogsIdDB);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getDogById;