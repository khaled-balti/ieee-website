import React from 'react'
import Landing from '../../layout/Landing/Landing'
import About from '../About/About'
import Team from '../Team/Team'
import Events from '../Events/Events'
import Contact from '../Contact/Contact'
import Awards from '../Awards/Awards'

const Home = () => {
  return (
    <div>
        <Landing/>
        <About isHome={true} />
        <Team isHome={true} />
        <Events isHome={true} />
        <Awards isHome={true} />
        <Contact isHome={true} />
    </div>
  )
}

export default Home
