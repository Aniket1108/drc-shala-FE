import Hero from 'sections/landing/home/Header';
import WhatWeOffer from 'sections/landing/home/WhatWeOffer'
// import WhyChooseUs from 'sections/landing/home/WhyChooseUS'
import TestSeriesSection from 'sections/landing/home/TestSeries';
import Courses from 'sections/landing/home/Courses';
import Testimonial from 'sections/landing/home/Testimonial';


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
