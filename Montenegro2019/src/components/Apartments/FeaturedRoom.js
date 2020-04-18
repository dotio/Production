import React, { Component } from 'react';
import { Consumer } from '../../context';
import Loading from '../Helpers/Loading';
import Apart from './Apart';
import Title from '../Helpers/Title';

class FeaturedRoom extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          let { loading, featuredApartments: rooms } = value;
          rooms = rooms.map(room => <Apart key={room.id} apartment={room} />);
          return (
            <section className='featured'>
              <Title title='featured apartments' />
              <div className='container'>{loading ? <Loading /> : rooms}</div>
            </section>
          );
        }}
      </Consumer>
    );
  }
}

export default FeaturedRoom;
