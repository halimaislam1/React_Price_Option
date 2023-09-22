import { LineChart } from 'recharts'
import './App.css'
// import DaisyNav from './Component/DaisyNav.jsx/DaisyNav'
import NavBar from './Component/DaisyNav.jsx/NavBar/NavBar'
import PriceOptions from './Component/PriceOptions/PriceOptions'
import Phones from './Component/Phones/Phones'

function App() {
  return (
    <>
      <NavBar></NavBar>
      {/* <DaisyNav></DaisyNav> */}
      <h1 className='text-7xl text-white bg-sky-300 p-3 text-center'> Vite + React</h1>
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>
    </>
  )
}

export default App
