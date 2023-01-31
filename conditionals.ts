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
async function fetching ():Promise<PokemonResults>{
const res = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10")
console.log(res.data)
const {next, results} = res.data;
return {next, results}
}

fetching()