import React, { Component } from 'react';
import ApartmentsFilter from './ApartmentsFilter';
import ApartmentsList from './ApartmentsList';
import { Consumer } from '../../context';
import Loading from '../Helpers/Loading';

class ApartmentsContainer extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { loading, sortedApartments, apartments } = value;
          if (loading) {
            return <Loading />;
          }
          return (
            <>
              <ApartmentsFilter apartments={apartments} />
              <ApartmentsList sort={sortedApartments} />
            </>
          );
        }}
      </Consumer>
    );
  }
}

export default ApartmentsContainer;
