import React from "react";
import { useHistory } from "react-router";
import {Flex, Text, Heading, Input, Button} from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { signIn} from '../../features/user/UserSlice';
import authService from '../../services/http-requests/auth.service';

export const Login = () => {
  const [ email, setEmail ] = React.useState('');
  const [ password, setPassword ] = React.useState('');
  const [ errors, setErrors ] = React.useState([]);
  const [ loading, setLoading ] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e, values) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);



    let user = {email, password};
    const res =  await authService.login(user);
    dispatch(signIn(user));
    !res ? alert('error al iniciar sesión') : alert('SignIn successfull');
    history.push('/');
    
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  return (
  <Flex
    as='form' 
    margin='2rem'
    padding='2rem'
    w='20rem'
    backgroundColor='#101010'
    border='1px solid #319795'
    borderRadius='8px'
    shadow='0px 0px 5px 5px #13221A'
    direction='column'
    autoComplete='off'
    onSubmit={handleSubmit}
    >
      <Text mb='1rem'>Welcome</Text>
      <Heading mb='1rem' color='whiteAlpha.800'>SignIn</Heading>
      <Input
        mb='1rem'
        placeholder='Email'  
        onChange={handleEmailChange}
      />
      <Input
        mb='1rem'
        placeholder='Password'
        onChange={handlePasswordChange}
      />
      {errors.map((error, i) =>(
        <Text key={i} color='red.400' mb='1rem'>
          {error}
        </Text>
      ))}
      <Button
        mb='1rem'
        colorScheme='teal' 
        variant="solid"
        type='submit'
        disabled={loading}
        isDisabled={loading}
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
  )
}