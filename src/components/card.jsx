import React from 'react';
import '../assets/card.scss';
import avatar from '../components/avatar';

const Card = (props) => {
  return (
    <article className={`card-container ${props.class}`} style={props.style}>
      <div className='img-item'>
        {avatar(props.user.avatar)}
      </div>
      <div className='text-item'>
        <p>{props.user.name}</p>
        <p>age {props.user.age}</p>
      </div>
    </article>
  )
}

const cardPosition = (order, listLength) => {
  return {
    top: (50 + order) + '%',
    zIndex: Math.abs(listLength - order),
    width: `calc(300px - ${order}%)`
  }
}

const cardContainer = (props) => {
  let card_list = [];
  props.user_data.map((val, index) => {
    let mainScroll = index === 0 ? props.scroll : '';
    card_list.push(
      <Card
        user={val}
        key={index}
        class={mainScroll}
        style={cardPosition(index, props.user_data.length)}
      />
    )
    return card_list;
  })
  return card_list;
}

export default cardContainer;