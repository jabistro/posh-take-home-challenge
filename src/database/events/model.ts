import {model} from 'mongoose'

import EventSchema from './schema'
import {EventDocument} from './types'

export const EventModel = model<EventDocument>('event', EventSchema)
