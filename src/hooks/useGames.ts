import useData from "./useData.ts";

export interface Platform{
    id: number;
    name: string;
    slug:string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[];
    metacritic: number;
}
const  useGames = (gameQuery) => (
    useData('/games', 
    {params: 
        {genres: gameQuery.genre?.id, 
         platforms: gameQuery.platform?.id, 
         ordering: gameQuery.sortOrder ,
         search: gameQuery.searchText 
        },
    }, 
        [gameQuery])
);

export default useGames;