import '../../assets/stylesheets/components/EventsList.scss'

import React from 'react'

const EventsList = () => {
  // async function getEvents(): Promise<Response> {
  //   return await fetch('https://posh.vip/explore?c=popular&t=week&p=1&city=nyc/v1/events', {
  //     method: 'GET',
  //   })
  //     .then(response => response.json())
  //     .then(response => {
  //       return response as Response
  //     })
  // }

  // getEvents()

  return (
    <div className='events_wrap'>
      <video
        autoPlay
        playsInline
        loop
        className='events_video'
        src='https://posh-b2.s3.us-east-2.amazonaws.com/meta+(1).mp4'
      />
      <div className='events_cover'>
        <video
          autoPlay
          playsInline
          loop
          className='events_cover_video'
          src='https://posh-b2.s3.us-east-2.amazonaws.com/meta+(1).mp4'
        />
      </div>
      <div className='events_body'>
        <div className='events_body_main'>
          <div className='events_body_main_nav'>
            <div className='events_body_main_nav_right'>
              <div className='selected'>This Week</div>
              <div>Today</div>
              <div>🦃 Thanksgiving</div>
            </div>
          </div>
          <div className='events_body_main_results EventCardGrid'>Events Card</div>
        </div>
      </div>
      <img
        className='events_back'
        src='https://posh-b2.s3.us-east-2.amazonaws.com/left-arrow-in-circular-button-black-symbol.svg'
      />
    </div>
  )
}

export default EventsList
