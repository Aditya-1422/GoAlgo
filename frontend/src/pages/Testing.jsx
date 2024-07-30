import React from 'react';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import { Button, TextField, Typography, Grid, Container } from '@mui/material';

// Define the validation schema using Yup
const SignupSchema = yup.object().shape({
  firstName: yup.string().required('This field is required.'),
  lastName: yup.string().required('This field is required.'),
  email: yup.string().email().required('This field is required.'),
  password: yup.string().min(6, 'Password is too short.').max(20, 'Password is too long.').required('This field is required.')
});

// Main component
const Testing = () => {
  return (
      <Container component="main" maxWidth="xs" className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
          <Typography component="h1" variant="h5" className="text-center mb-6">
            Sign Up
          </Typography>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              email: '',
              password: ''
            }}
            validationSchema={SignupSchema}
            onSubmit={values => {
              console.log(values);
            }}
          >
            {({ errors, handleChange, touched }) => (
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
                  color="primary"
                  className="mt-6"
                >
                  Sign Up
                </Button>
              </Form>
            )}
          </Formik>
        </div>
      </Container>
  );
};

export default Testing;