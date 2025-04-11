import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Layout from './layouts/HeaderAndPadding'
import { HomePage } from './pages/HomePage'
import { ServicePage } from './pages/ServicePage'
import { ContactPage } from './pages/ContactPage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route path="/" element={< HomePage/>} />

        <Route path="/service" index element={< ServicePage />} />
        <Route path="/contact" element={< ContactPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  )
}

export default App
