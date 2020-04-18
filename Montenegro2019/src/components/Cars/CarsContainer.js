import React, { Component } from 'react';
import CarsFilter from './CarsFilter';
import CarsList from './CarsList';
import { Consumer } from '../../context';
import Loading from '../Helpers/Loading';

class CarsContainer extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { loading, sortedCars, cars } = value;
          if (loading) {
            return <Loading />;
          }
          return (
            <>
              <CarsFilter cars={cars} />
              <CarsList sort={sortedCars} />
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default CarsContainer;
