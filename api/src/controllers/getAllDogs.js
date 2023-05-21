const axios = require("axios");
const {API_KEY, URL} = require("../utils/globalsVar");


const getAllDogs = async (req,res)=> {
    try {
        const response = await axios(`${URL}${API_KEY}`); 
        const dogsData = response.data;
        if(!dogsData) throw new Error("La url de la api de dogs se encuentra en fallas ya que no llega data");
        return res.status(200).json(dogsData);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getAllDogs;