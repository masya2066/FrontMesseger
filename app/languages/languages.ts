import {en} from "./en";
import {ru} from "./ru";

const languages = {en, ru}

class T {
}

const findKeyByValue = (obj: Record<string, T>, val: string): string => {
    if (obj[val] == undefined || obj[val] == 'undefined') {
        throw new Error(`Error with read languages, key: ${val}`)
    }
    return <string>obj[val]
};
export const lang = (language: string, key: string): string => {
    switch (language) {
        case 'ru':
            return findKeyByValue(languages.ru, key)
        case 'en':
            return findKeyByValue(languages.en, key)
    }
    return ""
}