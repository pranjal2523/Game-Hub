import { Badge } from '@chakra-ui/react'

const GameScore = ({score}) => {
  const color = score > 90 ? 'green': score > 65 ? 'yellow' : 'red'; 
  
  return (
    <Badge colorScheme={color} fontSize={12} borderRadius={5} padding={2}>{score}</Badge>
)
}
    
export default GameScore;