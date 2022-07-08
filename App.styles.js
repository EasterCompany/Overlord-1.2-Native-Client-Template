/*
  Style files are your new multi-platform CSS alternative solution
  you can create one of these by importing StyleSheet from 'react-native'
*/
import { StyleSheet } from 'react-native';


/*
  The standard naming convention of "styles"
  is a good goto when grouping many things into one style sheet
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cat: {
    width: '100',
    height: '100',
  },
});


/*
  Make sure you export the Style Sheet as default
  you don't have too, but it's good practice
*/
export default styles;
