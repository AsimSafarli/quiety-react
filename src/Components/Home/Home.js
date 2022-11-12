import React from 'react'
import Report from '../Report/Report'
import Whyus from '../Whyus/Whyus'
import Expert from "../Expert/Expert"
import Feature from "../Feature/Feature"
import Testimonial from '../Testimonial/Testimonial'
import Process from '../Process/Process'
import Desigen from '../Desigen/Desigen'
import Integration from '../Integration/Integration'
import Footer from '../Footer/Footer'
const Home = () => {
  return (
    <div>
      <Feature/>
      <Expert/>
      <Whyus/>
      <Report/>
      <Process/>
      <Testimonial/>
      <Integration/>
      <Footer/>
      <Desigen/>
    </div>
  )
}

export default Home
