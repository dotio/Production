import React, { Component } from 'react';
import { Consumer } from '../../context';
import Loading from '../Helpers/Loading';
import Car from './Car';
import Title from '../Helpers/Title';

class FeaturedCars extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          let { loading, featuredCars: cars } = value;
          cars = cars.map(car => <Car key={car.id} car={car} />);
          return (
            <section className='featured'>
              <Title title='featured cars' />
              <div className='container'>{loading ? <Loading /> : cars}</div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default FeaturedCars;
