const Player = require('../../models/Player');

const remove = async (req, res) => {
    const { full_name, club, age } = req.body;
    try {
        const player = await Player.findByIdAndRemove(req.params.id);
        res.status(200).json({
            message: "Deleted Success!",
            player
        })

    } catch (error) {
        console.log(error)
    }    
}



module.exports = remove;