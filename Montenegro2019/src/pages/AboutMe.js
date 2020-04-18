import React, { Component } from 'react';
import Hero from '../components/Helpers/Hero';
import Banner from '../components/Helpers/Banner';
import { Link } from 'react-router-dom';
import {
  FaWhatsapp,
  FaTelegram,
  FaViber,
  FaFacebook,
  FaInstagram,
  FaVk
} from 'react-icons/fa';
import girl from '../images/background/girl.jpg';
class AboutMe extends Component {
  state = {
    icons: [
      { icon: <FaWhatsapp />, path: '#' },
      { icon: <FaTelegram />, path: '#' },
      { icon: <FaViber />, path: '#' },
      { icon: <FaFacebook />, path: '#' },
      { icon: <FaInstagram />, path: '#' },
      { icon: <FaVk />, path: '#' }
    ],
    contacts: [
      { title: 'Topla 3 bb, Herceg - Novi 85340, Montenegro', path: '#' },
      { title: '+382 67 222 444', path: '#' },
      { title: 'novirest@gmail.com', path: '#' }
    ]
  };
  render() {
    const { icons, contacts } = this.state;
    return (
      <>
        <Hero hero='me'>
          <Banner
            title='let me introduce myself'
            subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
          >
            <Link to='/' className='btn-primary'>
              return home
            </Link>
          </Banner>
        </Hero>
        <div className='details'>
          <div className='container'>
            <div className='details-content'>
              <address>
                {contacts.map((item, ind) => (
                  <a href={item.path} className='address-link' key={ind}>
                    {item.title}
                  </a>
                ))}
              </address>
              <h3>find me in social</h3>
              <ul className='social'>
                {icons.map((icon, ind) => (
                  <li className='social-item' key={ind}>
                    <a href={icon.path} className='social-link'>
                      {icon.icon}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className='details-office'>
              <img src={girl} alt='office' />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AboutMe;
