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
// Styles
import theme from '../../App.style';


const LoginModal = ({ visible, onClose, onLogin } : any) => {
  const [ isLoading, setLoading ] = useState<boolean>(false);
  const [ loginFailed, setLoginFailed ] = useState<boolean>(false);
  const loginInput = useRef<object>({
    email: '',
    password: ''
  });

  return <FadeModal title="Existing User" visible={visible} onClose={onClose}>
    <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
      <ActivityIndicator animating={isLoading} color="black"/>
      <Text style={[theme.boldHeader, { color: theme.alt.color }]}>Login</Text>

      {/* Email Input */}
      <View style={theme.loginInputContainer}>
        <View style={theme.loginInputIconContainer}>
          <Image source={EmailIcon} resizeMode='contain' style={theme.loginInputIcon}/>
          <Text style={theme.loginInputLabel}>Email</Text>
        </View>
        <TextInput
          onChangeText={(value) => {
            if (loginFailed) setLoginFailed(false);
            loginInput.current.email = value;
          }}
          placeholder="user@example.com"
          placeholderTextColor= "#475569"
          style={theme.loginInput}
        />
      </View>

      {/* Password Input */}
      <View style={theme.loginInputContainer}>
        <View style={theme.loginInputIconContainer}>
          <Image source={PasswordIcon} resizeMode='contain' style={theme.loginInputIcon}/>
          <Text style={theme.loginInputLabel}>Password</Text>
        </View>
        <TextInput
          autoCapitalize="none"
          onChangeText={(value) => {
            if (loginFailed) setLoginFailed(false);
            loginInput.current.password = value;
          }}
          placeholder="**********"
          placeholderTextColor= "#475569"
          secureTextEntry
          style={theme.loginInput}
        />
      </View>

      {/* Login Failed Message */}
      {
        loginFailed ? <View style={theme.error}>
          <Text style={theme.error}>
            Email & Password combination didn't match!
          </Text>
        </View>
        :
        <></>
      }

      {/* Submit & Forgot Password */}
      <View style={{ alignItems: 'center', width: '100%', maxWidth: 420 }}>
        <TextBtn
          text="Enter"
          onPress={() => {
            setLoading(true);
            login(
              loginInput.current,
              (resp) => {
                setLoading(false);
                setLoginFailed(true);
              },
              (resp) => {
                onLogin();
                setLoginFailed(false);
                setLoading(false);
                onClose();
              }
            );
          }}
          style={{ marginTop: 16, marginBottom: 32 }}
        />
        <Pressable><Text style={theme.hyperlink}>Forgot Password?</Text></Pressable>
      </View>

    </ScrollView>
  </FadeModal>
}


export default LoginModal;
