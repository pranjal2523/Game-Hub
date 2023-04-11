import { HStack, Image } from '@chakra-ui/react'
import logo from "../assets/logo.webp"
import ColorMode from './ColorMode'
import SearchInput from './SearchInput'

const NavBar = ({onSearch}) => {
  return (
    <HStack padding='10px'>
        <Image src={logo} boxSize='60px'></Image>
        <SearchInput onSearch={onSearch} />
        <ColorMode />
    </HStack>
  )
}

export default NavBar