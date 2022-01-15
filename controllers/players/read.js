const Player = require('../../models/Player');

const getPlayers = async (req, res) => {
    try {
        const players = await Player.find();
        res.status(200).json({
            message: "success",
            players
        })
    } catch (error) {
        console.log(error)
    }    
}



module.exports = getPlayers;