import {EventDocument} from './types'

export async function findOneOrCreate(this: any, eventId: string): Promise<EventDocument> {
  const event = await this.findOne({eventId})
  if (event) {
    return event
  } else {
    return this.create({eventId})
  }
}
