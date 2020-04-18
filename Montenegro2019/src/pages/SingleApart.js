import React, { Component } from 'react';
import Banner from '../components/Helpers/Banner';
import { Link } from 'react-router-dom';
import StyledHero from '../components/Helpers/StyledHero';
import { GiFamilyHouse } from 'react-icons/gi';
import {
  FaEuroSign,
  FaWater,
  FaUsers,
  FaDog,
  FaWifi,
  FaParking,
  FaExpand
} from 'react-icons/fa';
import ImageZoom from 'react-medium-image-zoom';
import { Consumer } from '../context';

class SingleApart extends Component {
  state = {
    slug: this.props.match.params.slug,
    show: false
  };

  fullImg = () => {
    this.setState({ show: !this.state.show });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { getContent } = value;
          const apartment = getContent(this.state.slug);
          if (!apartment) {
            return (
              <div className='error'>
                <h3>no such apartment could be found</h3>
                <Link to='/apartments' className='btn-primary'>
                  back to apartments
                </Link>
              </div>
            );
          }
          const {
            name,
            description,
            capacity,
            distance,
            price,
            extras,
            wifi,
            parking,
            sell,
            room,
            pets,
            images,
            sq
          } = apartment;
          if (sell) {
            return (
              <>
                <StyledHero img={images[0]}>
                  <Banner title={`${name} apartment`}>
                    <Link to='/apartments' className='btn-primary'>
                      {' '}
                      back to apartments
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
                        <FaWater className='fa' /> sea: {distance} meters
                      </h6>
                      <h6>
                        <GiFamilyHouse className='fa' />
                        rooms: {room}
                      </h6>
                      <h6>
                        <FaExpand className='fa' /> space: {sq} SQM
                      </h6>

                      <h6>
                        <FaParking className='fa' /> parking:{' '}
                        {parking ? 'private place' : 'no parking place'}
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
          } else {
            return (
              <>
                <StyledHero img={images[0]}>
                  <Banner title={`${name} apartment`}>
                    <Link to='/apartments' className='btn-primary'>
                      {' '}
                      back to apartments
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
                        <FaWater className='fa' /> sea: {distance} meters
                      </h6>
                      <h6>
                        <FaUsers className='fa' /> max capacity:{' '}
                        {capacity > 1
                          ? `${capacity} persons`
                          : `${capacity} person`}
                      </h6>
                      <h6>
                        <FaDog className='fa' />{' '}
                        {pets ? 'pets allowed' : 'no pets allowed'}
                      </h6>
                      <h6>
                        <FaWifi className='fa' />{' '}
                        {wifi ? 'wifi' : 'no internet'}
                      </h6>
                      <h6>
                        <FaParking className='fa' /> parking:{' '}
                        {parking ? 'private place' : 'no parking place'}
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
          }
        }}
      </Consumer>
    );
  }
}

export default SingleApart;
