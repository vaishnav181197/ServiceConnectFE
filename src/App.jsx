import './App.css'
import {Route,Routes} from 'react-router-dom'

import AddProfile from './pages/CustomerPages/AddProfile'
import ClientAuth from './pages/CustomerPages/ClientAuth'
import ClientSignIn from './pages/CustomerPages/ClientSignIn'
import CongratsAlert from './pages/CustomerPages/CongratsAlert'
import CreatePassword from './pages/CustomerPages/CreatePassword'
import ForgotPasswordPage from './pages/CustomerPages/ForgotPasswordPage'
import OTPVerification from './pages/CustomerPages/OTPVerification'
import SplashScreen from './pages/CustomerPages/SplashScreen'
import ClientHome from './pages/CustomerPages/ClientHome'
import AllCategories from './pages/CustomerPages/AllCategories'
import DeliveryServices from './pages/CustomerPages/DeliveryServices'
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
        <Route path='deliveryservice' element={<DeliveryServices/>}/>
      </Routes>
    </>
  )
}

export default App
