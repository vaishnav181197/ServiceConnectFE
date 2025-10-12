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
import SearchPage from './pages/CustomerPages/SearchPage'
import CakeDelivery from './pages/CustomerPages/CakeDelivery'
import FilterPage from './pages/CustomerPages/FilterPage'

import ServiceProfilePage from './pages/CustomerPages/ServiceProfilePage'
import RequestService from './pages/CustomerPages/RequestService'
import Bookings from './pages/CustomerPages/Bookings'
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
        <Route path='search' element={<SearchPage/>}/>
        <Route path='delivery' element={<CakeDelivery/>}/>
        <Route path='filter' element={<FilterPage/>}/>

        <Route path='serviceprofile' element={<ServiceProfilePage/>}/>
        <Route path='requestservice' element={<RequestService/>}/>
        <Route path='bookings' element={<Bookings/>}/>
      </Routes>
    </>
  )
}

export default App
