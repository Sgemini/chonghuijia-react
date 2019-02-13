import React, { Component } from 'react';

export default class SearchPopup extends Component {
    animalSelectedGroup = () => {
        return(
            <div className='search-popup--select type text-center'>
                <span className='title'>类型</span>
                <select>
                    <option value='all'>所有</option>
                    <option value='dog'>狗</option>
                    <option value='cat'>猫</option>
                </select>
            </div>
        )
    }

    genderSelectedGroup = () => {
        return(
            <div className='search-popup--select gender text-center'>
                <span className='title'>性别</span>
                <select>
                    <option value='all'>所有</option>
                    <option value='boy'>公</option>
                    <option value='girl'>母</option>
                </select>
            </div>
        )
    }

    sizeSelectedGroup = () => {
        console.log(this.refs.size)
        return(
            <div className='search-popup--select size text-center'>
                <span className='title'>体型</span>
                <select ref='size' onChange={console.log(this)}>
                    <option value='all'>所有</option>
                    <option value='big'>大</option>
                    <option value='medium'>中</option>
                    <option value='small'>小</option>
                </select>
            </div>
        )
    }

    render() {
        return(
            <div className='popup--search-popup-container'>
                <div className='prompt text-center'>请选择你想查找的宠物类型</div>
                { this.animalSelectedGroup() }
                { this.genderSelectedGroup() }
                { this.sizeSelectedGroup() }
                <a className='submit inline-block' onClick={this.searchAnmials} href='/animal-index'>搜索</a>
            </div>
        )
    }
}