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
import InputText from '../inputs/text';
// Styles
import theme from '../../App.style';


const LoginModal = ({ visible, onClose, onLogin }) => {
  const [ isLoading, setLoading ] = useState<boolean>(false);
  const [ loginFailed, setLoginFailed ] = useState<boolean>(false);
  const loginInput = useRef<object>({
    email: '',
    password: ''
  });

  const onChangeEmail = (text:string) => {
    if (loginFailed) setLoginFailed(false);
    loginInput.current.email = text
  }

  const onChangePassword = (text:string) => {
    if (loginFailed) setLoginFailed(false);
    loginInput.current.password = text;
  }

  const onSubmit = () => {
    setLoading(true);
    login(
      (resp) => {
        setLoading(false);
        setLoginFailed(true);
      },
      (resp) => {
        onLogin();
        setLoginFailed(false);
        setLoading(false);
        onClose();
      },
      loginInput.current.email,
      loginInput.current.password
    );
  }

  return <FadeModal title="Existing User" visible={visible} onClose={onClose}>
    { isLoading ? <ActivityIndicator animating={isLoading} color="black"/> : <></> }
    <Text style={[ theme.boldHeader, { userSelect: 'none', color: theme.alt.color, marginTop: 0 } ]}>Login</Text>
    <EmailInput onChangeText={onChangeEmail}/>
    <PasswordInput label="Password" onChangeText={onChangePassword}/>
    { loginFailed ? <LoginFailedErrorMessage/> : <></> }
    <View style={{ alignItems: 'center', width: '100%', maxWidth: 420 }}>
      <SubmitBtn text="Enter" onSubmit={onSubmit}/>
      <Pressable><Text style={theme.hyperlink}>Forgot Password?</Text></Pressable>
    </View>
  </FadeModal>
}


export const EmailInput = ({ onChangeText, validEmail } : any) => <InputText
  icon={EmailIcon}
  label="Email"
  placeholder="john@example.com"
  onChangeText={onChangeText}
  validInput={validEmail}
  secureText={false}
  autoCapitalize={false}
/>


export const PasswordInput = ({ label, onChangeText, validPassword } : any) => <InputText
  icon={PasswordIcon}
  label={label}
  placeholder="**********"
  onChangeText={onChangeText}
  validInput={validPassword}
  secureText={true}
  autoCapitalize={false}
/>


const LoginFailedErrorMessage = () => {
  return <View style={theme.error}>
    <Text style={theme.error}>
      Email or password may be incorrect, try again.
    </Text>
  </View>
}


export const SubmitBtn = ({text, onSubmit} : any) => {
  return <TextBtn text={text} onPress={onSubmit} style={{ marginTop: 16, marginBottom: 32, maxWidth: 420 }}/>;
};


export default LoginModal;
