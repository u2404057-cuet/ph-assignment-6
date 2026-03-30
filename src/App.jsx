import './App.css'
import { ToastContainer } from 'react-toastify'
import DaisyNav from './components/daisyNav/DaisyNav'
import Banner from './components/banner/Banner'
import Stats from './components/stats/Stats'

function App() {

  return (
    <>
      <DaisyNav></DaisyNav>
      <Banner></Banner>
      <Stats></Stats>
      <ToastContainer />
    </>
  )
}

export default App
