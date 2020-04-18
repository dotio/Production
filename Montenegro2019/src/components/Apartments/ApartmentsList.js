import React from 'react';
import Apart from './Apart';

const ApartmentsList = props => {
  const { sort } = props;
  if (sort.length === 0) {
    return (
      <div className='empty-search'>
        <h3>unfortunately no apartments matched your search parameters</h3>
      </div>
    );
  }
  return (
    <section className='blockList'>
      <div className='blockList-center'>
        {sort.map(apart => (
          <Apart key={apart.id} apartment={apart} />
        ))}
      </div>
    </section>
  );
};

export default ApartmentsList;
