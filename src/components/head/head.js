import React, { Component } from 'react';
import './head.css';
import '../../share.css';

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

    return(
      <header className='text-white background-lightblue'>
        <div className='head-title text-center'>hello 宠回家</div>
        <nav>
          <div className='menu-icon menu-btn background-white' onClick={ this.toggleShowMenu }></div>
          { showMenu ?
            (
              <ul className='menu-container display-flex flex-wrap background-lightblue'>
                <li className='menu-item'>首页</li>
                <li className='menu-item'>领养信息</li>
                <li className='menu-item'>领养要求</li>
                <li className='menu-item'>关于我们</li>
              </ul>
            ) : null
          }
        </nav>
      </header>
    )
  }
}