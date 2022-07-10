/*
  This is Overlords default styles; you might consider building upon this or starting from scratch.
  Further Documentation: https://reactnative.dev/docs/style
*/

// Libs
import { StyleSheet } from 'react-native';

/*
  Use this are your universal dark/light mode toggle if you do not need to state-manage it and
  allow users to change schemes without restarting the app
*/

// Declarations
export const darkMode = false;


const theme = StyleSheet.create({

  background: {
    height: '100%',                                                     // Height and Width are relative by default
    backgroundColor: darkMode ? '#263238' : 'rgba(245, 232, 234, 255)', // You can use Hex Codes or RGBA colors.
    pointerEvents: 'none'
  },

  view: {
    flex: 1,                                                            // Not the kind of 'flex' you're thinking of
    maxWidth: 999,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
    pointerEvents: 'auto'
  },

  text: {
    color: darkMode ? 'white' : 'black',                                // Standardised HTML color strings also work
    textAlign: 'left',
    fontWeight: '300',                                                  // normal, bold or 100-900 numerical accepted
    margin: '2%',
    fontSize: 16
  },

  hyperlink: {
    color: darkMode ? '#75C0E0' : '#3A548F',
    textAlign: 'left',
    fontWeight: '300',
    margin: '2%',
    fontSize: 15
  },

  normalHeader: {
    color: darkMode ? 'white' : 'black',
    textAlign: 'center',
    fontWeight: 'normal',
    margin: '5%',
    fontSize: 22
  },

  boldHeader: {
    color: darkMode ? 'white' : 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: '5%',
    fontSize: 22
  },

  container: {
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  /*
    --------------------------- BUTTON STYLES --------------------------------------------------------------------------
  */

  button: {
    elevation: 5,
    backgroundColor: "#009688",
    borderRadius: 10,
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '90%',
    shadowColor: '#030002',
    shadowOpacity: 0.25,
    shadowRadius: 5,
    pointerEvents: 'auto'
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },

  toggleButton: {
    backgroundColor: 'rgba(0,0,0,0)',
    pointerEvents: 'auto'
  },

  /*
    --------------------------- MODAL STYLES ---------------------------------------------------------------------------
  */

  modal: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: "white",
    borderRadius: 5,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 5
  },

  modalHeader: {
    width: '100%',
    height: 32,
    marginLeft: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(200,200,200,255)'
  },

  modalTitle: {
    fontSize: 22,
    marginTop: 2,
    marginLeft: '2%'
  },

  exitModal: {
    width: 48,
    height: 32,
    maxWidth: 48,
    maxHeight: 32,
    borderRadius: 5,
    marginTop: 16,
    marginLeft: 'auto',
    marginRight: 0,
    marginBottom: -5,
    borderBottomRightRadius: 0,
    padding: 2,
    backgroundColor: "rgba(225, 112, 114, 255)",
  },

  /*
    --------------------------- MENU STYLES ----------------------------------------------------------------------------
  */

  sideMenu: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    backgroundColor: "white",
    borderRadius: 5,
    padding: 25,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 2.5,
    elevation: 5
  },

  sideMenuHeader: {
    width: '100%',
    marginLeft: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  sideMenuTitle: {
    fontSize: 22,
    marginTop: 16,
    marginLeft: '5%'
  }

});


export default theme;
