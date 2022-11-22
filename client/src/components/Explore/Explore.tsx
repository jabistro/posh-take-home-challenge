import '../../assets/stylesheets/components/Explore.scss'

import useWindowSize from 'hooks/useWindowSize'
import React from 'react'
import Confetti from 'react-confetti'
import {Link} from 'react-router-dom'

const Explore = () => {
  const {width, height} = useWindowSize()
  const confettiColors = ['#ffcc00', '#7c6926', '#413719']

  return (
    <div className='explore_wrap'>
      <Confetti height={height} width={width} wind={0.04} colors={confettiColors} />
      <p>WHERE ARE YOU LOOKING FOR EXPERIENCES?</p>
      <Link className='explore_link' to='events'>
        <div className='gold'>🗽 NEW YORK</div>
        <div className='gold'>🌴 MIAMI</div>
        <div className='gold'>☀️ LOS ANGELES</div>
        <div className='blue'>📍 NEAR ME</div>
      </Link>
    </div>
  )
}

export default Explore
