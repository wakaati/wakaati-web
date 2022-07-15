import asyncStorage from '@react-native-async-storage/async-storage';
import axios from '../../Config/axios';
import { countries } from '../../Data/countries';
import { Enums } from '../../Enums';
import { stripZeroFromPhoneNumber } from '../../Helpers';
import { SAVE_USER_PHONE, SET_ERROR, LOGIN_SUCCESS, SET_OTP, SAVE_USER_EMAIL, SAVE_USER_NAME, LOGOUT_USER, LOGIN_USER, SET_PICKUP_LOCATION } from './reducers';

export const clearError = () => async (dispatch) => {
    dispatch(SET_ERROR({ errorMsg: '' }))
}

export const login = (password) => async (dispatch, getState) => {
    try {
        const { user } = getState();
        const userTokenResponse = await axios.post('/auth/login',
            {
                country_code: user.countryCode,
                phone_number: user.phoneNumber,
                user_type: Enums.user_type,
                password
            }
        )

        if (userTokenResponse.status === 200) {
            const { data: { auth, token } } = (userTokenResponse).data;
            asyncStorage.setItem('token', token.token);
            dispatch(LOGIN_SUCCESS({
                email: auth.email,
                userId: auth.resource_id,
                isLoggedIn: true,
            }))
            dispatch(getProfile());
            return { success: false }
        }
    } catch (error) {
        if (error?.response?.status === 400) {
            return {
                success: false,
                error: 'Password is incorrect'
            }
        }
    }
}

export const sendOtp = (phoneNumber) => async (dispatch) => {
    try {
        const country = countries.find(country => country.name === 'Nigeria')
        phoneNumber = stripZeroFromPhoneNumber(phoneNumber)
        const otpResponse = await axios.post('/auth/2fa/generate',
            {
                country_code: country.code,
                phone_number: phoneNumber,
                user_type: Enums.user_type
            }
        )

        if (otpResponse.status === 200) {
            dispatch(SAVE_USER_PHONE({ phoneNumber, countryCode: country.code }))
            return { success: true }
        }
    } catch (error) {
        if (error?.response?.status === 404) {
            return {
                success: false,
                error: 'Phone number is not registered'
            }
        }
    }
}

export const verifyOtp = token => async (_, getState) => {
    try {
        const { user } = getState();
        const otpResponse = await axios.post('/auth/2fa/verify',
            {
                country_code: user.countryCode,
                phone_number: user.phoneNumber,
                user_type: Enums.user_type,
                token
            }
        )
        if (otpResponse.status === 200) {
            return { success: true }
        }

    } catch (error) {
        if (error?.response?.status === 400) {
            return {
                success: false,
                error: 'Invalid otp'
            }
        }
    }
}

export const generateNewUserOtp = phoneNumber => async dispatch => {
    try {
        const country = countries.find(country => country.name === 'Nigeria')
        phoneNumber = stripZeroFromPhoneNumber(phoneNumber)
        const otpResponse = await axios.post('/auth/otp/generate',
            {
                country_code: country.code,
                phone_number: phoneNumber,
                user_type: Enums.user_type
            }
        )

        if (otpResponse.status === 200) {
            dispatch(SAVE_USER_PHONE({ phoneNumber, countryCode: country.code }))
            return { success: true }
        }
    } catch (error) {
        if (error?.response?.status === 404) {
            return { 
                success: false,
                error: 'Invalid phone number'
            }
        }

        if (error?.response?.status === 422) {
            return { 
                success: false,
                error: 'Phone number already in use'
            }
        }
    }
}

export const verifyNewUserOtp = (token) => async (_, getState) => {
    try {
        const { user } = getState();
        const otpResponse = await axios.post('/auth/otp/verify',
            {
                country_code: user.countryCode,
                phone_number: user.phoneNumber,
                user_type: Enums.user_type,
                token
            }
        )
        if (otpResponse.status === 200) {
            return { success: true }
        }

    } catch (error) {
        if (error?.response?.status === 400) {
            return { 
                success: false,
                error: 'Invalid otp'
            }
        }
    }
}

