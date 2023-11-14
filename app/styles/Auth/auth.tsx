import {StyleSheet} from "react-native";

const authStyle = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: "#202020",
        alignItems: "center",
        justifyContent: 'flex-end',
        minWidth: '100%',
        minHeight: '100%'
    },
    authBtnContainer: {
        backgroundColor: "#000",
        minWidth: '85%',
        height: 50,
        borderRadius: 20,
        marginBottom: '10%',
        marginTop: '15%',
    },
    authBtn: {
        backgroundColor: '#B266FF',
        width: '100%',
        height: '100%',
    },
    titleStyle: {
        color: '#E0E0E0',
        fontWeight: '600',
        fontSize: 20
    },
    inputContainer: {
        padding:0,
        marginBottom: '25%',
        minWidth: '70%',
        maxWidth: '70%',
        height: 50,
        alignItems: 'center',
        borderStyle: 'solid',
        borderColor: 'gray',
        borderWidth: 0.3,
        borderRadius: 20,
    },
    mask: {
        margin: 0,
        padding: 0,
        color: '#C0C0C0',
        fontSize: 20,
        fontWeight: '100',
        width: '100%',
        height: '100%',
    },
    langIcon: {
        zIndex: 50,
        minWidth: '100%',
        minHeight: '15%',
        paddingRight: "10%",
        paddingTop: "15%",
        justifyContent: 'flex-start',
        alignItems: 'flex-end'
    }
});

export default authStyle;