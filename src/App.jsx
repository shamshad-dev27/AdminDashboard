import { Route, Routes } from 'react-router-dom'
import './App.css'
import PatientsPage from './Component/PatientsPage'
import HomePage from './Component/HomePage'

function App() {

  return (
    <div className=" relative bg-gray-500 ">

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/patients" element={<PatientsPage />} />
      </Routes>
    </div>
  )
}

export default App
