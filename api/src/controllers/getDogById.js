

const getDogById = async (req,res)=> {
    const {id} = req.params;
    res.status(200).send("bienvenido a la card del ID: " + id);
}

module.exports = getDogById;