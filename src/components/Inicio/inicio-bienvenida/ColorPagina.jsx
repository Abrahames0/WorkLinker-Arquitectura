import { useColorMode, Button } from '@chakra-ui/react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

export function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button colorScheme='teal' variant='ghost' onClick={toggleColorMode}>
         {colorMode === 'light' ? <MdDarkMode size={25}/> : <MdOutlineDarkMode size={25}/>}
    </Button>
  )
}
