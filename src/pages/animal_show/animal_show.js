import React, { Component } from 'react';

import logo from '../../images/logo.png';
import Head from '../../components/head/head.js';

import './animal_show.css';

export default class AnimalShow extends Component {
  constructor () {
    super();
    this.state = {
      animal: {}
    };
  }

  componentDidMount () {
    this.fetchAnimal(this.props.match.params.id);
  }

  fetchAnimal (animal_id) {
    let _this = this
    fetch('https://chonghuijia-api.herokuapp.com/animals/' + animal_id).then(function(res){
      return res.json();
    }).then(function(res){
      _this.setState({
        animal: res.animal
      })
    }).catch(function(error) {
      console.log(error)
    });
  }

  render () {
    // const { animal } = this.props
    const { animal } = this.state

    return(
      <div className='animal-show-container'>
        <Head />
        <img src={animal.cover_url || logo} width='100%' />
        <div>{animal.name}</div>
        <div>{animal.description}</div>
        <div>{animal.gender}</div>
        <div>{animal.is_vaccined}</div>
        <div>{animal.is_sterilized}</div>
      </div>
    )
  }

}