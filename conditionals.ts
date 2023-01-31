import axios from 'axios';
interface PokemonResults {
    count:number;
    next?:number;
    previous?:number;
    results:{
        name:string;
        url:string;
    }[];

    
}

type fetchingPokemonResult<T> = T extends undefined?Promise<PokemonResults>:void

const fetchingPokemon = async<T extends undefined | ((data:PokemonResults)=>void)>(url:string, cb?:T):Promise<fetchingPokemonResult<T>>=>{
if(cb){
    const {data}= await axios.get(url)
    console.log("hit")
    cb(data)
    return undefined as fetchingPokemonResult<T>;
}
else{
    const response = await axios.get(url)
    console.log("hir")
    return response?.data as fetchingPokemonResult<T>
}

}

fetchingPokemon("https://pokeapi.co/api/v2/pokemon?limit=10", (res)=>{
res.results.forEach((pokemon)=>{console.log(pokemon.name)})
})