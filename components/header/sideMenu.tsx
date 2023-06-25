import { ScrollView, View, Platform } from 'react-native'


const SideMenu = ({ window, children } : any) => <View style={{
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  top: 52,
  left: 0,
  width: window.width,
  height: window.height,
  backgroundColor: 'rgba(0,0,0,.66)'
}}>
  <View style={{
    position: 'absolute',
    alignItems: 'center',
    top: 0,
    left: 0,
    width: Platform.OS === 'web' ? window.width * 0.5 : window.width,
    minWidth: 300,
    maxWidth: 640,
    height: window.height,
    backgroundColor: '#16161C'
  }}>
    {children}
  </View>
</View>;


export default SideMenu;
