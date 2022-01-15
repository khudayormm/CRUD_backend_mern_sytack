const Player = require('../../models/Player');
const Joi = require('joi');

const createPlayer = async (req, res) => {
    const { full_name, club, age } = req.body;
    const schema = Joi.object({
        full_name: Joi.string().required().min(2),
        club: Joi.string().required().min(3),
        age: Joi.number().required().min(14).max(50)
    })

    const { error } = schema.validate({ full_name, club, age });

    if (error)
        return res.status(400).json({
            message: "error",
            errorMessage: error.details[0].message 
        })

    try {
        const players = Player.create({
            full_name,
            club,
            age
        });

    res.status(200).json({
            message: "success",
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



module.exports = createPlayer;