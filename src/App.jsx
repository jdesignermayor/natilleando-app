import './App.css'
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';

import { HomeLanding } from './pages/landing/HomeLanding';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeLanding />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
