import React, { Component } from 'react';
import ImageZoom from 'react-medium-image-zoom';
class Gallery extends Component {
  state = {
    images: [
      { name: 'desc', img: 'https://source.unsplash.com/1100x900/?nature' },
      { name: 'desc', img: 'https://source.unsplash.com/1101x900/?nature' },
      { name: 'desc', img: 'https://source.unsplash.com/1102x900/?nature' },
      { name: 'desc', img: 'https://source.unsplash.com/1103x900/?nature' },
      { name: 'desc', img: 'https://source.unsplash.com/1104x900/?nature' },
      { name: 'desc', img: 'https://source.unsplash.com/1105x900/?nature' },
      { name: 'desc', img: 'https://source.unsplash.com/1106x900/?nature' },
      { name: 'desc', img: 'https://source.unsplash.com/1107x900/?nature' },
      { name: 'desc', img: 'https://source.unsplash.com/1108x900/?nature' },
      { name: 'desc', img: 'https://source.unsplash.com/1109x900/?nature' },
      { name: 'desc', img: 'https://source.unsplash.com/1110x900/?nature' }
    ]
  };
  render() {
    const { images } = this.state;
    return (
      <section className='gallery'>
        <div className='container'>
          {images.map((img, ind) => (
            <ImageZoom
              key={ind}
              image={{
                src: img.img,
                alt: img.name
              }}
              zoomImage={{
                src: img.img,
                alt: img.name
              }}
            />
          ))}
        </div>
      </section>
    );
  }
}

export default Gallery;
