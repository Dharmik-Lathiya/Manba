import React from 'react'
import './Home.css'
import HomeBackgrundFirst from './Home-First-Background/HomeBackgrundFirst'
import HomeSecondCard from './Home-Second-Card/HomeSecondCard'
import HomeThirdAbout from './Home-About/HomeThirdAbout'
import HomeFourthMap from './Home-Fourth-Map/HomeFourthMap'
import HomeFifthComponents from './Home-Components/HomeFifthComponents'
import Homeloan from './Home-Sixth-/Homeloan'
import HomeFooter from './Home-Footer/HomeFooter'
function Home() {
  return (
    <>
    <HomeBackgrundFirst/>
    <HomeSecondCard/>
    <HomeThirdAbout/>
    <HomeFourthMap/>
    <HomeFifthComponents/>
    <Homeloan/>
    <HomeFooter/>
    </>
  )
}

export default Home



