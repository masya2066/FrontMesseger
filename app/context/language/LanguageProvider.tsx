import React, { createContext, Dispatch, SetStateAction, useMemo, useState } from "react";

type TypeSetState<T> = Dispatch<SetStateAction<T>>

type LangContextProviderProps = {
    children: React.ReactNode
}

interface LContext {
    isLang: string
    setLang: TypeSetState<string>
}


export const LangContext = createContext<LContext>({isLang: 'en', setLang: () => {} });

export const LangProvider = ({children}: LangContextProviderProps) => {
    const [isLang, setLang] = useState('en')

    const value = useMemo(() => ({isLang, setLang}), [isLang])

    return (<LangContext.Provider value={value}>
        {children}
    </LangContext.Provider>)
}
