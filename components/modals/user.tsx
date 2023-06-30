// Library
import { useState, useRef } from 'react';
import { View, Text, Image, Platform } from 'react-native';
import { logout, login, USER, oapi } from '../../shared/library/api';
// Assets
import SuccessPNG from '../../assets/images/success.png';
import SuccessSVG from '../../assets/svgs/success.svg';
import WarningPNG from '../../assets/images/warning.png';
import WarningSVG from '../../assets/svgs/warning.svg';
// Components
import SlideModal from './slide';
import TextBtn from '../buttons/text';
import { EmailInput, PasswordInput, SubmitBtn } from './login';
// Styles
import theme from '../../App.style';


const UserModal = ({ user, updateUser, view, visible, onClose, onLogout }) => {
  const [ currentView, setView ] = useState<string>('profile');

  const onPressLogout = () => logout().then(() => onLogout());
  const onPressChangeEmail = () => setView('change-email');
  const onPressChangePassword = () => setView('change-password');
  const onPressDeleteAccount = () => setView('confirm-account-deletion');
  const onChangeEmail = (input) => logout(true).then(() => login(
    (resp) => {
      alert(resp);
    },
    (resp) => {
      USER().then((localData) => updateUser(localData));
      setView('profile');
    },
    input.current.email,
    input.current.password
  ));

  return <SlideModal
    title="My Profile"
    style={{ alignItems: 'center', justifyContent: null }}
    visible={visible}
    onClose={() => {onClose();setView('profile');}}
  >
    {
      currentView === 'confirm-account-deletion' ? <ConfirmDeleteAccount user={user} onLogout={onPressLogout}/> :
      currentView === 'change-password' ? <ChangePassword user={user} onDone={() => setView('profile')}/> :
      currentView === 'change-email' ? <ChangeEmail user={user} onDone={onChangeEmail}/> :
      <>
        <View style={bannerSection}>
          <View style={displayImage}/>
        </View>
        <View style={detailSection}>
          <Text style={detail}>{userFullName(user)}</Text>
          <Text style={detail}>{user.email}</Text>
          <Text style={detailMinor}>Permissions: {user.permissions}</Text>
          <Text style={detailMinor}>Member Since: {user.dateJoined}</Text>
        </View>
        <View style={buttonSection}>
          <TextBtn text="Change Email" onPress={onPressChangeEmail} style={button}/>
          <TextBtn text="Change Password" onPress={onPressChangePassword} style={button}/>
          <TextBtn text="Logout" onPress={onPressLogout} style={button}/>
          <TextBtn text="Delete Account" onPress={onPressDeleteAccount} style={deleteButton}/>
        </View>
      </>
    }
  </SlideModal>
}


const ChangeEmail = ({ user, onDone }) => {
  const [ successMessage, setSuccess ] = useState<boolean>(false);
  const [ errorMessage, setError ] = useState<string>("");
  const input = useRef({
    email: '',
    password: ''
  });

  const onUpdateEmail = (text) => {
    input.current.email = text;
    if (errorMessage.length > 0) setError("");
  };
  const onUpdatePassword = (text) => {
    input.current.password = text;
    if (errorMessage.length > 0) setError("");
  };
  const onSubmit = () => oapi(
    'user/edit/email',
    (resp) => setError(resp),
    (resp) => onDone(input),
    {
      uuid: user.uuid,
      new_email: input.current.email,
      password: input.current.password
    }
  );

  return <View style={{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }}>
    <Text style={[theme.boldHeader, { color: theme.alt.color }]}>Change Email</Text>
    <EmailInput label="New Email Address" autoComplete="email" onChangeText={onUpdateEmail}/>
    <PasswordInput label="Password" autoComplete="current-password" onChangeText={onUpdatePassword}/>
    <ErrorMessage error={errorMessage}/>
    <SubmitBtn text="Update Email" onSubmit={onSubmit} style={{ marginBottom: 16 }}/>
    <SubmitBtn text="Cancel" onSubmit={onDone} style={{ marginTop: 0 }}/>
  </View>;
};


