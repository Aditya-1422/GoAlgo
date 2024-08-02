import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button, TextField, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import reactangle from '../assests/images/Profile.jpg';
import OAuth from '../components/OAuth';

// Define the validation schema using Yup
const SignupSchema = yup.object().shape({
  firstName: yup.string().required('This field is required.'),
  lastName: yup.string().required('This field is required.'),
  email: yup.string().email('Invalid email address').required('This field is required.'),
  password: yup.string().min(6, 'Password is too short.').max(20, 'Password is too long.').required('This field is required.')
});

// Main component
const SignUp = () => {
  return (
    <div className="flex h-screen">
      {/* LEFT */}
      <div className="w-1/2 bg-[#004AAD] flex flex-col items-center justify-center p-4 box-border rounded-tr-2 rounded-br-2">
        <div className="ml-4">
          <div className="flex items-center gap-3">
            <img src={reactangle} alt="Profile" className="rounded-full" />
            <h1 className="text-6xl text-white font-poppins font-bold">GoAlgo</h1>
          </div>
          <h1 className="my-3 w-8/9 text-white font-poppins text-3xl">
            “Join the revolution of smart trading. Your financial future starts here."
          </h1>
          <h5 className="text-white">
            Welcome to GoAlgo, where cutting-edge technology meets user-friendly design. 
            Our platform is built to help you navigate the markets with ease and precision. 
            Start your journey towards financial independence today.
          </h5>
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-1/2 p-4 box-border">
        <h5 className='font-poppins m-2 mb-3'>Create Account</h5>

        <div className="w-full max-w-2xl h-4/5 bg-white shadow-md rounded-lg p-6">
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={(values, { setSubmitting }) => {
              // Log form values to the console
              console.log('Form Data:', values);
              // Optionally, handle form submission here
              setSubmitting(false);
            }}
          >
            {({ errors, handleChange, touched, isSubmitting }) => (
              <Form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={!!(errors.firstName && touched.firstName)}
                      autoComplete="fname"
                      name="firstName"
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                      id="firstName"
                      label="First Name"
                      autoFocus
                      helperText={errors.firstName && touched.firstName ? errors.firstName : null}
                      className="mb-4"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      error={!!(errors.lastName && touched.lastName)}
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                      id="lastName"
                      label="Last Name"
                      name="lastName"
                      autoComplete="lname"
                      helperText={errors.lastName && touched.lastName ? errors.lastName : null}
                      className="mb-4"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={!!(errors.email && touched.email)}
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                      id="email"
                      label="Email Address"
                      name="email"
                      autoComplete="email"
                      helperText={errors.email && touched.email ? errors.email : null}
                      className="mb-4"
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      error={!!(errors.password && touched.password)}
                      variant="outlined"
                      fullWidth
                      onChange={handleChange}
                      name="password"
                      label="Password"
                      type="password"
                      id="password"
                      autoComplete="current-password"
                      helperText={errors.password && touched.password ? errors.password : null}
                      className="mb-4"
                    />
                  </Grid>
                </Grid>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  className="mt-6 p-3 bg-black text-white hover:opacity-80"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Creating Account...' : 'Create Account'}
                </Button>
              </Form>
            )}
          </Formik>
          <div className="mt-4">
            <Typography variant="body2">
              Already have an account?{' '}
              <Link to="/sign-in" className="text-blue-500 hover:underline">
                Sign In
              </Link>
            </Typography>
          </div>
          <div className="mt-4 text-center">
            <OAuth />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;