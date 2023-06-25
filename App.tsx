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
import FadeModal from './components/modals/fade';
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
  const [dimensions, setDimensions] = useState<any>({
    window: windowDimensions,
    screen: screenDimensions,
  });

  const toggleNavMenu = () => {setNavMenu(!navMenu);setUserMenu(false);}
  const toggleUserMenu = () => {setUserMenu(!userMenu);setNavMenu(false);}

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window, screen}) => {
      setDimensions({window, screen});
    });
    return () => subscription?.remove();
  }, [ dimensions.window, dimensions.screen ]);

  return <>
    <StatusBar barStyle={'light-content'} backgroundColor={'#202029'}/>
    <View>
      <Navbar userBtnToggle={toggleUserMenu} navBtnToggle={toggleNavMenu} navMenuState={navMenu}/>
      <ScrollView>
        <Home window={dimensions.window}/>
      </ScrollView>
      <FadeModal title="Login" visible={userMenu} onClose={toggleUserMenu}/>
      { navMenu ? <SideMenu window={dimensions.window}><NavMenuContent/></SideMenu> : <></> }
    </View>
  </>;
};


export default App;
