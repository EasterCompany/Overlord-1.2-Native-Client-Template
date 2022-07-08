// Assets
import styles from './App.styles';
import cuteCat from './assets/cuteCat.jpeg';

// Third Party Libraries
import { StatusBar } from 'expo-status-bar';      // Controls the mobile phone status bar behaviour
import { Text, View, Image } from 'react-native'; // Default react-native components


// Our app's first view
const App = () => {
  return <View style={styles.container}>
    <StatusBar style="auto"/>
    <Image source={cuteCat} style={styles.cat}/>
    <Text>
      Welcome to Overlord. You can begin by editing the App.js file.
      The App.js file is the landing area for your app.
    </Text>
  </View>
}


// Export view as default
export default App;
