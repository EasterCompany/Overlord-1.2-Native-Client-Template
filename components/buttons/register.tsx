// Library
import { useState } from 'react';
import { Text, Pressable } from 'react-native';
// Styles
import theme from '../../App.style';


const RegisterBtn = ({ onPress } : any) => {
  return <Pressable onPress={onPress} style={[ theme.button, {
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 36,
    borderWidth: 1,
    backgroundColor: 'transparent'
  }]}>
    <Text style={theme.buttonText}>Sign Up</Text>
  </Pressable>
}


export default RegisterBtn;
