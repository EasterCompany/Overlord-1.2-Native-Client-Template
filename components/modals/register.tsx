// Components
import FadeModal from './fade';


const RegisterModal = ({ visible, onClose } : any) => {
  const [ isLoading, setLoading ] = useState<boolean>(false);
  const [ registerFailed, setRegisterFailed ] = useState<boolean>(false);
  const loginInput = useRef<object>({
    email: '',
    password: ''
  });

  return <FadeModal title="New Account" visible={visible} onClose={onClose}>
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


export default RegisterModal;
