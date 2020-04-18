import React from 'react';
import { Consumer } from '../../context';
import Title from '../Helpers/Title';
import { FaEuroSign } from 'react-icons/fa';

const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};

const ApartmentsFilter = ({ apartments }) => {
  return (
    <Consumer>
      {value => {
        const {
          handleChange,
          area,
          city,
          price,
          minPrice,
          maxPrice,
          wifi,
          parking,
          pets,
          sell
        } = value;
        // get cities
        let cities = getUnique(apartments, 'city');
        cities = ['all', ...cities];

        //get aries
        let aries = getUnique(apartments, 'area');
        aries = ['all', ...aries];
        // capacity
        //let people = getUnique(apartments, 'capacity');

        return (
          <section className='filter-container'>
            <Title title='search apartments' />
            <form className='filter-form'>
              <div className='form-group'>
                <label htmlFor='city'>apartment city</label>
                <select
                  name='city'
                  id='city'
                  value={city}
                  className='form-control'
                  onChange={handleChange}
                >
                  {cities.map((city, ind) => (
                    <option value={city} key={ind} onClick={handleChange}>
                      {city}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group'>
                <label htmlFor='area'>apartment area</label>
                <select
                  name='area'
                  id='area'
                  value={area}
                  className='form-control'
                  onChange={handleChange}
                >
                  {aries.map((area, ind) => (
                    <option value={area} key={ind}>
                      {area}
                    </option>
                  ))}
                </select>
              </div>
              {/* <div className='form-group'>
                <label htmlFor='capacity'>apartment cap</label>
                <select
                  name='capacity'
                  id='capacity'
                  value={capacity}
                  className='form-control'
                  onChange={handleChange}
                >
                  {people.map((person, ind) => (
                    <option value={person} key={ind}>
                      {person}
                    </option>
                  ))}
                </select>
              </div> */}
              <div className='form-group'>
                <label htmlFor='price'>
                  apartment price {price} <FaEuroSign className='euro' />
                </label>
                <input
                  type='range'
                  name='price'
                  min={minPrice}
                  max={maxPrice}
                  id='price'
                  value={price}
                  onChange={handleChange}
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <div className='form-group__checkbox'>
                  <input
                    type='checkbox'
                    name='sell'
                    id='sell'
                    checked={sell}
                    onChange={handleChange}
                  />
                  <label htmlFor='sell'>sell</label>
                  <input
                    type='checkbox'
                    name='wifi'
                    id='wifi'
                    checked={wifi}
                    onChange={handleChange}
                  />
                  <label htmlFor='wifi'>wifi</label>
                  <input
                    type='checkbox'
                    name='pets'
                    id='pets'
                    checked={pets}
                    onChange={handleChange}
                  />
                  <label htmlFor='pets'>pets</label>
                  <input
                    type='checkbox'
                    name='parking'
                    id='parking'
                    checked={parking}
                    onChange={handleChange}
                  />
                  <label htmlFor='parking'>parking</label>
                </div>
              </div>
            </form>
          </section>
        );
      }}
    </Consumer>
  );
};

export default ApartmentsFilter;
