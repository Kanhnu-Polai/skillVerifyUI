import React from 'react'
import NewsPage from '../features/news/NewsPage'
import AnalysisGraph from '../features/analysis/AnalysisGraph'
import HeroSection from '../components/home/HeroSection'
import About from '../utils/footer/About'
import Footer from '../utils/footer/Footer'

const Homepage = () => {
  return <>
  <HeroSection></HeroSection>
  <NewsPage></NewsPage>
  <AnalysisGraph></AnalysisGraph>
  <About></About>
  <Footer></Footer>
  </>
}

export default Homepage