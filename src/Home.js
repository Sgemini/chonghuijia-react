import React, { Component } from 'react';
import './Home.css';
import './app.css';
import Card from './components/cards/card.js';
import Head from './components/head/head.js';
import HomePageImage from './images/take_me_home.jpeg';

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      animals: []
    };

    this.fetchAllAnimals = this.fetchAllAnimals.bind(this);
  }

  componentDidMount () {
    this.fetchAllAnimals();
  }

  fetchAllAnimals () {
    let _this = this;
    fetch('http://localhost:4000/animals').then(function(res){
      return res.json();
    }).then(function(res){
      _this.setState({
        animals: res.animals
      })
    }).catch(function(error) {
      console.log(error);
    });
  }

  render() {
    const { animals } = this.state;
    return (
      <div className='come-home'>
        <Head />
        <img src={HomePageImage} className='images--homepage' alt='take-me-home' />
        <div className='animal-cards'>
          {
            animals.map(function(animal) {
              return(
                <Card key={animal.id} animal={animal}/>
              )
            })
          }
        </div>
      </div>
    );
  }
}
