import { Route, Routes } from 'react-router-dom'
import Main from './pages/main.jsx'
import CategoryList from './pages/categoryList.jsx'
import InfoPage from './pages/infoPage.jsx'
import Nav from './components/nav.jsx'
import User from './components/user.jsx'
import { UserProvider } from './components/UserContext.jsx'
import './App.css'

function App() {
  return (
    <UserProvider>
      <div className="App">
        <Nav/>
        <User/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/:category" element={<CategoryList/>}/>
          <Route path="/:category/:id" element={<InfoPage/>}/>
        </Routes>
      </div>
    </UserProvider>
  )
}

export default App
