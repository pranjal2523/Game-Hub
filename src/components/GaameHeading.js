import { Heading } from '@chakra-ui/react'

const GaameHeading = ({gameQuery}) => {

  const heading =  `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`
  return (
    <Heading marginY={2} fontSize='5xl' as='h1'>{heading}</Heading>
  )
}

export default GaameHeading