const axios = require("axios");
const { Dog, Temperament } = require("../db");
const {URL, getObjData} = require("./utils");


const getAllDogs = async (req,res)=> {
    try {
        const response = await axios(`${URL}?limit=60`); 
        const dogsData = response.data;
        //!Mapeo mi data y solo traigo lo que necesito
        const dogs = dogsData.map( dogs => getObjData(dogs));
        if(!dogs) throw new Error("La url de la api de dogs se encuentra en fallas ya que no llega data");
        //!Si quiero que aparezcan incluidos los que estan guardados por BD
        const dogsDB = await Dog.findAll({
            include: [{
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }]
        });
        const result = [...dogs,...dogsDB]
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

module.exports = getAllDogs;