import './App.css'
import { MainProvider } from './Provider/MainContext'
import { Layout } from './ui/Layout/Layout'

function App() {
  return (
    <MainProvider>
      <Layout />
    </MainProvider>
  )
}

export default App
