// Library
import { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  StatusBar,
  StyleSheet,
  Dimensions,
  Platform
} from 'react-native';
// Components
import Navbar from './components/header/navbar';
import LoginModal from './components/modals/login';
import RegisterModal from './components/modals/register';
import SideMenu from './components/header/sideMenu';
import NavMenuContent from './components/header/navMenuContent';
// Views
import Home from './views/home';
// Styles
import theme from './App.style';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');


const App = () => {
  const [navMenu, setNavMenu] = useState<boolean>(false);
  const [userMenu, setUserMenu] = useState<boolean>(false);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [registerModal, setRegisterModal] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState<any>({
    window: windowDimensions,
    view: {
      width: windowDimensions.width,
      height: windowDimensions.height - 52
    },
    screen: screenDimensions,
  });

  const toggleNavMenu = () => {setNavMenu(!navMenu);setUserMenu(false);setLoginModal(false);setRegisterModal(false);}
  const toggleUserMenu = () => {setUserMenu(!userMenu);setNavMenu(false);}
  const toggleLoginModal = () => {setLoginModal(!loginModal);setNavMenu(false);setRegisterModal(false);}
  const toggleRegisterModal = () => {setRegisterModal(!registerModal);setNavMenu(false);setLoginModal(false);}

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window, screen}) => {
      setDimensions({
        window,
        view: { width: window.width, height: window.height - 52 },
        screen
      });
    });
    return () => subscription?.remove();
  }, [ dimensions.window, dimensions.screen ]);

  return <>
    <StatusBar barStyle={'light-content'} backgroundColor={'#202029'}/>
    <View>
      {/* GUI Elements */}
      <Navbar
        loginBtn={toggleLoginModal}
        registerBtn={toggleRegisterModal}
        userBtn={toggleUserMenu}
        navBtn={toggleNavMenu}
        navMenuState={navMenu}
      />

      {/* Current View */}
      <Home view={dimensions.view}/>

      {/* Modals & Overlays */}
      <LoginModal visible={loginModal} onClose={toggleLoginModal}/>
      <RegisterModal visible={registerModal} onClose={toggleRegisterModal}/>
      { navMenu ? <SideMenu window={dimensions.window}><NavMenuContent/></SideMenu> : <></> }
    </View>
  </>;
};


export default App;
