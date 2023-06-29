// Library
import { View, Text } from 'react-native';
import { logout } from '../../shared/library/api';
// Components
import SlideModal from './slide';
import TextBtn from '../buttons/text';
// Styles
import theme from '../../App.style';


const UserModal = ({ user, visible, onClose, onLogout }) => {

  const onPressLogout = () => logout().then(() => onLogout());

  return <SlideModal title="My Profile" visible={visible} onClose={onClose}>
    <View style={{ width: '100%', height: '100%', alignContent: 'center' }}>
      <Text style={theme.alt}>Email: {user.email}</Text>
      <Text style={theme.alt}>Name: {user.firstName} {user.middlesNames} {user.lastName}</Text>
      <Text style={theme.alt}>Date of birth: {user.dateOfBirth}</Text>
      <Text style={theme.alt}>Date joined: {user.dateJoined}</Text>
      <View style={{ marginTop: 'auto' }}>
        <TextBtn text="Change Password"/>
        <TextBtn text="Logout" onPress={onPressLogout}/>
        <TextBtn text="Delete Account"/>
      </View>
    </View>
  </SlideModal>
}


export default UserModal;
