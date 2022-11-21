import '../../assets/stylesheets/components/EventCard.scss'

import React from 'react'

interface Props {
  event: {
    name: string
    flyer: string
    groupAvi: string
    timezone: string
    startUtc: Date
    endUtc: Date
    url: string
    venueName: string
    groupName: string
  }
}

const EventCard: React.FC<Props> = ({event}) => {
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  const day = days[event.startUtc.getDay()]
  const flyer = event.flyer

  return (
    <div className='event_card_wrap' style={{backgroundImage: `url(${flyer})`}}>
      <div className='event_card_filter'></div>
      <div className='event_card_info'>
        <div className='event_card_date'>
          <div className='event_card_dotw'>{day}</div>
        </div>
        <div>
          <div className='event_card_name'>{event.name}</div>
          <div className='event_card_location'>{event.venueName}</div>
        </div>
      </div>
      <img className='event_card_organizer' src={event.groupAvi} />
    </div>
  )
}

export default EventCard
