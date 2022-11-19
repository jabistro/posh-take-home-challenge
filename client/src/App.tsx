import '../src/assets/webfonts/Nunito/Nunito-Black.ttf'
import './assets/stylesheets/styles.scss'

import EventsList from 'components/EventsList/EventsList'
import Explore from 'components/Explore/Explore'
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Explore />} />
        <Route path='events' element={<EventsList />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
