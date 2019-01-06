import React, { Component } from 'react';
import './card.css';
import logo from '../../images/logo.jpeg';
// import { Link } from 'react-router-dom';

import 单单 from '../../images/单单.jpg';
import nono from '../../images/nono.jpeg';
import 丁香 from '../../images/丁香.jpeg';
import tiger from '../../images/tiger.jpeg';
import 初四 from '../../images/初四.jpeg';
import 乌嘴 from '../../images/乌嘴.jpeg';
import 哈哈 from '../../images/哈哈.jpeg';
import 啊咩黎 from '../../images/啊咩黎.jpeg';
import 大哥 from '../../images/大哥.jpg';
import 小宝 from '../../images/小宝.jpg';
import 小新 from '../../images/小新.jpeg';
import 小鹿 from '../../images/小鹿.jpeg';
import 恒仔 from '../../images/恒仔.jpeg';
import 欢欢 from '../../images/欢欢.jpeg';
import Dina from '../../images/癫那.jpg';
import 肥肥 from '../../images/肥肥.jpeg';
import 路易 from '../../images/路易.jpeg';
import 黑仔 from '../../images/黑仔.jpeg';
import 歪利 from '../../images/歪利.jpeg';
import goodboy from '../../images/goodboy.jpeg';
import Benz from '../../images/Benz.jpeg';
import 小黑 from '../../images/小黑.jpeg';
import 旺财 from '../../images/旺财.jpeg';
import 贝贝 from '../../images/贝贝.jpeg';

const defaultProps = {
  animal: {}
}

export default class Card extends Component {
  constructor(props) {
    super(props);

    this.renderAnimalPicture = this.renderAnimalPicture.bind(this);
  }

  renderAnimalPicture(name) {
    switch(name) {
      case '单单':
        return(<img className='card-image' alt={ name } src={ 单单 || logo }/>);
      case 'nono':
        return(<img className='card-image' alt={ name } src={ nono || logo }/>);
      case '丁香':
        return(<img className='card-image' alt={ name } src={ 丁香 || logo }/>);
      case 'tiger':
        return(<img className='card-image' alt={ name } src={ tiger || logo }/>);
      case '初四':
        return(<img className='card-image' alt={ name } src={ 初四 || logo }/>);
      case '乌嘴':
        return(<img className='card-image' alt={ name } src={ 乌嘴 || logo }/>);
      case '哈哈':
        return(<img className='card-image' alt={ name } src={ 哈哈 || logo }/>);
      case '啊咩黎':
        return(<img className='card-image' alt={ name } src={ 啊咩黎 || logo }/>);
      case '大哥':
        return(<img className='card-image' alt={ name } src={ 大哥 || logo }/>);
      case '小宝':
        return(<img className='card-image' alt={ name } src={ 小宝 || logo }/>);
      case '小新':
        return(<img className='card-image' alt={ name } src={ 小新 || logo }/>);
      case '小鹿':
        return(<img className='card-image' alt={ name } src={ 小鹿 || logo }/>);
      case '恒仔':
        return(<img className='card-image' alt={ name } src={ 恒仔 || logo }/>);
      case '欢欢':
        return(<img className='card-image' alt={ name } src={ 欢欢 || logo }/>);
      case 'Dina':
        return(<img className='card-image' alt={ name } src={ Dina || logo }/>);
      case '肥肥':
        return(<img className='card-image' alt={ name } src={ 肥肥 || logo }/>);
      case '路易':
        return(<img className='card-image' alt={ name } src={ 路易 || logo }/>);
      case '黑仔':
        return(<img className='card-image' alt={ name } src={ 黑仔 || logo }/>);
      case '歪利':
        return(<img className='card-image' alt={ name } src={ 歪利 || logo }/>);
      case 'Good Boy':
        return(<img className='card-image' alt={ name } src={ goodboy || logo }/>);
      case 'Benz':
        return(<img className='card-image' alt={ name } src={ Benz || logo }/>);
      case '小黑':
        return(<img className='card-image' alt={ name } src={ 小黑 || logo }/>);
      case '旺财':
        return(<img className='card-image' alt={ name } src={ 旺财 || logo }/>);
      case '贝贝':
        return(<img className='card-image' alt={ name } src={ 贝贝 || logo }/>);
      default:
        return(<img className='card-image' alt={ '宠回家' } src={ logo }/>);        
    }
  }

  render() {
    const { animal } = this.props;

    return(
      // <Link className='card' to={ '/animals/' + animal.id }>
      <a className='card' href={"/animals" + animal.id}>
        {/* <img className='card-image' alt={ animal.name } src={ animal.cover_url || logo }/> */}
        {this.renderAnimalPicture(animal.name)}
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

Card.defaultProps = defaultProps