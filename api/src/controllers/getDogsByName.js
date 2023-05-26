const axios = require("axios");
const { API_KEY, URL, getObjData} = require("./utils");
const { Dog, Temperament } = require("../db");
const { Op } = require("sequelize");

//`https://api.thedogapi.com/v1/breeds`
const getDogsByName = async (req,res)=> {
    try {
        const name = req.query.name;
        //! Comente la api de buscar por nombre, por que la url no trae la imagen
        //https://api.thedogapi.com/v1/breeds/search?q=america
        const response = await axios(`${URL}/search?q=${name}&${API_KEY}`);
        //const response = await axios(`${URL}${API_KEY}`);
        const searchDogsByNameAPI = response.data;
        let resultdDB;
        const dogs = searchDogsByNameAPI.map( dogs => getObjData(dogs));
        //const dogsByname = dogs.filter( dogs => dogs.name.toLowerCase().includes(name.toLowerCase()));
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
        resultdDB = searchDogsByNameDB.map( element => getObjData(element));
        const result = [...dogs,...resultdDB];
        return res.status(200).send(result);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = getDogsByName;