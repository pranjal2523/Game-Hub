import { Box, Flex, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import { useState } from 'react';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import GaameHeading from './components/GaameHeading';

function App() {
//  const [selectedGenre, setSelectedGenre] = useState(null);
//  const [selectedPlatform, setSelectedPlatform] = useState(null);
  const [gameQuery, setGameQuery] = useState({});
  return <Grid templateAreas={{
    base: `"nav" "main"`,
    lg: `"nav nav" "aside main"`  
  }}
  templateColumns={{
    base: '1fr',
    lg: "200px 1fr" 
  }}
  >
        <GridItem area='nav'> 
        <NavBar onSearch={(searchText) => setGameQuery({...gameQuery, searchText })}/>
        </GridItem>

        <Show above='lg'>
          <GridItem area='aside' paddingX={1}>
            <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}></GenreList>
          </GridItem>
        </Show>

        <GridItem area='main'>
          <Box paddingLeft={6}> 
            <GaameHeading  gameQuery={gameQuery}></GaameHeading>
            <Flex marginBottom={1}>
              <Box marginRight={5}>
                <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}></PlatformSelector>
              </Box>
              <SortSelector sortOrder={gameQuery.sortOrder} onSelectSortOrder={(sortOrder) => setGameQuery({...gameQuery, sortOrder})}></SortSelector>
            </Flex>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem> 
        
      </Grid>
}

export default App;
