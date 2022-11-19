import mongoose from 'mongoose'

import app from './app'

require('dotenv').config()

const server_port = Number(process.env.PORT) || 4000
const server_host = process.env.YOUR_HOST || '0.0.0.0'

const uri = process.env.MONGO_DB_URI!

mongoose
  .connect(uri, {useNewUrlParser: true, useUnifiedTopology: true})
  .then()
  .catch(err => {
    console.log(err)
  })

const db = mongoose.connection.once('open', async () => {
  console.log('Connected to Mongo')
  console.log(process.env.MONGO_IP)
  console.log('Agenda initialized')
})

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.listen(server_port, server_host, () => {
  console.log('Running Server')
})
