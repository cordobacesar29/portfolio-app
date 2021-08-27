import React from "react";
import { useHistory } from "react-router";
import { Formik } from "formik";
import {Flex, Text, Heading, Input, Button} from '@chakra-ui/react';

import { validateLoginInput } from "../../utils/validateInputs";

import authService from '../../services/http-requests/auth.service';

const initialValues = { email: '', password: '' };

export const Login = () => {
  const history = useHistory();
  return (
    <>
      <Formik
        w='20rem'
        initialValues={initialValues}
        validationSchema={validateLoginInput}
        onSubmit={ async(values)=> {
          const data = { email: values.email, password: values.password };
          const res = await authService.login(data);
          if (!res) alert('Error al hacer Login');
          console.log(res.data);
        }}
      >
      {( 
        { 
        values,
        handleSubmit, 
        handleChange,
        handleBlur,
        } 
      ) => (
        <Flex
          as='form' 
          margin='2rem'
          padding='2rem'
          w='20rem'
          border='1px solid #c2c2c2'
          borderRadius='8px'
          direction='column'
          autoComplete='off'
          onSubmit={async(values)=> {
          const data = { email: values.email, password: values.password };
          const res = await authService.login(data);
          if (!res) alert('Error al hacer Login');
          console.log(res.data);
        }}
          >
            <Text mb='1rem'>Welcome</Text>
            <Heading mb='1rem'>SignIn</Heading>
            <Input
              mb='1rem'
              className='email'  
              id='email'
              value={values.email}     
              onChange={handleChange}    
              onBlur={handleBlur}
            />
            <Input
              mb='1rem'
              className='password'
              id='password'
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Button
              mb='1rem'
              colorScheme='teal' 
              variant="solid"
            >
              SignIn
            </Button>
            <Button  
              mb='1rem'
              colorScheme="teal" 
              variant="ghost"
              onClick= {()=>history.push('/signUp')}
            >
              First time here? SignUp!
            </Button>
          </Flex>
        )}
      </Formik>
    </>
  )
}