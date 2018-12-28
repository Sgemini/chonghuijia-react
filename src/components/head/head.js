import React, { Component } from 'react';
import './head.css';
import '../../app.css';
import '../../config.js';

export default class Head extends Component {
  constructor () {
    super();
    this.state = {
      showMenu: false
    }
    this.toggleShowMenu = this.toggleShowMenu.bind(this);
  }

  toggleShowMenu() {
    this.setState(state => ({
      showMenu: !state.showMenu,
    }));
  }

  render() {
    const { showMenu } = this.state;
    const { mobile } = global.browser.versions

    return(
      <header>
        <div className='header--title'>hello 宠回家</div>
        <nav>
          <div className='menu-icon mobile-only header--nav---btn' onClick={ this.toggleShowMenu }></div>
          <ul className='header--menu---list' style={{ display: !mobile || showMenu ? 'flex' : 'none' }}>
            <li className='header--menu---item'>
              <a href='/'>首页</a>
            </li>
            <li className='header--menu---item'>
              <a href='/'>领养信息</a>
            </li>
            <li className='header--menu---item'>
              <a href='/'>领养要求</a>
            </li>
            <li className='header--menu---item'>
              <a href='/'>关于我们</a>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}