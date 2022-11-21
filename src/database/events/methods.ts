import {Document} from 'mongoose'

import {EventDocument} from './types'

export async function getEventByName(this: EventDocument): Promise<Document[]> {
  return this.model('event').find({name: this.name})
}
