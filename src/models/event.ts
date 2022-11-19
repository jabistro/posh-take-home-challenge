import {model, Schema} from 'mongoose'

interface Event {
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

const eventSchema = new Schema<Event>({
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

const Event = model<Event>('Event', eventSchema)

export default Event
