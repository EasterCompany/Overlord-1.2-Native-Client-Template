/*
  This is Overlords basic native-client template; we recommend checking out the link below if this your first time
  using React-Native or Overlord's Native-Client. Further Documentation: https://reactnative.dev/docs/getting-started
*/
import styles from './App.styles.ts'
import { StatusBar } from 'expo-status-bar';
import { View, Text, TouchableOpacity, Linking } from 'react-native';


const App = () => <View style={styles.background}>
  <StatusBar style="auto" />
  <View style={styles.view}>
    <Text style={styles.normalHeader}>
      You're ready to open up the 'App.tsx' file and start working on your app!
    </Text>

    <Text style={styles.text}>
      Inside your terminal window running Overlord{'\n\n'}
      Press 'W' to open the web-app{'\n'}
      Press 'A' to open the android-app in an emulator.{'\n'}
    </Text>

    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={() => {
        Linking.openURL('https://reactnative.dev/docs/intro-react');
      }}>
        <Text style={styles.buttonText}> Read Documentation </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
        Linking.openURL('https://www.youtube.com/channel/UC6JMuccPLOKRL9cI95ZtJQQ');
      }}>
        <Text style={styles.buttonText}> Watch Tutorials </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => {
        Linking.openURL('https://www.easter.company/');
      }}>
        <Text style={styles.buttonText}> Visit Easter.Company </Text>
      </TouchableOpacity>
    </View>

    <Text style={[styles.text, {marginTop: 50}]}>
      Part of the Overlord Framework
    </Text>

    <Text style={styles.hyperlink} onPress={() => {
      Linking.openURL('https://github.com/EasterCompany/Overlord')
    }}>
      (https://github.com/EasterCompany/Overlord)
    </Text>
  </View>
</View>


export default App;
