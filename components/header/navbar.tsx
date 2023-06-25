// Library
import { View } from 'react-native';
// Assets
import menuImg from '../../assets/images/menu.png';
import userImg from '../../assets/images/user.png';
import logoImg from '../../assets/images/logo.png';
import closeImg from '../../assets/images/close.png';
// Components
import ImgBtn from '../../components/buttons/img';
// Styles
import navbar from './navbar.style';


const Navbar = ({ userBtnToggle, navBtnToggle, navMenuState } : any) => <View style={navbar.container}>
  <ImgBtn
    style={navbar.icon}
    onPress={navBtnToggle}
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
    onPress={userBtnToggle}
    width={32}
    height={32}
    image={userImg}
  />
</View>;


export default Navbar;
