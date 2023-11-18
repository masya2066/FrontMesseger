import React, { createContext, Dispatch, SetStateAction, useMemo, useState } from "react";

type TypeSetState<T> = Dispatch<SetStateAction<T>>

type CountriesContextProviderProps = {
    children: React.ReactNode
}

interface CountriesContext {
    isCountry: string
    setCountry: TypeSetState<string>
}


export const CountriesContext = createContext<CountriesContext>({isCountry: 'russia', setCountry: () => {} });

export const LangProvider = ({children}: CountriesContextProviderProps) => {
    const [isCountry, setCountry] = useState('russia')

    const value = useMemo(() => ({isCountry, setCountry}), [setCountry])

    return (<CountriesContext.Provider value={value}>
        {children}
    </CountriesContext.Provider>)
}