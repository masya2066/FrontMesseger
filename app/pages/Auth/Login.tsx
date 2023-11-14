import {Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TouchableOpacity, View} from "react-native";
import authStyle from "../../styles/Auth/auth";
import {Button as RButton, Input} from "react-native-elements";
import React, {useContext, useState} from "react";
import {TextInputMask} from "react-native-masked-text";
import {LangContext} from "../../context/language/LanguageProvider";
import {lang} from "../../languages/languages";


export default function Login({navigation}: any) {
    const { isLang, setLang } = useContext(LangContext);

    const [inputValue, setInputValue] = useState('');

    const handleTextChange = (text: string) => {
        const numericValue = text.replace(/[^0-9]/g, '');
        setInputValue(numericValue);
    };


    return (
        <View style={{ width: '100%', height: '100%'}}>
            <Pressable
                style={authStyle.background}
                onPress={Keyboard.dismiss}
            >
                <View style={authStyle.langIcon}>
                <TouchableOpacity
                onPress={() => {isLang === 'en' ? setLang('ru') : setLang('en')}}
                >
                    {isLang === 'en' ?
                        <Image source={require('../../../assets/flags/ru.png')} style={{width: 40, height: 25}}/>
                        : <Image source={require('../../../assets/flags/en.png')} style={{width: 40, height: 25}}/>
                    }
                </TouchableOpacity>
                </View>
                <KeyboardAvoidingView
                    style={{alignItems: 'center', justifyContent: 'center'}}
                    behavior={Platform.OS == 'ios' ? 'padding' : undefined}
                    enabled>
            <Image
                source={require('../../../assets/logo.png')}
                style={{width: 120, height: 120}}
            ></Image>
            <View style={authStyle.inputContainer}>
                <TextInputMask
                    style={authStyle.mask}
                    keyboardType={"numeric"}
                    value={inputValue}
                    onChangeText={handleTextChange}
                    type={'only-numbers'}
                    placeholderTextColor={'gray'}
                    placeholder={'7-(999)-999-99-99'}
                    maxLength={20}
                />
            </View>
                </KeyboardAvoidingView>
            <RButton
                containerStyle={authStyle.authBtnContainer}
                buttonStyle={authStyle.authBtn}
                titleStyle={authStyle.titleStyle}
                title={lang(isLang, 'auth_title')}
            />
            </Pressable>
        </View>
    )
}