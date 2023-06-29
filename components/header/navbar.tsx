// Library
import { View, Platform } from 'react-native';
import { isLoggedIn } from '../../shared/library/api';
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


const Navbar = ({loginBtn, registerBtn, userBtn, navBtn, navMenuState}) => {
  return isLoggedIn() ?

  <View style={navbar.container}>
    <ImgBtn
      style={navbar.icon}
      onPress={navBtn}
      width={32}
      height={32}
      image={navMenuState ? closeImg : menuImg}
    />
    <ImgBtn
      style={navbar.icon}
      width={32}
      height={32}
      image={logoImg}
    />
    <ImgBtn
      style={navbar.icon}
      onPress={userBtn}
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
    <RegisterBtn onPress={registerBtn}/>
    { Platform.OS === 'web' ? <View style={{ marginLeft: 24 }} /> : <></> }
    <LoginBtn onPress={loginBtn}/>
  </View>
}


export default Navbar;
