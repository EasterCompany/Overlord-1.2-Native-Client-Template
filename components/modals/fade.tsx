// Library
import { Modal, View, Text, Platform, Dimensions } from 'react-native';
// Assets
import closeImg from '../../assets/images/close.png';
// Components
import ImgBtn from '../buttons/img';
// Styles
import theme from '../../App.style';


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
      <View style={[ theme.modalHeader, { boxShadow: '1px 1px 10px rgba(0,0,0,.66)' } ]}>
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
      <View style={[ theme.modalContent, { boxShadow: '1px 1px 10px rgba(0,0,0,.66)' } ]}>
        {children}
      </View>
    </View>
  </Modal>;
}


export default FadeModal;
