import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import PlatformListIcon from './PlatformListIcon';
import GameScore from './GameScore';
import imageUrl from '../services/image-url';
import Emoji from './Emoji';

function GameCard({game}){

    return (
    <Card>  
        <Image src={imageUrl(game.background_image)}></Image>
        <CardBody>
            <HStack justifyContent='space-between' marginBottom={3}>
                <PlatformListIcon platforms={game.parent_platforms.map(p => p.platform)}/>
                <GameScore score={game.metacritic}></GameScore>
            </HStack>
            <Heading fontSize='2xl'> {game.name} </Heading>
            <Emoji rating={game.rating_top} /> 
        </CardBody>
    </Card>
    )
}

export default GameCard;