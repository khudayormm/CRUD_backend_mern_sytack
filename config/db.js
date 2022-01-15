const { connect } = require('mongoose');

module.exports = connect(process.env.MONGO_URI)
.then(() => {
    console.log(`MongoDB connected!`)
}).catch((err) => {
    console.log(err)
});