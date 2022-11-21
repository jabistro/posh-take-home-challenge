import {Schema} from 'mongoose'

// import {getEventByName} from './methods'
// import {findOneOrCreate} from './statics'

const EventSchema = new Schema({
  name: String,
  flyer: String,
  groupAvi: String,
  timezone: String,
  startUtc: Date,
  endUtc: Date,
  url: String,
  venueName: String,
  groupName: String,
  location: {
    type: String,
    coordinates: [Number],
  },
})

// EventSchema.statics.findOneOrCreate = findOneOrCreate

// EventSchema.methods.getEventByName = getEventByName

export default EventSchema
