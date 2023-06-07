import React from "react";
import HeroSection from "./component/HeroSection";
import { useProductContext } from "./context/Productcontext";

const About = () => {
  const {myName} = useProductContext()
  const data = {
    name: "Thapa Ecommerce",
  };

  return <>

  <HeroSection myData={data} />
  </>;
};

export default About;