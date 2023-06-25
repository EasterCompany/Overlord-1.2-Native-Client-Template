import React from 'react';
import { Modal, View, Text, Dimensions, Platform } from 'react-native';
// Assets
import closeImg from '../../assets/images/close.png';
// Components
import ImgBtn from '../buttons/img';
// Styles
import theme from '../../App.style';


const SlideModal = ({ title, visible, onClose, children } : any) => {
  const screen = Dimensions.get('screen');
  return <Modal
    animationType="slide"
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
        <View style={{ marginLeft: 'auto', marginRight: 0, flexDirection: 'row' }}>
          <ImgBtn
            style={{ width: 64, height: 32, paddingLeft: 16 }}
            onPress={onClose}
            width={32}
            height={32}
            image={closeImg}
          />
        </View>
      </View>
      <View style={theme.modalContent}>
        {children}
      </View>
    </View>
  </Modal>;
};


export default SlideModal;
