import React, {Component} from 'react';
import cardContainer from '../components/card';
import {createDataList} from '../data/fetch';

import '../assets/body.scss';

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      user_data: [...createDataList()],
      scroll: 'center-wait'
    };
  }

  isLike = (ans) => {
    this.setState(() => {
      return {
        scroll: ans ? 'right-scroll' : 'left-scroll'
      }
    });
    setTimeout(() => {
      let data = this.state.user_data;
      data.shift();
      this.setState(() => {
        return {
          user_data: createDataList(data),
          scroll: 'center-wait'
        }
      });
    }, 500);
  }

  render() {
    return (
      <div id='main-container'>
        <div className='card-area'>
          {cardContainer(this.state)}
        </div>
        <div className='button-area'>
          <button onClick={() => this.isLike(false)}>
            <i className='fas fa-times'/>
          </button>
          <button>
            <i className='fas fa-info'/>
          </button>
          <button onClick={() => this.isLike(true)}>
            <i className='fas fa-heart'/>
          </button>
        </div>
      </div>
    )
  }
}