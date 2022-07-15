import React from 'react'
import {Route, Routes} from 'react-router-dom'
import ROUTES from './routes' 
import LandingPage from '../Screens/NonSecure/LandingPage'
import Login from '../Screens/NonSecure/SignIn/Login'
import PersonalData from '../Screens/NonSecure/SignUp/PersonalData'
import Intro from '../Screens/NonSecure/SignUp/Intro'
import TermOfUse from '../Screens/NonSecure/TermOfUse'
import Privacy from '../Screens/NonSecure/Privacy'
import Contact from '../Screens/NonSecure/Contact'
import SetPassword from '../Screens/NonSecure/SignUp/SetPassword'
import AccountCreated from '../Screens/NonSecure/SignUp/AccountCreated'
import SubscriptionPlans from '../Screens/NonSecure/SignUp/SubscriptionPlans'
import ForgotPassword from '../Screens/NonSecure/SignIn/ForgotPassword'
import Otp from '../Screens/NonSecure/SignIn/Otp'
import ResetPassword from '../Screens/NonSecure/SignIn/ResetPassword'
import SuccessReset from '../Screens/NonSecure/SignIn/SuccessReset'


export default function NonSecureNavigation() {
  return (
    <Routes>
        <Route path={ROUTES.LANDING_PAGE} element={<LandingPage/>}/>
        <Route path={ROUTES.SIGNIN} element={<Login/>}/>
        <Route path={ROUTES.PERSONAL_DATA} element={<PersonalData/>}/>
        <Route path={ROUTES.INTRO} element={<Intro/>}/>
        <Route path={ROUTES.TERM_OF_USE} element={<TermOfUse/>}/>
        <Route path={ROUTES.PRIVACY} element={<Privacy/>}/>
        <Route path={ROUTES.CONTACT} element={<Contact/>}/>
        <Route path={ROUTES.ACCOUNT_PASSWORD} element={<SetPassword/>}/>
        <Route path={ROUTES.ACCOUNT_CREATED} element={<AccountCreated/>}/>
        <Route path={ROUTES.CHOOSE_PLAN} element={<SubscriptionPlans/>}/>
        <Route path={ROUTES.FORGOT_PASSWORD} element={<ForgotPassword/>}/>
        <Route path={ROUTES.SEND_OTP} element={<Otp/>}/>
        <Route path={ROUTES.RESET_PASSWORD} element={<ResetPassword/>}/>
        <Route path={ROUTES.RESET_SUCCESSFUL} element={<SuccessReset/>}/>
    </Routes>
            )
}
