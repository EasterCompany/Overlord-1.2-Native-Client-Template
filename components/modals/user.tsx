// Library
import { View, Text } from 'react-native';
import SlideModal from './slide';
// Styles
import theme from '../../App.style';


const UserModal = ({ user, visible, onClose }) => {
  return <SlideModal title="My Profile" visible={visible} onClose={onClose}>
    <View style={{ width: '100%', height: '100%', alignContent: 'center' }}>
      <Text style={theme.alt}>Email: {user.email}</Text>
      <Text style={theme.alt}>Name: {user.firstName} {user.middlesNames} {user.lastName}</Text>
      <Text style={theme.alt}>Date of birth: {user.dateOfBirth}</Text>
      <Text style={theme.alt}>Date joined: {user.dateJoined}</Text>
    </View>
  </SlideModal>
}


export default UserModal;
