/*
  The ImgBtn component is used to display a clickable image
*/
import React from 'react';
import { Pressable, Image } from 'react-native';
import { theme } from '../../App';


const ImgBtn = ({ onPress, style, image, width, height } : any) => <Pressable
  style={[theme.imageButton, style]}
  onPress={onPress}
>
  <Image source={image} style={{ width:width, height:height }}/>
</Pressable>;


export default ImgBtn;
