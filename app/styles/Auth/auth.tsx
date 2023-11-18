import {StyleSheet} from "react-native";


const authStyle = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "transparent",
        alignItems: "center",
        justifyContent: 'flex-end',
        minWidth: '100%',
        minHeight: '100%'
    },
    logoContainer: {
        flex: 1,
        alignItems: 'flex-start',
        justifyContent: 'flex-start'
    },
    authBtnContainer: {
        marginTop: 110,
        minWidth: 250,
        height: 45,
        marginBottom: 115,
    },
    authBtn: {
        backgroundColor: 'transparent',
        width: '100%',
        height: '100%',
        borderStyle: 'solid',
        borderColor: '#FFFFFF',
        borderWidth: 1,
        borderRadius: 10,
    },
    titleStyle: {
        color: '#E0E0E0',
        fontWeight: '600',
        fontSize: 20
    },

    countryContainer: {
        zIndex: -2,
        flexDirection: 'row',
        marginBottom: 4,
        width: 198,
        height: 40,
        marginTop: 9,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: '#787D9F',
        borderWidth: 1,
        borderRadius: 10,
    },

    countryTitle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 17,
        fontWeight: '400',
        textAlign: "center",
        textAlignVertical: 'center',
        letterSpacing: 1
    },

    inputContainer: {
        zIndex: -1,
        flexDirection: 'row',
        paddingHorizontal: 22,
        marginBottom: 4,
        width: 198,
        height: 40,
        marginTop: 9,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: '#787D9F',
        borderWidth: 1,
        borderRadius: 10,
    },
    mask: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        color: '#FFFF',
        fontSize: 17,
        fontWeight: '400',
    },
    langIcon: {
        zIndex: 50,
        minWidth: '100%',
        minHeight: '15%',
        paddingRight: 20,
        paddingTop: 52,
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    },
    languageTitle: {
        width: 23.26,
        height: 12,
        fontSize: 10,
        fontWeight: '400',
        color: '#fff',
        paddingHorizontal: 8
    }
});

export default authStyle;