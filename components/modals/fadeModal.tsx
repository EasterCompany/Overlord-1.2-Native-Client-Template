/*
  The FadeModal is one the many components that come pre-packaged with your Overlord Client; You can consider this as
  part of the Overlord Standard Library. Boilerplate components such as this allow you to quickly develop your MVP and
  maintain consistency throughout your applications.

  @types

  :FadeModal props:
    :title: string
    :state: [ stateVariable, setStateFunction ]

*/

// Libs
import { useState } from "react";
import { Modal, View, Text } from 'react-native';
// Styles
import theme from '../../App.theme.ts';
// Assets
import closeImg from '../../assets/images/close.png';
import arrowUpImg from '../../assets/images/arrowUp.png';
import arrowDownImg from '../../assets/images/arrowDown.png';
// Components
import ToggleButton from '../buttons/toggle';


const FadeModal = (props:any) => <Modal
  animationType="Fade"
  transparent={true}
  visible={props.state[0]}
  onRequestClose={() => props.state[1](!props.state[0])}>
  <View
    style={[
      theme.background, {
        top: 50,
      }
    ]}
  >
    <View style={theme.modalHeader}>
      <Text style={theme.modalTitle}>
        {props.title}
      </Text>
    </View>
    <View style={theme.modal}>
      <Text>...</Text>
    </View>
  </View>
</Modal>


export default FadeModal;
