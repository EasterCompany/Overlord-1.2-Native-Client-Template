import React, { useState, useEffect } from 'react';
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
// Views
import Home from './views/home';

const windowDimensions = Dimensions.get('window');
const screenDimensions = Dimensions.get('screen');


const App = () => {
  const [navMenu, setNavMenu] = useState<boolean>(false);
  const [userMenu, setUserMenu] = useState<boolean>(false);
  const [dimensions, setDimensions] = useState<any>({
    window: windowDimensions,
    screen: screenDimensions,
  });

  const toggleNavMenu = () => setNavMenu(!navMenu);
  const toggleUserMenu = () => setUserMenu(!userMenu);

  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window, screen}) => {
      setDimensions({window, screen});
    });
    return () => subscription?.remove();
  }, [ dimensions.window, dimensions.screen ]);

  return <>
    <StatusBar
      barStyle={'light-content'}
      backgroundColor={'#202029'}
    />
    <View>
      <Navbar userBtnToggle={() => setUserMenu(!userMenu)} navBtnToggle={() => setNavMenu(!navMenu)}/>
      <ScrollView>
        <Home window={dimensions.window}/>
      </ScrollView>
      <FadeModal
        title="Navigations"
        visible={navMenu}
        onClose={toggleNavMenu}
      />
      <FadeModal
        title="Login"
        visible={userMenu}
        onClose={toggleUserMenu}
      />
    </View>
  </>;
};


const theme = StyleSheet.create({

  default: {
    color: '#ffff',
    backgroundColor: '#202029',
  },

  background: {
    height: '100%',
    backgroundColor: '#263238',
    pointerEvents: 'none'
  },

  view: {
    flex: 1,
    maxWidth: 999,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'auto'
  },

  text: {
    color: '#ffff',
    textAlign: 'left',
    fontWeight: '300',
    margin: '2%',
    fontSize: 16
  },

  hyperlink: {
    color: '#75C0E0',
    textAlign: 'left',
    fontWeight: '300',
    margin: '2%',
    fontSize: 15
  },

  normalHeader: {
    color: '#ffff',
    textAlign: 'center',
    fontWeight: 'normal',
    margin: '5%',
    fontSize: 22
  },

  boldHeader: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '5%',
    fontSize: 22
  },

  container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /*
    --------------------------- BUTTON STYLES --------------------------------------------------------------------------
  */

  button: {
    elevation: 5,
    backgroundColor: '#009688',
    borderRadius: 10,
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '90%',
    shadowColor: '#0000',
    shadowOpacity: 0,
    shadowRadius: 0,
    pointerEvents: 'auto'
  },

  buttonText: {
    color: '#ffff',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  imageButton: {
    backgroundColor: 'rgba(0,0,0,0)',
    pointerEvents: 'auto'
  },

  /*
    --------------------------- MODAL STYLES ---------------------------------------------------------------------------
  */

  modalContent: {
    alignItems: 'center',
    flexDirection: 'column',
    width: Platform.OS === 'web' ? '100%' : '100%',
    maxWidth: Platform.OS === 'web' ? 1024 : '100%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 25,
    elevation: 5,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
    backgroundColor: '#28282f',
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Platform.OS === 'web' ? '100%' : '100%',
    maxWidth: Platform.OS === 'web' ? 1024 : '100%',
    height: 48,
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#17171c'
  },

  modalTitle: {
    color: '#ffff',
    fontSize: 22,
    marginLeft: '2.5%',
    userSelect: 'none',
  },

  /*
    --------------------------- MENU STYLES ----------------------------------------------------------------------------
  */

  sideMenu: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 5,
    padding: 25,
    alignItems: 'center',
    shadowColor: '#0000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 5
  },

  sideMenuHeader: {
    width: '100%',
    marginLeft: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  sideMenuTitle: {
    fontSize: 22,
    marginTop: 16,
    marginLeft: '5%'
  }

});


export default App;
export { theme };
