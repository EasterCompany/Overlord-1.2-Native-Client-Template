/*
  @types
  :FadeModal props:
    :title: string
    :state: [ stateVariable, setStateFunction ]
*/
import React from 'react';
import { Modal, View, Text, Platform, Dimensions } from 'react-native';
import { theme } from '../../App';
// Assets
import closeImg from '../../assets/images/close.png';
// Components
import ImgBtn from '../buttons/img';


const FadeModal = ({ title, visible, onClose, children } : any) => {
  const screen = Dimensions.get('screen');
  return <Modal
  animationType="fade"
  transparent={true}
  visible={visible}
  onRequestClose={onClose}
  >
    <View style={{
      top: Platform.OS === 'web' ? screen.height * 0.1 : 0,
      height: Platform.OS === 'web' ? '70%' : '100%'
    }}>
      <View style={theme.modalHeader}>
        <Text style={theme.modalTitle}>
          {title}
        </Text>
        <ImgBtn
          style={{ width: 64, height: 32, paddingLeft: 16 }}
          onPress={onClose}
          width={32}
          height={32}
          image={closeImg}
        />
      </View>
      <View style={theme.modalContent}>
        {children}
      </View>
    </View>
  </Modal>;
}


export default FadeModal;
