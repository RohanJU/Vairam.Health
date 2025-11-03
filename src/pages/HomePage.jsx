import React from 'react'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import AlphaRevivalSection from '../components/AlphaRevivalSection'
import ThreeStepsSection from '../components/ThreeStepsSection'
import FAQSection from '../components/FAQSection'
import TestimonialsSection from '../components/TestimonialsSection'
import Footer from '../components/Footer'
import CommunityBox from '../components/CommunityBox'
import HealthForm from '../components/HealthForm'
import YoutubeVideos from './YoutubeVideos'
import SlidingButtonsCarousel from '../components/SlidingButtonsCarousel'

const HomePage = () => {
  return (
    <>
    <HeroSection />
    <SlidingButtonsCarousel />
    <AlphaRevivalSection />
    <ThreeStepsSection />
    <CommunityBox />
    <YoutubeVideos />
    <TestimonialsSection />
    <FAQSection />
    </>
  )
}

export default HomePage