"use client"
import { useParams } from "next/navigation"

export default function GamePage () {
    const {id} = useParams()
    return <h1 className="font-bold text-xl mt-8 mb-5">Hello world {id}</h1>
}