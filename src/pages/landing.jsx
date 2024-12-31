import Hero from 'sections/landing/Header';
import WhatWeOffer from 'sections/landing/WhatWeOffer'
// import WhyChooseUs from 'sections/landing/WhyChooseUS'
import TestSeriesSection from 'sections/landing/TestSeries';
import Courses from 'sections/landing/Courses';
import Testimonial from 'sections/landing/Testimonial';


export default function Landing() {
  return (
    <>
      <Hero />
      <WhatWeOffer />
      {/* <WhyChooseUs /> */}
      <TestSeriesSection />
      <Courses />
      <Testimonial />
    </>
  );
}
