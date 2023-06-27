// Library
import { useState, useRef } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  Pressable,
  ActivityIndicator
} from 'react-native';
import { login } from '../../shared/library/api';
// Assets
import EmailIcon from '../../assets/images/email.png';
import PasswordIcon from '../../assets/images/key.png';
// Components
import FadeModal from './fade';
import TextBtn from '../buttons/text';
import { EmailInput, PasswordInput, SubmitBtn } from './login';
// Styles
import theme from '../../App.style';


const RegisterModal = ({ visible, onClose, onRegister } : any) => {
  const [ isLoading, setLoading ] = useState<boolean>(false);
  const [ registerFailed, setRegisterFailed ] = useState<string>("");
  const registerInput = useRef<object>({
    email: '',
    password: ''
  });

  return <FadeModal title="New Account" visible={visible} onClose={onClose}>
   <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
      <ActivityIndicator animating={isLoading} color="black"/>
      <Text style={[ theme.boldHeader, { userSelect: 'none', color: theme.alt.color } ]}>Sign Up</Text>
      <EmailInput/>
      <PasswordInput label="Password"/>
      <PasswordInput label="Confirm Password"/>

      {/* Registration Failed Message */}
      {registerFailed.length > 0 ? <View style={theme.error}>
        <Text style={theme.error}>{registerFailed}</Text>
      </View> : <></>}

      {/* Submit Registration Forum */}
      <View style={{ alignItems: 'center', width: '100%', maxWidth: 420 }}>
        <TextBtn
          text="Register"
          onPress={() => {
            setLoading(true);
            login(
              registerInput.current,
              (resp) => {
                setLoading(false);
                setRegisterFailed(true);
              },
              (resp) => {
                onRegister();
                setRegisterFailed(false);
                setLoading(false);
                onClose();
              }
            );
          }}
          style={{ marginTop: 16, marginBottom: 32 }}
        />
      </View>

    </ScrollView>
  </FadeModal>
}


export default RegisterModal;
