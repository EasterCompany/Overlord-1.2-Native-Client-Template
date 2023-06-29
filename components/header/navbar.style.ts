import { StyleSheet, Platform } from 'react-native';


const header = StyleSheet.create({

    container: {
        textAlignVertical: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
        minHeight: 52,
        height: Platform.OS === 'ios' ? 74 : 52,
        maxHeight: 74,
        paddingTop: Platform.OS === 'ios' ? 22 : 0,
        paddingLeft: 24,
        paddingRight: 24,
        backgroundColor: '#202029'
    },

    icon: {
        width: 28,
        height: 28,
    },

});


export default header;
