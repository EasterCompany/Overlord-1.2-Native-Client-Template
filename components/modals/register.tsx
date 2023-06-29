// Library
import { useState, useRef, useEffect } from 'react';
import {
  Animated,
  View,
  ScrollView,
  Text,
  TextInput,
  Image,
  Pressable,
  ActivityIndicator
} from 'react-native';
import { login, oapi } from '../../shared/library/api';
// Assets
import UserIcon from '../../assets/images/user_black.png';
// Components
import FadeModal from './fade';
import InputText from '../inputs/text';
import InputDate from '../inputs/date';
import { EmailInput, PasswordInput, SubmitBtn } from './login';
// Styles
import theme from '../../App.style';


const RegisterModal = ({ view, visible, onClose, onRegister }) => {
  const [ isLoading, setLoading ] = useState<boolean>(false);
  const [ currentStep, setCurrentStep ] = useState<number>(1);
  const [ registerFailed, setRegisterFailed ] = useState<string>("");
  const [ emailIsValid, setEmailIsValid ] = useState(null);
  const [ passwordIsValid, setPasswordIsValid ] = useState(null);
  const slideAnim = useRef(new Animated.Value(0)).current;
  const input = useRef<object>({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    dateOfBirth: '',
  }).current;

  useEffect(() => {
    if (emailIsValid && passwordIsValid) {
      Animated.timing(slideAnim, {
        toValue: 0 - view.width, duration: 750, useNativeDriver: false
      }).start()
      setCurrentStep(2);
    }
  }, [ slideAnim, emailIsValid, passwordIsValid ]);

  const validateEmail = () => {
    if (input.email === '') return setEmailIsValid(null);
    if (!input.email.includes('@')) return setEmailIsValid(false);
    const p1 = input.email.split('@')
    if (!p1[0].length > 0 || !p1[1].includes('.')) return setEmailIsValid(false);
    const p2 = p1[1].split('.')
    if (!p2[0].length > 0 || !p2[1].length > 0) return setEmailIsValid(false);
    return setEmailIsValid(true);
  };

  const validatePasswords = () => {
    if (input.password === '' || input.confirmPassword === '') {
      return setPasswordIsValid(null);
    } else if (input.password === input.confirmPassword && input.password.length >= 8) {
      return setPasswordIsValid(true);
    }
    return setPasswordIsValid(false);
  };

  const updateEmail = (text:string) => {
    setRegisterFailed(null);
    input.email = text;
    validateEmail();
  };

  const updatePassword = (text:string) => {
    setRegisterFailed(null);
    input.password = text;
    validatePasswords();
  };

  const updateConfirmPassword = (text:string) => {
    setRegisterFailed(null);
    input.confirmPassword = text;
    validatePasswords();
  };

  const updateFirstName = (text:string) => {
    setRegisterFailed(null);
    input.firstName = text;
  }

  const updateLastName = (text:string) => {
    setRegisterFailed(null);
    input.lastName = text;
  }

  const onSubmit = () => {
    if (currentStep === 1) {
      if (!emailIsValid)
        return setRegisterFailed("A valid email address is required.");
      else if (!passwordIsValid)
        return setRegisterFailed("Passwords must match & be greater than 8 characters in length.");
      else
        setRegisterFailed(null);
        return setCurrentStep(2);
    } else if (currentStep === 2) {
      setLoading(true);
      oapi(
        'user/create',
        (resp) => {setRegisterFailed(resp);setLoading(false);},
        (resp) => {
          login(
            (resp) => {
              setLoading(false);
              setRegisterFailed("Sorry, there was a problem logging in.");
            },
            (resp) => {
              onRegister();
              setLoading(false);
              onClose();
            },
            input.email,
            input.password,
          )
        },
        {
          email: input.email,
          password: input.password,
          first_name: input.firstName,
          last_name: input.lastName,
          date_of_birth: input.dateOfBirth
        }
      )
    }
  }

  const ErrorMessage = () => registerFailed !== null && registerFailed.length > 0 ? <View style={theme.error}>
    <Text style={theme.error}>{registerFailed}</Text>
  </View> : <></>

  return <FadeModal title="New Account" visible={visible} onClose={onClose}>
    { isLoading ? <ActivityIndicator animating={isLoading} color="black"/> : <></> }
    <Text style={[ theme.boldHeader, { userSelect: 'none', color: theme.alt.color, marginTop: 0 } ]}>Sign Up</Text>
    <Text style={[ theme.subtext ], { marginTop: '-2%', marginBottom: '2%' }}>({currentStep}/2)</Text>
    <Animated.View style={{ flexDirection: 'row', left: slideAnim }}>

      {/* Step: 1 */}
      <View style={{ alignItems: 'center', width: view.width, left: view.width / 2 }}>
        <EmailInput onChangeText={updateEmail} validEmail={emailIsValid}/>
        <PasswordInput label="Password" onChangeText={updatePassword} validPassword={passwordIsValid}/>
        <PasswordInput label="Confirm Password" onChangeText={updateConfirmPassword} validPassword={passwordIsValid}/>
        <ErrorMessage/>
        <SubmitBtn text="Next" onSubmit={onSubmit}/>
      </View>

      {/* Step: 2 */}
      <View style={{ alignItems: 'center', width: view.width, left: view.width / 2 }}>
        <InputText icon={UserIcon} label="First Name" placeholder="John" onChangeText={updateFirstName}/>
        <InputText icon={UserIcon} label="Last Name" placeholder="Smith" onChangeText={updateLastName}/>
        <InputDate label="Date of Birth" onChangeText={(text:string) => {input.dateOfBirth = text}}/>
        <ErrorMessage/>
        <SubmitBtn text="Register" onSubmit={onSubmit}/>
      </View>

    </Animated.View>
  </FadeModal>
}


export default RegisterModal;
