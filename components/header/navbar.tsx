import React from 'react';
import { View } from 'react-native';
import navbar from './navbar.styles';
import menuImg from '../../assets/images/menu.png';
import userImg from '../../assets/images/user.png';
import logoImg from '../../assets/images/logo.png';
import ImgBtn from '../../components/buttons/img';


const Navbar = ({ userBtnToggle, navBtnToggle } : any) => <View style={navbar.container}>
  <ImgBtn
    style={navbar.icon}
    onPress={navBtnToggle}
    width={32}
    height={32}
    image={menuImg}
  />
  <ImgBtn
    style={navbar.icon}
    width={32}
    height={32}
    image={logoImg}
  />
  <ImgBtn
    style={navbar.icon}
    onPress={userBtnToggle}
    width={32}
    height={32}
    image={userImg}
  />
</View>;


export default Navbar;
