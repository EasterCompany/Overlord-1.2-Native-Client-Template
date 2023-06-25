import { StyleSheet, Platform } from 'react-native';

const theme = StyleSheet.create({

  default: {
    color: '#ffff',
    backgroundColor: '#202029',
  },

  text: {
    color: '#ffff',
    textAlign: 'left',
    fontWeight: '300',
    margin: '2%',
    fontSize: 16
  },

  hyperlink: {
    color: '#75C0E0',
    textAlign: 'left',
    fontWeight: '300',
    margin: '2%',
    fontSize: 15
  },

  header: {
    color: '#ffff',
    textAlign: 'center',
    fontWeight: 'normal',
    margin: '5%',
    fontSize: 22
  },

  boldHeader: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '5%',
    fontSize: 22
  },

  /*
    --------------------------- BUTTON STYLES --------------------------------------------------------------------------
  */

  button: {
    elevation: 5,
    backgroundColor: '#009688',
    borderRadius: 10,
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '90%',
    shadowColor: '#0000',
    shadowOpacity: 0,
    shadowRadius: 0,
    pointerEvents: 'auto'
  },

  buttonText: {
    color: '#ffff',
    fontSize: 15,
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

  ImgBtn: {
    backgroundColor: 'rgba(0,0,0,0)',
    pointerEvents: 'auto'
  },

  /*
    --------------------------- MODAL STYLES ---------------------------------------------------------------------------
  */

  modalContent: {
    alignItems: 'center',
    flexDirection: 'column',
    width: Platform.OS === 'web' ? '100%' : '100%',
    maxWidth: Platform.OS === 'web' ? 1024 : '100%',
    height: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: 25,
    elevation: 5,
    borderBottomLeftRadius: Platform.OS === 'web' ? 6 : 0,
    borderBottomRightRadius: Platform.OS === 'web' ? 6 : 0,
    backgroundColor: '#E5E7EB',
  },

  modalHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: Platform.OS === 'web' ? '100%' : '100%',
    maxWidth: Platform.OS === 'web' ? 1024 : '100%',
    height: 48,
    marginLeft: 'auto',
    marginRight: 'auto',
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    backgroundColor: '#282C34'
  },

  modalTitle: {
    color: '#ffff',
    fontSize: 22,
    marginLeft: '2.5%',
    userSelect: 'none',
  },

});


export default theme;
