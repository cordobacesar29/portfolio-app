import React from 'react';
import { useHistory } from 'react-router-dom';
import { Flex, Heading, Text, Input, Button } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';

import { signIn } from '../../features/user/UserSlice';
import authService from '../../services/http-requests/auth.service';

export const Register = () => { 
  const [ firstName, setFirstName ] = React.useState('');
  const [ lastName, setLastName ] = React.useState('');
  const [ email, setEmail ] = React.useState('');
  const [ password, setPassword ] = React.useState('');
  const [ errors, setErrors ] = React.useState([]);
  const [ loading, setLoading ] = React.useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);

    let user = {
      firstName,
      lastName,
      email,
      password
    };
    console.log(user);
    const res = await authService.signUp(user);
    dispatch(signIn(user));
    !res ? alert('Error al registrar el usuario') : alert(' SignUp Successfull');
    history.push('/');
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return(
    <Flex
    as='form'
    margin='2rem'
    padding='2rem'
    w='20rem'
    backgroundColor='#101010'
    border='1px solid #319795'
    shadow='0px 0px 5px 5px #13221A'
    borderRadius='8px'
    direction='column'
    autoComplete='off'
    onSubmit={handleSubmit}
    >   
      <Text mb='1rem'>Welcome</Text>
      <Heading mb='1rem' color='whiteAlpha.800'>SignUp</Heading>
      <Input
        mb='1rem'
        placeholder='FirstName'
        onChange={handleFirstNameChange}
      />
      <Input
        mb='1rem'
        placeholder='LastName'
        onChange={handleLastNameChange}
      />
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
      SignUp
      </Button>
      <Button  
        mb='1rem'
        colorScheme="teal" 
        variant="ghost"
        onClick={()=>history.push('/SignIn')}
      >
        Already have an account? SignIn!
      </Button>
    </Flex>
  )
}