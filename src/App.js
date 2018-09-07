import React, { Component } from 'react';
import './App.css';
import Card from './components/cards/card.js';
import Head from './components/head/head.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: []
    };
    // this.fetchAllAnimals = this.fetchAllAnimals.bind(this);
  }

  componentDidMount () {
    this.fetchAllAnimals();
  }

  fetchAllAnimals () {
    let _this = this
    fetch('https://chonghuijia-api.herokuapp.com/animals').then(function(res){
      return res.json();
    }).then(function(res){
      _this.setState({
        animals: res.animals
      })
    }).catch(function(error) {
      console.log(error)
    });
  }
  render() {
    return (
      <div className='come-home'>
        <Head />
        <div className='animal-cards'>
          {
            this.state.animals.map(function(animal) {
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

export default App;
