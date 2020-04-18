import React, { Component } from 'react';

class Footer extends Component {
  state = {
    icons: [
      { path: '#', name: 'whatsapp' },
      { path: '#', name: 'telegram' },
      { path: '#', name: 'viber' },
      { path: '#', name: 'facebook' },
      { path: '#', name: 'instagram' },
      { path: '#', name: 'vk' }
    ],
    contacts: [
      { title: 'Topla 3 bb, Herceg - Novi 85340, Montenegro', path: '#' },
      { title: '+382 67 222 444', path: '#' },
      { title: 'novirest@gmail.com', path: '#' }
    ]
  };

  render() {
    const { icons, contacts } = this.state;
    const fullYear = new Date().getFullYear();
    return (
      <footer className='footer'>
        <div className='container'>
          <div className='footer-block'>
            <h3 className='title'>connect</h3>
            <ul className='social'>
              {icons.map((icon, ind) => (
                <li className='social-item' key={ind}>
                  <a href={icon.path} className='social-link'>
                    {icon.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className='footer-block'>
            <h3 className='title'>contact</h3>
            {contacts.map((item, ind) => (
              <address key={ind}>
                <a href={item.path} className='address-link'>
                  {item.title}
                </a>
              </address>
            ))}
          </div>
          <div className='footer-block'>
            <p>
              &copy; Novi Rest, <span className='year'>{fullYear}</span>
            </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
