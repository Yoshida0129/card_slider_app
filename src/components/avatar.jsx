import React from 'react';
import Avatar from 'avataaars';

const avatar = (props) => {
  return ( 
    <Avatar
      avatarStyle={props.avatarStyle}
      topType={props.topType}
      accessoriesType={props.accessoriesTyle}
      hairColor={props.hairColor}
      facialHairType={props.hairType}
      clotheType={props.clotheType}
      eyeType={props.eyeType}
      eyebrowType={props.eyebrowType}
      mouthType={props.mouthType}
      skinColor={props.skinColor}
    />
  )
}

export default avatar;