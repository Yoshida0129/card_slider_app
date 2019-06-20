import React, {Component} from 'react';
import cardContainer from '../components/card';
import {createDataList} from '../data/fetch';

import '../assets/body.scss';

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      user_data: [...createDataList()],
      is_moving: false,
      show_front: true,
      scroll: 'center-wait'
    };
  }

  isLike = (ans) => {
    this.setState(() => {
      return {
        is_moving: true,
        scroll: ans ? 'right-scroll' : 'left-scroll'
      }
    });
    setTimeout(() => {
      let data = this.state.user_data;
      data.shift();
      this.setState(() => {
        return {
          user_data: createDataList(data),
          is_moving: false,
          scroll: 'center-wait'
        }
      });
    }, 500);
  }

  isShowBackToggle = () => {
    this.setState(() => {
      return {
        show_front: this.state.show_front ? false : true
      }
    });
  }

  render() {
    return (
      <div id='main-container'>
        <div className='card-area'>
          {cardContainer(this.state)}
        </div>
        <div className='button-area'>
          <button
              onClick={() => this.isLike(false)}
              disabled={this.state.is_moving}
          >
            <i className='fas fa-times'/>
          </button>
          <button
              onClick={() => this.isShowBackToggle()}
              disabled={this.state.is_moving}
          >
            <i className='fas fa-info'/>
          </button>
          <button
              onClick={() => this.isLike(true)}
              disabled={this.state.is_moving}
          >
            <i className='fas fa-heart'/>
          </button>
        </div>
      </div>
    )
  }
}