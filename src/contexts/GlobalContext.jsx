import { createContext, useContext, useState } from "react";

const GlobalContext = createContext()

const GlobalContextProvider = ({ children }) => {
    const [moviesArray, setMoviesArray] = useState([])

    const api = "https://api.themoviedb.org/3/search"
    const apiKey = "63a1977c5673172aec71883eccbc65cb"
    // Ricorda di aggiungere /movie o /tv quando effettui la chiamata all'api

    const globalProviderValue = {
        moviesArray,
        setMoviesArray,
        api,
        apiKey
    }

    return (
        <GlobalContext.Provider value={globalProviderValue}>
            {children}
        </GlobalContext.Provider>
    )
}

const useGlobalContext = () => useContext(GlobalContext)

export { GlobalContextProvider, useGlobalContext }