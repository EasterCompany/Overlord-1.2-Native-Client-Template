/*
  The tutorial buttons component is just here for you to get easy access to the essential learning resources for
  Overlord. You should delete this component directory and remove it from your 'App.tsx' before building anything.

  Or use the default Native client template to start a new project without any example components in the future.
  To create a new client with a blank canvas use the `./o create -native -projectName` command
*/

// Libs
import { View, Text, TouchableOpacity, Linking } from 'react-native';
// Styles
import theme from '../../App.theme.ts'
// Components
import LinkButton from '../buttons/link';


const TutorialButtons = () => <View style={theme.container}>
  <LinkButton
    text={'Documentation'}
    link={'https://reactnative.dev/docs/intro-react'}
  />
  <LinkButton
    text={'Video Tutorials'}
    link={'https://www.youtube.com/channel/UC6JMuccPLOKRL9cI95ZtJQQ'}
  />
  <LinkButton
    text={'Easter Company Website'}
    link={'https://www.easter.company/'}
  />
</View>


export default TutorialButtons;
