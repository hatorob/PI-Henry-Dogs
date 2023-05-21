const { Dog } = require("../db");
const { Op } = require("sequelize");
const axios = require("axios");
const {API_KEY, URL} = require("../utils/globalsVar");
//`https://api.thedogapi.com/v1/breeds`
const getDogsByName = async (req,res)=> {
    try {
        const name = req.query.name;
        const response = await axios(`${URL}/search?q=${name}&${API_KEY}`);
        const searchDogsByNameAPI = response.data;
        if(!searchDogsByNameAPI) throw new Error("No se encontro la raza indicada");
        const searchDogsByNameDB = await Dog.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            }
        })
        if(!searchDogsByNameDB) throw new Error("No se encontro la raza indicada");
        const result = [...searchDogsByNameAPI,...searchDogsByNameDB];
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = getDogsByName;