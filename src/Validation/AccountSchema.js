import * as Yup from 'yup'

export const PersonalSchema = Yup.object().shape({
        firstname: Yup.string().trim()
            .required('Your Firstname is required '),
        lastname: Yup.string().trim()
            .required('Your Lastname is required'),
        email: Yup.string().trim()
            .email('Your email is invalid')
            .required('Your email is required'),
        phone: Yup.string().trim()
            .min(10, 'Invalid Phone Number')
            .required('Your Phone No. is required')

});

export const PasswordSchema = Yup.object().shape({    
                                    password: Yup.string().trim()
                                    .matches(/[A-Z]/, 'must contain one uppercase')
                                    .matches(/([a-z])/, 'must contain one lowercase')          
                                    .matches(/(\d)/, 'must contain one number')          
                                    .matches(/(\W)/, 'must contain one special character e.g /.,@')
                                    .min(8, 'Password must be 8 characters long')
                                    .required('Password required'),

                                    cpassword: Yup.string().trim()
                                    .required('Confirm password')
                                    .oneOf([Yup.ref('password'), null], 'Password does not match'),

                                    Otp: Yup.string().trim()
                                    .required('Enter Pin sent to your email or phone')
                                
                                });

export const LoginSchema = Yup.object().shape({
        email: Yup.string().trim()
            .email('Your email is invalid')
            .required('Your email is required'),
        password: Yup.string().trim()
            .required('Password required') 
});

export const ForgotSchema = Yup.object().shape({
    email: Yup.string().trim()
        .email('Your email is invalid')
        .required('Your email is required')   
});

export const OtpSchema = Yup.object().shape({
    Otp: Yup.string().trim()
        .min(5,'Enter six(6) digit code')
        .required('Enter six(6) digit code')   
});



export const ResetPasswordSchema = Yup.object().shape({    
    password: Yup.string().trim()
    .matches(/[A-Z]/, 'must contain one capital letter ')
    .matches(/([a-z])/, 'must contain one small letter ')          
    .matches(/(\d)/, 'must contain one number')          
    .matches(/(\W)/, 'must contain one special character e.g /.,@')
    .min(8, 'Password must be 8 characters long')
    .required('Password required'),

    cpassword: Yup.string().trim()
    .required('Confirm password')
    .oneOf([Yup.ref('password'), null], 'Password does not match'),

});