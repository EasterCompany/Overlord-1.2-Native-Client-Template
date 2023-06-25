import { StyleSheet } from 'react-native';


const header = StyleSheet.create({

    container: {
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        minHeight: 52,
        padding: '2.5%',
        paddingTop: '0.75%',
        paddingBottom: '1%',
        backgroundColor: '#202029'
    },

    icon: {
        width: 28,
        height: 28,
    },

});


export default header;
