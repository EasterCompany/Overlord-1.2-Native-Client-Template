// Library
import { Modal, View, ScrollView, Text, Platform, Dimensions } from 'react-native';
// Assets
import closeImg from '../../assets/images/close.png';
// Components
import ImgBtn from '../buttons/img';
// Styles
import theme from '../../App.style';


const FadeModal = ({ title, visible, onClose, style, children } : any) => {
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
      <ScrollView
        style={{ width: '100%' }}
        contentContainerStyle={[ theme.modalContent, style ]}
      >{children}</ScrollView>
    </View>
  </Modal>;
}


export default FadeModal;
