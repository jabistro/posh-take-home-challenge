import app from "./app";
import mongoose from "mongoose"
require('dotenv').config();

const server_port = Number(process.env.PORT) || 4000
const server_host = process.env.YOUR_HOST || '0.0.0.0'

const uri = process.env.MONGO_DB_URI!

mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then()
    .catch(err => {
        console.log(err)
    })

mongoose.connection.once('open', async () => {
    console.log('Connected to Mongo')
    console.log(process.env.MONGO_IP)

    console.log('Agenda initialized')
})

app.listen(server_port, server_host, () => {
    console.log('Running Server')
})
