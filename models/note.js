const mongoose = require('mongoose')

mongoose.set('strictQuery', false)

// const password = 'Myhora'
// const url = `mongodb+srv://alexmigor:${password}@cluster0.bri9tnb.mongodb.net/myChat?retryWrites=true&w=majority`

const url = process.env.MONGODB_URL

console.log('connecting to', url)

mongoose.connect(url)
    .then(result => {
        console.log('connecting to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
})

noteSchema.set('toJSON', {
    transform: (document, returnObj) => {
        returnObj.id = returnObj._id.toString()
        delete returnObj._id
        delete returnObj.__v
    }
})

module.exports = mongoose.model('Message', noteSchema)