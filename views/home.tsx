// Library
import { View } from 'react-native';
// Components
import Tutorial from '../components/example/tutorialButtons';
// Styles
import theme from '../App.style';


const Home = ({ window } : any) => {
  return <View style={{
    alignItems: 'center',
    justifyContent: 'center',
    width: window.width,
    minHeight: window.height,
    paddingTop: 25,
    paddingBottom: 125,
    backgroundColor: theme.default.backgroundColor
  }}>
    <Tutorial/>
  </View>;
};


export default Home;
