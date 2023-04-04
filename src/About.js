import React from 'react'
import HeroSection from './components/HeroSection';


const About = ({myData}) => {
  const data={
    name: "A Shivanshu Enterprise",

  };
  return (
   <HeroSection myData={data}/>
  );
};

export default About;
