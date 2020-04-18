import React from 'react';
import Car from './Car';

const CarsList = props => {
  const { sort } = props;
  if (sort.length === 0) {
    return (
      <div className='empty-search'>
        <h3>unfortunately no cars matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className='blockList'>
      <div className='blockList-center'>
        {sort.map(car => (
          <Car key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
};

export default CarsList;
