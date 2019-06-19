import React from 'react';
import '../assets/card.scss';
import avatar from '../components/avatar';

const Card = (props) => {
  return (
    <article className={`card-contents ${props.class}`} style={props.style}>
      {avatar(props.user.avatar)}
      <p>{props.user.name}</p>
      <p>{props.user.age}</p>
    </article>
  )
}

const cardPosition = (order, listLength) => {
  return {
    top: (50 + order) + '%',
    zIndex: Math.abs(listLength - order),
    width: `calc(300px - ${order / 5}%)`
  }
}


const cardContainer = (props) => {
  let card_list = [];
  props.user_data.map((val, index) => {
    let mainScroll = index === 0 ? props.scroll : 'center-wait';
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