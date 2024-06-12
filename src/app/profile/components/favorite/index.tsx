"use client"

import React from "react"
import { FiEdit, FiX } from "react-icons/fi"

export const FavoriteCard : React.FC = () => {

    const [input, setInput] = React.useState<string>("");
    const [showInput, setShowInput] = React.useState<boolean>(false);
    const [gameName, setGameName] = React.useState<string>("");

    const handleShowInput = () => {
        setShowInput(!showInput);
        if(input!=="") setGameName(input)
        setInput("");
    }

    const handleEdit = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    return <div className="flex-grow flex-wrap mt-4">
        <div className="w-full bg-gray-900 text-white rounded-lg p-4 h-44 flex justify-between flex-col">
         {
          showInput ? 
            (<div className="flex items-center justify-center gap-3">
                <input 
                    className="w-full rounded-lg text-black px-2"
                    type="text" 
                    onChange={handleEdit} 
                    value={input}/> 
                <button onClick={handleShowInput}>
                    <FiX size={24} color="#FFF"/>
                </button>
                </div>) : (
                <button 
                    className="self-start hover:scale-110 transition-all duration-200 ease-linear"
                    onClick={handleShowInput}
                    >
                    <FiEdit size={24} color="#FFF"/>
                </button>)
         }
            {gameName ? (
                <div>
                    <span className="text-white">Jogo Favorito:</span>
                    <p className="font-bold text-white">{gameName}</p>
                </div>
            ) : (<p className="font-bold text-white">Adicionar jogo</p>)}
        </div>
    </div>
}