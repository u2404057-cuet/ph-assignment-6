import './App.css'
import { ToastContainer } from 'react-toastify'
import DaisyNav from './components/daisyNav/DaisyNav'
import Banner from './components/banner/Banner'

function App() {

  return (
    <>
      <DaisyNav></DaisyNav>
      <Banner></Banner>
      <ToastContainer />
    </>
  )
}

export default App
