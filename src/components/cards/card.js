import React from 'react';
import './card.css';

export default class Card extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { animal } = this.props;

    return(
      <div className='card'>
        <img className='card-image'/>
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