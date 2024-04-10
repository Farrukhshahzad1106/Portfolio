import React from 'react';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import ProjectsComponent from '../components/ProjectsComponent';
import ContactMe from '../components/ContactMe';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
        {/* <Navbar/>
        <HeroBanner/>
        <ProjectsComponent/> */}
        <ContactMe/>
        <Footer/>
    </div>
  )
}

export default Home