import React from 'react';
import Hero from '../components/Helpers/Hero';
import Banner from '../components/Helpers/Banner';
import { Link } from 'react-router-dom';
import ApartmentsContainer from '../components/Apartments/ApartmentsContainer';

const Aparts = () => {
  return (
    <>
      <Hero hero='roomsHero'>
        <Banner
          title='the best apartments in herceg-Novi'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos, laborum ex. Quasi debitis eum exercitationem at eius quisquam nihil laborum rem! Architecto magni corporis ipsam quis, nam doloremque reprehenderit at eum labore voluptatem facere cumque ducimus odio accusamus hic? Quod corrupti eligendi autem nulla veritatis asperiores pariatur provident magni odio?'
        >
          <Link to='/' className='btn-primary'>
            return home
          </Link>
        </Banner>
      </Hero>
      <ApartmentsContainer />
    </>
  );
};

export default Aparts;
