import React, { Component } from 'react';
import './card.css';
import logo from '../../images/logo.jpeg';

export default class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { animal } = this.props;

    return(
      <div className='card'>
        <img className='card-image' alt={ animal.name } src={ animal.cover_url || logo }/>
        <div className='card-name'>{ animal.name }</div>
        <div className='card-information'>
          <span className='size'>{animal.size}</span>
          <span className='vaccined'>{animal.is_vaccined}</span>
          <span className='sterilized'>{animal.is_sterilized}</span>
        </div>
        <div className='card-description'>{ animal.description }</div>
      </div>
    )
  }
}