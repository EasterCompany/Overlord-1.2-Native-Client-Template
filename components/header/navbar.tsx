// Library
import { View } from 'react-native';
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

const userLoggedIn = false;


const Navbar = ({loginBtn, registerBtn, userBtn, navBtn, navMenuState}:any) => {
  return <View style={navbar.container}>
    <ImgBtn
      style={navbar.icon}
      onPress={navBtn}
      width={32}
      height={32}
      image={navMenuState ? closeImg : menuImg}
    />
    {
      userLoggedIn ?
        <>
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
        </>
      :
        <View style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: 225,
          height: '100%'
        }}>
          <RegisterBtn onPress={registerBtn}/>
          <LoginBtn onPress={loginBtn}/>
        </View>
    }
  </View>;
}


export default Navbar;
