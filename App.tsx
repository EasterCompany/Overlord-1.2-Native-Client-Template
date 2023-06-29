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
import { USER } from './shared/library/api';
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
  const [userData, setUserData] = useState(null);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
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

  useEffect(() => {
    /* Acquire locally stored user data & automatically login */
    if (userData === null) USER().then((localData) => {
      setUserData(localData);
      setUserIsLoggedIn(localData.session !== undefined);
    })
    /* Updates the screen, window & view size information when they change */
    const subscription = Dimensions.addEventListener('change', ({window, screen}) => {
      setDimensions({window, view: { width: window.width, height: window.height - 52 }, screen});
    });
    return () => subscription?.remove();
  }, [ dimensions.window, dimensions.screen ]);

  const reCheckUserData = () => USER().then((localData) => {
    setUserData(localData);
    setUserIsLoggedIn(localData.session !== undefined);
  });
  const toggleNavMenu = () => setNavMenu(!navMenu);
  const toggleUserModal = () => setUserModal(!userModal);
  const toggleLoginModal = () => setLoginModal(!loginModal);
  const toggleRegisterModal = () => setRegisterModal(!registerModal);

  return <>
    <StatusBar barStyle={'light-content'} backgroundColor={'#202029'}/>
    <View>
      {/* GUI Elements */}
      <Navbar
        loggedIn={userIsLoggedIn}
        loginBtn={toggleLoginModal}
        registerBtn={toggleRegisterModal}
        userBtn={toggleUserModal}
        navBtn={toggleNavMenu}
        navMenuState={navMenu}
      />

      {/* Current View */}
      <Home view={dimensions.view}/>

      {/* Modals & Overlays */}
      {
        userIsLoggedIn ?
          <>
            <UserModal
              user={userData}
              visible={userModal}
              onClose={toggleUserModal}
              onLogout={reCheckUserData}
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
              onLogin={reCheckUserData}
            />
            <RegisterModal
              view={dimensions.view}
              visible={registerModal}
              onClose={toggleRegisterModal}
              onRegister={reCheckUserData}
            />
          </>
      }
    </View>
  </>;
};


export default App;
