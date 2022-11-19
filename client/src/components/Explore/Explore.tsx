import '../../assets/stylesheets/components/Explore.scss'

import React, {useState} from 'react'
import Confetti from 'react-confetti'
import {Link} from 'react-router-dom'
import {useEventListener, useIsomorphicLayoutEffect} from 'usehooks-ts'

const Explore = () => {
  const {width, height} = useWindowSize()

  interface WindowSize {
    width: number
    height: number
  }

  function useWindowSize(): WindowSize {
    const [windowSize, setWindowSize] = useState<WindowSize>({
      width: 0,
      height: 0,
    })

    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    useEventListener('resize', handleSize)

    useIsomorphicLayoutEffect(() => {
      handleSize()
    }, [])

    return windowSize
  }

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
