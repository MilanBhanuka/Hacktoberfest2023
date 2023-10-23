import React from 'react'
import { useFormik } from 'formik';
import { signUpSchema } from '../schemas';
import { useNavigate } from 'react-router-dom';
const initialValues = {
  email : "",
  password: "",

}
const Signin = () => {
    const Navigate = useNavigate();
  const {values, errors, touched, handleBlur, handleChange, handleSubmit} = useFormik({
    initialValues: initialValues,
    validationSchema: signUpSchema,
    onSubmit : (values, action) =>{
      console.log(values);
      action.resetForm();
    }
  })
  console.log(errors);
  function handleClick(){
    Navigate('/Signup')
  }

  return (
    <>
      <div className='container'>
        <div className='modal'>
          <div className='modal-container'>
            <div className='modal-left'>
              <h1 className='modal-title'>Welcome</h1>
              <p>
                Sign In
              </p>
              <form onSubmit={handleSubmit}>
                <div className='input-block'>
                  <label htmlFor='email' className='input-label'>Email</label>
                  <input type='email'
                    autoComplete='off'
                    name='email'
                    id='email'
                    placeholder='Email'
                    value={values.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  { errors.email && touched.email ? (
                  <p className='form-error'>{errors.email}</p>
                    ): null}
                </div>
                <div className='input-block'>
                  <label htmlFor='password' className='input-label'>Password</label>
                  <input type='password'
                    autoComplete='off'
                    name='password'
                    id='password'
                    placeholder='Password'
                    value={values.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  { errors.password && touched.password ? (
                  <p className='form-error'>{errors.password}</p>
                    ): null}
                </div>
                <div className='modal-buttons'>
                  <button className='input-button' type='submit'>
                    Sign In
                  </button>
                </div>
              </form>
              <p className='sign-up'>
                Don't have an account?
                <a href='' onClick={()=>handleClick()}>Sign Up</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin