/*
  This is Overlords default styles; you might consider building upon this or starting from scratch.
  Further Documentation: https://reactnative.dev/docs/style
*/
import { StyleSheet } from 'react-native';

/*
  Use this are your universal dark/light mode toggle if you do not need to state-manage it and
  allow users to change schemes without restarting the app
*/
const darkMode = true;


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: darkMode ? '#263238' : 'white',
  },

  view: {
    flex: 1,
    maxWidth: 999,
    margin: 'auto',
    alignItems: 'center',
    justifyContent: 'center',
  },

  text: {
    color: darkMode ? 'white' : 'black',
    textAlign: 'left',
    fontWeight: '300',
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
    shadowRadius: 5
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  }

});


export default styles;
