/*
  The LinkButton component is used to navigate to new URL / URI when the button is pressed or touched
*/

// Libs
import { Text, TouchableOpacity, Linking } from 'react-native';
// Styles
import theme from '../../App.theme.ts';


const LinkButton = (props:any) => <TouchableOpacity style={theme.button} onPress={() => {
    Linking.openURL(props.link);
  }}>
    <Text style={theme.buttonText}> {props.text} </Text>
</TouchableOpacity>


export default LinkButton;
