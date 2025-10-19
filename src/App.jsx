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
import BookingDetails from './pages/CustomerPages/BookingDetails'
import PaymentMethod from './pages/CustomerPages/PaymentMethod'
import PaymentCongrats from './pages/CustomerPages/PaymentCongrats'
import Ereciept from './pages/CustomerPages/Ereciept'
import Review from './pages/CustomerPages/Review'
import ReviewList from './pages/CustomerPages/ReviewList'
import AddCard from './pages/CustomerPages/AddCard'
import ActiveServices from './pages/CustomerPages/ActiveServices'
import ActiveServiceDetails from './pages/CustomerPages/ActiveServiceDetails'
import Complaints from './pages/CustomerPages/Complaints'
import ServiceCompleted from './pages/CustomerPages/ServiceCompleted'
import Transactions from './pages/CustomerPages/Transactions'
import UserProfile from './pages/CustomerPages/UserProfile'
import EditUserProfile from './pages/CustomerPages/EditUserProfile'
import UserProfileMenuBar from './components/Customer_components/UserProfileMenuBar'
import UserMenuPage from './pages/CustomerPages/UserMenuPage'
import About from './pages/CustomerPages/About'
import TermsConditions from './pages/CustomerPages/TermsConditions'
import Notifications from './pages/CustomerPages/Notifications'
import HelpCenter from './pages/CustomerPages/HelpCenter'
import NotificationSettings from './pages/CustomerPages/NotificationSettings'
import Security from './pages/CustomerPages/Security'
import ChatBox from './pages/CustomerPages/ChatBox'
import ChatHistory from './pages/CustomerPages/ChatHistory'
import InviteFrnd from './pages/CustomerPages/InviteFrnd'
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<SplashScreen/>}/>
        <Route path='/signup' element={<ClientAuth/>}/>
        <Route path='signin' element={<ClientSignIn/>}/>
        <Route path='otp' element={<OTPVerification/>}/>
        <Route path='addprofile' element={<AddProfile/>}/>
        <Route path='signupcongrats' element={<CongratsAlert/>}/>
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
        <Route path='bookingdetails' element={<BookingDetails/>}/>
        <Route path='paymethods' element={<PaymentMethod/>}/>
        <Route path='paymentcongrats' element={<PaymentCongrats/>}/>
        <Route path='ereciept' element={<Ereciept/>}/>
        <Route path='review' element={<Review/>}/>
        <Route path='reviewlist' element={<ReviewList/>}/>
        <Route path='addcard' element={<AddCard/>}/>
        <Route path='activeservices' element={<ActiveServices/>}/>
        <Route path='activeservicedetails' element={<ActiveServiceDetails/>}/>
        <Route path='complaints' element={<Complaints/>}/>
        <Route path='servicecompleted' element={<ServiceCompleted/>}/>
        <Route path='transactions' element={<Transactions/>}/>
        <Route path='userprofile' element={<UserProfile/>}/>
        <Route path='edituserprofile' element={<EditUserProfile/>}/>
        <Route path='userprofilemenu' element={<UserMenuPage/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='terms' element={<TermsConditions/>}/>
        <Route path='notifications' element={<Notifications/>}/>
        <Route path='helpcenter' element={<HelpCenter/>}/>
        <Route path='notifsettings' element={<NotificationSettings/>}/>
        <Route path='security' element={<Security/>}/>
        <Route path='chatbox' element={<ChatBox/>}/>
        <Route path='chathistory' element={<ChatHistory/>}/>
        <Route path='invitefrnd' element={<InviteFrnd/>}/>
      </Routes>
    </>
  )
}

export default App
