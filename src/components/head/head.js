import React, { Component } from 'react';
import './head.css';
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
        <div className='head-title'>hello 宠回家</div>
        <nav>
          <div className='menu-icon menu-btn' onClick={ this.toggleShowMenu }></div>
          { ( showMenu || !mobile ) ?
            (
              <ul className='menu-container'>
                <li className='menu-item'><a href='/'>首页</a></li>
                <li className='menu-item'><a href='/animals'>领养信息</a></li>
                <li className='menu-item'><a href='/adoption-tips'>领养要求</a></li>
                <li className='menu-item'><a href='/about'>关于我们</a></li>
              </ul>
            ) : null
          }
        </nav>
      </header>
    )
  }
}