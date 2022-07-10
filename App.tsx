/*
  This is Overlords basic native-client template; we recommend checking out the link below if this your first time
  using React-Native or Overlord's Native-Client. Further Documentation: https://reactnative.dev/docs/getting-started
*/

// Libs
import React, { useState } from "react";
import { View, Text } from 'react-native';
import { StatusBar } from 'expo-status-bar';
// Styles
import theme from './App.theme.ts';
// Components
import Header from './components/header/header';
import SlideModal from './components/modals/slideModal';
import TutorialButtons from './components/example/tutorialButtons';


const App = () => {
  const [menuModal, setMenuModal] = useState(false);
  const [loginModal, setLoginModal] = useState(false);

  return <View style={theme.background}>
    <StatusBar style="auto"/>

    <Header
      menu={[menuModal, setMenuModal]}
      login={[loginModal, setLoginModal]}
    />

    <SlideModal
      title="User Login"
      state={[loginModal, setLoginModal]}
    />

    <View style={theme.view}>
      <TextHeader/>
      <TutorialButtons/>
      <TextFooter/>
    </View>

  </View>
}


const TextHeader = () => <>
  <Text style={theme.normalHeader}>
    Edit the 'App.tsx' file to start building your new app!
  </Text>
  <Text style={theme.text}>
    Inside the terminal window running Overlord{'\n\n'}
    Press 'W' to open in a web browser.{'\n'}
    Press 'A' to open in a android emulator.{'\n'}
    Press 'I' to open in a iOS emulator{'\n\n'}
  </Text>
</>


const TextFooter = () => <>
  <Text style={[theme.text, {marginTop: 50}]}>
    The Overlord Framework
  </Text>
  <Text style={theme.hyperlink} onPress={() => {
    Linking.openURL('https://github.com/EasterCompany/Overlord')
  }}>
    https://github.com/EasterCompany/Overlord
  </Text>
</>


export default App;
