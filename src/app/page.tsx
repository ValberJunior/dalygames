import { Container, SearchBar } from "@/components";
import { IGame } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";

async function getDalyGame(){
  try{
    const res = await fetch(`${process.env.NEXT_API_URL}/next-api/?api=game_day`, 
      /*
      * Next Revalidate in seconds
      */
      {next:{ revalidate: 320 }});
    return res.json();
  }
  catch(err){
    throw new Error("Failed to fetch data")
  }
}


export default async function Home() {

  const sortGame : IGame = await getDalyGame()

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-center font-bold text-xl mt-8 mb-5">Separamos um jogo exclusivo para você</h1>
        <Link href={`/game/${sortGame.id}`}>
          <section className="w-full bg-black rounded-lg">
              <div className="w-full max-h-96 h-96 relative rounded-lg">

                <div className="absolute bottom-0 z-20 flex p-3 justify-center items-center gap-2">
                  <p className="font-bold text-xl text-white">{sortGame.title} </p>
                  <BsArrowRightSquare size={24} color="#FFF" />
                </div>

                <Image
                  src={sortGame.image_url}
                  alt={sortGame.title}
                  priority={true}
                  quality={100}
                  fill={true}
                  className="max-h-96 object-cover rounded-lg opacity-50 hover:opacity-100 transition-all duration-300 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width:1200px) 45vw"
                  />
              </div>
          </section>
        </Link> 
        {/* SearchBar */}
        <SearchBar/>
      </Container>
    </main>
  );
}
