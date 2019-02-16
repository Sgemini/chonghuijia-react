import React, { Component } from 'react';

import './popup.css';
import SearchPopup from './searchPopup.js';

export default class Popup extends Component {
  static defaultProps = {
    propsType: 'search',
  }

  searchPopup = () => {
    return(
      <SearchPopup />
    )
  }

  popupBody = (type) => {
    console.log(type)
    switch(type) {
      case 'search':
       return(this.searchPopup());
       break;
    }
  }

  render() {
    const { propsType } = this.props;
    return(
      <div className='popup'>
        {
          propsType ? 
          this.popupBody(propsType) :
          null
        }
      </div>
    )
  }
}