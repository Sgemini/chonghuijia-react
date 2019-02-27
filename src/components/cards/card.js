import React, { Component } from 'react';
import './card.css';

export default class Card extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
    animal: {},
    imgHost: 'https://chonghuijia-api.herokuapp.com'
  }

  showDefaultImg = (e) => {
    e.target.src = this.props.imgHost + '/logo.png';
    e.target.onerror = null;
  }

  render() {
    const { animal, imgHost } = this.props;
    let logo = imgHost + '/logo.png';
    let imgSrc = imgHost + '/' + animal.name.toLowerCase() + '.jpeg';

    return(
      <a className='card' href={"/animals" + animal.id}>
        <img className='card-image' alt={ animal.name || '小可怜' } src={ imgSrc } onError={this.showDefaultImg}/>
        <div className='card-name'>{ animal.name }</div>
        <div className='card-information'>
          <span className='size'>{animal.size}</span>
          <span className='vaccined'>{animal.is_vaccined}</span>
          <span className='sterilized'>{animal.is_sterilized}</span>
        </div>
        <div className='card-description'>{ animal.description }</div>
      </a>
    )
  }
}
