function simpleString<T>(initialState: T):[()=>T, (v:T)=>void]{
    let val:T = initialState;
    return [
        ()=>val,
        (v:T)=>val = v
    ]
}

const [stringgetter, stringsetter] = simpleString("Hello")

console.log(stringgetter())
stringsetter("Yolo")
console.log(stringgetter())

const [str2inggetter, str2ingsetter] = simpleString<null|string>(null)

console.log(str2inggetter())
str2ingsetter("Hello")
console.log(str2inggetter())


interface Rank<RankItem>{
    item: RankItem;
    rank: number;
}

function Ranker<RankItem>(items:RankItem[], rank:(v:RankItem)=>number):RankItem[] {
    
    const ranks:Rank<RankItem>[] = items.map(item=>({
        item,
        rank: rank(item)
    }))
    ranks.sort((a,b)=>a.rank - b.rank)

    return ranks.map(rank=>rank.item)
}

interface Pokemon{
    name: string;
    hp: number;
}

const pokemon:Pokemon[]=[{name:"Balbasaur", hp:20},{name:"Pikachu", hp:5},{name:"Charizard", hp:90}]

const ranks = Ranker(pokemon, ({hp})=>hp)

console.log(ranks)