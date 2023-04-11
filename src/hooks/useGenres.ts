import genre from "../data/genre";

export interface Genre {
    id:number;
    name: string;
}

const useGeneres = () => ({data: genre , isLoading: false, error:null }); 


export default useGeneres