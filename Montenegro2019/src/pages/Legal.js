import React from 'react';
import Hero from '../components/Helpers/Hero';
import Banner from '../components/Helpers/Banner';
import { Link } from 'react-router-dom';
import ServiceLegal from '../components/Services/ServiceLegal';

const Legal = () => {
  return (
    <>
      <Hero hero='legal'>
        <Banner
          title='became a residence'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, laborum ex. Quasi debitis eum exercitationem at eius quisquam nihil laborum rem! Architecto magni corporis ipsam quis, nam doloremque reprehenderit at eum labore voluptatem facere cumque ducimus odio accusamus hic? Quod corrupti eligendi autem nulla veritatis asperiores pariatur provident magni odio?'
        >
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <ServiceLegal />
    </>
  );
};

export default Legal;
