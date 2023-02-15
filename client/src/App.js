import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Sakums from './pages/Sakums'
import Par_mums from './pages/Par_mums'
import Sortiments from './pages/Sortiments'
import Kontakti from './pages/Kontakti'
import Registreties from './components/Registreties'
import Pieslegties from './components/Pieslegties'
import Grozs from './pages/Grozs'
import Profils from './pages/Profils'

import { Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'



function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/">
          <Route path="/" element={<Sakums />} />
          <Route path="Par_mums" element={<Par_mums />} />
          <Route path="Sortiments" element={<Sortiments />} />
          <Route path="Kontakti" element={<Kontakti />} />
          <Route path="Registreties" element={
            <Registreties />
          }
          />
          <Route path="Pieslegties" element={
            <Pieslegties />
          }
          />
          <Route path="lietotajs">
            <Route path="Profils" element={<Profils />} />
          </Route>
          <Route path="Grozs" element={<Grozs />} />
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;