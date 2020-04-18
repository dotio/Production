import React, { Fragment } from 'react';
import Hero from '../components/Helpers/Hero';
import Banner from '../components/Helpers/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services/Services';
import FeaturedRoom from '../components/Apartments/FeaturedRoom';
import FeaturedCars from '../components/Cars/FeaturedCars';

const Home = () => {
  return (
    <Fragment>
      <Hero>
        <Banner
          title='wanna rest in herceg-Novi?'
          subtitle='Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere inventore aut, atque officia officiis itaque nemo nam. Non accusamus quos ratione repellat nesciunt sit tenetur ducimus, tempora odio officiis cupiditate a reprehenderit adipisci vitae soluta atque quaerat officia voluptates, iusto facilis praesentium, perspiciatis rem. Magni distinctio asperiores vitae placeat perspiciatis.'
        >
          <Link to='/apartments' className='btn-primary'>
            look more
          </Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRoom />
      <FeaturedCars />
    </Fragment>
  );
};

export default Home;
