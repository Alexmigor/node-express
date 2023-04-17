const mongoose = require('mongoose')

if (process.argv.length<3) {
    console.log('give password as argument')
    process.exit(1)
  }
  
  const password = process.argv[2]
  
  const url = `mongodb+srv://alexmigor:${password}@cluster0.bri9tnb.mongodb.net/myChat?retryWrites=true&w=majority`
  
  mongoose.set('strictQuery',false)
  mongoose.connect(url)
  
  const noteSchema = new mongoose.Schema({
    content: String,
    important: Boolean,
  })
  
  const Message = mongoose.model('Message', noteSchema)

  Message.find({}).then(result => {
    result.forEach(message => {
      console.log(message)
    })
    mongoose.connection.close()
  })
  
  // const note = new Message({
  //   content: 'Mongoose makes things easy',
  //   important: true,
  // })
  
  // note.save().then(result => {
  //   console.log(note.content)
  //   mongoose.connection.close()
  // })
//   note.save().then(el => mongoose.connection.close())