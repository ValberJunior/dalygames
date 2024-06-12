import { Container } from "@/components";
import Image from "next/image";
import UserImg from "/public/user.png"
import { FaShareAlt } from "react-icons/fa";

export default function Profile(){
    return <main className="w-full text-black">
        <Container>
            <section 
             className="mt-8 mb-6 flex flex-col items-center justify-between relative gap-3 sm:flex-row"
             >
                <div 
                  className="w-full flex items-center gap-4 text-lg flex-col sm:flex-row justify-center sm:justify-normal"
                  >
                   <Image
                    src={UserImg}
                    alt=""
                    quality={100}
                    priority={true}
                    className="rounded-full w-56 h-56 object-cover"
                    /> 
                    <h2 className="font-bold text-2xl">Usuário Anônimo</h2>
                </div>

                <div 
                  className="flex items-center justify-center gap-3 mt-4 sm:items-start"
                  >
                    <button className="bg-gray-700 px-4 py-3 rounded-lg text-white">Configurações</button>
                    <button className="bg-gray-700 px-4 py-3 rounded-lg">
                        <FaShareAlt size={24} color="#FFF"/>
                    </button>
                </div>
            </section>
        </Container>
    </main>
}