import React, { Component } from 'react';

import './animal_index.css';
import Head from '../../components/head/head.js';
import Card from '../../components/cards/card.js';
// import getAllAnimals from '../../data.js';

export default class AnimalIndex extends Component {
  constructor() {
    super()

    this.state = {
      animals: []
    }
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
    return(
      <div>
        <Head showSearchIcon={true}/>
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
    )
  }
}