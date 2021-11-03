import React from 'react';
import { Flex, Heading, Text, Input, Button } from '@chakra-ui/react';

import firebaseApp from '../../firebase';
import { 
  getAuth, 
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";

const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

export const Register = () => { 
  const [isSignUp, setIsSignUp] = React.useState(false);
  const [ email, setEmail ] = React.useState('');
  const [ password, setPassword ] = React.useState('');
  const [ errors, setErrors ] = React.useState([]);
  const [ loading, setLoading ] = React.useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors([]);
    setLoading(true);

    if(isSignUp) {
      const user = await createUserWithEmailAndPassword(auth, email, password);
      !user ? alert('Error al registrar el usuario') : alert(' SignUp Successfull');
    } else {
      signInWithEmailAndPassword(auth, email, password);
    };
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
      <Heading mb='1rem' color='whiteAlpha.800'>{ isSignUp ? "SignUp" : "SignIn"}</Heading>
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
      { isSignUp ? "SignUp" : "SignIn"}
      </Button>
      <Button 
        border='none'
        mb='1rem'
        colorScheme='teal' 
        variant="outline"
        type='submit'
        disabled={loading}
        isDisabled={loading}
        _hover={{border:'1px solid #319795'}}
        onClick={()=>signInWithRedirect(auth, googleProvider)}
      >
      Sign with Google
      </Button>
      <Button  
        border='none'
        mb='1rem'
        colorScheme="teal" 
        variant="outline"
        _hover={{ border:'1px solid #319795' }}
        onClick={()=> setIsSignUp(!isSignUp)}
      >
        { isSignUp ? "Already have an account? SignIn!" : "First time here? SignUp!"}
      </Button>
    </Flex>
  )
}