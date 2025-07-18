import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Companylogo from './components/Companylogo'
import PurposeSection from './components/PurposeSection'
import FeatureSection from './components/FeatureSection'
import ScheduleSection from './components/ScheduleSection'
import MonitorSection from './components/MonitorSection'
import PriceingSection from './components/PriceingSection'
import ServicesSection from './components/ServiceSection'
import TestimonialsSection from './components/TestimonialsSection'
import NewsletterSection from './components/NewsletterSection'
import Footer from './components/Footer'



function App() {
  return (
    <main className='relative min-h-screen overflow-x-hidden '>
      <div className='absolute -top-28 -left-28 w-[500px] h-[500px] 
      bg-gradient-to-tr from-indigo-500/20 to-pink-500/20  overflow-hidden rounded-full blur-[80px] -z-20'></div>
      <div>
      <Navbar/>
      <Hero/>
      <Companylogo/>
      <PurposeSection/>
      <FeatureSection/>
      <ScheduleSection/>
      <MonitorSection/>
      <PriceingSection/>
      <ServicesSection/>
      <TestimonialsSection/>
      <NewsletterSection/>
      <Footer/>

      </div>
  </main>
  )
}

export default App
