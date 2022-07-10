// Libs
import { StyleSheet } from 'react-native';
// Styles
import { darkMode } from '../../App.theme.ts';


const header = StyleSheet.create({

    container: {
        width: '100%',
        height: 72,
        flexDirection: 'row',
        backgroundColor: darkMode ? 'rgba(77, 29, 73, 255)' : 'rgba(131, 75, 124, 255)'
    },

    icon: {
        width: 28,
        height: 28,
        marginTop: 16,
        marginLeft: 12,
        marginRight: 12
    },

});


export default header;
