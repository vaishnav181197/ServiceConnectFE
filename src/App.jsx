import './App.css'
import ClientAuth from './pages/ClientAuth'
import ClientSignIn from './pages/ClientSignIn'
import {Route,Routes} from 'react-router-dom'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<ClientAuth/>}/>
        <Route path='signin' element={<ClientSignIn/>}/>
      </Routes>
    </>
  )
}

export default App
