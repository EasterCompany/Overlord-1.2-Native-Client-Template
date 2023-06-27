import { StyleSheet } from 'react-native';


const header = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        minHeight: 52,
        height: 52,
        maxHeight: 52,
        padding: '2%',
        backgroundColor: '#202029'
    },

    icon: {
        width: 28,
        height: 28,
    },

});


export default header;
