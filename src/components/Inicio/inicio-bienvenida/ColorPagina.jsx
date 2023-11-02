import { useColorMode, Button } from '@chakra-ui/react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

export function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button onClick={toggleColorMode}>
         {colorMode === 'light' ? <MdDarkMode size={20}/> : <MdOutlineDarkMode size={20}/>}
    </Button>
  )
}
