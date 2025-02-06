import { createContext, FC, useEffect, useState } from "react";

export const MainContext = createContext<any>(null);

interface MainProviderProps {
    children: React.ReactNode;
}

export const MainProvider: FC<MainProviderProps> = ({children}) => {
    const [activeButton, setActiveButton] = useState<string>(localStorage.getItem('activeButton') ?? '24h');
    const [error, setError] = useState<boolean>(false)

    useEffect(() => {
        localStorage.setItem('activeButton', activeButton);
    }, [activeButton]);


    return (
        <MainContext.Provider value={{
            activeButton,
            setActiveButton,
            error,
            setError,
            }}>
            {children}
        </MainContext.Provider>
    )
}