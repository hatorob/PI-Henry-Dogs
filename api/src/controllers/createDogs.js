const { Dog } = require("../db");

const createDogs = async (req,res)=> {
    try {
        const { name, height, weight, yearsLife, image, temperaments } = req.body;
        if(!name || !height || !weight || !yearsLife || !image || !temperaments) throw new Error("Falta por llenar datos");
        const newDog = await Dog.create({
            image,
            name,
            height,
            weight,
            yearsLife
        })
        newDog.addTemperaments(temperaments);
        return res.status(200).json(newDog);
    } catch (error) {
        return res.status(500).json({error: error.message});
    }
}

module.exports = createDogs;