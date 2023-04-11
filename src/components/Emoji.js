import BullsEye from '../assets/bulls-eye.webp'
import thumbsUp from '../assets/thumbs-up.webp'
import meh from '../assets/meh.webp'
import { Image } from '@chakra-ui/react';

const Emoji = ({rating}) => {
  if(rating < 3) return null; 
  const emojimap = {
    3:{ src: meh , alt:'meh', boxSize: '25px'},
    4:{ src: thumbsUp , alt:'recommended', boxSize: '25px'},
    5:{ src: BullsEye , alt:'exceptional', boxSize: '35px'},
  }
  
  return (
    <Image {...emojimap[rating]} marginTop={2}/ >
  )
}

export default Emoji