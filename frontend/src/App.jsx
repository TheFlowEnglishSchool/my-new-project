import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useStore } from './stores/app'
import Home from './pages/Home'
import Lessons from './pages/Lessons'
import LessonDetail from './pages/LessonDetail'
import Profile from './pages/Profile'
import Admin from './pages/Admin'
import './App.css'

function App() {
  const { user } = useStore()

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-purple-600">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/lesson/:id" element={<LessonDetail />} />
          <Route path="/profile" element={<Profile />} />
          {user?.isAdmin && <Route path="/admin" element={<Admin />} />}
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
