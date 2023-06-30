// Library
import { View, Text, Platform } from 'react-native';
import { logout } from '../../shared/library/api';
// Components
import SlideModal from './slide';
import TextBtn from '../buttons/text';
// Styles
import theme from '../../App.style';


const UserModal = ({ user, view, visible, onClose, onLogout }) => {

  const onPressLogout = () => logout().then(() => onLogout());
  console.log(user);

  return <SlideModal
    title="My Profile"
    style={{ alignItems: 'center', justifyContent: null }}
    visible={visible}
    onClose={onClose}
  >
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
      <TextBtn text="Change Email" style={button}/>
      <TextBtn text="Change Password" style={button}/>
      <TextBtn text="Logout" onPress={onPressLogout} style={button}/>
      <TextBtn text="Delete Account" style={deleteButton}/>
    </View>
  </SlideModal>
}


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
  backgroundColor: '#E53935',
};

export default UserModal;
