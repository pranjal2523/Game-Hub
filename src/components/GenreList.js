import { Button, HStack, Heading, Image, List, ListItem, Spinner } from '@chakra-ui/react'
import imageUrl from "../services/image-url";
import useGeneres from "../hooks/useGenres.ts";

const GenreList = ({selectedGenre, onSelectGenre}) => {
    const {data, isLoading, error} = useGeneres();
    
    if(error) return null;
    
    if(isLoading) return <Spinner />;
    
    return ( 
        <>
            <Heading>Genres</Heading>
            <List marginY={5}>
                {data.map(genre => (
                
                <ListItem key={genre.id} paddingY={'3px'}>
                    <HStack>
                        <Image boxSize='32px' borderRadius={8} objectFit='cover' src={imageUrl(genre.image_background)} />
                    <Button whiteSpace='normal' textAlign='left' fontWeight={genre.id === selectedGenre?.id ? 'bold':'normal'} onClick={() => onSelectGenre(genre)} fontSize='lg' variant='link'>{genre.name}</Button>
                    </HStack>
                </ListItem>
                ))} 
            </List>
        </>
    )
}

export default GenreList