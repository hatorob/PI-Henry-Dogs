/* const axios = require("axios");
const {API_KEY, URL} = require("../utils/globalsVar"); */
//`https://api.thedogapi.com/v1/breeds`
const getDogsByName = async (req,res)=> {
    res.status(200).send("hola");
}

module.exports = getDogsByName;