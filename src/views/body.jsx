import React, {Component} from 'react';
import HammerArea from '../components/hammer';
import {createDataList} from '../data/fetch';

import '../assets/body.scss';

export default class Body extends Component {
  constructor() {
    super();
    this.state = {
      user_data: [...createDataList()],
      is_moving: false,
      show_status: 0,
      scroll: ''
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
          show_status: 0,
          scroll: ''
        }
      });
    }, 500);
  }

  isShowBackToggle = () => {
    this.setState(() => {
      return {
        show_status: this.state.show_status === 2 ? 1 : 2
      }
    });
  }

  render() {
    return (
      <div id='main-container'>
        <HammerArea 
            card_data={this.state}
            func_like={(is_like) => this.isLike(is_like)}
            func_show_info={() => this.isShowBackToggle()}
        />
        <div className='button-area'>
          <button
              onClick={this.isLike.bind(this, false)}
              disabled={this.state.is_moving}
          >
            <i className='fas fa-times'/>
          </button>
          <button
              onClick={this.isShowBackToggle.bind(this)}
              disabled={this.state.is_moving}
          >
            <i className='fas fa-info'/>
          </button>
          <button
              onClick={this.isLike.bind(this, true)}
              disabled={this.state.is_moving}
          >
            <i className='fas fa-heart'/>
          </button>
        </div>
      </div>
    )
  }
}