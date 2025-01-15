
import AppLayout from "./Components/AppLayout"
import { GlobalContextProvider } from "./contexts/GlobalContext"

function App() {

  return (
    <GlobalContextProvider>
      <AppLayout />
    </GlobalContextProvider>
  )
}

export default App
