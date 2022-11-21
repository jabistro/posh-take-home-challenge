import express from 'express'

import getEvents from '../controllers/Event'

const router = express.Router()

router.get('/get/', getEvents)

export = router
