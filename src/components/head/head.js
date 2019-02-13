import React, { Component, Fragment } from 'react';
import './head.css';
import '../../app.css';
import '../../config.js';

import Popup from '../popup/popup.js';

export default class Head extends Component {
  constructor () {
    super();
    this.state = {
      showMenu: false,
      isPopup: false,
      showSearchPopup: false,
    }
  }

  static defaultProps = {
    headTitle: 'hello 宠回家',
    showSearchIcon: false,
  }

  toggleMenu = () => {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }));
  }

  closePopup = () => {
    this.setState({
      isPopup: false,
      showSearchPopup: false,
    })
  }

  showSearchPopup = () => {
    this.setState({
      showSearchPopup: true,
      isPopup: true,
    })
  }

  headMenu = () => {
    const { mobile } = global.browser.versions;
    const { showMenu } = this.state;

    return(
      <nav>
        <div className='menu-icon mobile-only header--nav---btn' onClick={ this.toggleMenu }></div>
        <ul className='header--menu---list' style={{ display: !mobile || showMenu ? 'flex' : 'none' }}>
          <li className='header--menu---item'>
            <a href='/'>首页</a>
          </li>
          <li className='header--menu---item'>
            <a href='/animals'>领养信息</a>
          </li>
          <li className='header--menu---item'>
            <a href='/adoption-tips'>领养要求</a>
          </li>
          <li className='header--menu---item'>
            <a href='/about'>关于我们</a>
          </li>
        </ul>
      </nav>
    )
  }

  popupCloseBtn = () => {
    return(
      <nav>
        <div className='close-btn mobile-only header--close-btn' onClick={ this.closePopup }>X</div>
      </nav>
    )
  }

  render() {
    const { isPopup, showSearchPopup } = this.state;    
    const { headTitle, showSearchIcon } = this.props;

    return(
      <Fragment>
        <header>
          { 
            showSearchIcon ? 
            <div className='search-icon mobile-only header--search-container' onClick={ this.showSearchPopup } >
              <span className='search-icon header--search-container---search-icon'></span>
            </div>
            : null
          }
          <div className='header--title'>{ headTitle }</div>
          { isPopup ? this.popupCloseBtn() : this.headMenu() }
        </header>
        { showSearchPopup ? <Popup popupType='search' /> : null }
      </Fragment>
    )
  }
}