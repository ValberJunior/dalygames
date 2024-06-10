import { GameCard, GridWrapper } from "@/components";
import { IGame } from "@/utils/types/game"

async function getGameByName (title:string) : Promise<IGame[]|null> {
    try{
        const decodeTitle = decodeURI(title);
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&title=${decodeTitle}`);
        return res.json()
    }
    catch(error:any){
        return null
    }
} 

export default async function SearchPage ({
    params: {title}
}:{
   params: {title: string}
}) {
    const games : IGame[] | null = await getGameByName(title);

    if(!games) return <p>Esse jogo não foi encontrado...</p>

    return <GridWrapper>
       {games.map(game => (
        <GameCard 
         key={game.id} 
         data={game}
         />
       ))}
    </GridWrapper>
}