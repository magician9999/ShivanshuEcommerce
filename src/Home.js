import React from 'react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted from './components/Trusted';
import Feature from './components/Feature';



const Home = () => {
  
  
  const data={
    name:"E-Kirana",
  }
 
  return (
  <>
  <HeroSection myData={data}/>
  <Feature/>
  <Services/>
  <Trusted/>

  </>
  );
  
};

export default Home;
 