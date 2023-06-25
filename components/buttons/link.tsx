/*
  The LinkButton component is used to open a URL/URI within the browser when the button is pressed or touched
*/
import React from 'react';
import { View, Text, TouchableOpacity, Linking } from 'react-native';
import theme from '../../App.style';


const LinkBtn = ({link, text, style, children} : any) => <View>
  <TouchableOpacity
    style={style === undefined ? theme.button : style}
    onPress={() => {Linking.openURL(link);}}
  >{
    children === undefined ? <Text style={theme.buttonText}>{text}</Text> : children
  }</TouchableOpacity>
</View>;


export default LinkBtn;
