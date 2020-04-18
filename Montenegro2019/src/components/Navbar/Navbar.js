import React, { Component } from 'react';
import logo from '../../images/logo1.png';
import { Link, NavLink } from 'react-router-dom';
import { FaAlignRight } from 'react-icons/fa';
class Navbar extends Component {
  state = {
    isOpen: false,
    menu: [
      { name: 'Home', path: '/', exact: true },
      { name: 'Apartments', path: '/apartments' },
      { name: 'Rent a Cars', path: '/rentacar' },
      { name: 'Excursions', path: '/excursions' },
      { name: 'Legal Issues', path: '/legal' },
      { name: 'About Me', path: '/aboutme' }
    ]
  };

  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    const { isOpen, menu } = this.state;
    return (
      <nav className='navbar'>
        <div className='container'>
          <Link to='/' className='navbar-brand'>
            <img src={logo} alt='Apartments bla-bla' />
          </Link>

          <ul className={isOpen ? 'navbar-nav show-nav' : 'navbar-nav'}>
            {menu.map(menuItem => (
              <li className='navbar-item' key={menuItem.name}>
                <NavLink
                  exact={menuItem.exact}
                  to={menuItem.path}
                  className='navbar-link'
                  activeClassName='is-active'
                  onClick={() => {
                    this.setState({ isOpen: false });
                  }}
                >
                  {menuItem.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className='navbar-collapse'>
            <button type='button' onClick={this.handleToggle}>
              <FaAlignRight className='nav-icon' />
            </button>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
