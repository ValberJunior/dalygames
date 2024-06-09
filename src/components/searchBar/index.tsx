"use client"

import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useState } from "react"
import { FiSearch } from "react-icons/fi";

export const SearchBar : React.FC = () => {

    const [input, setInput] = useState('');
    const router = useRouter();
    
    const handleInput = (e:ChangeEvent<HTMLInputElement>) => {
       setInput(e.target.value)
    }

    const handleSearch = (e:FormEvent) => {
        e.preventDefault();
        if(input === "")return;
        /**
         * redirect to search term
         */
        router.push(`/game/search/${input}`)
    }

    return <form 
             onSubmit={handleSearch}
             className="w-full bg-slate-200 my-5 flex gap-2 items-center justify-between rounded-lg p-2"
                >
                <input 
                    type="text" 
                    placeholder="Procurando algum jogo?..."
                    value={input}
                    onChange={handleInput}
                    className="border-none bg-slate-200 outline-none w-11/12"
                />
                <button type="submit">
                    <FiSearch size={24} color="#ea580c"/>
                </button>
           </form>
}