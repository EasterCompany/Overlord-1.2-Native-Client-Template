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
import { __INIT_USER__, USER, logout, oapi } from './shared/library/api';
import * as serviceWorkerRegistration from "./src/serviceWorkerRegistration";
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
  const [userData, setUserData] = useState(undefined);
  const [userIsLoggedIn, setUserIsLoggedIn] = useState(false);
  const [navMenuOpen, setNavMenu] = useState<boolean>(false);
  const [userModalOpen, setUserModal] = useState<boolean>(false);
  const [loginModalOpen, setLoginModal] = useState<boolean>(false);
  const [registerModalOpen, setRegisterModal] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState<any>({
    window: windowDimensions,
    view: {
      width: windowDimensions.width,
      height: Platform.OS === 'ios' ? windowDimensions.height - 74 : windowDimensions.height - 52
    },
    screen: screenDimensions,
  });

  const toggleNavMenu = () => setNavMenu(!navMenuOpen);
  const toggleUserModal = () => setUserModal(!userModalOpen);
  const toggleLoginModal = () => setLoginModal(!loginModalOpen);
  const toggleRegisterModal = () => setRegisterModal(!registerModalOpen);
  const reCheckUserData = () => USER().then((localData) => {
    setUserData(localData);
    setUserIsLoggedIn(localData.session !== undefined);
  });

  useEffect(() => {
    // Refresh user data when reopening the app
    if (userData === undefined) USER().then((localData) => {
      setUserData(localData);
      if (localData.session !== undefined) {
        oapi(
          "user/refresh",
          (resp) => {
            setUserData(null);
            setUserIsLoggedIn(false);
            logout();
          },
          (resp) => __INIT_USER__(resp).then(() => USER().then((newData) => {
            setUserData(newData);
            setUserIsLoggedIn(true);
          })),
          { uuid: localData.uuid, session: localData.session }
        );
      };
    })
    // Updates screen, window & viewport variables when the screen or window size changes
    const subscription = Dimensions.addEventListener('change', ({window, screen}) => {
      setDimensions({
        window,
        view: {
          width: window.width,
          height: Platform === 'ios' ? window.height - 72 : window.height - 52
        },
        screen
      });
    });
    return () => subscription?.remove();
  }, [ dimensions.window, dimensions.screen, userData ]);

  return <>
    <StatusBar barStyle={'light-content'} backgroundColor={'#202029'}/>
    <View>
      {/* GUI Elements */}
      <Navbar
        loggedIn={userIsLoggedIn}
        onPressLogin={toggleLoginModal}
        onPressRegister={toggleRegisterModal}
        onPressUser={toggleUserModal}
        onPressNav={toggleNavMenu}
        navMenuOpen={navMenuOpen}
      />

      {/* Current View */}
      <Home view={dimensions.view}/>

      {/* Modals & Overlays */}
      {
        userIsLoggedIn ?
          <>
            <UserModal
              user={userData}
              reCheckUserData={reCheckUserData}
              visible={userModalOpen}
              onClose={toggleUserModal}
            />
            {navMenuOpen && <SideMenu view={dimensions.view}>
              <NavMenuContent/>
            </SideMenu>}
          </>
        :
          <>
            <LoginModal
              visible={loginModalOpen}
              onClose={toggleLoginModal}
              onLogin={reCheckUserData}
            />
            <RegisterModal
              view={dimensions.view}
              visible={registerModalOpen}
              onClose={toggleRegisterModal}
              onRegister={reCheckUserData}
            />
          </>
      }
    </View>
  </>;
};


/* Toggles PWA Functionality */
if (process.env.REACT_APP_PWA === 'true') serviceWorkerRegistration.register();
else serviceWorkerRegistration.unregister();

export default App;
