import dotenv from 'dotenv'
import mongoose from 'mongoose'

import app from './app'
import eventRoutes from './src/routes/Event'

const server_port = Number(process.env.PORT) || 4000
const server_host = process.env.YOUR_HOST || '127.0.0.1'

dotenv.config()

//DB Connection
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

// console.log(db)

app.listen(server_port, server_host, () => {
  console.log('Running Server')
})

app.use('/events', eventRoutes)
