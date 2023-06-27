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

  const onChangeEmail = (text:string) => {
    console.log(0);
    if (loginFailed) setLoginFailed(false);
    loginInput.current.email = text
  }

  const onChangePassword = (text:string) => {
    console.log(1);
    if (loginFailed) setLoginFailed(false);
    loginInput.current.password = text;
  }

  const onSubmit = () => {
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
  }

  return <FadeModal title="Existing User" visible={visible} onClose={onClose}>
    <ScrollView style={{ width: '100%' }} contentContainerStyle={{ alignItems: 'center' }}>
      <ActivityIndicator animating={isLoading} color="black"/>
      <Text style={[ theme.boldHeader, { userSelect: 'none', color: theme.alt.color } ]}>Login</Text>
      <EmailInput onChangeText={onChangeEmail}/>
      <PasswordInput label="Password" onChangeText={onChangePassword}/>
      { loginFailed ? <LoginFailedErrorMessage/> : <></> }
      <View style={{ alignItems: 'center', width: '100%', maxWidth: 420 }}>
        <SubmitBtn text="Enter" onSubmit={onSubmit}/>
        <Pressable><Text style={theme.hyperlink}>Forgot Password?</Text></Pressable>
      </View>
    </ScrollView>
  </FadeModal>
}


export const EmailInput = ({ onChangeText } : any) => {
  return <View style={theme.loginInputContainer}>
    <View style={theme.loginInputIconContainer}>
      <Image source={EmailIcon} resizeMode='contain' style={theme.loginInputIcon}/>
      <Text style={theme.loginInputLabel}>Email</Text>
    </View>
    <TextInput
      onChangeText={onChangeText}
      placeholder="user@example.com"
      placeholderTextColor= "#475569"
      style={theme.loginInput}
    />
  </View>;
};


export const PasswordInput = ({ label, onChangeText } : any) => {
  return <View style={theme.loginInputContainer}>
    <View style={theme.loginInputIconContainer}>
      <Image source={PasswordIcon} resizeMode='contain' style={theme.loginInputIcon}/>
      <Text style={theme.loginInputLabel}>{label}</Text>
    </View>
    <TextInput
      autoCapitalize="none"
      onChangeText={onChangeText}
      placeholder="**********"
      placeholderTextColor= "#475569"
      secureTextEntry
      style={theme.loginInput}
    />
  </View>;
};


const LoginFailedErrorMessage = () => {
  return <View style={theme.error}>
    <Text style={theme.error}>
      Email & Password combination didn't match!
    </Text>
  </View>
}


export const SubmitBtn = ({text, onSubmit} : any) => {
  return <TextBtn text={text} onPress={onSubmit} style={{ marginTop: 16, marginBottom: 32 }}/>;
};


export default LoginModal;
