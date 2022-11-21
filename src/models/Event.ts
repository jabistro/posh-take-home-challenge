import mongoose, {Document, Schema} from 'mongoose'

export interface Event {
  name: string
  flyer: string
  groupAvi: string
  timezone: string
  startUtc: Date
  endUtc: Date
  url: string
  venueName: string
  groupName: string
  location: {
    type: string
    coordinates: [number]
  }
}

export interface EventModel extends Event, Document {}

const EventSchema: Schema = new Schema({
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

export default mongoose.model<EventModel>('Event', EventSchema)
