import React from 'react'

const EventsList = () => {
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

  type Response = Event[]

  async function getEvents(): Promise<Response> {
    return await fetch('https://posh.vip/explore?c=popular&t=week&p=1&city=nyc/v1/events', {
      method: 'GET',
    })
      .then(response => response.json())
      .then(response => {
        return response as Response
      })
  }

  getEvents()

  return <div>EventsList</div>
}

export default EventsList
