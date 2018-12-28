import React, { Component } from 'react';
import './card.css';
import logo from '../../images/logo.jpeg';
// import { Link } from 'react-router-dom';

export default class Card extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { animal } = this.props;

    return(
      // <Link className='card' to={ '/animals/' + animal.id }>
      <a className='card' href={"/animals" + animal.id}>
        <img className='card-image' alt={ animal.name } src={ animal.cover_url || logo }/>
        <div className='card-name'>{ animal.name }</div>
        <div className='card-information'>
          <span className='size'>{animal.size}</span>
          <span className='vaccined'>{animal.is_vaccined}</span>
          <span className='sterilized'>{animal.is_sterilized}</span>
        </div>
        <div className='card-description'>{ animal.description }</div>
      </a>
      // </Link>
    )
  }
}