const ChangePassword = ({ user, onDone }) => {
  const [ successMessage, setSuccess ] = useState<boolean>(false);
  const [ errorMessage, setError ] = useState<string>("");
  const passwordInput = useRef({
    current: '',
    new: '',
    confirm: ''
  });

  const onUpdateCurrent = (text) => {
    passwordInput.current.current = text;
    if (errorMessage.length > 0) setError("");
  };
  const onUpdateNew = (text) => {
    passwordInput.current.new = text;
    if (errorMessage.length > 0) setError("");
  };
  const onUpdateConfirm = (text) => {
    passwordInput.current.confirm = text;
    if (errorMessage.length > 0) setError("");
  };
  const onSubmit = () => oapi(
    'user/edit/password',
    (resp) => setError(resp),
    (resp) => setSuccess(true),
    {
      uuid: user.uuid,
      current_password: passwordInput.current.current,
      new_password: passwordInput.current.new,
      confirm_password: passwordInput.current.confirm
    }
  );

  return <View style={{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }}>{
    successMessage ? <SuccessfullyUpdated label="Changed password" onDone={onDone}/> : <>
      <Text style={[theme.boldHeader, { color: theme.alt.color }]}>Change Password</Text>
      <PasswordInput label="Current Password" autoComplete="current-password" onChangeText={onUpdateCurrent}/>
      <PasswordInput label="New Password" autoComplete="new-password" onChangeText={onUpdateNew}/>
      <PasswordInput label="Confirm New Password" autoComplete="new-password" onChangeText={onUpdateConfirm}/>
      <ErrorMessage error={errorMessage}/>
      <SubmitBtn text="Update Password" onSubmit={onSubmit} style={{ marginBottom: 16 }}/>
      <SubmitBtn text="Cancel" onSubmit={onDone} style={{ marginTop: 0 }}/>
    </>
  }</View>;
};


const ConfirmDeleteAccount = ({ user, onLogout }) => {
  const [ errorMessage, setError ] = useState<string>("");
  const passwordInput = useRef();

  const onConfirmDeleteAccount = () => oapi(
    'user/delete',
    (resp) => setError(resp),
    (resp) => onLogout(),
    {
      uuid: user.uuid,
      session: user.session,
      password: passwordInput.current
    }
  );

  return <View style={{
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: theme.error.backgroundColor
  }}>
    <Image
      resizeMode="contain"
      source={Platform.OS === 'web' ? WarningSVG : WarningPNG}
      style={{ width: 132, height: 132 }}
    />
    <Text style={[theme.boldHeader, { marginBottom: 0 } ]}>
      Warning!{'\n'}
      You're about to permanently delete your account.
    </Text>
    <Text style={[ theme.header, { marginTop: 0 } ]}>
      There is no way to recover your account once it is deleted.
    </Text>
    <PasswordInput label="Password" onChangeText={(text) => passwordInput.current = text}/>
    <ErrorMessage error={errorMessage}/>
    <SubmitBtn text="Delete Account" onSubmit={onConfirmDeleteAccount}/>
  </View>
}


const SuccessfullyUpdated = ({ label, onDone }) => <>
  <Image
    resizeMode="contain"
    source={Platform.OS === 'web' ? SuccessSVG : SuccessPNG}
    style={{ width: 132, height: 132 }}
  />
  <Text style={[theme.boldHeader, { color: theme.alt.color, marginBottom: 16 } ]}>{label}</Text>
  <SubmitBtn text="Done" onSubmit={onDone}/>
</>


const ErrorMessage = ({ error }) => error.length > 0 ? <View style={theme.error}>
  <Text style={theme.error}>{error}</Text>
</View> : <></>


const userFullName = (user) => {
  return user.middleNames !== undefined && user.middleNames.length > 0 ?
    `${user.firstName} ${user.middleNames} ${user.lastName}` :
    `${user.firstName} ${user.lastName}`
}


const bannerSection = {
  top: 0,
  width: '100%',
  height: '20%',
  marginBottom: 48,
  backgroundColor: '#FE8605'
};

const displayImage = {
  width: 132,
  height: 132,
  marginTop: 'auto',
  marginBottom: -32,
  marginLeft: 'auto',
  marginRight: 'auto',
  borderRadius: 48,
  backgroundColor: '#202029'
};

const detail = {
  color: '#202029',
  textAlign: 'center',
  fontSize: 18,
  fontWeight: 500,
  marginBottom: 8,
};

const detailMinor = {
  color: '#202029',
  textAlign: 'center',
  fontSize: 16,
  fontWeight: 400,
  marginBottom: 8,
};

const detailSection = {
  marginBottom: 'auto'
};

const button = {
  color: '#202029',
  height: 64,
  borderWidth: 0,
  borderBottomWidth: 2,
  borderRadius: 0,
  borderColor: 'rgba(25,25,25,.25)',
  backgroundColor: 'transparent',
};

const buttonSection = {
  width: '100%',
  marginTop: 64,
  borderTopWidth: 2,
  borderColor: 'rgba(25,25,25,.25)'
};

const deleteButton = {
  color: '#ffff',
  height: 64,
  borderWidth: 0,
  borderBottomWidth: 2,
  borderRadius: 0,
  borderColor: 'rgba(25,25,25,.25)',
  backgroundColor: theme.error.backgroundColor,
};

export default UserModal;
