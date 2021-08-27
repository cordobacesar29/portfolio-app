import React from 'react';
import { NavLink } from 'react-router-dom';
import { Flex, Button } from "@chakra-ui/react";

export const Header = () => {
  return(
    <Flex justify='space-between' align='center' m='1rem'>
      <Flex direction='row' align='center' justify='space-between'>
        <NavLink to="/" >
          <Button colorScheme="teal" variant="link" m='1rem'>
            Home
          </Button>
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
        <NavLink to='signIn'>
          <Button colorScheme="teal" variant="solid" m='1rem'>
            SignIn
          </Button>
        </NavLink>
        <NavLink to='/signUp'>
          <Button colorScheme="teal" variant="outline" m='1rem'>
            SignUp
          </Button>
        </NavLink>
      </Flex>
    </Flex>
  )
};