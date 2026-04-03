import { Route, Routes } from 'react-router-dom'
import './App.css'
import PatientsPage from './Component/PatientsPage'
import AdminNavbar from './Component/AdminNavbar'

function App() {

  return (
    <div className=" relative bg-gray-500 m-4">

      <Routes>
        <Route path="/patients" element={<PatientsPage />} />
      </Routes>
    </div>
  )
}

export default App
