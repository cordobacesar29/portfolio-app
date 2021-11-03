import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Button, Image } from "@chakra-ui/react";

import img from '../../assets/logoc.png';

import firebaseApp from '../../firebase';
import { getAuth, signOut} from "firebase/auth";
const auth = getAuth(firebaseApp);

export const Header = () => {
  return(
    <Flex justify='space-between' align='center' px='1rem' bgColor='#f2f2f2'>
      <Flex direction='row' align='center' justify='space-between'>
        <NavLink to="/" >
          <Image src={img} w='3rem' h='3rem' mx='4rem' />
        </NavLink>
        <NavLink to="/proyects">
          <Button colorScheme="teal" variant="link" m='1rem'>
            Proyects
          </Button>
        </NavLink>
        <NavLink to="/roadMap">
          <Button colorScheme="teal" variant="link" m='1rem'>
            RoadMap
          </Button>
        </NavLink>
      </Flex>
      <Flex direction='row' align='center' justify='space-between'>
          <Button 
            colorScheme="teal" 
            variant="solid"
            m='1rem' 
            onClick={()=>signOut(auth)}
          >
            signOut
          </Button>
      </Flex>
    </Flex>
  )
};