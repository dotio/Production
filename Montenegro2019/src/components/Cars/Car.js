import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaEuroSign } from 'react-icons/fa';

const Car = props => {
  const { car } = props;
  const { name, slug, images, price } = car;
  return (
    <article className='block'>
      <div className='img-container'>
        <img src={images[0]} alt={name} />
        <div className='price'>
          <h6>
            <FaEuroSign className='fa' />
            {price}
          </h6>
          <p>day</p>
        </div>
        <Link to={`/rentacar/${slug}`} className='btn-primary block-link'>
          features
        </Link>
      </div>
      <p className='info'>{name}</p>
    </article>
  );
};

Car.propTypes = {
  apartment: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.array.isRequired,
    price: PropTypes.number.isRequired
  })
};

export default Car;
