const Player = require('../../models/Player');

const readOne = async (req, res) => {
    try {
        const player = await Player.findById(req.params.id);
        if(!player)
            return res.status(404).json({
                message: "error",
                errorMessage: "Bu id ga tegishli foydalanuvchi mavjud emas!"
            })
            
        res.status(200).json({
            message: "success",
            player
        })
    } catch (error) {
        console.log(error)
    }    
}



module.exports = readOne;