import './App.css'
import { ToastContainer } from 'react-toastify'
import DaisyNav from './components/daisyNav/DaisyNav'
import Banner from './components/banner/Banner'
import Stats from './components/stats/Stats'
import DigitalTools from './components/digitalTools/DigitalTools'

function App() {

  return (
    <>
      <DaisyNav></DaisyNav>
      <Banner></Banner>
      <Stats></Stats>
      <DigitalTools></DigitalTools>
      <ToastContainer />
    </>
  )
}

export default App
