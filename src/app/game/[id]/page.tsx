import { Container, GameCard } from "@/components";
import { IGame } from "@/utils/types/game"
import Image from "next/image";
import { redirect } from "next/navigation";
import { Label } from "./components/label";

async function getGameById (id:string) : Promise<IGame|null>{
    try{
        const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game&id=${id}`, {next: { revalidate:60 }});
        return res.json()
    }
    catch(error:any){
        return null
    }
}

async function getDalyGame(){
    try{
      const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, {cache: 'no-store'});
      return res.json();
    }
    catch(err){
      throw new Error("Failed to fetch data")
    }
  }

export default async function GamePage ({
 params:{id}
}:{
 params:{id: string}
}) {

    const game : IGame | null = await getGameById(id);
    const gameDay: IGame = await getDalyGame();

    if(!game) { redirect("/") }

    return (
      <main className="w-full">
        <div className="w-full bg-black h-80 sm:h-96 relative">
          <Image
            src={game.image_url}
            alt={game.title}
            priority={true}
            quality={100}
            fill={true}
            className="object-cover w-full h-80 sm:h-96 opacity-70"
            sizes="(max-width: 768px) 100vw, (max-width:1200px) 45vw"
          />
        </div>
        <Container>
          <h1 className="font-bold text-xl my-4">{game.title}</h1>
          <p>{game.description}</p>

          <h2 className="font-bold text-lg mt-7 mb-2">Categorias</h2>
           <div className="flex gap-2 flex-wrap">
                {game.categories.map(category => (
                <Label key={category} name={category}/>
                ))}
           </div>

          <h2 className="font-bold text-lg mt-7 mb-2">Plataformas</h2>
          <div className="flex gap-2 flex-wrap"> 
               {game.platforms.map(platform => (
                <Label key={platform} name={platform}/>
               ))}
          </div>

          <p className="mt-7 mb-2">
            <strong>Data de lançamento:</strong> {game.release}
          </p>

          <h2 className="font-bold text-lg mt-7 mb-2">Jogo recomendado:</h2>
          <div className="flex">
            <div className="flex-grow">
                <GameCard data={gameDay}/>
            </div>
          </div>
        </Container>
      </main>
    );
}