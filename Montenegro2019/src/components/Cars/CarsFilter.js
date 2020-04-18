import React from 'react';
import { Consumer } from '../../context';
import Title from '../Helpers/Title';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const CarsFilter = ({ cars }) => {
  return (
    <Consumer>
      {value => {
        const { handleChange, gearbox, engine, diesel, music } = value;
        // get cars
        let uniq = getUnique(cars, 'gearbox');
        uniq = ['all', ...uniq];
        // get engines
        let engineCars = getUnique(cars, 'engine');
        engineCars = ['all', ...engineCars];
        return (
          <section className='filter-container'>
            <Title title='rent a car' />
            <form className='filter-form'>
              <div className='form-group'>
                <label htmlFor='gearbox'>choose gearbox</label>
                <select
                  name='gearbox'
                  id='gearbox'
                  value={gearbox}
                  className='form-control'
                  onChange={handleChange}
                >
                  {uniq.map((car, ind) => (
                    <option value={car} key={ind} onClick={handleChange}>
                      {car}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='engine'>choose engine</label>
                <select
                  name='engine'
                  id='engine'
                  value={engine}
                  className='form-control'
                  onChange={handleChange}
                >
                  {engineCars.map((item, ind) => (
                    <option value={item} key={ind}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group'>
                <div className='form-group__checkbox'>
                  <input
                    type='checkbox'
                    name='diesel'
                    id='diesel'
                    checked={diesel}
                    onChange={handleChange}
                  />
                  <label htmlFor='diesel'>diesel</label>
                  <input
                    type='checkbox'
                    name='music'
                    id='music'
                    checked={music}
                    onChange={handleChange}
                  />
                  <label htmlFor='music'>aux/mp3</label>
                </div>
              </div>
            </form>
          </section>
        );
      }}
    </Consumer>
  );
};

export default CarsFilter;
