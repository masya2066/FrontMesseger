import {
    Image,
    ImageBackground,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    Pressable,
    Text,
    TouchableOpacity,
    View
} from "react-native";
import authStyle from "../../styles/Auth/auth";
import {Button as RButton} from "react-native-elements";
import React, {useContext, useState} from "react";
import {TextInputMask} from "react-native-masked-text";
import {LangContext} from "../../context/language/LanguageProvider";
import {lang} from "../../languages/languages";
import {Utils} from "../../utils/utils";
import {funcAuth} from "./functions/Auth";
import {CountriesContext} from "../../context/countries/Countries";
import countries from "../../countries/Countries";


export default function Login({navigation}: any) {
    const { isLang, setLang } = useContext(LangContext);
    const {isCountry} = useContext(CountriesContext)
    const [inputValue, setInputValue] = useState('');

    const handleText = (text: string) => {
            const res = Utils.Numbers.checkOnlyNumbers(text)
        setInputValue(res)
    }


       const {name, code} = countries(isLang, isCountry)

    return (
        <ImageBackground source={require('../../../assets/img.png')} imageStyle={{flex: 1, maxWidth: "100%", minHeight: '100.7%'}}>
        <View style={{ width: '100%', height: '100%'}}>
            <Pressable
                style={authStyle.background}
                onPress={Keyboard.dismiss}
            >
                <View style={authStyle.logoContainer}>
                <View style={authStyle.langIcon}>
                <TouchableOpacity
                onPress={() => {isLang === 'en' ? setLang('ru') : setLang('en')}}
                >
                    <View style={{flex: 1, maxWidth: 52, maxHeight: 18, justifyContent: 'center', alignItems: 'center', flexDirection: 'row'}}>
                    {isLang === 'en' ?
                        <Image
                            source={require('../../../assets/flags/ru.png')}
                            style={{width: 28.09, height: 18}}
                        />
                        : <Image source={require('../../../assets/flags/en.png')} style={{width: 28.09, height: 18}}/>
                    }
                        {isLang === 'en' ? <Text style={authStyle.languageTitle}>RU</Text> : <Text style={authStyle.languageTitle}>EN</Text>}
                </View>
                </TouchableOpacity>
                </View>
                <View style={{flex: 1, minWidth: '100%', justifyContent: 'flex-end', alignItems: 'center'}}>
                    <Image
                    source={require('../../../assets/logo.png')}
                    style={{width: 130, height: 130, marginBottom: 52}}
                ></Image></View>
                </View>
                <KeyboardAvoidingView
                    style={{alignItems: 'center', justifyContent: 'center'}}
                    behavior={Platform.OS == 'ios' ? 'padding' : undefined}
                    enabled>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{textAlign: 'center', flex: 1, maxWidth: 267, maxHeight: 34, fontSize: 19, color: 'white', fontWeight: '400'}}>
                            {lang(isLang, "auth_title")}
                        </Text>
                        <Text style={{textAlign: 'center', flex: 1, maxWidth: 267, maxHeight: 34, fontSize: 14, color: 'white', fontWeight: '400', marginBottom: 53}}>
                            {lang(isLang, "auth_number_description")}
                        </Text>
                        <View>
                            <Text style={{zIndex: 1,position: 'absolute', left: 19, fontSize: 14, color: '#B8BCC3', backgroundColor: "#15223C", paddingHorizontal: 3}}>{lang(isLang, "country")}</Text>
                            <RButton style={authStyle.countryContainer} buttonStyle={{backgroundColor: 'transparent'}} title={name} titleStyle={authStyle.countryTitle}>
                                <View style={{borderRightColor: 'white', borderRightWidth: 1, paddingRight: 10, marginRight: 10}}>
                                </View>
                            </RButton>
                        </View>
                        <View>
                            <Text style={{position: 'absolute', left: 19, fontSize: 14, color: '#B8BCC3', backgroundColor: "#15223C", paddingHorizontal: 3}}>{lang(isLang, "phone_number")}</Text>
                        <View style={authStyle.inputContainer}>
                            <View style={{borderRightColor: 'white', borderRightWidth: 1, paddingRight: 10, marginRight: 10}}>
                                <Text style={{fontSize: 17, color: '#FFF', borderRightColor: 'white', borderRightWidth: 1 }}>
                                    {code}
                                </Text>
                            </View>
                            <TextInputMask
                                style={authStyle.mask}
                                keyboardType={"numeric"}
                                value={inputValue}
                                onChangeText={handleText}
                                type={'only-numbers'}
                                placeholderTextColor={'#FFF'}
                                maxLength={20}
                            />
                        </View>
                            </View>
                    </View>
                </KeyboardAvoidingView>
            <RButton
                containerStyle={authStyle.authBtnContainer}
                buttonStyle={authStyle.authBtn}
                titleStyle={authStyle.titleStyle}
                title={lang(isLang, 'auth_button')}
                onPress={() => {
                    navigation.navigate('Verify')
                    funcAuth.Auth('asdkjaskd')
                }}
            />
            </Pressable>
        </View></ImageBackground>
    )
}