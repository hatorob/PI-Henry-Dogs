const axios = require("axios");
const { API_KEY, URL, getObjData} = require("./utils");
const { Dog, Temperament } = require("../db");
const { Op } = require("sequelize");

//`https://api.thedogapi.com/v1/breeds`
const getDogsByName = async (req,res)=> {
    try {
        const name = req.query.name;
        const response = await axios(`${URL}/search?q=${name}&${API_KEY}`);
        const searchDogsByNameAPI = response.data;
        const dogs = searchDogsByNameAPI.map( dogs => getObjData(dogs));
        if(!dogs) throw new Error("No se encontro la raza indicada");
        const searchDogsByNameDB = await Dog.findAll({
            where: {
                name: {
                    [Op.iLike]: `%${name}%`
                }
            },
            include: [{
                model: Temperament,
                attributes: ['name'],
                through: {
                    attributes: [],
                }
            }]
        })
        if(!searchDogsByNameDB) throw new Error("No se encontro la raza indicada");
        const result = [...dogs,...searchDogsByNameDB];
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = getDogsByName;