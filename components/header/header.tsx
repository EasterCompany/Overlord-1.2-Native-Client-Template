/*
  Overlord contains many free-to-use components out of the box which will help you build your next project quickly and
  with ease. This header allows your user to navigate your application and login, register or logout.
*/

// Libs
import React, { useState } from "react";
import { View, Image, Pressable } from 'react-native';
// Styles
import header from './header.styles.ts';
// Assets
import menuImg from '../../assets/images/menu.png';
import userImg from '../../assets/images/user.png';
// Components
import ToggleButton from '../../components/buttons/toggle';


const Header = (props:any) => <View style={header.container}>
  <ToggleButton
    style={{ backgroundColor: 'rgba(0,0,0,0)', marginLeft: 18, marginRight: 'auto', marginTop: 28 }}
    switch={[props.login[0], props.login[1]]}
    width={32}
    height={32}
    image={userImg}
  />
  <ToggleButton
    style={{ backgroundColor: 'rgba(0,0,0,0)', marginLeft: 'auto', marginRight: 18, marginTop: 28 }}
    switch={[props.menu[0], props.menu[1]]}
    width={32}
    height={32}
    image={menuImg}
  />
</View>


export default Header;
