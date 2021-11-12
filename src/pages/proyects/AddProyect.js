import React from "react";
import { Flex, Button, Collapse, FormControl, Text, Input } from '@chakra-ui/react'; // import chackra UI

import ReCAPTCHA from "react-google-recaptcha"; // import recaptcha 

import firebaseApp from "../../firebase"; //import firebase app
import {getFirestore, updateDoc, doc } from 'firebase/firestore'; //import firestore from firebase
import {getStorage, ref, uploadBytes, getDownloadURL} from 'firebase/storage'; //import storae from firebase
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
let urlDownload;

export const AddProyect = ({ proyectArray, email, setProyectArray }) => {
  const [isValid, setIsValid] = React.useState(null);
  const [isRobot, setIsRobot] = React.useState(true);

  const [show, setShow] = React.useState(false);
  const handleToggle = () => setShow(!show);

 
  
  const captcha = React.useRef(null);

  const onChangeRecaptcha = () => {
    if(captcha.current.getValue() ) {
      console.log('esto es válido')
    } else {
      console.log('realiza el puzzle')
    }
  }
  
  const addObject = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const link = e.target.link.value;
    const repositore = e.target.repositore.value;
    const description = e.target.description.value;

      //crear un nuevo array
      const newArrayProyect = [...proyectArray, 
        {
          id: + new Date(),
          image: urlDownload,
          name, 
          repositore, 
          description, 
          link
        }
      ];
      // actualizar datos
      const refDocument = doc(db, `usuarios/${email}`);
      updateDoc(refDocument, { proyects: [...newArrayProyect] });
      //actualizamos el state
      setProyectArray(newArrayProyect);
      //limpiar formulario
      e.target.name.value = "";
      e.target.link.value = "";
      e.target.repositore.value = "";
      e.target.description.value = "";
      e.target.files.value = "";
  }

  const fileHandler = async (e) => {
    //detectar archivo
    const localFile = e.target.files[0];
    //cargarlo a firebase storage
    const fileRef = ref(storage, `proyects/${localFile.name}`);
    await uploadBytes(fileRef, localFile);
    //obtener url de descarga
    urlDownload = await getDownloadURL(fileRef);
  }
  
  return (
    <Flex
      direction='column'
      m='1rem'
      >
      <Flex m='1rem' justify='center'>
        <Button 
          size="sm" 
          onClick={handleToggle} 
          m="2rem" 
          p='1rem'
          colorScheme="teal" 
          variant="outline"
          _hover={{ border:'1px solid #319795' }}
        >
          Agrega un proyecto
        </Button>
      </Flex>
      <Collapse startingHeight={0} in={show}>
          <Flex
            as="form"
            w='24rem'
            backgroundColor='#101010'
            border='1px solid #319795'
            shadow='0px 0px 5px 5px #13221A'
            borderRadius='8px'
            direction='column'
            p='1.5rem'
            onSubmit={addObject}
          >
            <FormControl id="name" isRequired>
              <Input placeholder="Name" mb='1rem'/>
            </FormControl>
            <FormControl id="link" isRequired>
              <Input placeholder="Link" mb='1rem'/>
            </FormControl>
            <FormControl id="repositore" isRequired>
              <Input placeholder="Repositore" mb='1rem'/>
            </FormControl>
            <FormControl id="description" isRequired>
              <Input placeholder="Description" mb='1rem'/>
            </FormControl>     
            <FormControl id="files" >
              <Input placeholder="Add file" mt='1rem' type="file" onChange={fileHandler} border='none'/>
            </FormControl>   
            <Flex justify='center' mt='2rem'>
              <ReCAPTCHA
                ref={captcha}
                sitekey="6LfDryodAAAAAPtTz5d1toIf6j5News2goha-nls"
                onChange={onChangeRecaptcha}
              />  
            </Flex>
            <Flex justify='center'>
              { isValid ? <Text>Acepta El captacha</Text> : null }
            </Flex>
            <Button 
              size="sm" 
              onClick={handleToggle} 
              m="2rem" 
              p='1rem'
              colorScheme="teal" 
              variant="outline"
              _hover={{ border:'1px solid #319795' }}
              type="submit"
            >
              Listo
            </Button>
          </Flex>
        </Collapse>
    </Flex>
  )
}