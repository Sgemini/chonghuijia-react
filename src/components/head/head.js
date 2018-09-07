import React, { Component } from 'react';
import './head.css';

export default class Head extends Component {
  render() {
    return(
      <header>
        <div>hello 宠回家</div>
        <nav>
          <ul>
            <li>首页</li>
            <li>领养信息</li>
            <li>领养要求</li>
            <li>关于我们</li>
          </ul>
        </nav>
      </header>
    )
  }
}