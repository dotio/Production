import React, { Component } from 'react';
import { firebaseApartments, firebaseCars } from './firebase';
import { firebaseLooper } from './misc';

// Create contacts
const Context = React.createContext();

export class Provider extends Component {
  // global state of app
  state = {
    apartments: [],
    sortedApartments: [],
    featuredApartments: [],
    cars: [],
    sortedCars: [],
    featuredCars: [],
    gearbox: 'all',
    music: false,
    engine: 'all',
    hp: 0,
    consumption: 0,
    diesel: false,
    loading: true,
    area: 'all',
    city: 'all',
    sell: false,
    price: 0,
    capacity: 1,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    wifi: false,
    pets: false,
    parking: false
  };

  // get all data
  componentDidMount() {
    firebaseApartments
      //.limitToLast(6)
      .once('value')
      .then(snap => {
        const apartments = firebaseLooper(snap);
        const featuredApartments = apartments.filter(
          apart => apart.featured === true
        );
        let maxPrice = Math.max(...apartments.map(item => item.price));
        let maxSize = Math.max(...apartments.map(item => item.sq));
        this.setState({
          apartments,
          sortedApartments: apartments,
          featuredApartments,
          loading: false,
          price: maxPrice,
          maxPrice,
          maxSize
        });
      });
    firebaseCars.once('value').then(car => {
      const cars = firebaseLooper(car);
      const featuredCars = cars.filter(car => car.featured === true);
      this.setState({
        cars,
        sortedCars: cars,
        featuredCars,
        loading: false
      });
    });
  }

  // get single apartment
  getContent = slug => {
    let tempApartments = [...this.state.apartments];
    const apartment = tempApartments.find(item => item.slug === slug);
    return apartment;
  };

  // get single car
  getCar = slug => {
    let tempCars = [...this.state.cars];
    const car = tempCars.find(item => item.slug === slug);
    return car;
  };

  // change state filter
  handleChange = e => {
    const target = e.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = e.target.name; // area
    //const type = e.target.type; // select one
    //const value = e.target.value; // kumbor
    this.setState(
      {
        [name]: value
      },
      this.filter
    );
  };

  // filter rooms
  filter = () => {
    let {
      apartments,
      cars,
      area,
      price,
      sell,
      city,
      wifi,
      pets,
      parking,
      gearbox,
      capacity,
      music,
      engine,
      diesel
    } = this.state;
    // get all apartments
    let tempApartments = [...apartments];
    let tempCars = [...cars];
    // transform value
    capacity = parseInt(capacity);
    price = parseInt(price);

    // filter by type
    if (area !== 'all') {
      tempApartments = tempApartments.filter(apart => apart.area === area);
    }
    if (city !== 'all') {
      tempApartments = tempApartments.filter(apart => apart.city === city);
    }
    if (gearbox !== 'all') {
      tempCars = tempCars.filter(item => item.gearbox === gearbox);
    }
    if (engine !== 'all') {
      tempCars = tempCars.filter(item => item.engine === engine);
    }
    //filter by capacity
    if (capacity !== 1) {
      tempCars = tempCars.filter(item => item.capacity >= capacity);
    }

    // filter by price
    tempApartments = tempApartments.filter(apart => apart.price <= price);
    // filter by sell
    if (sell) {
      tempApartments = tempApartments.filter(apart => apart.sell === true);
    }
    // filter by wifi
    if (wifi) {
      tempApartments = tempApartments.filter(apart => apart.wifi === true);
    }
    // filter by pets
    if (pets) {
      tempApartments = tempApartments.filter(apart => apart.pets === true);
    }
    // filter by parking
    if (parking) {
      tempApartments = tempApartments.filter(apart => apart.parking === true);
    }
    // filter by diesel
    if (diesel) {
      tempCars = tempCars.filter(item => item.diesel === true);
    }
    // filter by music
    if (music) {
      tempCars = tempCars.filter(item => item.music === true);
    }

    this.setState({
      sortedApartments: tempApartments,
      sortedCars: tempCars
    });
  };

  render() {
    return (
      // pass all state where will be consumer
      <Context.Provider
        value={{
          ...this.state,
          getContent: this.getContent,
          getCar: this.getCar,
          handleChange: this.handleChange
        }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
