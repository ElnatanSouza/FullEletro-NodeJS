const mongoose = require('mongoose')

const conn = () => {
    mongoose.connect('mongodb://localhost/fulleletro',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log("MongoDB Connected!")
    })
    .catch((err) => {
        console.log(err + " Connection Failed!")
    })
}

module.exports = conn()
