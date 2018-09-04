import React from 'react';
import './card.css';

export default class Card extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { animal } = this.props;

    return(
      <div className='card'>{ animal.name }</div>
    )
  }
}