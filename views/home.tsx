// Library
import { ScrollView } from 'react-native';
// Components
import Tutorial from '../components/example/tutorialButtons';
// Styles
import theme from '../App.style';


const Home = ({ view } : any) => {
  return <ScrollView
    style={{
      width: view.width,
      height: view.height,
    }}
    contentContainerStyle={{
      alignItems: 'center',
      justifyContent: 'center',
      maxWidth: view.width,
      minHeight: view.height,
      paddingTop: 25,
      paddingLeft: 4,
      paddingRight: 4,
      paddingBottom: 125,
      backgroundColor: theme.default.backgroundColor
    }}
  >
    <Tutorial/>
  </ScrollView>;
};


export default Home;
