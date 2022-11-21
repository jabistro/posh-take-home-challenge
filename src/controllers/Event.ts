import {NextFunction, Request, Response} from 'express'

import Event from '../models/Event'

const getEvents = async (req: Request, res: Response, next: NextFunction) => {
  return Event.find()
    .then(events => res.status(200).json({events}))
    .catch(error => res.status(500).json({error}))
}

export default getEvents
