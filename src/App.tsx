import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import IndexPage from './pages'
import HomePage from './pages/home-page'
import PageGit from './pages/git'



function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<IndexPage/>}>
          <Route index element = {<HomePage/>}/>
          <Route path='pagegit' element = {<PageGit/>}/>
        </Route>  
      </Routes>
    </BrowserRouter>  
  )
}

export default App
