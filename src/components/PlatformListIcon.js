import {FaWindows, FaPlaystation, FaXbox, FaApple, FaAndroid, FaLinux} from 'react-icons/fa'; 
import {MdPhoneIphone } from 'react-icons/md'
import {SiNintendo } from 'react-icons/si'
import {BsGlobe } from 'react-icons/bs'

import { HStack, Icon } from "@chakra-ui/react";



const PlatformListIcon = ({platforms}) => {
  const iconsList = {
    pc:FaWindows,
    playstation: FaPlaystation,
    xbox:FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    ios: MdPhoneIphone,
    android:FaAndroid,
    web: BsGlobe
  }
  
  return (
    <HStack marginY={1}>
    { platforms.map((platform) => <Icon key={platform.id} as={iconsList[platform.slug]} color='gray.500'   />
    )}       
    </HStack> 
  )
}

export default PlatformListIcon