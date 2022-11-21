import {Document, Model} from 'mongoose'

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

export interface EventDocument extends Event, Document {}

export interface EventModel extends Event, Model<EventDocument> {}
