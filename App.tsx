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
import { USER, isLoggedIn, logout, cookie } from './shared/library/api';
// Components
import Navbar from './components/header/navbar';
import LoginModal from './components/modals/login';
import RegisterModal from './components/modals/register';
import UserModal from './components/modals/user';
import SideMenu from './components/header/sideMenu';
import NavMenuContent from './components/header/navMenuContent';
// Views
import Home from './views/home';
// Styles
import theme from './App.style';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');


const App = () => {
  const [userData, setUserData] = useState(
    Platform.OS === 'web' ?
      USER() :
      USER().then(value => setUserData(value))
  );
  const [navMenu, setNavMenu] = useState<boolean>(false);
  const [userModal, setUserModal] = useState<boolean>(false);
  const [loginModal, setLoginModal] = useState<boolean>(false);
  const [registerModal, setRegisterModal] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState<any>({
    window: windowDimensions,
    view: {
      width: windowDimensions.width,
      height: Platform.OS === 'ios' ? windowDimensions.height - 74 : windowDimensions.height - 52
    },
    screen: screenDimensions,
  });

  const toggleNavMenu = () => {setNavMenu(!navMenu);}
  const toggleUserModal = () => {setUserModal(!userModal);}
  const toggleLoginModal = () => {setLoginModal(!loginModal);}
  const toggleRegisterModal = () => {setRegisterModal(!registerModal);}

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
        userBtn={toggleUserModal}
        navBtn={toggleNavMenu}
        navMenuState={navMenu}
      />

      {/* Current View */}
      <Home view={dimensions.view}/>

      {/* Modals & Overlays */}
      {isLoggedIn() ? <>
        <UserModal
          user={userData}
          visible={userModal}
          onClose={toggleUserModal}
        />
        {navMenu && <SideMenu view={dimensions.view}>
          <NavMenuContent/>
        </SideMenu>}
      </>
      :
      <>
        <LoginModal
          visible={loginModal}
          onClose={toggleLoginModal}
          onLogin={() => setUserData(USER())}
        />
        <RegisterModal
          view={dimensions.view}
          visible={registerModal}
          onClose={toggleRegisterModal}
          onRegister={() => setUserData(USER())}
        />
      </>}
    </View>
  </>;
};


export default App;
