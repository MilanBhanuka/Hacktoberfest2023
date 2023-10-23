import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    name: Yup.string().min(4).max(20).required("Please enter your name"),
    email: Yup.string().email().required("Enter your email"),
    password: Yup.string().min(8).required("Enter password"),
    confirm_password: Yup.string().required().oneOf([Yup.ref('passwrod'),null],"Password not match"),
})