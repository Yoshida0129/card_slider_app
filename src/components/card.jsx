import React from 'react';
import '../assets/card.scss';
import avatar from '../components/avatar';

const FrontCard = (props) => {
  return (
    <article
        id='front-card'
        className={`card-container ${props.class}`} 
        style={props.style}
    >
      <div className='img-item'>
        {avatar(props.user.avatar)}
      </div>
      <div className='text-item'>
        <p>{props.user.name}</p>
        <p>{props.user.age} years old</p>
      </div>
    </article>
  )
}

const BackCard = (props) => {
  return (
    <section
        id='back-card'
        className={`card-container ${props.class}`} 
        style={props.style}
    >
      <h1>{props.user.name}</h1>
      <div>
        {props.user.age} years old
      </div>
      <div>
        <i className='fas fa-map-marker-alt'/>
        {props.user.from}
      </div>
      <div>
        <i className='fas fa-briefcase'/>
        {props.user.work}
      </div>
      <div>
        <i className='fas fa-thumbs-up'/>
        {props.user.hobby}
      </div>
    </section>
  );
}

const cardPosition = (order, isBack) => {
  return {
    display: order !== 0 && isBack ? 'none' : 'flex',
    top: (50 + order) + '%',
    width: `calc(300px - ${order}%)`
  }
}

const showCardClass= (index, status, isBack) => {
  if (index === 0) {
    switch (status) {
      case 1:
        return isBack ? 'show-back-card' : 'show-front-card';
      case 2:
        return isBack ? 'show-front-card' : 'show-back-card';
      default:
        return ''
    }
  }
}

const cardContainer = (props) => {
  let card_list = [];
  props.user_data.map((val, index) => {
    let mainScroll = index === 0 ? props.scroll : '';
    card_list.push(
      <FrontCard
          user={val}
          key={index}
          class={mainScroll + ' ' + (showCardClass(index, props.show_status, false))}
          style={cardPosition(index, false)}
      />,
      <BackCard
          user={val}
          key={index + props.user_data.length}
          class={mainScroll + ' ' + (showCardClass(index, props.show_status, true))}
          style={cardPosition(index, true)}
      />
    )
    return card_list;
  })
  return card_list;
}

export default cardContainer;