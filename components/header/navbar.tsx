// Library
import { View, Platform } from 'react-native';
// Assets
import menuImg from '../../assets/images/menu.png';
import userImg from '../../assets/images/user.png';
import logoImg from '../../assets/images/logo.png';
import closeImg from '../../assets/images/close.png';
// Components
import ImgBtn from '../../components/buttons/img';
import LoginBtn from '../../components/buttons/login';
import RegisterBtn from '../../components/buttons/register';
// Styles
import navbar from './navbar.style';


const Navbar = ({ loggedIn, onPressLogin, onPressRegister, onPressUser, onPressNav, navMenuOpen }) => {
  return loggedIn ?

  <View style={navbar.container}>
    <ImgBtn
      style={navbar.icon}
      onPress={onPressNav}
      width={32}
      height={32}
      image={navMenuOpen ? closeImg : menuImg}
    />
    <ImgBtn
      style={navbar.icon}
      width={32}
      height={32}
      image={logoImg}
    />
    <ImgBtn
      style={navbar.icon}
      onPress={onPressUser}
      width={32}
      height={32}
      image={userImg}
    />
  </View>

  :

  <View style={[
    navbar.container,
    Platform.OS === 'web' ? { justifyContent: 'right' } : {},
  ]}>
    <RegisterBtn onPress={onPressRegister}/>
    { Platform.OS === 'web' ? <View style={{ marginLeft: 24 }} /> : <></> }
    <LoginBtn onPress={onPressLogin}/>
  </View>
}


export default Navbar;
