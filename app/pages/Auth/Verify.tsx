import {Image, Keyboard, KeyboardAvoidingView, Platform, Pressable, Text, TouchableOpacity, View} from "react-native";
import authStyle from "../../styles/Auth/auth";
import {lang} from "../../languages/languages";
import {TextInputMask} from "react-native-masked-text";
import {Button as RButton} from "react-native-elements";
import React, {useContext, useState} from "react";
import {LangContext} from "../../context/language/LanguageProvider";
import {Utils} from "../../utils/utils";

export default function Verify({navigate}: any) {
    const {isLang, setLang} = useContext(LangContext)
    const [isValue, setValue] = useState('')

    const handleText = (text: string) => {
        const res = Utils.Numbers.checkOnlyNumbers(text)
        setValue(res)
    }

    return (
        <View style={{ width: '100%', height: '100%'}}>
            <Pressable
                style={authStyle.background}
                onPress={Keyboard.dismiss}
            >
                <View style={{ flex: 1, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
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
                    <View style={{flex: 1, minWidth: '100%', justifyContent: 'center', alignItems: 'center'}}>
                        <Image
                            source={require('../../../assets/logo.png')}
                            style={{width: 120, height: 120}}
                        ></Image></View>
                </View>
                <KeyboardAvoidingView
                    style={{alignItems: 'center', justifyContent: 'center'}}
                    behavior={Platform.OS == 'ios' ? 'padding' : undefined}
                    enabled>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{fontSize: 18, fontWeight: '500', color: '#C0C0C0', margin: 5}}>{lang(isLang, 'verification')}</Text>
                        <View style={authStyle.inputContainer}>
                            <TextInputMask
                                style={authStyle.mask}
                                keyboardType={"numeric"}
                                value={isValue}
                                onChangeText={handleText}
                                type={'only-numbers'}
                                placeholderTextColor={'gray'}
                                placeholder={lang(isLang, 'verify_code')}
                                maxLength={4}
                            />
                        </View>
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