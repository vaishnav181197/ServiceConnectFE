import './App.css'
import AddProfile from './pages/AddProfile'
import ClientAuth from './pages/ClientAuth'
import ClientSignIn from './pages/ClientSignIn'
import CongratsAlert from './pages/CongratsAlert'
import CreatePassword from './pages/CreatePassword'
import ForgotPasswordPage from './pages/ForgotPasswordPage'
import OTPVerification from './pages/OTPVerification'
import {Route,Routes} from 'react-router-dom'
import SplashScreen from './pages/SplashScreen'
import ClientHome from './pages/ClientHome'
import AllCategories from './pages/AllCategories'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SplashScreen/>}/>
        <Route path='/signup' element={<ClientAuth/>}/>
        <Route path='signin' element={<ClientSignIn/>}/>
        <Route path='otp' element={<OTPVerification/>}/>
        <Route path='addprofile' element={<AddProfile/>}/>
        <Route path='fpass' element={<ForgotPasswordPage/>}/>
        <Route path='crtpass' element={<CreatePassword/>}/>
        <Route path='alert' element={<CongratsAlert/>}/>
        <Route path='clienthome' element={<ClientHome/>}/>
        <Route path='allcategory' element={<AllCategories/>}/>
      </Routes>
    </>
  )
}

export default App
