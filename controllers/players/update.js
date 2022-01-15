const Player = require('../../models/Player');

const update = async (req, res) => {
    const { full_name, club, age } = req.body;
    try {
        const player = await Player.findByIdAndUpdate(req.params.id, {
            full_name, club, age
        });

        res.status(200).json({
            message: "Updated Success!",   
            player: {   
                full_name,
                club,
                age
            }
        })


    } catch (error) {
        console.log(error)
    }    
}



module.exports = update;