export const forgotPassword = () => async (_, getState) => {
    const { user } = getState();

    await axios.post('/auth/password/forgot',
        {
            country_code: user.countryCode,
            phone_number: user.phoneNumber,
            user_type: Enums.user_type,
        }
    )
}

export const verifyForgotOtp = (token) => async (dispatch, getState) => {
    try {
        const { user } = getState();

        const verifyOtpResponse = await axios.post('/auth/password/verify',
            {
                country_code: user.countryCode,
                phone_number: user.phoneNumber,
                user_type: Enums.user_type,
                token
            }
        )

        if (verifyOtpResponse.status === 200) {
            dispatch(SET_OTP({ otp: token }))
            return { success: true }
        }
    } catch (error) {
        if (error?.response?.status === 400) {
            return {
                success: false,
                error: 'Invalid otp'
            }
        }
    }
}

export const updatePassword = (password) => async (_, getState) => {
    try {
        const { user } = getState();

        const updatePasswordResponse = await axios.post('/auth/password/update',
            {
                country_code: user.countryCode,
                phone_number: user.phoneNumber,
                user_type: Enums.user_type,
                token: user.otp,
                password
            }
        )

        if (updatePasswordResponse.status === 200) {
            return { success: true }
        }
    } catch (error) {
    }
}

export const checkIfEmailExist = (email) => async (dispatch) => {
    try {
        const response = await axios.get(`/auth/email?email=${email}`)
        if (response.status === 200) {
            return { 
                success: false,
                error: 'Email already exist'
            }
        }
    } catch (error) {
        if (error?.response?.status === 404) {
            dispatch(SAVE_USER_EMAIL({ email }))
            return { success: true }
        }
    }
}

export const saveUserName = (name) => async (dispatch) => {
    dispatch(SAVE_USER_NAME({ name }))
}

export const signupUser = (password) => async (dispatch, getState) => {
    try {
        const { user } = getState();

        const signupResponse = await axios.post('/auth/sender/signup',
            {
                name: user.name,
                country_code: user.countryCode,
                phone_number: user.phoneNumber,
                email: user.email,
                password
            }
        )

        if (signupResponse.status === 200) {
            const { data: { auth, token } } = (signupResponse).data
            dispatch(LOGIN_SUCCESS({
                email: auth.email,
                userId: auth.resource_id,
                isLoggedIn: false
            }))
            asyncStorage.setItem('token', token.token);
            return { success: true }
        }
    } catch (error) {
        if (error?.response?.status === 400) {
            return { 
                success: false,
                error: 'An error occur while trying to setup your account'
            }
        }
    }
}

export const completeSignup = () => dispatch => {
    dispatch(LOGIN_USER())
}

export const updateProfile = userData => async dispatch => {
    try {
        const data = { user_type: Enums.user_type }

        if (userData.name) {
            data.name = userData.name
        } else if (userData.password && userData.oldPassword) {
            data.password = userData.password
            data.current_password = userData.oldPassword
        } else if (userData.email) {
            data.email = userData.email
        }

        const profileUpdateResponse = await axios.patch('/profile', data);
        if (profileUpdateResponse.status === 200) {
            const { sender } = profileUpdateResponse.data.data;
            dispatch(SAVE_USER_NAME({ name: sender.name }))
            dispatch(SAVE_USER_EMAIL({ email: sender.email }))
            if (data.password) {
                dispatch(LOGOUT_USER())
                asyncStorage.removeItem('token');
            }
        }
    } catch (error) {
        if (error?.response?.status === 400) {
            return {
                success: false,
                error: 'Current password is incorrect'
            }
        }
    }
}

export const getProfile = () => async (dispatch) => {
    const profileResponse = await axios.get('/profile');

    if (profileResponse.status === 200) {
        const { sender } = profileResponse.data.data;
        dispatch(SAVE_USER_NAME({ name: sender.name }))
        dispatch(SAVE_USER_EMAIL({ email: sender.email }))
    }
}

export const setLocation = location => async dispatch => {
    dispatch(SET_PICKUP_LOCATION(location))
}
