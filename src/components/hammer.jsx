import React, {Component} from 'react';
import Hammer from 'react-hammerjs';
import cardContainer from './card';

export default class HammerArea extends Component {
  constructor(props){
    super(props);
    this.state = {
      position: {
        X: 0,
        Y: 0
      }
    }
  }

  onDragStart = (e) => {
    this.setState(() => {
      return {
        position: {
          X: e.center.x,
          Y: e.center.y
        }
      }
    })
  }

  onDragEnd = (e) => {
    if (e.deltaX < -50){
      this.props.func_like(false);
    } else if (50 < e.deltaX){
      this.props.func_like(true);
    }
    this.setState(() => {
      return {
        position: {
          X: 0,
          Y: 0
        }
      }
    })
  }

  render(){
    return(
      <Hammer
          onPan={this.onDragStart}
          onTap={this.props.func_show_info.bind(this)}
          onPanEnd={this.onDragEnd}
      >
        <div className='card-area'>
          {cardContainer(this.props.card_data, this.state.position)}
        </div>
      </Hammer>
    )
  }
}