import React, { Component } from 'react';
import Banner from '../components/Helpers/Banner';
import { Link } from 'react-router-dom';
import StyledHero from '../components/Helpers/StyledHero';
import {
  FaEuroSign,
  FaCogs,
  FaUsers,
  FaMusic,
  FaCar,
  FaFillDrip,
  FaGasPump,
  FaRocket
} from 'react-icons/fa';
import ImageZoom from 'react-medium-image-zoom';
import { Consumer } from '../context';

class SingleCar extends Component {
  state = {
    slug: this.props.match.params.slug
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { getCar } = value;
          const car = getCar(this.state.slug);
          if (!car) {
            return (
              <div className='error'>
                <h3>no such cars could be found</h3>
                <Link to='/rentacar' className='btn-primary'>
                  back to cars
                </Link>
              </div>
            );
          }
          const {
            name,
            description,
            price,
            extras,
            images,
            gearbox,
            capacity,
            music,
            engine,
            hp,
            consumption,
            diesel
          } = car;

          return (
            <>
              <StyledHero img={images[0]}>
                <Banner title={`${name} car`}>
                  <Link to='/rentacar' className='btn-primary'>
                    {' '}
                    back to cars
                  </Link>
                </Banner>
              </StyledHero>
              <section className='single'>
                <div className='container'>
                  {images.map((img, ind) => (
                    <ImageZoom
                      key={ind}
                      image={{
                        src: img,
                        alt: name
                      }}
                      zoomImage={{
                        src: img,
                        alt: name
                      }}
                    />
                  ))}
                </div>
                <div className='single-content'>
                  <article className='desc'>
                    <h3>details</h3>
                    <p>{description}</p>
                  </article>
                  <article className='single-info'>
                    <h3>info</h3>
                    <h6>
                      <FaEuroSign className='fa' /> price: {price}
                    </h6>
                    <h6>
                      <FaCogs className='fa' /> gearbox: {gearbox}
                    </h6>
                    <h6>
                      <FaUsers className='fa' /> max capacity:{' '}
                      {capacity > 1
                        ? `${capacity} persons`
                        : `${capacity} person`}
                    </h6>
                    <h6>
                      <FaCar className='fa' /> engine: {engine} cc
                    </h6>
                    <h6>
                      <FaRocket className='fa' /> hp: {hp} h/p
                    </h6>
                    <h6>
                      <FaFillDrip className='fa' />
                      fuel consumption: {consumption} l/100
                    </h6>

                    <h6>
                      <FaMusic className='fa' />{' '}
                      {music ? 'mp3, aux' : 'radio, cd'}
                    </h6>
                    <h6>
                      <FaGasPump className='fa' />{' '}
                      {diesel ? 'diesel power ' : 'petrol power'}
                    </h6>
                  </article>
                </div>
              </section>
              <section className='extras'>
                <h6>extras</h6>
                <ul className='extrasList'>
                  {extras.map((item, ind) => (
                    <li key={ind}>- {item}</li>
                  ))}
                </ul>
              </section>
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default SingleCar;
