import {people, avatar_option_list} from './data.js';

const randomlyOneOfList = (list) => {
  return list[Math.floor(Math.random() * Math.floor(list.length))];
}

const generateAvatarOption = () => {
  return {
    avatarStyle: avatar_option_list[1],
    topType: randomlyOneOfList(avatar_option_list.top),
    accessoriesType: randomlyOneOfList(avatar_option_list.accessories),
    hairColor: randomlyOneOfList(avatar_option_list.hairColor),
    hairType: randomlyOneOfList(avatar_option_list.facicalHair),
    clotheType: randomlyOneOfList(avatar_option_list.clothes),
    eyeType: randomlyOneOfList(avatar_option_list.eyes),
    eyebrowType: randomlyOneOfList(avatar_option_list.eyebrow),
    mouthType: randomlyOneOfList(avatar_option_list.mouth),
    skinColor: randomlyOneOfList(avatar_option_list.skin)
  }
}

const fetchUserData = () => {
  const user_data = randomlyOneOfList(people);
  console.log(user_data);
  user_data.avatar = generateAvatarOption()
  return user_data;
}

export const createDataList = (list = []) => {
  while(list.length < 3) {
    list.push(fetchUserData());
  }
  return list;
}
