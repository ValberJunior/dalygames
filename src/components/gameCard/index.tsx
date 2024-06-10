import { IGame } from "@/utils/types/game"
import Image from "next/image"
import Link from "next/link"
import { BiRightArrowCircle } from "react-icons/bi";

type GameCardProps= {
    data: IGame;
}

export const GameCard : React.FC<GameCardProps> = ({data}) => {
    return <Link href={`/game/${data.id}`}>
        <section className="w-full bg-slate-200 rounded-lg p-4 mb-5">
            <div className="relative w-full h-56">
              <Image 
                src={data.image_url} 
                alt={data.title}
                fill={true}
                quality={100}
                sizes="(max-width: 768px) 100vw, (max-width:1200px) 45vw"
                className="rounded-lg object-cover hover:scale-105 transition-all duration-300 ease-in-out"
                />
            </div>
            <div className="flex items-center justify-between mt-4">
              <p className="text-sm font-bold px-2 text-ellipsis truncate whitespace-nowrap overflow-hidden">{data.title}</p>
              <BiRightArrowCircle size={24} color="#000"/>
            </div>
        </section>
    </Link>
}